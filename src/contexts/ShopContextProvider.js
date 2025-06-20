import React, { createContext, useState } from "react";
// import { ProductdataofwomenShoe } from "./DummyData/WomenShoe";
import { CombinedData } from "../DummyData/CombinedData";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < CombinedData.length; i++) {
    cart[CombinedData[i].id] = 0;
  }
  return cart;
};
// console.log(CombinedData.length);
const ShopContextProvider = (props) => {
  // const { productPrice } = data;
  // const { updateCartItemCount } = useContext(ShopContext);

  const [cartItem, setCartItem] = useState(getDefaultCart());
  // console.log("The cart item is : ", cartItem);

  const increaseItem = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // const [addProduct, removeProduct] = useState("false");

  // const handleAddToCart = (itemId) => {
  //   if (itemId > 0) {
  //     removeFromCart(true);
  //   } else {
  //     addToCart(false);
  //   }
  // };

  const removeCart = (itemId) => {
    setCartItem((prev) => {
      if (prev[itemId] === 0) {
        return { ...prev, [itemId]: 1 };
      } else {
        return { ...prev, [itemId]: 0 };
      }
    });
  };

  const decreaseItem = (itemId) => {
    setCartItem((prev) => {
      // if (prev[itemId] === 1) {
      //   return prev;
      // }

      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const gettotallCartAmount = () => {
    let totallAmount = 0;

    for (const Items in cartItem) {
      if (cartItem[Items] > 0) {
        let productInfo = CombinedData.find((product) => product.id === Items);
        const price = Number(
          productInfo.productPrice.replace(/[^0-9.-]+/g, "")
        );

        totallAmount += cartItem[Items] * price;
      }
    }
    return totallAmount;
  };

  const contextValue = {
    cartItems: cartItem,
    increaseItem,
    decreaseItem,
    removeCart,
    updateCartItemCount,
    gettotallCartAmount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
