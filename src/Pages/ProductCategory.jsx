import React from 'react'
import Header from '../Components/Header'
import Shop from '../Components/Shop'
import CompanyInfo from '../Components/CompanyInfo'
import Footer from '../Components/Footer'
import { Link, useParams } from 'react-router-dom'
import data from '../assets/data.json'
import '../App.css'

const ProductCategory = () => {

    const { category } = useParams()

    // filter the data
    const filteredProducts = data.filter(item => item.category === category);

    // flip the data
    const flippedProducts = [...filteredProducts].reverse()

    // map over the flipped data
    const productElement = flippedProducts.map((product,index) => ( 
        <div key={product.id}
        className={`products px-8 lg:px-32 pt-8 pb-20 flex flex-col md:flex-row md:h-[520px] ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
         >
            <span className=' w-full md:w-1/2 flex items-center justify-center bg-[#F1F1F1]'>
                <img className=' w-[173px] h-[225px] md:w-[296px] md:h-[385px]' src={product.categoryImage.mobile} alt={product.name} />
            </span>

            <div className=' productsContent flex flex-col gap-3 justify-center items-center md:items-start pt-6 md:w-1/2 md:pl-8'>
                <h2 className=' text-[#D87D4A] tracking-[3.4px] md:tracking-[5.4px] font-base text-[12px]'>NEW PRODUCT</h2>
                <h1 className='lg:text-[40px] text-[18px] md:text-[28px] text-center font-semibold md:text-start'>{product.name.toUpperCase()}</h1>
                <p className=' text-xs text-center md:text-start lg:text-left '>{product.description}</p>
                <Link to={`/${category}/${product.id}`}><button className=' bg-[#D87D4A] py-3 px-5 w-36 h-12 text-sm mt-4 hover:bg-[#FBAF85] self-center md:self-start text-white'>SEE PRODUCT</button></Link>
            </div>
        </div>
    ))


  return (
    <div>
        <Header/>
        <div className=' w-full h-36 bg-[#000000] text-white flex justify-center items-center'>
            <h2 className='text-[24px] font-base'>
                {flippedProducts[0].category.toUpperCase()}
            </h2>
        </div>
        <>
        {productElement}
        </>
        <Shop/>
        <CompanyInfo/>
        <Footer/>
    </div>
  )
}

export default ProductCategory