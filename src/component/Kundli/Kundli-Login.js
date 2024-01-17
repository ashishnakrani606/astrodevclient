import React from "react";
import Book from "./../../assets/image/brihat-book.png";
import Image from "next/image";

const kundlilogin = (props) => {
  return (
    <>
      <div className={`md:max-w-[400px] w-full ${props.className}`}>
        <h3 className="text-[##454545] text-lg font-bold text-start mb-[14px]">
          {props.title}
        </h3>
        <div className="pt-4 px-3 shadow-box-shadow pb-4 rounded-lg flex flex-col items-center justify-center lg:min-h-[321px] min-h-[300px]">
          <p className="text-[#616161] sm:text-base text-sm font-normal ">
            Please login to check your saved kundli!
          </p>
          <button className="inline-block rounded text-[#787887] border py-2 px-[10px] mt-4 text-xs sm:text-[13px] font-normal">
            Login
          </button>
        </div>
        <div className="flex bg-[#E0D1F0] sm:gap-3 pt-4 pb-5 mt-[13px] rounded-lg items-center max-w-[424px]">
          <Image src={Book} alt="" />
          <div className="pl-2 text-start">
            <h2 className="text-[19px] text-[#1E1E28] font-bold">
              Buy Detailed Kundli
            </h2>
            <span className="text-[#1E1E28] text-[15px] font-bold pt-[6px]">
              @ Rs. 399/-
            </span>
            <div className="bg-[#9966CC] cursor-pointer text-white py-[9px] shadow-shadow-btn px-6 text-sm text-center mt-[13px] hover:bg-[#ad7be0] transition-all duration-700 rounded-[3px] max-w-[125px]">
              <button>BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default kundlilogin;
