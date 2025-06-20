import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SuccessMsg = () => {
  const navigate = useNavigate();

  const homePage = () => {
    navigate("/homepage");
  };
  return (
    <div className="w-[100% ] h-[100vh] flex items-center justify-center bg-[linear-gradient(135deg,_#bfd2e3,_#e8dad3,_#f4d3c0)]">
      <div className="  w-[1100px] h-[600px] bg-white rounded-[15px] ">
        <div className=" m-[20px] h-[450px] flex flex-col items-center justify-between ">
          <div className="w-[100px] h-[100px] bg-[#9c786c] flex items-center justify-center rounded-[50%] ">
            <FontAwesomeIcon
              className="text-[50px] text-white"
              icon={faCheck}
            />
          </div>

          <h1 className=" text-4xl font-semibold">
            Registration Completed Successfully
          </h1>

          <p className="w-[1000px]">
            "Thank you for registering with us! Your account is now active, and
            you're all set to explore everything we have to offer. Let's get
            started on something amazing together! We're excited to have you
            onboard. From here on, it's all about new experiences, smarter
            solutions, and a smoother journey. Get ready to unlock features
            designed just for you!"
          </p>

          <button className="button" onClick={homePage}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMsg;
