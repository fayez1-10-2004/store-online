import React from 'react'
import Proudcts from '../Components/Products/Products'
import Footer from '../Components/footer/Footer'
function ProductsComponent({ setCart ,productfet}) {
    console.log(productfet)
    return (
        <>

            <Proudcts setCart={setCart} productfet={productfet} />
            <Footer />
        </>
    )
}

export default ProductsComponent