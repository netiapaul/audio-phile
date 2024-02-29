import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import zx9Speaker from '../assets/home/desktop/image-speaker-zx9.png'
import { Link, useParams } from 'react-router-dom'
import data from '../assets/data.json'



const Checkout = () => {

    const [selectedOption, setSelectedOption] = useState('e-Money');  // handle radio buttons

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };



  return (
    <div className=' w-full bg-[#F1F1F1]'>
        <Header/> 
        <Link to='/' className=' text-start text-[#7d7d7d] w-full'><p className=' px-8 py-5 lg:px-32 hover:text-[#D87D4A]'>Go Back</p></Link>
        <form className=' flex flex-col gap-10 px-8 pt-2 pb-12 lg:px-32 lg:flex-row lg:gap-7'>
            <div className=' flex flex-col px-4 gap-5 bg-white rounded-md pb-8 md:gap-10 lg:w-2/3'>
                <h2 className=' pt-8 font-semibold text-xl md:text-2xl'>CHECKOUT</h2>
                <div className=' flex flex-col gap-3 '>
                    <h3 className=' text-sm text-[#D87D4A]'>BILLING DETAILS</h3>
                    <div className=' flex flex-col gap-3 md:flex-row'>
                        <div className=' md:w-1/2'>
                            <label htmlFor="" className=' font-semibold text-xs'>Name</label>
                            <input required className=' w-full border border-solid border-[#7d7d7d] text-xs py-3 px-5 rounded-md mt-1 cursor-pointer focus:border-orange-400' type="text" placeholder='Alexei Ward' />
                        </div>
                        <div className=' md:w-1/2'>
                            <label htmlFor="" className=' font-semibold text-xs'>Email Address</label>
                            <input required className=' w-full border border-solid border-[#7d7d7d] text-xs py-3 px-5 rounded-md mt-1 cursor-pointer focus:border-[#D87D4A]' type="email" placeholder='alexei@mail.com' />
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <label htmlFor="" className=' font-semibold text-xs '>Phone Number</label>
                        <input required className=' w-full border border-solid border-[#7d7d7d] text-xs py-3 px-5 rounded-md mt-1 cursor-pointer focus:border-[#D87D4A]' type="phone" placeholder='+1 202-555-0136' />
                    </div>
                </div>
                <div className=' flex flex-col gap-3 '>
                    <h3 className=' text-sm text-[#D87D4A]' >SHIPPING INFO</h3>
                    <div>
                        <label htmlFor="" className=' font-semibold text-xs'>Address</label>
                        <input required className=' w-full border border-solid border-[#7d7d7d] text-xs py-3 px-5 rounded-md mt-1 cursor-pointer focus:border-[#D87D4A]' type="text" placeholder='1137 Williams Avenue' />
                    </div>
                    <div className=' flex flex-col gap-3 md:flex-row'>
                        <div className='md:w-1/2'>
                            <label htmlFor="" className=' font-semibold text-xs'>Zip</label>
                            <input required className=' w-full border border-solid border-[#7d7d7d] text-xs py-3 px-5 rounded-md mt-1 cursor-pointer focus:border-[#D87D4A]' type="number" placeholder='10001' />
                        </div>
                        <div className='md:w-1/2'>
                            <label htmlFor="" className=' font-semibold text-xs'>City</label>
                            <input required className=' w-full border border-solid border-[#7d7d7d] text-xs py-3 px-5 rounded-md mt-1 cursor-pointer focus:border-[#D87D4A]' type="text" placeholder='New York' />
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <label htmlFor="" className=' font-semibold text-xs'>Country</label>
                        <input required className=' w-full border border-solid border-[#7d7d7d] text-xs py-3 px-5 rounded-md mt-1 cursor-pointer focus:border-[#D87D4A]' type="text" placeholder='United States' />
                    </div>
                    
                </div>
                <div className=' flex flex-col gap-3'>
                    <h3 className=' text-sm text-[#D87D4A]'>PAYMENT DETAILS</h3>
                    <div className=' flex flex-col gap-3 md:flex-row'>
                        <label htmlFor="" className=' font-semibold text-xs w-1/2'>Payment Method</label>
                        <div className=' flex flex-col gap-2 md:w-1/2'>
                            <label className=' w-full border border-solid border-[#7d7d7d] text-xs py-3 px-5 rounded-md mt-1 font-semibold cursor-pointer focus:border-[#D87D4A]' htmlFor="e-Money">
                                <input type="radio" value='e-Money' checked={selectedOption === 'e-Money'} onChange={handleChange}/>
                                e-Money
                            </label>

                            <label className=' w-full border border-solid border-[#7d7d7d] text-xs py-3 px-5 rounded-md mt-1 font-semibold cursor-pointer focus:border-[#D87D4A]' htmlFor="Cash on Delivery" >
                                <input type="radio" value='Cash on Delivery' checked={selectedOption === 'Cash on Delivery'} onChange={handleChange} />
                                Cash on Delivery
                            </label> 
                        </div>
                    </div>
                    <div className=' flex flex-col gap-3 md:flex-row'>
                        <div className=' md:w-1/2'>
                            <label htmlFor="" className=' font-semibold text-xs'>e-Money Number</label>
                            <input required className=' w-full border border-solid border-[#7d7d7d] text-xs py-3 px-5 rounded-md mt-1 cursor-pointer focus:border-[#D87D4A]' type="number" placeholder='238521993' />
                        </div>
                        <div className=' md:w-1/2'>
                            <label htmlFor="" className=' font-semibold text-xs'>e-Money Pin</label>
                            <input required className=' w-full border border-solid border-[#7d7d7d] text-xs py-3 px-5 rounded-md mt-1 cursor-pointer focus:border-[#D87D4A]' type="number" placeholder='6891' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 px-4 py-6 bg-white rounded-md lg:w-1/3 lg:h-1/2 '>
                <h3 className=' text-sm font-semibold'>SUMMARY</h3>
                <div className=' flex justify-between items-center'>
                    <div className=' flex gap-1'>
                        <span className=' bg-[#F1F1F1] h-[64px] w-[64px] flex justify-center items-center'>
                            <img className=' h-[40px] w-[36px]' src={zx9Speaker} alt="XX99" />
                        </span>
                        <div className=' flex flex-col justify-center items-start gap-1'>
                            <p className=' text-xs'>XX99 MK II</p>
                            <p className=' text-xs'>$ 2,999</p>
                        </div>
                    </div>

                    <p className='text-xs text-[#7d7d7d]'>1x</p>
                </div>
                <div>
                    <div className=' flex justify-between'>
                        <p className='text-[#7d7d7d] text-xs'>TOTAL</p>
                        <p className=' text-black font-bold text-xs'>$ 5,396</p>
                    </div>
                    <div className=' flex justify-between'>
                        <p className='text-[#7d7d7d] text-xs'>SHIPPING</p>
                        <p className=' text-black font-bold text-xs'>$ 50</p>
                    </div>
                    <div className=' flex justify-between'>
                        <p className='text-[#7d7d7d] text-xs'>VAT (INCLUDED)</p>
                        <p className=' text-black font-bold text-xs'>$ 1,079</p>
                    </div>
                </div>

                <div className=' flex justify-between'>
                        <p className='text-[#7d7d7d] text-xs'>GRAND TOTAL</p>
                        <p className=' text-[#D87D4A] font-bold text-xs'>$ 5,446</p>
                 </div>
                
                 <button className=' bg-[#D87D4A] py-3 px-5 h-10 text-xs mt-4 w-full hover:bg-[#FBAF85] self-center md:self-start text-white'>CONTINUE & PAY</button>
            </div>
        </form>
        
        <Footer/>
    </div>
  )
}

export default Checkout