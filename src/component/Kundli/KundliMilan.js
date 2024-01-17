import React from "react";
import Kundlilogin from "./Kundli-Login";
import Link from "next/link";

const kundliMilan = () => {
  return (
    <div className="max-w-[1380px] px-4 mx-auto">
      <div className="flex gap-6 text-center mb-[18px] min-h[475px] h-full lg:flex-row sm:flex-col flex-col justify-center items-center pt-8">
        {/* left side section start  */}
        <div className="w-full">
          <h2 className="font-bold sm:text-[22px] text-lg text-center mb-[14px] text-[#454545]">
            Kundli Matching / Kundli Milan
          </h2>
          <div className="flex xsm:flex-row flex-col sm:gap-6 gap-3 gap-y-6">
            <div className="p-[15px] shadow-box-shadow pb-4 rounded-lg lg:max-w-[450px] w-full text-black lgm:text-base text-sm">
              <h3 className="text-white font-semibold bg-purple-gradient rounded-[9px] py-2 mb-[18px]">
                {"Boy's Detail"}
              </h3>
              <div className="flex flex-col">
                <label className="text-start font-normal text-xs sm:text-sm lgm:text-base">
                  Name{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="placeholder:text-[#757575] mt-1 border border-[#CCCCCC] text-[#000000DE] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-sm placeholder:text-sm"
                />
              </div>
              <div className="flex mt-4 sm:gap-4 lg:gap-6 gap-2 whitespace-nowrap">
                <div className="flex flex-col max-w-[245px] w-full">
                  <label className="text-start text-xs sm:text-sm lgm:text-base">
                    Birth Day
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      defaultValue={1}
                      className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                    />
                    <span className="absolute top-5 sm:w-[10px] w-[7px] sm:h-[4px] h-[4px] lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                  </div>
                </div>
                <div className="flex flex-col max-w-[245px] w-full">
                  <label className="text-start text-xs sm:text-sm lgm:text-base">
                    Birth Month
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue={"jan"}
                      className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                    />
                    <span className="absolute top-5 sm:w-[10px] w-[7px] sm:h-[4px] h-[4px] lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                  </div>
                </div>
                <div className="flex flex-col max-w-[245px] w-full">
                  <label className="text-start text-xs sm:text-sm lgm:text-base">
                    Birth Year
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      defaultValue={1990}
                      className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                    />
                    <span className="absolute top-5 sm:w-[10px] w-[7px] sm:h-[4px] h-[4px] lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                  </div>
                </div>
              </div>
              <div className="flex mt-4 sm:gap-4 lgm:gap-6 gap-2 whitespace-nowrap">
                <div className="flex flex-col max-w-[245px] w-full">
                  <label className="text-start text-xs sm:text-sm lgm:text-base">
                    Birth Hour
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      defaultValue={1}
                      className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                    />
                    <span className="absolute top-5 sm:w-[10px] w-[7px] sm:h-[4px] h-[4px] lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                  </div>
                </div>
                <div className="flex flex-col max-w-[245px] w-full">
                  <label className="text-start text-xs sm:text-sm lgm:text-base">
                    Birth Minute
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      defaultValue={1}
                      className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                    />
                    <span className="absolute top-5 sm:w-[10px] w-2 sm:h-[4px] h-1 lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                  </div>
                </div>
                <div className="flex flex-col max-w-[245px] w-full">
                  <label className="text-start text-xs sm:text-sm lgm:text-base">
                    Birth Second{" "}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      // placeholder="10"
                      defaultValue={0}
                      className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                    />
                    <span className="absolute top-5 sm:w-[10px] w-[7px] sm:h-[4px] h-[4px] lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:my-4 mt-4">
                <label className="text-start font-normal text-xs sm:text-sm lgm:text-base">
                  Birth Place{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter your birth place"
                  defaultValue={"New Delhi, Delhi, India"}
                  className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 placeholder:text-[#6C757D] text-sm placeholder:text-sm"
                />
              </div>
            </div>

            <div className="p-[15px] shadow-box-shadow pb-4 rounded-lg lg:max-w-[450px] w-full text-black">
              <h3 className="text-white font-semibold bg-pink-gradient rounded-[9px] py-2 mb-[18px]">
                {"Girl's Detail"}
              </h3>
              <div className="flex flex-col">
                <label className="text-start font-normal text-xs sm:text-sm lgm:text-base">
                  Name{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="placeholder:text-[#757575] mt-1 border border-[#CCCCCC] text-[#000000DE] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-sm placeholder:text-sm"
                />
              </div>
              <div className="flex mt-4 sm:gap-4 lg:gap-6 gap-2 whitespace-nowrap">
                <div className="flex flex-col max-w-[245px] w-full">
                  <label className="text-start text-xs sm:text-sm lgm:text-base">
                    Birth Day
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      defaultValue={1}
                      className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                    />
                    <span className="absolute top-5 sm:w-[10px] w-[7px] sm:h-[4px] h-[4px] lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                  </div>
                </div>
                <div className="flex flex-col max-w-[245px] w-full">
                  <label className="text-start text-xs sm:text-sm lgm:text-base">
                    Birth Month
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue={"jan"}
                      className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                    />
                    <span className="absolute top-5 sm:w-[10px] w-[7px] sm:h-[4px] h-[4px] lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                  </div>
                </div>
                <div className="flex flex-col max-w-[245px] w-full">
                  <label className="text-start text-xs sm:text-sm lgm:text-base">
                    Birth Year
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      defaultValue={1992}
                      className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                    />
                    <span className="absolute top-5 sm:w-[10px] w-[7px] sm:h-[4px] h-[4px] lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                  </div>
                </div>
              </div>
              <div className="flex mt-4 sm:gap-4 lgm:gap-6 gap-2 whitespace-nowrap">
                <div className="flex flex-col max-w-[245px] w-full">
                  <label className="text-start text-xs sm:text-sm lgm:text-base">
                    Birth Hour
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      defaultValue={1}
                      className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                    />
                    <span className="absolute top-5 sm:w-[10px] w-[7px] sm:h-[4px] h-[4px] lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                  </div>
                </div>
                <div className="flex flex-col max-w-[245px] w-full">
                  <label className="text-start text-xs sm:text-sm lgm:text-base">
                    Birth Minute
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      defaultValue={1}
                      className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                    />
                    <span className="absolute top-5 sm:w-[10px] w-2 sm:h-[4px] h-1 lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                  </div>
                </div>
                <div className="flex flex-col max-w-[245px] w-full">
                  <label className="text-start text-xs sm:text-sm lgm:text-base">
                    Birth Second{" "}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      // placeholder="10"
                      defaultValue={0}
                      className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                    />
                    <span className="absolute top-5 sm:w-[10px] w-[7px] sm:h-[4px] h-[4px] lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:my-4 mt-4">
                <label className="text-start font-normal text-xs sm:text-sm lgm:text-base">
                  Birth Place{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter your birth place"
                  defaultValue={"New Delhi, Delhi, India"}
                  className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 placeholder:text-[#6C757D] text-sm placeholder:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="px-4">
            <Link
              href={"#0"}
              className="hover:bg-[#f96d42] transition-all duration-700 block  bg-primary-orange w-full py-2 font-normal text-white mt-5  px-4 rounded-[10px]"
            >
              Match Kundli
            </Link>
          </div>
        </div>
        {/* left side section end  */}
        <Kundlilogin
          title={"Auto-Save all Kundlis. Login now."}
          className={"lgm:!max-w-[400px] lg:!max-w-[330px] !max-w-full"}
        />
      </div>
    </div>
  );
};

export default kundliMilan;
