import React from 'react'
import Products from './components/Products'

import 'bootstrap-icons/font/bootstrap-icons.css'

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const App = () => {

  return (
    <div>
      <Products />
      <ToastContainer />
    </div>
  )
}

export default App