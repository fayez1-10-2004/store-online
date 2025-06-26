import React, { useState, useEffect } from "react";
import './App.css';
import HomeComponent from "./Routes/HomeComponent";
import AboutComponent from "./Routes/AboutComponent";
import ProductsComponent from "./Routes/ProductsComponent";
import ContactComponent from "./Routes/ContactComponent";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./Components/Products/SingleProduct";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Products/Cart";
import FormComponent from "./Routes/FormComponent";
import axios from 'axios';
import Promo from './Components/lodaing/Promo';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [productfet, setProductfet] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem('productcart');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('error load', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('productcart', JSON.stringify(cart));
    } catch (error) {
      console.error('set error', error);
    }
  }, [cart]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setProductfet(res.data);
        const randomproduct = res.data.sort(() => 0.4 - Math.random());
        const top5 = randomproduct.slice(0, 4);
        const uniqueCategories = [...new Set(res.data.map(product => product.category))];
        setCategories(uniqueCategories);
        setFeatured(top5);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Promo />
      <Navbar setCart={setCart} cart={cart} cartCount={cart.length} toggleCart={() => setShowCart(!showCart)} />
      
      <Routes>
        <Route path="/" element={<HomeComponent featured={featured} categories={categories} productfet={productfet} />} />
        <Route path="/Home" element={<HomeComponent featured={featured} categories={categories} productfet={productfet} />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/products" element={<ProductsComponent setCart={setCart} productfet={productfet} />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/products/:welcome" element={<SingleProduct />} />
        <Route path="/Form" element={<FormComponent />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

      </Routes>

      {showCart && (
        <Cart cart={cart} setCart={setCart} onClose={() => setShowCart(false)} />
      )}
    </>
  );
};

export default App;
