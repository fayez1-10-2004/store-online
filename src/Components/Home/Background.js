import React, { useState } from 'react'
import bgstyle from './Background.module.css'
import bg2 from '../../images/banner1.jpg';
import bg1 from '../../images/banner2.jpg'
import bg3 from '../../images/banner3.jpg'
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md"
const Background = (featured,setfeatured) => {
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
                    <button>SHOP NOW</button>
                </div>
                <div className={bgstyle.button}>
 <button onClick={changeBackgroundnex}><MdArrowBackIos /></button>
<button onClick={changeBackgroundles}><MdArrowForwardIos /></button>    
</div>


            </section>

        </>
    )
}

export default Background