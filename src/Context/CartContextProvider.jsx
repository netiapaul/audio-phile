import React, { createContext, useState } from 'react'
import data from '../assets/data.json'

export const CartContext = createContext(null);

// const getDefaultCart = () => {
//     let cart = {};
//     for (let i = 1; i < data.length + 1; i++) {
//         cart[1] = 0;
//     }
//     return cart;
// }

const CartContextProvider = (props) => {

    // const [cardItems, setCardItems] = useState(getDefaultCart());
    // create state for the functions that increase and
    // decrease the quantity ordered
    // const [quantityOrdered, setQuantityOrdered] = useState(1)

    // build the functions to increase and decrease the
    // quantity of items a user would like to purchase
    // const increaseQuantity = () => {
    //   setQuantityOrdered(prevQuantityOrdered => prevQuantityOrdered + 1)
    // }

    // const decreaseQuantity = () => {
    //   setQuantityOrdered(prevQuantityOrdered => Math.max(prevQuantityOrdered - 1, 1))
    // }


    // const addToCart = (itemId) => {
    //     setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1}))
    // }

    // const addToCart = (itemId) => {
    //     setCardItems((prevItems) => {
    //     //   const itemId = product.id;
    //       const newQuantity = prevItems[itemId] || 0 + quantityOrdered; // Use quantityOrdered
    //       return {
    //         ...prevItems,
    //         [itemId]: newQuantity,
    //       };
    //     });
    //   };

    // const removeFromCart = (itemId) => {
    //     setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1}))
    // }

    // const contextValue = {cardItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, quantityOrdered}

    // console.log(cardItems);

    

  return (
    <CartContext.Provider>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider