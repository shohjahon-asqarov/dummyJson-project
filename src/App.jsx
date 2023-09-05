import React from 'react'
import Products from './components/Products'

import 'bootstrap-icons/font/bootstrap-icons.css'

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
const App = () => {

  return (
    <div>

      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App