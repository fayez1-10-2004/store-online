import React from 'react'
import Background from '../Components/Home/Background'
import Spicalproduct from '../Components/Home/Spicalproduct'
import Footer from '../Components/footer/Footer'

const HomeComponent = ({featured,productfet}) => {

console.log('aleed',productfet)
    return (
        <>


            <Background />
            <Spicalproduct featured={featured} productfet={productfet} />
            <Footer/>
        </>
    )
}

export default HomeComponent