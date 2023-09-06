import { Badge, Pagination, Segmented, Skeleton } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../store/slices/cartSlice'
import { NavLink } from 'react-router-dom'

const Products = () => {
    const dispatch = useDispatch()
    const orders = useSelector((state) => state.cart.data)
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [current, setCurrent] = useState(1);
    const emptyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const onChange = (page) => {
        setCurrent(page);
    };
    const getData = async () => {
        setLoading(true)
        const response = await axios.get(`https://dummyjson.com/products?limit=20&skip=${current !== 1 ? current * 20 : 0}`)
        setProducts(response.data.products)
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }
    useEffect(() => {
        getData()
    }, [current])
    return (
        <div className='pb-20'>
            <div className="sticky top-0 border-b shadow-sm bg-white">
                <div className="container flex flex-col space-y-6 sm:flex-row justify-between items-center py-6 ">
                    <h1 className='text-3xl font-bold'>Products</h1>
                    <div className='flex space-x-5 items-center'>
                        <Pagination current={current} onChange={onChange} total={40} />
                        <NavLink to='/cart'>
                            <Badge count={orders.length}>
                                <button className='bg-gray-300 py-2 px-3 rounded-md'><i className='bi bi-cart2'></i></button>
                            </Badge>
                        </NavLink>
                    </div>
                </div>
            </div>

            <ul className="container grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 pt-10">
                {
                    !loading
                        ?
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
                                        <button onClick={() => dispatch(addCart(product))} className='bg-yellow rounded-lg text-white font-bold text-sm py-2 px-5 active:scale-95'>Add Card</button>
                                    </div>
                                </li>
                            )
                        })
                        :
                        emptyArr.map((i) => {
                            return (
                                <li key={i} className='flex flex-col hover:shadow-lg p-4 rounded-lg cursor-pointer border border-gray'>
                                    <Skeleton.Image active className='!h-52 !w-full mx-auto rounded-md overflow-hidden' />
                                    <div className='space-y-3 mb-3 flex-grow py-3'>
                                        <Skeleton.Input block active />
                                        <Skeleton.Input className='!h-5' block active />
                                    </div>
                                    <div className='card-footer flex justify-between items-center'>
                                        <Skeleton.Button active />
                                        <Skeleton.Button className='!w-24' active />
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