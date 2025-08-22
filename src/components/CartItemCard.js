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
    removeCart,
    updateCartItemCount,
  } = useContext(ShopContext);

  const cleanPrice = Number(productPrice.replace(/[^0-9.-]+/g, ""));

  const subtotal = cartItem[id] * cleanPrice;

  return (
    <>
      {/* <div className="  bg-[#f5f2f2] mb-[25px] w-[900px] max-[360px]:w-[320px] max-[360px]:h-[170px]  max-[360px]:items-center flex m-auto justify-between p-[40px] max-[360px]:p-[14px]">
        <div className=" max-[360px]:hidden flex  justify-between gap-[50px] max-[360px]:gap-[5px] w-[500px] max-[360px]:w-[250px] max-[360px]:justify-center max-[360px]:items-center">
          <div className=" max-[360px]:hidden  w-[180px] h-[180px]  bg-[#efebeb] flex items-center justify-center">
            <img src={imgUrl} className="w-[180px] h-[180px] " />
          </div>

          <img
            src={imgUrl}
            className=" hidden max-[360px]:block w-[120px] h-[120px] "
          />
          <div className=" max-[360px]:hidden  w-[350px] flex flex-col gap-2 ">
            <p className="max-[360px]:hidden">
              <b>{productName}</b>
            </p>
            <p className="max-[360px]:hidden">
              Hello! I am Mubashir Hussain from Islamabad. I am learning Web
              Development and also wanna improve my English Language.
            </p>
            <p className="max-[360px]:hidden" style={{ fontWeight: "700" }}>
              {productPrice}
            </p>
          </div>
        </div>

        <div
          className=" max-[360px]:hidden
       flex flex-col gap-2"
        >
          <b>Quantity</b>
          <div className=" flex ">
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
        <div className=" max-[360px]:hidden  flex flex-col gap-[10px]">
          <b>Totall Price</b>
          <p>${subtotal}</p>
        </div>
        <FontAwesomeIcon className="max-[360px]:hidden" icon={faTimes} />
      </div> */}
      {/* max-[360px]:justify-center */}

      {/* <div className=" bg-[#f5f2f2] w-[900px] h-[270px] max-[360px]:w-[300px] max-[360px]:h-[250px] m-auto  p-[40px] max-[360px]:p-0 max-[360px]:m-[14px]"> */}
      <div className="bg-[#f5f2f2] min-[360px]:max-w-[900px] mx-auto p-5 min-[360px]:p-6 max-[360px]:m-4 mb-10 flex-start  ">
        <FontAwesomeIcon className=" top-0 right-0 cursor-pointer " icon={faTimes} onClick={()=>removeCart(id)}/>

        <div className="flex justify-between max-[360px]:flex-col max-[360px]:items-center min-[360px]:p-6  z-[10]  ">
          <div className=" w-[180px] h-[180px] min-[360px]:w-[120px] min-[360px]:h-[120px] bg-[#efebeb] flex items-center justify-center">
            <img
              src={imgUrl}
              className="w-[180px] h-[180px] object-cover min-[360px]:w-[140px] min-[360px]:h-[140px]"
            ></img>
          </div>

          <div className=" flex flex-col gap-2">
            <h3 className="font-semibold">{productName}</h3>
            <p className="">{productPrice}</p>
          </div>
          <div className=" flex flex-col max-[360px]:flex-row gap-2 items-center">
            <b>Quantity</b>
            <div className=" ">
              <button className="p-[5px]" onClick={() => decreaseItem(id)}>
                -
              </button>
              <input
                className=" w-[50px] h-[30px] mx-[5px] outline-none text-center"
                value={cartItem[id]}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              />
              <button className="p-[5px]" onClick={() => increaseItem(id)}>
                +
              </button>
            </div>
          </div>

          <div className="max-[360px]:flex gap-6 ">
            <h3 className="font-semibold">Totall Amount :</h3>
            <p>${subtotal}</p>
          </div>
        
      </div>

      </div>
    </>
  );
};

export default CartItemCard;
