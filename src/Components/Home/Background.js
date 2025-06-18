import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import bgstyle from './Background.module.css'
import bg2 from '../../images/banner1.jpg';
import bg1 from '../../images/banner2.jpg'
import bg3 from '../../images/banner3.jpg'
import mid1 from '../../images/mid-img-1.jpg'
import mid2 from '../../images/mid_img-2.jpg'
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md"
const Background = ()=> {
    const navigate=useNavigate()
const [cureentIndex,setcureentIndex]=useState(0)
const collect=[{
    image:bg1,
    descrption:'Get up to 50% off Today Only!',
    title:'Woman Fashion',
},
{
    image:bg2,
    descrption:'50% off in all products!',
    title:'Man Fashion',
},

{
    image:bg3,
    descrption:'Taking your Viewing Experience to Next Level',
    title:'Summer Sale',
}
]
const changeBackgroundnex=()=>{
const nextIndex=(cureentIndex+1)%collect.length
setcureentIndex(nextIndex)
console.log(cureentIndex)
}
const changeBackgroundles=()=>{

    const lessindex=(cureentIndex - 1 + collect.length)%collect.length
    setcureentIndex(lessindex)
}

 return (
        <>
            <section className={bgstyle.background}>

                <div className={bgstyle.bgdata}>
                 
                    <img src={collect[cureentIndex].image} alt='bg' />
                
                </div>
                <div className={bgstyle.bgtext}>
                    <h1>{collect[cureentIndex].title}</h1>
                    <p>{collect[cureentIndex].descrption}</p>
                    <button onClick={()=>navigate('/products')} >SHOP NOW</button>
                </div>
                <div className={bgstyle.button}>
 <button onClick={changeBackgroundnex}><MdArrowBackIos /></button>
<button onClick={changeBackgroundles}><MdArrowForwardIos /></button>    
</div>

<div className={bgstyle.ContainerImageMid}>
    <div className={bgstyle.mid1}>
        <img src={mid1} alt='mid1'></img>
        <div className={bgstyle.textImageMid1}>
<p>Super Sale</p>
<h1>New Collection</h1>
<button>SHop Now</button>
        </div>
    </div>
        <div className={bgstyle.mid2}>
        <img src={mid2} alt='mid2'></img>

        <div className={bgstyle.textImageMid2}>
            <p>New Season</p>
            <h1>Sale 40% Off</h1>
            <button onClick={()=>navigate('/products')}>SHop Now</button>
        </div>
    </div>


</div>


            </section>

        </>
    )
}

export default Background