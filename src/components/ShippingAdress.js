import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const ShippingAdress = () => {
  return (
    <>
    
      <div className="">
        <form className=" p-[20px] min-[360]:max-w-[550px] bg-[#f5f2f2] rounded-xl">
          <h1 className="text-2xl font-semibold">Shippping Adress</h1>

          <div className=" pt-[20px] flex flex-wrap flex-col  gap-6">
            <div className=" flex items-center flex-wrap  gap-6">
              <input
                className=" flex-1 min-w-[200px] h-[30px] p-4 border-2 border-gray-400  rounded bg-transparent  outline-none"
                placeholder="First Name *"
              />
              <input
                className=" flex-1 min-w-[200px] h-[30px] border-2 border-gray-400 rounded bg-transparent p-4 outline-none"
                placeholder="Last Name *"
              />
            </div>

            <input
              className = "w-full max-[360px]:max-w-[200px] p-[5px] border-2 border-gray-400 rounded outline-none bg-transparent"
              placeholder="City"
            />

            <div className=" flex flex-wrap gap-6">
              <input
                className="flex-1 min-w-[200px] h-[30px] border-2 border-gray-400  rounded bg-transparent p-4 outline-none"
                placeholder="State *"
              />
              <input
                className="flex-1 min-w-[200px] h-[30px] border-2 border-gray-400  rounded bg-transparent p-4 outline-none"
                placeholder="Zip Code *"
              />
            </div>

            <input
              className=" max-[360px]:max-w-[100%]  border-2 border-gray-400  rounded outline-none bg-transparent p-[5px] "
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
