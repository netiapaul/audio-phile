// import { useState } from "react";
import { Link } from "react-router-dom";
import add from "../assets/add.svg";
import remove from "../assets/remove.svg";
// import zx9Speaker from "../assets/home/desktop/image-speaker-zx9.png";
import { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";

const Cart = () => {
  const { cartContent, increaseqty, emptyCart } = useContext(CartContext);

  // create state for the functions that increase and
  // decrease the quantity ordered
  //   const [quantityOrdered, setQuantityOrdered] = useState(1);

  // build the functions to increase and decrease the
  // quantity of items a user would like to purchase
  const increaseQuantity = (id) => {
    increaseqty(id);
    // setQuantityOrdered((prevQuantityOrdered) => prevQuantityOrdered + 1);
  };

  //   const decreaseQuantity = () => {
  //     setQuantityOrdered((prevQuantityOrdered) =>
  //       Math.max(prevQuantityOrdered - 1, 1)
  //     );
  //   };

  console.log(cartContent);

  if (!Number(cartContent?.length))
    return <h1>NO ITEMS ADDED TO CART!!!!!!</h1>;
  return (
    <div className=" absolute w-full px-6 min-h-screen">
      <div className=""></div>
      <div className=" px-4 bg-white mt-5 rounded-lg pt-7 flex flex-col gap-3 ">
        <div className=" flex justify-between text-black bg-white">
          <h3 className="text-black font-semibold ">
            CART {cartContent.length}
          </h3>
          <p
            className=" text-xs underline text-[#7d7d7d] "
            role="button"
            onClick={() => emptyCart()}
          >
            Remove all
          </p>
        </div>
        {cartContent?.map((item) => (
          <div className=" flex" key={item.id}>
            <div className=" flex justify-between items-center">
              <div className=" flex gap-1">
                <span className=" bg-[#F1F1F1] h-[64px] w-[64px] flex justify-center items-center">
                  <img
                    className=" h-[40px] w-[36px]"
                    src={item.categoryImage.mobile}
                    alt={item.name}
                  />
                </span>
                <div className=" flex flex-col justify-center items-start gap-1">
                  <p className=" text-xs">{item.name}</p>
                  <p className=" text-xs">{item.price}</p>
                </div>
              </div>

              <div className=" w-1/3 bg-[#F1F1F1] py-1 flex justify-between items-center px-3 md:px-4 md:w-[130px] h-8">
                <img
                  //   onClick={decreaseQuantity}
                  className=" w-[10px] h-[12px] cursor-pointer"
                  src={remove}
                  alt="remove"
                />
                <input
                  className="  text-black text-center w-full bg-inherit text-xs"
                  type="number"
                  placeholder={item?.quantityOrdered}
                />
                <img
                  onClick={() => increaseQuantity(item.id)}
                  className=" w-[10px] h-[10px] cursor-pointer"
                  src={add}
                  alt="add"
                />
              </div>
            </div>
          </div>
        ))}

        <div className=" pb-5">
          <div className=" flex justify-between">
            <p className="text-[#7d7d7d]">TOTAL</p>
            <p className=" text-black font-bold">
              {cartContent.reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue?.price,
                0
              )}
            </p>
          </div>

          <Link to="/checkout">
            <button className=" bg-[#D87D4A] py-3 px-5 h-10 text-xs mt-4 w-full hover:bg-[#FBAF85] self-center md:self-start text-white">
              CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
