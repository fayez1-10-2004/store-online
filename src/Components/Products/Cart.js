import React from 'react';
import cartstyle from './Cart.module.css';

function Cart({ cart, setCart }) {
// remmove button
  const remove = (id) => {
    setCart(cart.filter(product => product.id !== id));
  };


//button
  const increment = (id) => {
    setCart(cart.map(product =>
      product.id === id
        ? { ...product, quantity: (product.quantity || 1) + 1 }
        : product
    ));
  };

  const decrement = (id) => {
    setCart(cart.map(product =>
      product.id === id && (product.quantity || 1) > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    ));
  };

  const totalPrice = cart.reduce((total, item) =>
    total + (item.price * (item.quantity || 1)), 0).toFixed(2);

  return (
    <div className={cartstyle.cartWrapper}>
      <div className={cartstyle.cartHeader}>
        <h2>Cart</h2>
       
      </div>

      {cart.length === 0 ? (
        <p className={cartstyle.emptyText}>السلة فارغة</p>
      ) : (
        <>
          {cart.map((product, index) => (
            <div className={cartstyle.productItem} key={index}>
              <img src={product.image} alt={product.title} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              <div style={{ flex: 1, marginLeft: '10px' }}>
                <h4>{product.title}</h4>
                <p>${product.price}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button onClick={() => decrement(product.id)}>-</button>
                  <span>{product.quantity || 1}</span>
                  <button onClick={() => increment(product.id)}>+</button>
                </div>
                <p>المجموع: ${(product.price * (product.quantity || 1)).toFixed(2)}</p>
                <button onClick={() => remove(product.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>
                  حذف
                </button>
              </div>
            </div>
          ))}

       <div className={cartstyle.totalSection}>
  <div className={cartstyle.totalRow}>
    <strong>الإجمالي:</strong>
    <span>${totalPrice}</span>
  </div>
  <button className={cartstyle.checkoutBtn}>
    إتمام الشراء
  </button>
</div>

        </>
      )}
    </div>
  );
}

export default Cart;
