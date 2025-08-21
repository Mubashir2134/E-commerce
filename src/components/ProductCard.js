import { Link } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContextProvider";
// import ShopContextProvider from "./ShopContextProvider";
import { useContext } from "react";
// import { useState } from "react";
function ProductCard(props) {
  const { id, miniImg, productName, productPrice } = props;
  const { increaseItem, removeCart, cartItems } = useContext(ShopContext);

  const handleAddToCart = (itemId) => {
    const isInCart = cartItems[itemId] > 0;

    if (isInCart) {
      removeCart(itemId);
    } else {
      increaseItem(itemId);
    }
  };
  return (
    <div className=" p-5 max-w-[300px] max-h-[400px] max-[360px]:max[250px] max[360px]:w-[250px]  flex justify-between flex-col gap-[30px] items-center bg-[#efebeb]">
      <Link to="/bags" style={{ textDecoration: "none" }}>
        <img className=" w-[250px] max-[360px]:w-[130px] max-[360px]:h-[130px]" src={miniImg} />
      </Link>

      <div className=" w-[100%] flex flex-col justify-between">
        <div className=" w-[100%] flex items-center justify-between">
          <p className=" text-black">{productName}</p>
          <p className="text-black">{productPrice}</p>
        </div>

        <button
          className=" mt-5 py-[7px] px-[5px] max-[360px]:p-[2px] border-none bg-[#fdd3c3] cursor-pointer"
          onClick={() => handleAddToCart(id)}
        >
          {cartItems[id] > 0 ? "Remove From Cart" : "Add To Cart"}
          {/* {cartItemAmount > 0 && `(${cartItemAmount})`} */}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
