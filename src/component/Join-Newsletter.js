import React from "react";

const joinnewsletter = () => {
  return (
    <div className="max-w-[1320px] px-4 mx-auto join-newsletter">
      <div className="flex lg:justify-between gap-8 md:py-20 py-14 sm:flex-col flex-col md:flex-row">
        <div className="md:max-w-[584px] w-full">
          <h3 className="font-bold md:text-[33px] text-2xl text-[#212121]">
            {" "}
            Join Our Newsletter
          </h3>
          <p className="text-[#3E3E59] font-normal md:text-lg text-base mt-3 tracking-[-0.2px]">
            {
              "Embrace the cosmic journey with AstroDev's newsletter. Get exclusive astrology insights, updates and special offers directly in your inbox."
            }
          </p>
        </div>
        <div className="md:max-w-[584px] w-full">
          <div className="flex xsm:flex-row flex-col lg:gap-5 gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="lg:max-w-[374px] placeholder:text-[#807E7E] border border-[#CCCCCC] text-[#000000DE] w-full block rounded md:py-3 py-2 pl-5 pr-5 text-sm placeholder:text-sm "
            />
            <a
              href="#0"
              className="max-w-[114px] text-center w-full whitespace-nowrap bg-[#4541FF] text-white md:py-3 py-[6px] text-lg font-semibold rounded-lg border-none"
            >
              Sign up
            </a>
          </div>
          <div className="flex gap-3 mt-4">
            <label className="checkbox relative cursor-pointer">
              <input
                type="checkbox"
                className="checkboxterms absolute opacity-0 top-[-100px] left-[-100px] "
              />
              <span className="checkboxtermsinner inline-block w-[18px] h-[18px] rounded-full border border-[#626262] bg-no-repeat bg-center bg-transparent"></span>
            </label>
            <a
              href="#0"
              className="text-[#3E3E59] font-normal text-sm 2xl:whitespace-nowrap"
            >
              {
                "By joining our community, you're agreeing to our terms - no need to worry, they're pretty standard."
              }
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default joinnewsletter;
