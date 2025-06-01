import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Background from '../Components/Home/Background'
import Spicalproduct from '../Components/Home/Spicalproduct'

const HomeComponent = ({featured}) => {

    console.log('aleready',featured)
    return (
        <>


            <Navbar />
            <Background />
            <Spicalproduct featured={featured} />
        </>
    )
}

export default HomeComponent