import React from "react";
import Kundlilogin from "./Kundli-Login";

const getkundli = (props) => {
  return (
    <div className="container">
      <div className="flex gap-6 text-center mb-[18px] min-h[475px] h-full md:flex-row sm:flex-col flex-col justify-center pt-3">
        {/* left side section start  */}
        <div className="max-w-[806px] w-full">
          <h3 className="font-bold sm:text-[22px] text-lg text-center mb-[14px] text-[#454545]">
            {props.title}            
          </h3>
          <div className="pt-[15px] px-3 shadow-box-shadow pb-[13px] rounded-lg text-[#212529]">
            <div className="flex flex-col">
              <label className="text-start font-normal text-xs sm:text-sm lg:text-base">
                Name <span className="text-primary-orange -ml-[2px]">*</span>{" "}
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="placeholder:text-[#6C757D] mt-1 border border-[#CCCCCC] text-[#000000DE] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-sm placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col mt-[15px]">
              <label className="text-start font-normal text-xs sm:text-sm lg:text-base">
                Gender <span className="text-primary-orange -ml-[2px]">*</span>
              </label>
              <div className="relative">
              <select
                name="gender"
                id="gender"
                className="appearance-none border cursor-pointer border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 text-sm placeholder:text-sm placeholder:text-[#999999]"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
                <span className='absolute md:top-7 top-6 pointer-events-none sm:w-[10px] w-[7px] sm:h-[4px] h-[4px] lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]'></span>
              </div>             
            </div>
            {props.location &&
            <div className="text-left pt-5 pb-[18px]">
              <span className="bg-[#51C979] text-[#313131] md:text-base text-sm rounded-[10px] py-1 block max-w-[336px] w-full md:px-5 text-center">{props.location}</span>
            </div>            
            }
            <div className="flex mt-[15px] sm:gap-4 lg:gap-6 gap-3">
              <div className="flex flex-col max-w-[245px] w-full">
                <label className="text-start text-xs sm:text-sm lg:text-base">
                  Birth Day{" "}
                  <span className="text-primary-orange -ml-[2px]">*</span>
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
                <label className="text-start text-xs sm:text-sm lg:text-base">
                  Birth Month{" "}
                  <span className="text-primary-orange -ml-[2px]">*</span>
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
                <label className="text-start text-xs sm:text-sm lg:text-base">
                  Birth Year
                  <span className="text-primary-orange -ml-[2px]">*</span>
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
            <div className="flex mt-[15px] sm:gap-4 lg:gap-6 gap-3">
              <div className="flex flex-col max-w-[245px] w-full">
                <label className="text-start text-xs sm:text-sm lg:text-base">
                  Birth Hour
                  <span className="text-primary-orange -ml-[2px]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    defaultValue={15}
                    className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                  />
                  <span className="absolute top-5 sm:w-[10px] w-[7px] sm:h-[4px] h-[4px] lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                </div>
              </div>
              <div className="flex flex-col max-w-[245px] w-full">
                <label className="text-start text-xs sm:text-sm lg:text-base">
                  Birth Minute
                  <span className="text-primary-orange -ml-[2px]">*</span>
                </label>
                <div className="relative">
                  <input                  
                    type="number"
                    defaultValue={22}
                    className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                  />
                  <span className="absolute top-5 sm:w-[10px] w-2 sm:h-[4px] h-1 lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                </div>
              </div>
              <div className="flex flex-col max-w-[245px] w-full">
                <label className="text-start text-xs sm:text-sm lg:text-base">
                  Birth Second
                </label>
                <div className="relative">
                  <input
                    type="number"
                    defaultValue={10}
                    className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-[#000000DE] text-sm placeholder:text-sm"
                  />
                  <span className="absolute top-5 sm:w-[10px] w-[7px] sm:h-[4px] h-[4px] lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[15px]">
              <label className="text-start font-normal text-xs sm:text-sm lg:text-base">
                Birth Place<span className="text-[#F15A2B]">*</span>{" "}
              </label>
              <input
                type="text"
                placeholder="Enter your birth place"
                className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 placeholder:text-[#6C757D] text-sm placeholder:text-sm"
              />
            </div>
            <button className="hover:bg-[#f96d42] transition-all duration-700 bg-primary-orange min-w-[199px] py-2 font-normal text-white mt-5 px-4 rounded-[10px]">
              {props.btn}
            </button>
          </div>
        </div>
        {/* left side section end  */}
        <Kundlilogin title={"Save your Kundli for free"} />
      </div>
    </div>
  );
};

export default getkundli;
