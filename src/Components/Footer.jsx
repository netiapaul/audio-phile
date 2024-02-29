import React from 'react'
import logo from '../assets/shared/desktop/logo.svg'
import fbIcon from '../assets/shared/desktop/icon-facebook.svg'
import igIcon from '../assets/shared/desktop/icon-instagram.svg'
import twitIcon from '../assets/shared/desktop/icon-twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' bg-[#101010] w-full h-full lg:h-[330px] text-white flex flex-col justify-center items-center lg:px-32 px-8 lg:gap-9 '>
        <div className=' py-12 lg:pb-7 lg:pt-0 flex flex-col justify-center items-center lg:flex lg:flex-row w-full lg:justify-between lg:items-center '>
            <span className=' self-center md:self-start'>
                <img src={logo} alt="Logo" />
            </span>

            <ul className=' pt-12 lg:flex lg:flex-row lg:gap-4 md:gap-8 md:self-start lg:justify-center lg:items-center md:flex-row lg:pt-0 lg:font-semibold lg:text-xs flex flex-col items-center justify-center'>
                <Link to='/' ><li className='hover:text-[#D87D4A] cursor-pointer pb-5'>HOME</li></Link>
                <Link to='/headphones'><li className='hover:text-[#D87D4A] cursor-pointer pb-5'>HEADPHONES</li></Link>
                <Link to='/speakers'><li className='hover:text-[#D87D4A] cursor-pointer pb-5'>SPEAKERS</li></Link>
                <Link to='/earphones'><li className='hover:text-[#D87D4A] cursor-pointer pb-5'>EARPHONES</li></Link>
            </ul>
        </div>
        
        <div className=' lg:w-full lg:text-[11px] lg:flex lg:justify-between pb-10 lg:pb-0'>
            <p className='lg:w-1/2 text-center lg:text-start md:text-start'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <div className=' hidden lg:flex items-center justify-center gap-5 self-end'>
                <img className=' hover:bg-[#D87D4A] cursor-pointer' src={fbIcon} alt="Facebook" />
                <img className=' hover:bg-[#D87D4A] cursor-pointer' src={twitIcon} alt="Twitter" />
                <img className=' hover:bg-[#D87D4A] cursor-pointer' src={igIcon} alt="Instagram" />
            </div>
        </div>
        <div className=' lg:w-full lg:self-start pb-10 lg:pb-0 md:flex md:justify-between md:items-center md:w-full'>
            <p className='lg:text-[11px] pb-10 lg:pb-0 md:pb-0'>Copyright 2021. All Rights Reserved</p>
            <div className=' flex items-center justify-center gap-4 lg:hidden md:items-start'>
                <img className=' hover:bg-[#D87D4A] cursor-pointer' src={fbIcon} alt="Facebook" />
                <img className=' hover:bg-[#D87D4A] cursor-pointer' src={twitIcon} alt="Twitter" />
                <img className=' hover:bg-[#D87D4A] cursor-pointer' src={igIcon} alt="Instagram" />
            </div>
        </div>
    </div>
  )
}

export default Footer