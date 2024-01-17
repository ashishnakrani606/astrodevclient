"use client";
import React from "react";
import Offer from "../../src/component/content/Offer";
import Asttodev from "../../src/component/content/AstrodevApp";
import Floating from "../../src/component/Floating";
import Joinnewsletter from "../../src/component/Join-Newsletter";
import AccordianDetail from "../../src/component/contact/Accordian";

const contact = () => {
  return (
    <>
      <div className="container">
        <div className="lgm:pt-[174px] md:pt-[80px] py-8 lgm:pb-14 md:pb-12 max-w-[936px] w-full mx-auto text-center">
          <h1 className="lgm:text-[77px] md:text-5xl text-3xl font-bold text-[#121212] lgm:leading-[94px] pb-4">
            Help Center / Contact Us
          </h1>
          <p className="lg:text-[26px] md:text-[22px] text-base text-[#3F3B3B] max-w-[880px] w-full mx-auto leading-normal">
            Get in touch with us! We would love to hear from you and help answer
            any questions you may have about Becho
          </p>
        </div>
        <div className="lgm:py-20 lg:py-14 md:py-10 py-6 max-w-[518px] w-full mx-auto text-[#3E3E59]">
          <form>
            <div className="mb-5">
              <label
                for="Full name"
                className="w-full font-semibold md:text-base text-sm"
              >
                Full name
              </label>
              <input
                id="Full name"
                type="text"
                name=""
                placeholder="Your first name"
                className="md:px-5 px-3 md:py-[13px] py-2 md:mt-3 mt-2  border bg-transparent border-black400 placeholder:text-[#807E7E] md:placeholder:text-base placeholder:text-sm rounded-md text-base block w-full"
              />
            </div>
            <div className="mb-5">
              <label
                for="Full name"
                className="w-full font-semibold md:text-base text-sm"
              >
                Email address
              </label>
              <input
                id="email address"
                type="email"
                name=""
                placeholder="Your email address"
                className="md:px-5 px-3 md:py-[13px] md:mt-3 mt-2 py-2 border bg-transparent border-black400 placeholder:text-[#807E7E] md:placeholder:text-base placeholder:text-sm rounded-md text-base block w-full"
              />
            </div>
            <div className="mb-5">
              <label
                for="Full name"
                className="w-full font-semibold md:text-base text-sm"
              >
                Message
              </label>
              <textarea
                rows=""
                cols=""
                placeholder="Type your message"
                id="Full name"
                className="md:h-[180px] md:mt-3 mt-2 lg:h-[200px] h-[140px] md:px-5 px-3 md:py-[13px] py-2 border bg-transparent border-black400 placeholder:text-[#807E7E] md:placeholder:text-base placeholder:text-sm rounded-md text-base block w-full"
              ></textarea>
            </div>
            <div className="w-full">
              <button className="bg-[#121212] text-center py-3 text-white block rounded-lg sm:text-lg text-sm font-bold px-3 w-full">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#FAFAFB]">
        <div className="container">
          <div
            className={`grid lg:grid-cols-2 grid-cols lgm:py-[120px] lg:py-14 py-8 gap-5 items-center`}
          >
            <div className="w-full lg:max-w-[418px]">
              <h2 className="md:text-[40px] text-2xl font-bold mb-2 text-[#121212] leading-tight">
                Our mailing address
              </h2>
              <p className="text-[#3F3B3B] md:leading-[26px] leading-[22px]">
                {
                  " For any physical correspondence, please use the following address. We'd love to hear from you!"
                }
              </p>
            </div>
            <div className="w-full lg:max-w-[298px] ml-auto">
              <h4 className="text-lg text-[#212121] font-semibold">India</h4>
              <p className="mt-2 text-[#3F3B3B] md:leading-[26px] leading-[22px]">
                Plot No E-279, Industrial Area, Sector 75, Phase 8A, Mohali,
                160055
              </p>
            </div>
          </div>
        </div>
      </div>

      <Offer />
      <div className="container">
        <div className="max-w-[848px] mx-auto lg:pt-[105px] md:py-20 py-8 lg:pb-32">
          <h2 className="md:text-[40px] text-2xl font-bold">
            Frequently asked questions
          </h2>
          <div className="md:pt-12 pt-4">
            <AccordianDetail />      
          </div>
        </div>
      </div>
      <Asttodev />
      <Joinnewsletter />
      <Floating downlodNow={false} />
    </>
  );
};
export default contact;
