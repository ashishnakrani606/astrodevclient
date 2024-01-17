import React from "react";
import Book from "./../../assets/image/brihat-book.png";
import Astrologerads from "./../../assets/image/astrologer-live.png";
import Image from "next/image";

const Kundali = () => {
  return (
    <>
      <div className="container">
        <div className="flex gap-x-5 md:py-7 py-6 lg:flex-row flex-col gap-y-6">
          <div className="lg:max-w-[900px] w-full">
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-y-[60px] md:gap-y-8 gap-y-5">
              <div className="border rounded-[22px]">
                <div>
                  <h2 className="border-b border-[#E7E7E7] md:text-[28px] text-xl text-center text-[#584F47] md:py-3 py-2">
                    Kundli / Birth Chart
                  </h2>
                  <div className="px-2 pt-[10px] md:mb-7 mb-4">
                    <h3 className="text-[15px] font-bold text-black">
                      Enter Birth Details
                    </h3>
                    <input
                      type="text"
                      placeholder="Name"
                      className="border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 placeholder:text-[#999999] text-sm placeholder:text-sm"
                    />
                    <select
                      name="gender"
                      id="gender"
                      className="border cursor-pointer border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 text-sm placeholder:text-sm placeholder:text-[#999999]"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <div className="flex justify-between gap-2">
                      <input
                        type="number"
                        defaultValue={"24"}
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-black-light text-sm placeholder:text-sm"
                      />
                      <input
                        type="number"
                        defaultValue="6"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-black-light text-sm placeholder:text-sm"
                      />
                      <input
                        type="number"
                        defaultValue="2023"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-black-light text-sm placeholder:text-sm"
                      />
                    </div>
                    <div className="flex justify-between gap-2">
                      <input
                        type="number"
                        defaultValue="11"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-sm placeholder:text-sm"
                      />
                      <input
                        type="number"
                        defaultValue="17"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-sm placeholder:text-sm"
                      />
                      <input
                        type="number"
                        defaultValue="55"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-sm placeholder:text-sm"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Birth place"
                      className="border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 placeholder:text-[#999999] text-sm placeholder:text-sm"
                    />

                    <div className="text-center md:mt-7 mt-3">
                      <button className="bg-primary-orange md:py-[9px] py-2 px-4 text-white rounded-[3px] text-sm hover:bg-opacity-90 transition-all duration-700">
                        GET KUNDLI
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-[22px]">
                <div>
                  <h2 className="border-b border-[#E7E7E7] md:text-[28px] text-xl text-center text-[#584F47] md:py-3 py-2">
                    Gemstone Suggestion
                  </h2>
                  <div className="px-2 pt-[10px] md:mb-7 mb-4">
                    <h3 className="text-[15px] font-bold text-black">
                      Enter Birth Details
                    </h3>
                    <input
                      type="text"
                      placeholder="Name"
                      className="border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 placeholder:text-[#999999] text-sm placeholder:text-sm"
                    />
                    <select
                      name="gender"
                      id="gender"
                      className="border cursor-pointer border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 text-sm placeholder:text-sm placeholder:text-[#999999]"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <div className="flex justify-between gap-2">
                      <input
                        type="number"
                        defaultValue={"24"}
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-black-light text-sm placeholder:text-sm"
                      />
                      <input
                        type="number"
                        defaultValue="6"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-black-light text-sm placeholder:text-sm"
                      />
                      <input
                        type="number"
                        defaultValue="2023"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-black-light text-sm placeholder:text-sm"
                      />
                    </div>
                    <div className="flex justify-between gap-2">
                      <input
                        type="number"
                        defaultValue="11"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-sm placeholder:text-sm"
                      />
                      <input
                        type="number"
                        defaultValue="17"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-sm placeholder:text-sm"
                      />
                      <input
                        type="number"
                        defaultValue="55"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-sm placeholder:text-sm"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Birth place"
                      className="border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 placeholder:text-[#999999] text-sm placeholder:text-sm"
                    />

                    <div className="text-center md:mt-7 mt-3">
                      <button className="bg-primary-orange md:py-[9px] py-2 px-4 text-white rounded-[3px] text-sm hover:bg-opacity-90 transition-all duration-700">
                        GET SUGGESTION
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-[22px]">
                <div>
                  <h2 className="border-b border-[#E7E7E7] md:text-[28px] text-xl text-center text-[#584F47] md:py-3 py-2">
                    Kundli Matching
                  </h2>
                  <div className="px-2 pt-[10px] md:mb-7 mb-4">
                    <h3 className="text-[15px] font-bold text-black">
                      {" Enter Boy's Details"}
                    </h3>
                    <input
                      type="text"
                      placeholder="Name"
                      className="border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 placeholder:text-[#999999] text-sm placeholder:text-sm"
                    />

                    <div className="flex justify-between gap-2">
                      <input
                        type="number"
                        defaultValue={"24"}
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-black-light text-sm placeholder:text-sm"
                      />
                      <input
                        type="number"
                        defaultValue="6"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-black-light text-sm placeholder:text-sm"
                      />
                      <input
                        type="number"
                        defaultValue="2023"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-black-light text-sm placeholder:text-sm"
                      />
                    </div>
                    <div className="flex justify-between gap-2">
                      <input
                        type="number"
                        defaultValue="11"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-sm placeholder:text-sm"
                      />
                      <input
                        type="number"
                        defaultValue="17"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-sm placeholder:text-sm"
                      />
                      <input
                        type="number"
                        defaultValue="55"
                        className="border border-[#CCCCCC] block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 md:max-w-[129px] w-full text-sm placeholder:text-sm"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Birth place"
                      className="border border-[#CCCCCC] w-full block rounded md:py-[7px] py-[6px] md:px-4 px-3 md:mt-3 mt-2 placeholder:text-[#999999] text-sm placeholder:text-sm"
                    />
                    <p className="text-center md:pt-6 pt-3 text-[15px] text-black font-bold">
                      {"Enter girl's detail on next page"}
                    </p>
                    <div className="text-center md:mt-7 mt-3">
                      <button className="bg-primary-orange md:py-[9px] py-2 px-4 text-white rounded-[3px] text-sm hover:bg-opacity-90 transition-all duration-700">
                        CONTINUE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border rounded-[22px]">
                <div>
                  <h2 className="border-b border-[#E7E7E7] md:text-[28px] text-xl text-center text-[#584F47] md:py-3 py-2">
                    Panchang today
                  </h2>
                  <div className="pt-[10px] md:mb-7 mb-4 text-center text-sm">
                    <h3 className="pb-3 text-[15px] font-bold text-black border-b">
                      New Delhi, India (24 June, 2023)
                    </h3>
                    <div className="border-b">
                      <p className="text-[#444444] pt-3 pb-[14px]">
                        <strong>Tithi:</strong> Shukla{" "}
                        <span className="text-[#B92204] underline underline-offset-2">
                          Shashti
                        </span>{" "}
                        upto 22:19:13
                      </p>
                      <p className="text-[#444444] pb-2">
                        <strong>Month Amanta:</strong> Ashadha{" "}
                      </p>
                      <p className="text-[#444444] pb-2">
                        <strong>Month Purnimanta:</strong> Ashadha{" "}
                      </p>
                      <p className="text-[#444444] pb-2">
                        <strong>Day: </strong>Shanivara |{" "}
                        <strong>Samvat: </strong>2080
                      </p>
                    </div>
                    <div className="border-b">
                      <p className="text-[#444444] pt-3 pb-2">
                        <strong>Nakshatra:</strong>{" "}
                        <span className="text-[#B92204] underline underline-offset-2">
                          Magha
                        </span>{" "}
                        upto 07:19:19
                      </p>
                      <p className="text-[#444444] pb-2">
                        <strong>Yoga: </strong>{" "}
                        <span className="text-[#B92204] underline underline-offset-2">
                          Siddhi
                        </span>{" "}
                        upto Full Night
                      </p>
                      <p className="text-[#444444] pb-2">
                        <strong>Karan: </strong>{" "}
                        <span className="text-[#B92204] underline underline-offset-2">
                          Kolav{" "}
                        </span>{" "}
                        upto 09:08:39, <strong>Tetil</strong> upto 22:19:13{" "}
                      </p>
                    </div>
                    <div className="text-center md:mt-7 mt-3">
                      <button className="bg-primary-orange md:py-[9px] py-2 px-4 text-white rounded-[3px] text-sm transition-all duration-700 hover:bg-opacity-90">
                        TODAY PANCHANG
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[336px] w-full lg:block hidden">
            <div className="flex bg-[#E0D1F0] justify-between items-start py-2">
              <div className="pl-2">
                <h2 className="text-[19px] text-[#1E1E28] font-bold pt-2">
                  Buy Detailed Horoscope
                </h2>
                <span className="text-[#1E1E28] text-[15px] font-bold pt-[6px]">
                  @ <del> Rs 799/-</del> Rs. 399/-
                </span>
                <div className="bg-[#9966CC] text-white py-[9px] shadow-shadow-btn px-6 text-sm text-center mt-4 hover:bg-[#ad7be0] transition-all duration-700 rounded-[3px] max-w-[125px]">
                  <button> BUY NOW</button>
                </div>
              </div>
              <Image src={Book} alt="" />
            </div>
            <div className="mt-6   bg-yellow-gradient text-center">
              <div className="px-3 pt-12">
                <h2 className="text-4xl font-black text-[#F13900] leading-[46.5px]">
                  LIVE CHAT <br></br>WITH ASTROLOGERS
                </h2>
                <p className="text-[22px] font-bold pt-3">
                  Ask Questions, Get Answers.
                </p>
                <div className="pt-10">
                  <Image src={Astrologerads} alt="" className="mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kundali;
