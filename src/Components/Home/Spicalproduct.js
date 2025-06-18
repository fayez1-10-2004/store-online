import React, { useState } from 'react'
import spicalstyle from './Spicalproduct.module.css'
import Lodaing from '../lodaing/Lodaing'

function Spicalproduct({ featured, productfet }) {
  const[selectType,setselectType]=useState("featured")
console.log('fuee', featured)
console.log('fuee', productfet)
if((!featured||featured.length===0)||(!productfet||productfet.length===0)){
  return <Lodaing/>
}

const selectcat=["electronics","women's clothing","men's clothing"]
console.log(selectcat)
const electronicsProduct=productfet.filter(product=>product.category==='electronics') 
const womenProduct=productfet.filter(product=>product.category==="women's clothing") 
const menProduct=productfet.filter(product=>product.category==="men's clothing") 

  console.log( 'allProduct',productfet)
  return (


    <section className={spicalstyle.spicalcart}>
     
      <h1 className={spicalstyle.trend}>trending style</h1>
       <div>
      <button  onClick={()=>setselectType('featured')} className={spicalstyle.FTbutton}>featured</button>
<button onClick={()=>setselectType("women's clothing")} className={spicalstyle.FTbutton}> women's clothing</button>
<button onClick={()=>setselectType("men's clothing")}className={spicalstyle.FTbutton}> men's clothing</button>
      <button onClick={()=>setselectType('electronics')} className={spicalstyle.FTbutton}>electronics</button>
      </div>
      <div className={spicalstyle.carts}>
        {

          selectType==='featured'&&
         featured.map((el, id) => (
          <div className={spicalstyle.cart} key={id}>
            <div className={spicalstyle.imagecontainer}>
              <img src={el.image} alt={el.title} />

              <div className={spicalstyle.overlay}>
                <button>🔃</button>
                <button>❤️</button>
                <button>🔍</button>
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
                <button>🔃</button>
                <button>❤️</button>
                <button>🔍</button>
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
                <button>🔃</button>
                <button>❤️</button>
                <button>🔍</button>
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
                <button>🔃</button>
                <button>❤️</button>
                <button>🔍</button>
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
    </section>
  )
}

export default Spicalproduct
