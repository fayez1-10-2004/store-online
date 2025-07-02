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
import axios from 'axios';
import Promo from './Components/lodaing/Promo';
import AutProvider from "./Context/ContextAuth";
import Login from "./Components/Auth/login/Login";
import Register from "./Components/Auth/register/Register";
import Profile from "./Components/Auth/Profile/Profile";

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
    axios.get(  )
      .then((res) => {
        setProductfet(res.data);
        const randomproduct = res.data.sort(() => 0.4 - Math.random());
        console.log(randomproduct)
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
      <Navbar element={<AutProvider>
<Navbar/>

      </AutProvider>} setCart={setCart} cart={cart} cartCount={cart.length} toggleCart={() => setShowCart(!showCart) } />
      
      <Routes>
        <Route path="/" element={ <HomeComponent featured={featured} categories={categories} productfet={productfet} />} />
        <Route path="/Home" element={<HomeComponent featured={featured} categories={categories} productfet={productfet} />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/products" element={<ProductsComponent setCart={setCart} productfet={productfet} />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/products/:welcome" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<AutProvider>
<Login/>

</AutProvider>} />



        <Route path="/Register" 
        
        element={<AutProvider><Register/></AutProvider>}/>
<Route path="/Profile" element={<AutProvider>
<Profile/>
</AutProvider>}

/>
      </Routes>

      {showCart && (
        <Cart cart={cart} setCart={setCart} onClose={() => setShowCart(false)} />
      )}


    </>
  );
};

export default App;
