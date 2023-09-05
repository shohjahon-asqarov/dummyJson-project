import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        const response = await axios.get('https://dummyjson.com/products')
        setProducts(response.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='container'>
           
        </div>
    )
}

export default Products