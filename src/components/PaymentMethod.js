import React from "react";

const PaymentMethod = () => {
  return (
    <div className=" w-[550px] h-[500px] p-[20px] bg-[#f5f2f2] rounded-xl">
      <div className=" flex flex-col items-center gap-5">
        <h1 className=" text-2xl font-semibold">Add Payment Method</h1>

        <div className=" flex w-[80%] items-center justify-between">
          <img className=" w-[50px] cursor-pointer" src="/Images/visa.png" />
          <img
            className="w-[70px] cursor-pointer"
            src="/Images/master card.png"
          />
          <img
            className=" w-[60px] h-[30px] cursor-pointer"
            src="/Images/discover.png"
          />
          <img
            className=" w[100px] h-[30px] cursor-pointer"
            src="/Images/paypal1.png"
          />
        </div>
      </div>

      <div className=" flex flex-col gap-5 mt-[20px]">
        <input
          className=" w-[100%]  border-2 border-gray-400  rounded outline-none bg-transparent p-[5px] "
          placeholder="Card Holder's Name *"
        />
        <input
          className=" w-[100%]  border-2 border-gray-400  rounded outline-none bg-transparent p-[5px] "
          placeholder="Card Number *"
        />

        <div className=" flex justify-between">
          <input
            className=" w-[230px] h-[30px] p-4 border-2 border-gray-400  rounded bg-transparent  outline-none"
            placeholder="Expiration Year *"
          />
          <input
            className=" w-[230px] h-[30px] p-4 border-2 border-gray-400  rounded bg-transparent  outline-none"
            placeholder="Expiration Month *"
          />
        </div>

        <input
          className=" w-[100%]  border-2 border-gray-400  rounded outline-none bg-transparent p-[5px] "
          placeholder="CVV *"
        />

        <button className=" mt-5 py-3 px-8 text-center text-white bg-[#5e3c2c] flex m-auto rounded-lg">
          CONFIRM PAYMENT
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
