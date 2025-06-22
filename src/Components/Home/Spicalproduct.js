import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import spicalstyle from './Spicalproduct.module.css'

import Lodaing from '../lodaing/Lodaing'
import { FiShoppingCart } from "react-icons/fi";
import { GoArrowSwitch } from "react-icons/go";
import { MdZoomIn } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import trand from '../../images/trand_img.png'
import client1 from '../../images/client1.jpg'
import client2 from '../../images/client2.jpg'
import client3 from '../../images/client3.jpg'
import client4 from '../../images/client4.jpg'

function Spicalproduct({ featured, productfet }) {
  
  const navigate=useNavigate()
  const[cureentIndex,setcureentIndex]=useState(0)
  const[selectType,setselectType]=useState("featured")
  console.log('fuee', featured)
  console.log('fuee', productfet)
  

const selectcat=["electronics","women's clothing","men's clothing"]
console.log(selectcat)
const electronicsProduct=productfet.filter(product=>product.category==='electronics') 
const womenProduct=productfet.filter(product=>product.category==="women's clothing") 
const menProduct=productfet.filter(product=>product.category==="men's clothing") 

const client=[{

image:client1,
title:"Our Client Say!",
description:"lorem loremloremlorem ",
name:'Aldien smith',
jop:"designer"


},{
image:client2,

title:"Our Client Say!",
description:"lorem loremloremlorem ",
name:'jhon Bocker',
jop:"designer"


},{
image:client3,
title:"Our Client Say!",
description:"lorem loremloremlorem ",
name:'diasy lana',
jop:"designer"
},
{
image:client4,
title:"Our Client Say!",
description:"lorem loremloremlorem ",
name:'lissa castro',
jop:"designer"



}


]
useEffect(()=>{

const interval=setInterval(()=>{

setcureentIndex(prevIndex=>(prevIndex + 1)%client.length)


return ()=> clearInterval(interval)    
},4000)
},[client.length])
const changeCient=()=>{
const nextIndex=(cureentIndex+1)%client.length
setcureentIndex(nextIndex)



}
const changeCientless=()=>{

const lessindex=(cureentIndex - 1 + client.length)%client.length
setcureentIndex(lessindex)

}

if((!featured||featured.length===0)||(!productfet||productfet.length===0)){
    return <Lodaing/>
  }
  return (


    <section className={spicalstyle.spicalcart}>
     
      <h1 className={spicalstyle.trend}>trending style</h1>
       <div>
      <button  onClick={()=>setselectType('featured')} className={`${spicalstyle.FTbutton} ${selectType==="featured"?spicalstyle.active:undefined}`}>featured</button>
<button onClick={()=>setselectType("women's clothing")} className={`${spicalstyle.FTbutton} ${selectType==="women's clothing"?spicalstyle.active:undefined}`}> women's clothing</button>
<button onClick={()=>setselectType("men's clothing")}className={`${spicalstyle.FTbutton} ${selectType==="men's clothing"?spicalstyle.active:undefined}`}> men's clothing</button>
      <button onClick={()=>setselectType('electronics')} className={`${spicalstyle.FTbutton} ${selectType==='electronics'?spicalstyle.active:undefined}`}>electronics</button>
      </div>
      <div className={spicalstyle.carts}>
        {

          selectType==='featured'&&
         featured.map((el, id) => (
          <div className={spicalstyle.cart} key={id}>
            <div className={spicalstyle.imagecontainer}>
              <img src={el.image} alt={el.title} />

              <div className={spicalstyle.overlay}>
                <button onClick={()=>navigate('/products')}><FiShoppingCart size={22} /></button>
                <button><GoArrowSwitch size={22}/></button>
                <button><MdZoomIn size={22} /></button>
                <button><CiHeart size={23}/></button>
              </div>
              <div className={spicalstyle.layout}>

              </div>
            </div>

            <h2>{el.title.split(' ').slice(0,3).join(' ')}</h2>
            <p>{el.price}$</p>
           

           <div className={spicalstyle.icons}>
            <button className={spicalstyle.addtocart}>
              🛒 Add to Cart
            </button>
          </div>
          </div>
        )) }

        {selectType==="electronics" &&
        electronicsProduct.map((el,id)=>(




 <div className={spicalstyle.cart} key={id}>
            <div className={spicalstyle.imagecontainer}>
              <img src={el.image} alt={el.title} />

              <div className={spicalstyle.overlay}>
                              <button onClick={()=>navigate('/products')}><FiShoppingCart size={22} /></button>

                <button><GoArrowSwitch size={22}/></button>
                <button><MdZoomIn size={22} /></button>
                <button><CiHeart size={23}/></button>
              </div>
              <div className={spicalstyle.layout}>

              </div>
            </div>

            <h2>{el.title.split(' ').slice(0,3).join(' ')}</h2>
            <p>{el.price}$</p>
           

           <div className={spicalstyle.icons}>
            <button className={spicalstyle.addtocart}>
              🛒 Add to Cart
            </button>
          </div>
          </div>



        ))}


        {
selectType=== "women's clothing"&&
womenProduct.map((el,id)=>(




 <div className={spicalstyle.cart} key={id}>
            <div className={spicalstyle.imagecontainer}>
              <img src={el.image} alt={el.title} />

              <div className={spicalstyle.overlay}>
                                <button onClick={()=>navigate('/products')}><FiShoppingCart size={22} /></button>

                <button><GoArrowSwitch size={22}/></button>
                <button><MdZoomIn size={22} /></button>
                <button><CiHeart size={23}/></button>
              </div>
              <div className={spicalstyle.layout}>

              </div>
            </div>

            <h2>{el.title.split(' ').slice(0,3).join(' ')}</h2>
            <p>{el.price}$</p>
           

           <div className={spicalstyle.icons}>
            <button className={spicalstyle.addtocart}>
              🛒 Add to Cart
            </button>
          </div>
          </div>



        ))
        }
{
  selectType==="men's clothing" &&
  menProduct.map((el,id)=>(




 <div className={spicalstyle.cart} key={id}>
            <div className={spicalstyle.imagecontainer}>
              <img src={el.image} alt={el.title} />

              <div className={spicalstyle.overlay}>
                            <button onClick={()=>navigate('/products')}><FiShoppingCart size={22} /></button>

                <button><GoArrowSwitch size={22}/></button>
                <button><MdZoomIn size={22} /></button>
                <button><CiHeart size={23}/></button>
              </div>
              <div className={spicalstyle.layout}>

              </div>
            </div>

            <h2>{el.title.split(' ').slice(0,3).join(' ')}</h2>
            <p>{el.price}$</p>
           

           <div className={spicalstyle.icons}>
            <button className={spicalstyle.addtocart}>
              🛒 Add to Cart
            </button>
          </div>
          </div>



        ))
}
      </div>

<div className={spicalstyle.tranding}>
  <img src={trand} alt='trand'></img>
<div className={spicalstyle.textTranding}>
<p>New season trends!</p>
<h1>Best Summer Collection</h1>
<h3>Sale Get up to 50% Off</h3>
<button>Shop Now</button>

</div>
</div>
  <h1 className={spicalstyle.trend}>Featured Products</h1>

<div className={spicalstyle.carts}>
{featured.map((el, id) => (
          <div className={spicalstyle.cart} key={id}>
            <div className={spicalstyle.imagecontainer}>
              <img src={el.image} alt={el.title} />

              <div className={spicalstyle.overlay}>
                <button onClick={()=>navigate('/products')}><FiShoppingCart size={22} /></button>
                <button><GoArrowSwitch size={22}/></button>
                <button><MdZoomIn size={22} /></button>
                <button><CiHeart size={23}/></button>
              </div>
              <div className={spicalstyle.layout}>

              </div>
            </div>

            <h2>{el.title.split(' ').slice(0,3).join(' ')}</h2>
            <p>{el.price}$</p>
           

           <div className={spicalstyle.icons}>
            <button className={spicalstyle.addtocart}>
              🛒 Add to Cart
            </button>
          </div>
          </div>
        )) }
        </div>
        <div>

        </div>
<div className={spicalstyle.containerCleint}>
<div className={spicalstyle.arrowClient}>

<MdOutlineArrowBackIosNew size={20} cursor={'pointer'} onClick={changeCient} />
  <MdArrowForwardIos  size={20} cursor={'pointer'} onClick={changeCientless}/> 

</div>

  <h1> {client[cureentIndex].title} </h1>
  <span>{client[cureentIndex].description} </span>
  <div className={spicalstyle.DataClient}>
    <img src={client[cureentIndex].image}alt='clint'></img>
    <div >
<h4> { client[cureentIndex].name  } </h4>
    <p> {client[cureentIndex].jop} </p>
  </div>

    </div>
    
</div>  




<div className={spicalstyle.support}>
  <div>
<TbTruckReturn size={45} color='#8f96a7'/>
<h2>Free Delivery</h2>
<span>If you are going to use of Lorem, you <br></br>need to be sure there anything</span>
  </div>
  
  <div className={spicalstyle.border}>
<TbTruckDelivery size={45} color='#8f96a7'/>
<h2>30 Day Return</h2>
<span>If you are going to use of Lorem, you<br></br> need to be sure there anything</span>

  </div>
  <div>
<BiSupport size={45} color='#8f96a9' />
<h2>27/4 Support</h2>
<span>If you are going to use of Lorem, you <br></br>need to be sure there anything</span>
  </div>
</div>

<div className={spicalstyle.subscribe}>
<h1>Subscribe Our Newsletter</h1>
<form>
<input type='text' placeholder='Enter email address'></input>
<button type='submit'>Subscribe</button>
</form>
</div> 
    </section>
  )
}

export default Spicalproduct
