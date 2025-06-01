import React, { useState, useEffect, use } from 'react'
import './Navabar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { MdOutlineVisibility } from "react-icons/md"
import { AiFillProduct } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { CgCloseO } from 'react-icons/cg';
import { CiShoppingCart } from "react-icons/ci";
import { IoMdLogIn } from "react-icons/io";
import login from '../from/Form'
function Navbar({ cartCount }) {
    const [menu, setmenu] = useState(window.innerWidth <= 850)
    const [menuIcon, setMenuIcon] = useState(window.innerWidth <= 550)
    const checkwindow = (size) => {
        setmenu(size <= 850);
        setMenuIcon(size <= 550);

    }

    
    const formhandle = () => {


        navigate('/Form')
    }
    



    const [bigmenu, setbigmneu] = useState(false)
    /* const [close, setClose] = useState(false)*/
    const changeMenu = () => {
        setbigmneu(!bigmenu)
        /* setbigmneu(!close)*/
    }
    const counter = 0
    const navigate = useNavigate()
    useEffect(() => {


        const handleResize = () => {


            checkwindow(window.innerWidth);


        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },);

    return (
        <header>
            <nav>
                <button onClick={formhandle} className='button-log-in'><IoMdLogIn size={25} cursor={'pointer'} /></button>
                <div>
                    <ul className={bigmenu ? 'big-menu' : undefined} style={menuIcon ? { display: bigmenu ? 'flex' : 'none' } : { display: 'flex' }}>
                        <li>
                            <NavLink className={window.location.pathname === '/' || window.location.pathname === '/home' ? 'active' : undefined} to='/home'><IoMdHome size={menu ? 25 : undefined} />{
                                menu ? bigmenu ? 'home' : undefined : "home"

                            } </NavLink>
                        </li>


                        <li>
                            <NavLink className={window.location.pathname === '/about' ? 'active' : undefined} to='/about' >
                                <MdOutlineVisibility />


                                {menu ? bigmenu ? 'about' : undefined : "about"}

                            </NavLink>

                        </li>


                        <li>
                            <NavLink className={window.location.pathname === '/products' ? 'active' : undefined} to='/products'> <AiFillProduct />{
                                menu ? bigmenu ? 'products' : undefined : "products"
                            }</NavLink>
                        </li>


                        <li>
                            <NavLink className={window.location.pathname === '/contact' ? 'active' : undefined} to='/contact'> <IoIosContact />


                                {menu ? bigmenu ? 'contact' : undefined : "contact"}</NavLink>
                        </li>


                        <div className='cart'>


                            <div className="carticon" onClick={() => navigate('/cart')}>
                                <CiShoppingCart />
                                <span className='counter'>{cartCount}</span>
                            </div>



                        </div>

                    </ul>


                    {
                        menuIcon ?
                            (bigmenu ? <CgCloseO size={25} cursor={"pointer"} onClick={() => changeMenu()} /> :
                                <IoIosMenu onClick={() => changeMenu()} size={25} cursor={'pointer'} />) :
                            bigmenu ? <CgCloseO size={25} cursor={"pointer"} onClick={() => changeMenu()} /> : undefined


                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar
