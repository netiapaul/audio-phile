import React from 'react'

const HeroHome = () => {
  return (
    <div className=' w-full h-screen bg-no-repeat bg-cover bg-center lg:bg-hero-imageHome bg-hero-imageHomeMb md:bg-hero-imageHomeTb'>
      <div className=' text-white font-poppins w-full h-screen flex items-center lg:pl-32 px-8'>
        <div className=' lg:w-1/2 w-full flex flex-col justify-center items-center lg:justify-start lg:items-start gap-4'>
          <h2 className=' text-[#ffffff68] tracking-[3.4px] font-base'>NEW PRODUCT</h2>
          <h1 className='text-[40px]'>XX99 MARK II < br /> HEADPHONES</h1>
          <p className=' text-xs text-center lg:text-left '>Experience natural, lifelike audio and exceptional <br /> build quality made for the passionate music <br /> enthusiast.</p>
          <button className=' bg-[#D87D4A] py-3 px-5 w-36 h-12 text-sm mt-4 hover:bg-[#FBAF85]'>SEE PRODUCT</button>
        </div>
      </div>
    </div>
  )
}

export default HeroHome