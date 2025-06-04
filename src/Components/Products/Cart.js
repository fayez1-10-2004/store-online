import React, { useState } from 'react'
import cartstyle from './Cart.module.css'
function Cart({ cart, setCart }) {

    const remove = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    }
    const addproduct=(id)=>{

        const updatecart=cart.map(
            product=>{
            if(product.id===id) {
                return {...product,quantity:(product.quantity||1) + 1}
            }
        }
        )
setCart(updatecart)

console.log('welcome')

    }
    return (
        <div className={cartstyle.cart}>
            <h1>cart</h1>

            {cart.map((product, index) => (
                <div className={cartstyle.container} key={index}>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <h4>${product.price}</h4>
                    <hr></hr>
                    <div>
                    <button className={cartstyle.button} onClick={() => remove(product.id)}>del</button>
                
                        <span>{product.quantity|1}</span>
                        <button onClick={()=>addproduct(product.id)}>++</button>
                </div>
                </div>

            ))}
        </div>
    )
}

export default Cart