"use client";
import React, { useState } from "react";
import Pdf from "./../../assets/icon/pdficon.svg";
import Right from "./../../assets/icon/rightSymbol.svg";
import Print from "./../../assets/icon/printed.svg";
import LoginIcon from "./../../assets/icon/login-icon.svg";
import BackArrow from "./../../assets/icon/backarrow.svg";
import Link from "next/link";
import Image from "next/image";

const Order = () => {
  const [ordernow, setOrderNow] = useState(false);

  const OrderNowToggle = () => {
    setOrderNow(!ordernow);
  };

  const [paynow, setPayNow] = useState(false);
  const PayNowToggle = () => {
    setPayNow(!paynow);
  };

  return (
    <div className="container">
      <>
        {!ordernow ? (
          <div className="flex sm:flex-row flex-col lg:gap-10 md:gap-8 gap-6 lgm:pb-20 lgm:py-16 md:py-12 py-8 justify-center">
            <div className="border sm:max-w-[593px] w-full border-[#DCE7ED] rounded-3xl md:p-8 p-4 flex lg:min-h-[693px] ">
              <div className="flex flex-col justify-between">
                <div>
                  <Image
                    src={Pdf}
                    alt=""
                    className="md:max-w-full max-w-[40px]"
                  />
                  <h3 className="md:text-3xl text-xl font-bold md:pt-8 md:pb-7 py-4">
                    PDF Only
                  </h3>
                  <p>
                    Convenience meets technology. Get your detailed Kundli as a
                    comprehensive, user-friendly PDF. Access it anytime,
                    anywhere, and leverage the insights for a better life.
                  </p>
                  <h4 className="lg:text-[56px] md:text-4xl text-3xl font-semibold md:pt-6 pt-3 md:pb-10 pb-6">
                    ₹399
                  </h4>
                  <div className="flex gap-6">
                    <Image src={Right} alt="" />
                    <p>Environment-Friendly</p>
                  </div>
                  <div className="flex gap-6 pt-4">
                    <Image src={Right} alt="" />
                    <p>Easily Shareable</p>
                  </div>
                </div>
                <div>
                  <button
                    className="md:text-[22px] font-medium bg-[#9966CC] block w-full rounded-[10px] md:py-4 py-3 text-white mt-6 cursor-pointer"
                    onClick={OrderNowToggle}
                  >
                    {" "}
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="border sm:max-w-[593px] w-full border-[#DCE7ED] rounded-3xl md:p-8 p-4 flex">
              <div className="flex justify-between flex-col">
                <div>
                  <Image
                    src={Print}
                    alt=""
                    className="md:max-w-full max-w-[40px]"
                  />
                  <h3 className="md:text-3xl text-xl font-bold md:pt-8 md:pb-7 py-4">
                    Printed
                  </h3>
                  <p>
                    Hold your future in your hands. Receive a professionally
                    printed Kundli that you can touch, feel, and refer to in a
                    physical format. Ideal for personal archiving and gifting.
                  </p>
                  <h4 className="lg:text-[56px] md:text-4xl text-3xl font-semibold md:pt-6 pt-3 md:pb-10 pb-6">
                    ₹999
                  </h4>
                  <div className="flex gap-6">
                    <Image src={Right} alt="" className="" />
                    <p>Tangible Copy</p>
                  </div>
                  <div className="flex gap-6 pt-4">
                    <Image src={Right} alt="" />
                    <p>High-Quality Print</p>
                  </div>
                  <div className="flex gap-6 pt-4">
                    <Image src={Right} alt="" />
                    <p>Perfect for Gifting</p>
                  </div>
                </div>
                <button
                  className="md:text-[22px] font-medium bg-[#00F076] block w-full rounded-[10px] md:py-4 py-3 text-[#313131] mt-6 cursor-pointer"
                  onClick={OrderNowToggle}
                >
                  {" "}
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
      {!paynow ? (
        <>
          {ordernow ? (
            <div className="lg:pb-20 md:py-10 py-8">
              <div className="xl:min-h-[693px] flex items-center">
                <div className="bg-white max-w-[400px] mx-auto w-full p-6 pb-4 shadow-login-shadow rounded-xl">
                  <div className="text-center">
                    <div
                      className={`border-[#EAECF0] border inline-block p-[14px] rounded-[10px]`}
                    >
                      <Image src={LoginIcon} alt="" className="mx-auto" />
                    </div>
                    <h2 className="text-primary-black font-bold text-lg md:pt-4 pt-2 pb-1">
                      Log in to your account
                    </h2>
                    <h3 className="text-[#444444] xsm:text-sm text-xs">
                      Welcome back! Please enter your details.
                    </h3>
                  </div>
                  <div className="pt-5">
                    <label htmlFor="" className="block mb-[6px] text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      autocomplete="off"
                      placeholder="Enter your email"
                      className="border block border-[#D0D5DD] placeholder:text-[#999999] w-full rounded-lg py-[10px] px-[14px]"
                    />
                    <label
                      htmlFor=""
                      className="block mb-[6px] text-sm md:mt-4 mt-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border block border-[#D0D5DD] text-[#999999] w-full rounded-lg py-[10px] px-[14px]"
                      autocomplete="off"
                      placeholder="••••••••"
                    />
                    <div className="flex justify-between mt-5 gap-1">
                      <div className="flex text-sm items-center md:gap-2 gap-1 relative">
                        <input
                          type="checkbox"
                          id="styled-checkbox-1"
                          value="value1"
                          className="styled-checkbox absolute opacity-0 border border-[#D0D5DD] placeholder:text-[#999999] rounded-lg py-[10px] px-[14px] w-4 h-4"
                        />
                        <label
                          for="styled-checkbox-1"
                          className="before:border before:rounded"
                        >
                          Remember for 30 days
                        </label>
                      </div>
                      <div>
                        <Link
                          href={"#0"}
                          className="text-primary-orange text-sm font-semibold"
                        >
                          Forgot password
                        </Link>
                      </div>
                    </div>
                    <div
                      className="bg-primary-orange text-white text-center font-medium p-[10px] rounded-lg md:mt-8 mt-5 mb-3 cursor-pointer"
                      onClick={PayNowToggle}
                    >
                      <button>Confirm</button>
                    </div>
                    <div
                      className="text-[#444444] border border-[#D0D5DD] text-center font-medium p-[10px] rounded-lg mt-3"
                      onClick={OrderNowToggle}
                    >
                      <button>Cancel</button>
                    </div>
                    <div className="flex justify-between gap-2 pt-5 items-center text-sm font-medium">
                      <Link href="#0" className="text-primary-orange">
                        Log in using Phone number
                      </Link>
                      <div className="text-center sm:text-sm text-xs">
                        or{" "}
                        <Link href="#0" className="text-primary-orange">
                          Sign up
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
      {paynow ? (
        <div className="lg:pb-20 md:py-10 py-8">
          <div className="border border-[#DCE7ED] rounded-3xl max-w-[965px] w-full mx-auto">
            <div className="md:px-9 md:pt-7 p-3 pb-0">
              <span className=" cursor-pointer " onClick={PayNowToggle}>
                <Image
                  src={BackArrow}
                  alt=""
                  className="mr-4 p-[2px] inline-block"
                />
                Back
              </span>
            </div>
            <div className="md:py-6 py-3 lg:px-[78px] md:px-12 px-3">
              <h2 className="md:text-[33px] text-2xl font-bold md:pb-8 pb-6">
                Your birth details
              </h2>
              <div className="p-[15px] shadow-box-shadow md:pb-14 pb-4 rounded-[10px] text-black lgm:text-base text-sm ">
                <div className="flex flex-col">
                  <label className="text-start font-normal text-xs sm:text-sm lgm:text-base">
                    Name
                    <span className="text-primary-orange -ml-[2px]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="placeholder:text-[#757575] mt-1 border border-[#CCCCCC] text-[#000000DE] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 text-sm placeholder:text-sm"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label className="text-start font-normal text-xs sm:text-sm lg:text-base">
                    Gender
                    <span className="text-primary-orange -ml-[2px]">*</span>
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
                    <span className="absolute md:top-7 top-6 pointer-events-none sm:w-[10px] w-[7px] sm:h-[4px] h-[4px] lg:right-4 sm:right-3 right-2 bg-[#000000] opacity-[0.5]"></span>
                  </div>
                </div>
                <div className="flex mt-4 sm:gap-4 lg:gap-6 gap-2 whitespace-nowrap">
                  <div className="flex flex-col max-w-[245px] w-full">
                    <label className="text-start text-xs sm:text-sm lgm:text-base">
                      Birth Day
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
                    <label className="text-start text-xs sm:text-sm lgm:text-base">
                      Birth Month
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
                    <label className="text-start text-xs sm:text-sm lgm:text-base">
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
                <div className="flex mt-4 sm:gap-4 lgm:gap-6 gap-2 whitespace-nowrap">
                  <div className="flex flex-col max-w-[245px] w-full">
                    <label className="text-start text-xs sm:text-sm lgm:text-base">
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
                    <label className="text-start text-xs sm:text-sm lgm:text-base">
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
                    <label className="text-start text-xs sm:text-sm lgm:text-base">
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
                <div className="flex flex-col sm:my-4 mt-4">
                  <label className="text-start font-normal text-xs sm:text-sm lgm:text-base">
                    Birth Place{" "}
                    <span className="text-primary-orange -ml-[2px]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your birth place"
                    className="mt-1 border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] pl-3 pr-7 placeholder:text-[#6C757D] text-sm placeholder:text-sm"
                  />
                </div>
              </div>
              <button className="bg-[#00F076] text-[#313131] md:py-[22px] py-2 block rounded-[10px] w-full md:text-[22px] text-base font-medium md:mt-[26px] mt-4">
                PAY NOW
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Order;
