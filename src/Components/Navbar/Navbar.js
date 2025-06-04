    import React, { useState, useEffect } from 'react'
    import './Navabar.css'
    import { NavLink, useNavigate } from 'react-router-dom'
    import { IoIosMenu } from "react-icons/io";
    import { CgCloseO } from 'react-icons/cg';
    import { CiShoppingCart } from "react-icons/ci";
    import { CiSearch } from "react-icons/ci"
    import { FaAngleDown } from "react-icons/fa6";
    import LogoDark from '../../images/logo_dark.png'
    import en from '../../images/eng.png'
    import fn from '../../images/fn.png'
    import us from '../../images/us.png'
    function Navbar({ cartCount }) {
        const [openDropDown,setopenDropDown]=useState(false)
        const [selectOption,setselectOption]=useState('english')
        const options=[{
            label: 'english',image:en,}
,
        {label:'france',image:fn,},
           { label:'united state',image:us
        },]
        const [menu, setmenu] = useState(window.innerWidth <= 850)
        const [menuIcon, setMenuIcon] = useState(window.innerWidth <= 849)
        const checkwindow = (size) => {
            setmenu(size <= 850);
            setMenuIcon(size <= 849);

        }
        const [bigmenu, setbigmneu] = useState(false)
        /* const [close, setClose] = useState(false)*/
        const changeMenu = () => {
            setbigmneu(!bigmenu)
            /* setbigmneu(!close)*/
        }
        const navigate = useNavigate()
        useEffect(() => {
            const handleResize = () => {
                checkwindow(window.innerWidth);
            }
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        },);

        /*<button onClick={formhandle} className='button-log-in'><IoMdLogIn size={25} cursor={'pointer'} /></button>*/
        const handledropdown=()=>{
        setopenDropDown(!openDropDown)
        }
        const handleoptionselect=(option)=>{
setselectOption(option)
setopenDropDown(false)
        }
        return (
        
            <header>
                <nav>
                <div className='top-nav fixed'>
    <div className='top-nav-right'>
    <button className='drop-down' onClick={handledropdown} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <img src={options.find(opt => opt.label === selectOption)?.image} alt={selectOption} style={{ width: '20px', height: '20px' }} />
  {selectOption}
  <span><FaAngleDown  color='#ccced1'/></span>
</button>
    {openDropDown?
    <div className='box-drop-down'>
        {options.map((option,index) =>(
        <span key={index} onClick={()=> handleoptionselect(option.label)}
className='span-drop-down'
        >
            <img src={option.image} alt={option.label}style={{ width: '20px', height: '20px' }}  />
            {option.label}
        </span>
        ) 
        )}
    </div>:undefined
    }
        </div>    
    <div className='top-nav-left'>welcome</div>
                </div>
                <div className='down-nav fixed'>
                    <div className='down-nav-1'><img src={LogoDark} alt='logo'/></div>
                    <div className='down-nav-2'>
                        <ul className={bigmenu ? 'big-menu' : undefined} style={menuIcon ? { display: bigmenu ? 'flex' : 'none' } : { display: 'flex' }}>
                            <li>
                                <NavLink className={window.location.pathname === '/' || window.location.pathname === '/home' ? 'active' : undefined} to='/home'> {
                                    menu ? bigmenu ? 'home' : undefined : ""

                                } </NavLink>
                            </li>
                            <li>
                                <NavLink className={window.location.pathname === '/about' ? 'active' : undefined} to='/about' >
                                
                                    {menu ? bigmenu ? 'about' : undefined : "about"}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={window.location.pathname === '/products' ? 'active' : undefined} to='/products'> 
                               
                                
                                 {
                                    menu ? bigmenu ? 'products' : undefined : " products"
                                }</NavLink>
                            </li>
                            <li>
                                <NavLink className={window.location.pathname === '/blog' ? 'active' : undefined} to='/blog'> {
                                    menu ? bigmenu ? 'blog' : undefined : "blog"
                                }</NavLink>
                            </li>
                            <li>
                                <NavLink className={window.location.pathname === '/shop' ? 'active' : undefined} to='/shop'> {
                                    menu ? bigmenu ? 'shop' : undefined : "shop"
                                }</NavLink>
                            </li>
                            <li>
                                <NavLink className={window.location.pathname === '/contact' ? 'active' : undefined} to='/contact'> 
                                    {menu ? bigmenu ? 'contact us' : undefined : " contcat us"}</NavLink>
                            </li>
                            <div className='cart'>
                                <div className="carticon">
                                    <CiSearch  color='black' size={25}/>
                                </div>
                            </div>
                            <div className='cart'>
                                <div className="carticon" onClick={() => navigate('/cart')}>
                                    <CiShoppingCart  color='black' size={25}/>
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
                    </div>
                </nav>
            </header>
        )
    }

    export default Navbar
