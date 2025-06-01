import React from 'react'
import spicalstyle from './Spicalproduct.module.css'
import Lodaing from '../lodaing/Lodaing'

function Spicalproduct({ featured, setfeatured }) {
console.log('fuee', featured)
if(!featured||featured.length===0){
  return <Lodaing/>
}
  
  return (
    <section className={spicalstyle.spicalcart}>
      <h1 className={spicalstyle.trend}>trending style</h1>
      <div className={spicalstyle.carts}>
        {featured ? featured.map((el, id) => (
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
        )) : undefined}
      </div>
    </section>
  )
}

export default Spicalproduct
