import React from 'react'
import Header from '../Components/Header'
import HeroHome from '../Components/HeroHome'
import Shop from '../Components/Shop'
import Speakers from '../Components/Speakers'
import CompanyInfo from '../Components/CompanyInfo'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <div className=' font-poppins w-100 min-h-screen'>
        <Header/>
        <HeroHome className=''/>
        <Shop/>
        <Speakers/>
        <CompanyInfo/>
        <Footer/>
    </div>
  )
}

export default Homepage