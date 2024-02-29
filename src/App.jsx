import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import ProductCategory from './Pages/ProductCategory'
import ProductDetails from './Pages/ProductDetails'
import CartContextProvider from './Context/CartContextProvider'
import Checkout from './Pages/Checkout'
import Modal from './Components/Modal'

function App() {
  

  return (
    <>
      <div className=' font-poppins w-100 min-h-screen'>
        <CartContextProvider>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/:category' element={<ProductCategory/>}/>
            <Route path='/:category/:id' element={<ProductDetails/>}/>
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/modal' element={<Modal/>} />
          </Routes>
        </CartContextProvider>
      </div>
    </>
  )
}

export default App
