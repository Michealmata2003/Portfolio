import React from "react";
import { picture3 } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-2/3 flex justify-end items-end relative">
      <div className="relative">
        <div className="absolute top-5 left-5 w-[300px] h-[380px] lgl:w-[380px] lgl:h-[400px] dark:bg-[#202226] bg-gray-200 rounded-2xl shadow-lg"></div>
        <img
          className="relative z-10 w-[300px] h-[380px] lgl:w-[400px] lgl:h-[400px] object-cover rounded-2xl"
          src={picture3}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default RightBanner;
