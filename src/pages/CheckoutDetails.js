import React from "react";
import ShippingAdress from "../components/ShippingAdress";
import PaymentMethod from "../components/PaymentMethod";
const CheckoutDetails = () => {
  return (
    <>
      <h1 className=" text-center text-4xl font-semibold mt-6">
        Shipping & Payment Details
      </h1>
      <div className="flex">
        <ShippingAdress />
        <PaymentMethod />
      </div>
    </>
  );
};

export default CheckoutDetails;
