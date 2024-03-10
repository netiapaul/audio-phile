import React, { useContext, useState } from "react";
import Header from "../Components/Header";
import Shop from "../Components/Shop";
import CompanyInfo from "../Components/CompanyInfo";
import Footer from "../Components/Footer";
import { Link, useParams } from "react-router-dom";
import data from "../assets/data.json";
import add from "../assets/add.svg";
import remove from "../assets/remove.svg";
import { CartContext } from "../Context/CartContextProvider";

const ProductDetails = () => {
  // const { addToCart,increaseQuantity, decreaseQuantity, quantityOrdered } = useContext(CartContext)
  const { addToCart } = useContext(CartContext);

  // create state for the functions that increase and
  // decrease the quantity ordered
  const [quantityOrdered, setQuantityOrdered] = useState(1);

  // build the functions to increase and decrease the
  // quantity of items a user would like to purchase
  const increaseQuantity = () => {
    setQuantityOrdered((prevQuantityOrdered) => prevQuantityOrdered + 1);
  };

  const decreaseQuantity = () => {
    setQuantityOrdered((prevQuantityOrdered) =>
      Math.max(prevQuantityOrdered - 1, 1)
    );
  };

  const { id, category } = useParams();

  const getProduct = data.filter((prod) => prod.id == id);

  const flippedProduct = [...getProduct].reverse();

  // console.log(flippedProduct);

  const productDetail = flippedProduct.map((product) => (
    <div key={product.id} className="px-8 lg:px-32 pb-20 flex flex-col w-full">
      <div className=" w-full pt-7 pb-7">
        <Link to={`/${category}`} className=" text-start text-[#7d7d7d] w-full">
          <p>Go Back</p>
        </Link>
      </div>
      <div className=" flex flex-col md:flex-row">
        <span className=" w-full md:w-1/2 flex items-center justify-center bg-[#F1F1F1] rounded-md">
          <img
            className=" w-[173px] h-[225px] md:w-[296px] md:h-[385px] rounded-md"
            src={product.categoryImage.mobile}
            alt={product.name}
          />
        </span>

        <div className=" flex flex-col gap-3 justify-center items-start md:items-start pt-6 md:w-1/2 md:pl-8 md:gap-5">
          <h2 className=" text-[#D87D4A] tracking-[3.4px] md:tracking-[5.4px] font-base text-[12px]">
            NEW PRODUCT
          </h2>
          <h1 className="lg:text-[40px] text-[22px] md:text-[28px] text-start font-semibold ">
            {product.name.toUpperCase()}
          </h1>
          <p className=" text-xs text-start lg:text-left ">
            {product.description}
          </p>
          <p className=" font-semibold">$ {product.price}</p>
          <div className=" w-full flex justify-between items-center">
            <div className=" w-1/3 bg-[#F1F1F1] py-3 flex justify-between items-center px-3 md:px-4 md:w-[130px]">
              <img
                onClick={decreaseQuantity}
                className=" w-[13px] h-[12px] cursor-pointer"
                src={remove}
                alt="remove"
              />
              <input
                className="text-black text-center w-full bg-inherit"
                type="number"
                placeholder={quantityOrdered}
              />
              <img
                onClick={increaseQuantity}
                className=" w-[14px] h-[14] cursor-pointer"
                src={add}
                alt="add"
              />
            </div>
            <button
              onClick={() => {
                addToCart({
                  ...product,
                  quantityOrdered,
                  originalPrice: product.price,
                });
              }}
              className=" bg-[#D87D4A] py-3 px-5 w-36 h-12 text-sm hover:bg-[#FBAF85] self-center md:self-start text-white"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className=" pt-16 flex flex-col lg:flex-row lg:gap-14 lg:justify-center lg:items-center ">
        <div className=" lg:w-2/3">
          <h2 className=" text-[19px] font-semibold ">FEATURES</h2>
          <p className="pt-10 md:pt-7 text-xs">{product.features}</p>
        </div>

        <div className=" pt-16 flex flex-col md:w-full md:flex-row md:justify-center lg:flex-col lg:pt-0 lg:w-1/3">
          <h2 className=" text-[19px] font-semibold md:w-1/2 ">IN THE BOX</h2>
          <div className=" pt-7 flex flex-col gap-3 text-xs md:w-1/2 md:pt-0 lg:pt-7">
            {product.includes.map((include, index) => (
              <p key={index}>
                <span className="text-[#D87D4A] pr-5">{`${include.quantity}x`}</span>
                {include.item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-col gap-5 py-20 md:flex-row">
        <div className=" flex flex-col gap-5">
          <span>
            <img
              className=" rounded-md"
              src={product.gallery.first.mobile}
              alt="gallery image 1"
            />
          </span>

          <span>
            <img
              className=" rounded-md"
              src={product.gallery.second.mobile}
              alt="gallery image 2"
            />
          </span>
        </div>

        <div>
          <img
            className=" rounded-md"
            src={product.gallery.third.mobile}
            alt="gallery image 2"
          />
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center w-full gap-8 pb-10">
        <h2 className="text-[19px] font-semibold">YOU MAY ALSO LIKE</h2>
        <div className=" flex flex-col md:flex-row gap-8 md:gap-4 w-full">
          {product.others.map((other, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-full gap-8"
            >
              <div className=" w-full flex justify-center items-center bg-[#F1F1F1] rounded-md">
                <img
                  className=" h-[100px] w-[95px] md:h-[320px] md:w-[220px]"
                  src={other.image.mobile}
                  alt={other.name}
                />
              </div>

              <h3 className="text-[19px] font-semibold">
                {other.name.toUpperCase()}
              </h3>

              <Link to="/Headphones/XXMARKII">
                <button className=" bg-[#D87D4A] py-3 px-5 w-36 h-10 text-sm mt-4 hover:bg-[#FBAF85] self-center md:self-start text-white">
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <Header />
      <>{productDetail}</>
      <Shop />
      <CompanyInfo />
      <Footer />
    </div>
  );
};

export default ProductDetails;
