import { useNavigate } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContextProvider";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import CartItemCard from "../components/CartItemCard";

import React, { useContext } from "react";

import { CombinedData } from "../DummyData/CombinedData";

export const ShoppingCart = () => {
  const navigate = useNavigate();
  function shippingAdres() {
    navigate("/shippingAdress");
  }

  const { cartItems: cartItem, gettotallCartAmount } = useContext(ShopContext);
  const totallAmount = gettotallCartAmount();
  return (
    <>
      <NavBar />
      <h1 className="mt-[12vh] mb-[6vh] text-center text-4xl font-semibold">
        Your Cart Items
      </h1>
      {/* <div className="cartItem"> */}
      {CombinedData.map((product) => {
        if (cartItem[product.id] > 0) {
          return <CartItemCard key={product.id} data={product} />;
        }
      })}

      <div className="min-[360px]:max-w-[900px] mx-auto flex justify-between max-[360px]:m-4 ">
        <button className="chekOutBtn" onClick={shippingAdres}>
          CheckOut
        </button>

        <span className=" flex  items-center gap-2">
          <p className=" text-2xl max-[360px]:text-[18px] max-[360px]:font-normal font-medium">
            Subtotall:
          </p>
          <p className="text-xl">${totallAmount}</p>
        </span>
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default ShoppingCart;
