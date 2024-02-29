import React from 'react'
import earphonesShop from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import speakersShop from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import headphonesShop from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import arrowRight from '../assets/shared/desktop/icon-arrow-right.svg'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <div className=' w-full h-screen flex justify-center items-center my-36 lg:my-0 md:my-0 md:h-[500px]'>
        <div className=' flex flex-col lg:flex-row md:flex-row justify-center items-center gap-20 md:gap-8 lg:gap-5 w-full lg:px-32 px-8'>
            <div className=' bg-[#F1F1F1] lg:w-[380px] h-[205px] w-full flex flex-col justify-center items-center relative'>
                <img className=' w-40 h-40 absolute -top-16' src={headphonesShop} alt="Shop Headphones" />

                <h3 className=' pt-12 font-bold text-base'>HEADPHONES</h3>

                <Link to='/headphones'><div className=' flex items-center pt-4 text-sm gap-2 cursor-pointer'>
                    <h4>SHOP</h4>
                    <img className=' h-[12px]' src={arrowRight} alt="Shop Headphones " />
                </div></Link>
            </div>

            <div className=' bg-[#F1F1F1] lg:w-[380px] w-full h-[205px] flex flex-col justify-center items-center relative'>
                <img className=' w-40 h-40 absolute -top-16' src={speakersShop} alt="Shop Speakers" />

                <h3 className=' pt-12 font-bold text-base'>SPEAKERS</h3>

                <Link to='/speakers'><div className=' flex items-center pt-4 text-sm gap-2 cursor-pointer'>
                    <h4>SHOP</h4>
                    <img className=' h-[12px]' src={arrowRight} alt="Shop Speakers" />
                </div></Link>
            </div>

            <div className=' bg-[#F1F1F1] lg:w-[380px] w-full h-[205px] flex flex-col justify-center items-center relative'>
                <img className=' w-40 h-40 absolute -top-16' src={earphonesShop} alt="Shop Earphones" />

                <h3 className=' pt-12 font-bold '>EARPHONES</h3>

                <Link to='/earphones'><div className=' flex items-center pt-4 text-sm gap-2 cursor-pointer'>
                    <h4>SHOP</h4>
                    <img className=' h-[12px]' src={arrowRight} alt="Shop Earphones" />
                </div></Link>
            </div>
        </div>
    </div>
  )
}

export default Shop