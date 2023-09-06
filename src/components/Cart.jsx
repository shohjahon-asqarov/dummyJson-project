import { Empty } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteCart } from '../store/slices/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const orders = useSelector((state) => state.cart.data)
    return (
        <div className='pb-20'>
            <div className="sticky top-0 border-b shadow-sm bg-white">
                <div className="container flex justify-between items-center py-6 ">
                    <h1 className='text-3xl font-bold'>Cart</h1>
                    <NavLink className='bg-gray-300 py-2 px-5 rounded-md' to='/' >
                        Home
                    </NavLink>
                </div>
            </div>
            {
                orders.length > 0 ?
                    <ul className="container grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 pt-10">
                        {orders.map(product => {
                            return (
                                <li className='flex flex-col hover:shadow-lg p-4 rounded-lg cursor-pointer border border-gray' key={product.id}>
                                    <img className='h-52 mx-auto rounded-md overflow-hidden' src={product.thumbnail} alt={product.title} />
                                    <div className='space-y-3 mb-3 flex-grow py-3'>
                                        <h3 className='text-xl font-extrabold text-c-title'>{product.title.slice(0, 22)}</h3>
                                        <p className='text-c-desc text-sm font-medium'>{product.description.slice(0, 30)}...</p>
                                    </div>
                                    <div className='card-footer flex justify-between items-center'>
                                        <span className='text-2xl font-bold'>{product.price}$</span>
                                        <button onClick={() => dispatch(deleteCart(product))} className='bg-red-500 rounded-lg text-white font-bold text-sm py-2 px-5 active:scale-95'>Delete Card</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    : <dir className="py-20"><Empty description='No Items' /></dir>
            }
        </div>
    )
}

export default Cart