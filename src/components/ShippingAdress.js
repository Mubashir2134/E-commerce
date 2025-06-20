import React from "react";

const ShippingAdress = () => {
  return (
    <>
      <div className=" w-[100%] flex justify-between py-[70px] px-[40px]">
        <form className=" p-[20px] w-[550px] bg-[#f5f2f2] rounded-xl">
          <h1 className="text-2xl font-semibold">Shippping Adress</h1>

          <div className=" pt-[20px] flex flex-col gap-5">
            <div className=" flex items-center justify-between">
              <input
                className=" w-[230px] h-[30px] p-4 border-2 border-gray-400  rounded bg-transparent  outline-none"
                placeholder="First Name *"
              />
              <input
                className=" w-[230px] h-[30px] border-2 border-gray-400 rounded bg-transparent p-[5px] outline-none"
                placeholder="Last Name *"
              />
            </div>

            <input
              className=" w-[100%]  p-[5px] border-2 border-gray-400 rounded outline-none bg-transparent"
              placeholder="City"
            />

            <div className=" flex justify-between">
              <input
                className="w-[230px] h-[30px] border-2 border-gray-400  rounded bg-transparent p-[5px] outline-none"
                placeholder="State *"
              />
              <input
                className="w-[230px] h-[30px] border-2 border-gray-400  rounded bg-transparent p-[5px] outline-none"
                placeholder="Zip Code *"
              />
            </div>

            <input
              className=" w-[100%]  border-2 border-gray-400  rounded outline-none bg-transparent p-[5px] "
              placeholder="Phone *"
            />

            <textarea
              className=" w-[100%] h-[150px] border-2 border-gray-400 rounded outline-none bg-transparent p-[5px]"
              placeholder="Description"
              type="text"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ShippingAdress;
