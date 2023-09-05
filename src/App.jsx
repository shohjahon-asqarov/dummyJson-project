import React from 'react'
import Products from './components/Products'

import 'bootstrap-icons/font/bootstrap-icons.css'

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
const App = () => {

  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Products />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App