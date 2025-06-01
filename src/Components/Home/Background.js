import React from 'react'
import bgstyle from './Background.module.css'
import bg2 from '../../images/bg2.jpg';
const Background = (featured,setfeatured) => {
    return (
        <>

            <section className={bgstyle.background}>
                <div className={bgstyle.bgdata}>
                    <img src={bg2} alt='bg' />

                </div>

                <div className={bgstyle.bgtext}>

                    <h1>WELCOME TO OUR WEBSITE</h1>
                    <p>WE ARE THE BEST</p>

                </div>
                <div className={bgstyle.bglayer}>

                </div>
            </section>

        </>
    )
}

export default Background