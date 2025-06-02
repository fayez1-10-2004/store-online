import React from 'react'
import productsstyle from './Proudcts.module.css'
import { useNavigate } from 'react-router-dom'

function Proudcts({ setCart ,productfet ,Lodaing}) {
    const navgiate = useNavigate()    
    
    const handleAddToCart = (el) => {
        console.log("Adding to cart:", el);


/*   هنا عشن ميكررش المنتج*/ 
setCart(prevCart => {
    if(prevCart.find(item=>item.id===el.id)){
        
        
        return prevCart
        
    }
    
    /*   هنا عشن ييف منتج جديد
     */ 
            console.log("Previous cart:", prevCart);

            return [...prevCart, el];
            
        });
    };

    if(!productfet||productfet.length===0){
return <Lodaing/>
    }
    

    return (
        
            (<section className={productsstyle.containerProducts}>

                <div className={productsstyle.products}>
                    {productfet.map((el, idx) => (
                        <div key={idx} className={productsstyle.product}>
                            <img src={el.image} alt={el.title} />
                            <h1>{el.title.split(' ').slice(0 , 2).join(" ")}</h1>
                            <h3>${el.price}</h3>
                            <span>{el.description.split(' ').slice(0, 3).join(" ")}</span>
                            <button onClick={() => navgiate(`${el.id}`)}>show product</button>
                            <button className={productsstyle.buttonProduct} onClick={() => handleAddToCart(el)}>add to cart </button>
                        </div>
                    ))}
                </div>
            </section>)
    )
}

export default Proudcts