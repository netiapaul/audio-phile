import React, { useState } from 'react'
import logo from '../assets/shared/desktop/logo.svg'
import cartIcon from '../assets/shared/desktop/icon-cart.svg'
import menu from '../assets/shared/tablet/icon-hamburger.svg'
import { Link, NavLink } from 'react-router-dom'
import earphonesShop from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import speakersShop from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import headphonesShop from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import arrowRight from '../assets/shared/desktop/icon-arrow-right.svg'
import Cart from './Cart'
// import heroImg from '../assets/home/desktop/image-hero.jpg'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  // handle menu
  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  }

    // handle cart
  const handleCart = () => {
    setOpenCart((prev) => !prev);
    console.log(openCart);
  }

  return (
    <div className='bg-[#101010] h-28 w-full'>
        <div className=' w-full h-full flex justify-between items-center text-white lg:px-32 px-8 border-b border-white border-solid'>
            <img className='lg:hidden hover:bg-[#D87D4A] cursor-pointer' onClick={handleMenu} src={menu} alt="Menu" />

            <img className='md:pr-[444px]' src={logo} alt="Logo" />

            <ul className=' hidden lg:flex gap-7 items-center justify-center text-base'>
               <NavLink to='/' className=' aria-[current=page]:text-[#D87D4A]' > <li className='hover:text-[#D87D4A] cursor-pointer'>HOME</li></NavLink>
               <NavLink to='/headphones'className=' aria-[current=page]:text-[#D87D4A]' > <li className='hover:text-[#D87D4A] cursor-pointer'>HEADPHONES</li></NavLink>
               <NavLink to='/speakers' className=' aria-[current=page]:text-[#D87D4A]'>  <li className='hover:text-[#D87D4A] cursor-pointer'>SPEAKERS</li></NavLink>
               <NavLink to='/earphones' className=' aria-[current=page]:text-[#D87D4A]'> <li className='hover:text-[#D87D4A] cursor-pointer'>EARPHONES</li></NavLink>
               
            </ul>

            <img className=' cursor-pointer' src={cartIcon} onClick={handleCart} alt="Cart" />
        </div>
        {open ? (
          <div className=' lg:hidden bg-black w-full h-full absolute bg-opacity-75 pt-24'>
            <div className=' flex flex-col lg:flex-row md:flex-row justify-center items-center gap-20 md:gap-8 lg:gap-5  lg:px-32 px-8 pb-10 bg-white h-full rounded-b-lg'>
              <div className=' bg-[#F1F1F1] lg:w-[380px] h-[205px] w-full flex flex-col justify-center items-center relative'>
                  <img className=' w-40 h-40 absolute -top-16' src={headphonesShop} alt="Shop Headphones" />

                  <h3 className=' pt-12 font-bold text-base'>HEADPHONES</h3>

                  <Link to='/headphones'><div onClick={handleMenu} className=' flex items-center pt-4 text-sm gap-2 cursor-pointer'>
                      <h4>SHOP</h4>
                      <img className=' h-[12px]' src={arrowRight} alt="Shop Headphones " />
                  </div></Link>
              </div>

              <div className=' bg-[#F1F1F1] lg:w-[380px] w-full h-[205px] flex flex-col justify-center items-center relative'>
                  <img className=' w-40 h-40 absolute -top-16' src={speakersShop} alt="Shop Speakers" />

                  <h3 className=' pt-12 font-bold text-base'>SPEAKERS</h3>

                  <Link to='/speakers'><div onClick={handleMenu} className=' flex items-center pt-4 text-sm gap-2 cursor-pointer'>
                      <h4>SHOP</h4>
                      <img className=' h-[12px]' src={arrowRight} alt="Shop Speakers" />
                  </div></Link>
              </div>

              <div className=' bg-[#F1F1F1] lg:w-[380px] w-full h-[205px] flex flex-col justify-center items-center relative'>
                  <img className=' w-40 h-40 absolute -top-16' src={earphonesShop} alt="Shop Earphones" />

                  <h3 className=' pt-12 font-bold '>EARPHONES</h3>

                  <Link to='/earphones'><div onClick={handleMenu} className=' flex items-center pt-4 text-sm gap-2 cursor-pointer'>
                      <h4>SHOP</h4>
                      <img className=' h-[12px]' src={arrowRight} alt="Shop Earphones" />
                  </div></Link>
              </div>
            </div>
          </div>
        ) : null}
        {openCart ?(
          <Cart/>
        ) :null}
    </div>
  )
}

export default Header