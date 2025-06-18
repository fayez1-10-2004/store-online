import React from 'react'
import Background from '../Components/Home/Background'
import Spicalproduct from '../Components/Home/Spicalproduct'

const HomeComponent = ({featured,productfet}) => {

console.log('aleed',productfet)
    return (
        <>


            <Background />
            <Spicalproduct featured={featured} productfet={productfet} />
        </>
    )
}

export default HomeComponent