import React, { useEffect } from 'react'
import cartstyle from './Cart.module.css'
function Cart({ cart, setCart }) {
    const remove = (id) => {
        setCart(cart.filter((product) => product.id !== id));
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
                    <button className={cartstyle.button} onClick={() => remove(product.id)}>del</button>
                </div>

            ))}
        </div>
    )
}

export default Cart