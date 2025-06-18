    import React, { useState , useEffect} from "react";
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
    import axios from 'axios'

    const App = () => {
  const [categories, setCategories] = useState([]);
const[featured,setfeatured]=useState([])
const [cart, setCart] = useState(()=>{
try{
const stored=localStorage.getItem('productcart')
return stored?JSON.parse(stored):[]
    }
catch(error){
        return console.error('error load',error)
    }
    })
 
    const [productfet,setproductfet]=useState([])
  useEffect(()=>{
try{
    localStorage.setItem('productcart',JSON.stringify(cart))

    
}catch(error){
console.error('set error',error);


}


  },[cart])

        useEffect(() => {
            axios.get(`https://fakestoreapi.com/products`)
                .then((res) => {
                    setproductfet(res.data)
                    const randomproduct=res.data.sort(()=>0.4-Math.random())
                    const top5=randomproduct.slice(0,4)
                    const uniqueCategories=[...new Set(res.data.map(product=>product.category))]
                    setCategories(uniqueCategories)
                    setfeatured(top5)
                })
                .catch((err) => console.log(err))
        },[])

    
        
        return (
            <>
                <Navbar cartCount={cart.length} />
                <Routes>
                    <Route path="/" element={<HomeComponent  featured={featured}  categories={categories}  productfet={productfet} />} />
                    <Route path="/Home" element={<HomeComponent featured={featured}  categories={categories} productfet={productfet}  />} />
                    <Route path="/about" element={<AboutComponent />} />
                    <Route path="/products" element={<ProductsComponent setCart={setCart}   productfet={productfet} />} />
                    <Route path="/contact" element={<ContactComponent />} />
                    <Route path="/products/:welcome" element={<SingleProduct />} />
                    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                    <Route path="/Form" element={<FormComponent />} />
                </Routes>
            </>
        );
    };
    export default App;