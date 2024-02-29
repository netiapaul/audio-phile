import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import add from '../assets/add.svg'
import remove from '../assets/remove.svg'
import zx9Speaker from '../assets/home/desktop/image-speaker-zx9.png'

const Cart = () => {


    // create state for the functions that increase and
    // decrease the quantity ordered
    const [quantityOrdered, setQuantityOrdered] = useState(1) 

    // build the functions to increase and decrease the
    // quantity of items a user would like to purchase
    const increaseQuantity = () => {
      setQuantityOrdered(prevQuantityOrdered => prevQuantityOrdered + 1)
    }

    const decreaseQuantity = () => {
      setQuantityOrdered(prevQuantityOrdered => Math.max(prevQuantityOrdered - 1, 1))
    }

  return (
    <div className=' absolute w-full px-6 min-h-screen'>
        <div className=''></div>
        <div className=' px-4 bg-white mt-5 rounded-lg pt-7 flex flex-col gap-3 '>
            <div className=' flex justify-between text-black bg-white'>
                <h3 className='text-black font-semibold ' >CART (3) </h3>
                <p className=' text-xs underline text-[#7d7d7d] '>Remove all</p>
            </div>
            <div className=' flex'>
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

                    <div className=' w-1/3 bg-[#F1F1F1] py-1 flex justify-between items-center px-3 md:px-4 md:w-[130px] h-8'>
                        <img onClick={decreaseQuantity} className=' w-[10px] h-[12px] cursor-pointer' src={remove} alt="remove" />
                        <input className='  text-black text-center w-full bg-inherit text-xs' type="number" placeholder={quantityOrdered} />
                        <img onClick={increaseQuantity}className=' w-[10px] h-[10px] cursor-pointer' src={add} alt="add" />
                    </div>
                </div>
            </div>
            <div className=' pb-5'>
                <div className=' flex justify-between'>
                    <p className='text-[#7d7d7d]'>TOTAL</p>
                    <p className=' text-black font-bold'>$ 5,396</p>
                </div>

                <Link to='/checkout'><button className=' bg-[#D87D4A] py-3 px-5 h-10 text-xs mt-4 w-full hover:bg-[#FBAF85] self-center md:self-start text-white'>CHECKOUT</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Cart