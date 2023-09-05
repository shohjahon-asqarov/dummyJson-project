import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        const response = await axios.get('https://dummyjson.com/products')
        setProducts(response.data.products)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='container pt-10'>
            <div className="flex justify-between items-center py-10">
                <h1 className='text-3xl font-bold'>Products</h1>
            </div>

            <ul className="grid grid-cols-4 gap-5">
                {
                    products.map(product => {
                        return(
                            <li className='border' key={product.id}>
                                <img className='h-52 mx-auto' src={product.thumbnail} alt="" />
                                <h3>{product.title}</h3>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Products