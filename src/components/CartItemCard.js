import React, { useContext } from "react";
import { ShopContext } from "../contexts/ShopContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faTimes } from "@fortawesome/free-solid-svg-icons";
export const CartItemCard = ({ data }) => {
  const { id, imgUrl, productName, productPrice } = data;
  const {
    cartItems: cartItem,
    increaseItem,
    decreaseItem,
    updateCartItemCount,
  } = useContext(ShopContext);

  const cleanPrice = Number(productPrice.replace(/[^0-9.-]+/g, ""));

  const subtotal = cartItem[id] * cleanPrice;

  return (
    <div className=" bg-[#f5f2f2] mb-[25px] w-[900px] flex m-auto justify-between p-[40px]">
      <div className=" flex justify-between gap-[50px] w-[500px]">
        <div className=" w-[180px] h-[180px] bg-[#efebeb] flex items-center justify-center">
          <img src={imgUrl} className="w-[180px] h-[180px]" />
        </div>
        <div className=" flex flex-col gap-2 w-[300px]">
          <p>
            <b>{productName}</b>
          </p>
          <p>
            Hello! I am Mubashir Hussain from Islamabad. I am learning Web
            Development and also wanna improve my English Language.
          </p>
          <p style={{ fontWeight: "700" }}>{productPrice}</p>
        </div>
      </div>

      <div className=" flex flex-col gap-2">
        <b>Quantity</b>
        <div className=" flex">
          <button className="p-[5px]" onClick={() => decreaseItem(id)}>
            -
          </button>
          <input
            className=" w-[50px] h-[30px] mx-[5px] outline-none text-center"
            value={cartItem[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="p-[5px]" onClick={() => increaseItem(id)}>
            +
          </button>
        </div>
      </div>
      <div className=" flex flex-col gap-[10px]">
        <b>Totall Price</b>
        <p>${subtotal}</p>
      </div>
      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
};

export default CartItemCard;
