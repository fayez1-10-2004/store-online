import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextAuth } from '../../Context/ContextAuth';
import './Navabar.css';
import { NavLink } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import { CgCloseO } from 'react-icons/cg';
import { CiShoppingCart } from 'react-icons/ci';
import { CgProfile } from "react-icons/cg";
import { IoIosLogIn } from "react-icons/io";
import LogoDark from '../../images/logo_dark.png';

function Navbar({ cartCount, toggleCart, cart,setCart }) {

  const{user}=useContext(ContextAuth)
  const navgate=useNavigate()
  const [openDrop, setOpenDrop] = useState(false);
  

  const [menuIcon, setMenuIcon] = useState(window.innerWidth <= 850);
  const [bigmenu, setBigMenu] = useState(false);
  const [scroll, setScroll] = useState(window.scrollY);

  const handleResize = () => {
    const isMobile = window.innerWidth <= 850;
    setMenuIcon(isMobile);
    if (!isMobile) setBigMenu(false);
  };
console.log("From Navbar, user:", user);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
const incrementQty = (id) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    )
  );
};

const decrementQty = (id) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id && (item.quantity || 1) > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};

  const toggleMenu = () => setBigMenu(!bigmenu);

  return (
    <header>
      <nav>
        
      

        <div className='down-nav' style={{ top: scroll >= 1 ? '0px' : undefined }}>
          <div className='down-nav-1'>
            <img src={LogoDark} alt='logo' />
            
          </div>
          <div className='menu-toggle'>
            {menuIcon && (
              bigmenu ? <CgCloseO size={35} onClick={toggleMenu} /> : <IoIosMenu size={35} onClick={toggleMenu} />
            )}
          </div>

          <ul className={bigmenu ? 'big-menu' : ''} style={{ display: menuIcon ? (bigmenu ? 'flex' : 'none') : 'flex' }}>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/products'>Shop</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/contact'>Contact Us</NavLink></li>
          </ul>

          <div className='cart'>
            <div className='carticon'>

              {
user?
<>
<CgProfile color='black' size={25} cursor={'pointer'}  onClick={()=>navgate('/Profile')}/>
<p>{user.fristname}</p>
</>

:


              <IoIosLogIn  color='black' size={25}  cursor={'pointer'} onClick={()=>navgate('./login')}/>
              }

            </div>

            <div
              className='carticon'
              onMouseEnter={() => setOpenDrop(true)}
              onMouseLeave={() => setOpenDrop(false)}
            >
              <CiShoppingCart color='black' size={25}  onClick={()=>navgate('./cart')}/>
              <span className='counter'>{cartCount}</span>

              {openDrop && cartCount > 0 && (
                <div className='mini-cart-box'>
                  {cart.map((item) => (
  <div key={item.id} className='mini-cart-item'>
    <img src={item.image} alt={item.title} />
    <div>
      <p className='mini-title'>{item.title}</p>
      <p className='mini-price'>${item.price} × {item.quantity || 1}</p>
      <div className='qty-controls'>
        <button onClick={() => decrementQty(item.id)}>-</button>
        <span style={{ margin: '0 10px' }}>{item.quantity || 1}</span>
        <button onClick={() => incrementQty(item.id)}>+</button>
      </div>
    </div>
  </div>
))}

                  <NavLink to="/cart">
  <button className='mini-cart-btn'>
    عرض السلة
  </button>
</NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
