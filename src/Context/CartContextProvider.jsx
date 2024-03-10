import { createContext } from "react";
// import data from "../assets/data.json";
import { useReducer } from "react";

const initialState = {
  cartContent: [],
};

export const CartContext = createContext(null);

// const getDefaultCart = () => {
//     let cart = {};
//     for (let i = 1; i < data.length + 1; i++) {
//         cart[1] = 0;
//     }
//     return cart;
// }

const CartContextProvider = (props) => {
  const [{ cartContent }, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_CART/product":
        return {
          ...state,
          cartContent: [
            ...state.cartContent,
            {
              ...action.payload,
              price: action.payload.quantityOrdered * action.payload.price,
            },
          ],
        };
      // case "ALTER_CART/increase":
      //   console.log(action.payLoad);
      //   return {
      //     ...state,
      //     cartContent: action.payLoad,
      //   };
      case "EMPTY_CART/product":
        return {
          ...state,
          cartContent: [],
        };

      default:
        return state;
    }
  }

  const addToCart = (addedProduct) => {
    dispatch({ type: "ADD_CART/product", payload: addedProduct });
  };
  const emptyCart = () => {
    dispatch({ type: "EMPTY_CART/product" });
  };
  const increaseqty = (payLoad) => {
    let arr = [...cartContent].map((item) => {
      if (item.id === payLoad) {
        return {
          ...item,
          quantityOrdered: item?.quantityOrdered + 1,
          price: (item?.quantityOrdered + 1) * item?.originalPrice,
        };
      }
      return item;
    });

    console.log("payLoad", arr);
    dispatch({
      type: "ALTER_CART/increase",
      payload: arr,
    });
  };

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
    <CartContext.Provider
      value={{ cartContent, addToCart, increaseqty, emptyCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
