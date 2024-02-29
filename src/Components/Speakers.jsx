import React from 'react'
import yx1Earphones from '../assets/home/desktop/image-earphones-yx1.jpg' 
import zx9Speaker from '../assets/home/desktop/image-speaker-zx9.png'

const Speakers = () => {
  return (
    <div className=' w-full min-h-screen lg:px-32 px-8 font-poppins'>
        <div>
            <div className=' w-full h-[500px] bg-[#D87D4A] bg-pattern-Circles bg-no-repeat bg-contain flex flex-col lg:flex-row justify-center items-center rounded-lg'>
                <div className='lg:self-end lg:w-1/2 lg:pl-32'>
                    <span className=' w-full self-center '>
                        <img className=' lg:w-[350px] lg:h-[380px] w-[120px] h-[150px] ' src={zx9Speaker} alt="zx9 Speaker" />
                    </span>
                </div>
                
                <div className=' lg:w-1/2 w-full lg:pl-20 lg:pr-11 lg:pt-0 pt-4 flex flex-col justify-center gap-5 items-center lg:justify-start lg:items-start'>
                    <h2 className='lg:text-[40px] text-white lg:font-semibold text-[26px] md:text-[40px] text-center lg:text-start ' >ZX9 <br /> SPEAKER</h2>
                    <p className=' text-white text-xs text-center lg:text-start '>Upgrade to premium speakers that are <br /> phenomenally built to deliver truly <br /> remarkable sound.</p>
                    <button className=' bg-[#000000] py-3 px-5 w-36 h-12 text-sm mt-4 text-white hover:bg-[#4C4C4C] '>SEE PRODUCT</button>
                </div>
            </div>

            <div className=' w-full h-[320px] lg:bg-zx7-Speaker md:bg-zx7-SpeakerTb bg-zx7-SpeakerMb bg-no-repeat bg-center bg-cover mt-10 rounded-lg flex justify-start items-center'>

                <div className='flex flex-col justify-center items-start lg:pl-20 pl-6 w-full'>
                    <h2 className=' font-semibold text-[22px] tracking-widest '>ZX7 SPEAKER</h2>
                    <button className=' bg-none py-3 px-5 w-32 h-10 text-xs mt-4 text-black border-solid border-2 border-black cursor-pointer hover:bg-black hover:text-white '>SEE PRODUCT</button>
                </div>
                
            </div>
-
            <div className=' flex flex-col md:flex-row lg:flex-row gap-4 rounded-lg lg:mt-10 lg:mb-10'>
                <span className=' lg:w-1/2 md:w-1/2 w-full rounded-lg'>
                    <img className='rounded-lg' src={yx1Earphones} alt="yx1 Earphones" />
                </span>
                <div className=' bg-[#F1F1F1] lg:w-1/2 w-full h-[184.1px] lg:h-auto md:h-auto md:w-1/2 flex justify-start items-center lg:pl-16 pl-6'>
                    <div className=''>
                        <h2 className=' font-semibold text-[22px] tracking-widest '>YX1 EARPHONES</h2>
                        <button className=' bg-none py-3 px-5 w-32 h-10 text-xs mt-4 text-black border-solid border-2 border-black cursor-pointer hover:bg-black hover:text-white'>SEE PRODUCT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Speakers