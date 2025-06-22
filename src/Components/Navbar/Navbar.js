// Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navabar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import { CgCloseO } from 'react-icons/cg';
import { CiShoppingCart, CiSearch } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa6';
import LogoDark from '../../images/logo_dark.png';
import en from '../../images/eng.png';
import fn from '../../images/fn.png';
import us from '../../images/us.png';

function Navbar({ cartCount }) {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [selectOption, setSelectOption] = useState('english');
  const options = [
    { label: 'english', image: en },
    { label: 'france', image: fn },
    { label: 'united state', image: us },
  ];

  const [menuIcon, setMenuIcon] = useState(window.innerWidth <= 850);
  const [bigmenu, setBigMenu] = useState(false);
  const [scroll, setScroll] = useState(window.scrollY);

  const navigate = useNavigate();

  const handleResize = () => {
    const isMobile = window.innerWidth <= 850;
    setMenuIcon(isMobile);
    if (!isMobile) setBigMenu(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => setOpenDropDown(!openDropDown);
  const selectLanguage = (option) => {
    setSelectOption(option);
    setOpenDropDown(false);
  };

  const toggleMenu = () => setBigMenu(!bigmenu);

  return (
    <header>
      <nav>
        <div className='top-nav'>
          <div className='top-nav-right'>
            <button className='drop-down' onClick={toggleDropdown}>
              <img
                src={options.find(opt => opt.label === selectOption)?.image}
                alt={selectOption}
                style={{ width: '20px', height: '20px' }}
              />
              {selectOption} <FaAngleDown color='#ccced1' />
            </button>
            {openDropDown && (
              <div className='box-drop-down'>
                {options.map((option, index) => (
                  <span
                    key={index}
                    onClick={() => selectLanguage(option.label)}
                    className='span-drop-down'
                  >
                    <img src={option.image} alt={option.label} style={{ width: '20px', height: '20px' }} />
                    {option.label}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className='top-nav-left'>Welcome</div>
        </div>

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
            <li><NavLink to='/products'>Products</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/shop'>Shop</NavLink></li>
            <li><NavLink to='/contact'>Contact Us</NavLink></li>
          </ul>

          <div className='cart'>
            <div className='carticon'>
              <CiSearch color='black' size={25} />
            </div>
            <div className='carticon' onClick={() => navigate('/cart')}>
              <CiShoppingCart color='black' size={25} />
              <span className='counter'>{cartCount}</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;