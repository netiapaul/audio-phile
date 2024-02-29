import React from 'react'

const CompanyInfo = () => {
  return (
    <div className=' w-full lg:h-[400px] h-[500px] lg:px-32 px-8 flex flex-col-reverse lg:flex-row lg:gap-0 gap-10 lg:my-32 my-20'>
        <div className=' lg:w-1/2 w-full flex justify-start items-center'>

            <div className='lg:pr-9 flex flex-col items-center md:justify-center md:w-full lg:items-start gap-4 '>
                <h2 className='text-[24px] md:text-[30px] text-black font-semibold leading-tight text-center lg:text-start'>
                    BRINGING YOU THE <span className=' text-[#D87D4A] md:inline hidden' >BEST </span> <br />
                    <span className=' text-[#D87D4A] md:hidden' >BEST </span> AUDIO GEAR
                </h2>
                <p className=' text-[10px] text-center lg:text-start md:text-center '>
                    Located at the heart of New York City, Audiophile is the premier <br /> store for high end headphones, earphones, speakers, and audio <br />
                 accessories. We have a large showroom and luxury <br /> demonstration rooms available for you to browse and <br />
                  experience a wide range of our products. Stop by our store to <br /> meet some of the fantastic people who make Audiophile <br />
                   the best place to buy your portable audio equipment.
                </p>
            </div>

        </div>
        <div className=' bg-[#F1F1F1] lg:w-1/2 w-full h-1/2 lg:h-auto rounded-lg'>

        </div>
    </div>
  )
}

export default CompanyInfo