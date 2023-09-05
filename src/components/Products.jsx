import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        const response = await axios.get('https://dummyjson.com/products?limit=20')
        setProducts(response.data.products)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='container pt-10'>
            <div className="flex justify-between items-center py-10">
                <h1 className='text-3xl font-bold'>Products</h1>
                <span className='font-bold text-lg'>{products.length}</span>
            </div>

            <ul className="grid grid-cols-4 gap-5">
                {
                    products.map(product => {
                        return (
                            <li className='flex flex-col hover:shadow-lg p-4 rounded-lg cursor-pointer border border-gray' key={product.id}>
                                <img className='h-52 mx-auto rounded-md overflow-hidden' src={product.thumbnail} alt={product.title} />
                                <div className='space-y-3 mb-3 flex-grow py-3'>
                                    <h3 className='text-xl font-extrabold text-c-title'>{product.title.slice(0, 22)}</h3>
                                    <p className='text-c-desc text-sm font-medium'>{product.description.slice(0, 30)}...</p>
                                </div>
                                <div className='card-footer flex justify-between items-center'>
                                    <span className='text-2xl font-bold'>{product.price}$</span>
                                    <button className='bg-yellow rounded-lg text-white font-bold text-sm py-2 px-5 active:scale-95'>Add Card</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Products