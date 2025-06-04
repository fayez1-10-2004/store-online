import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Singlestyle from './SingleProducts.module.css'
function SingleProduct() {
    const [product, setProduct] = useState({})
    const { welcome } = useParams()


    useEffect(() => {

        axios.get(`https://fakestoreapi.com/products/${welcome}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err))
    })
    return (

        <div className={Singlestyle.containersingle}>
            <div className={ Singlestyle.contianercart}>
         
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <h3>{product.price}</h3>
            <span>{product.description}</span>
        </div>
        </div>
    )
}

export default SingleProduct
