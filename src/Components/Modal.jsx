import React from 'react'
import Header from './Header'
import Footer from './Footer'
import tick from '../assets/tick.png'
import { Link } from 'react-router-dom'

const Modal = () => {
  return (
    <div className=' w-full min-h-screen bg-black opacity-75 py-28 px-6'>
        <div className=' flex flex-col justify-center items-center bg-white h-[600px] px-4 '>
            <div className=' '>
                <span className=' bg-[#]'>
                    <img src={tick} alt="Complete" />
                </span>

                <h2>THANK YOU <br /> FOR YOUR ORDER</h2>

                <p>You will receive an email confirmation shortly.</p>

            </div>
            <div>

            </div> 

            <Link to='/'><button className=' bg-[#D87D4A] py-3 px-5 h-10 text-xs mt-4 w-full hover:bg-[#FBAF85] self-center md:self-start text-white'>BACK TO HOME</button></Link>
        </div>
    </div>
  )
}

export default Modal