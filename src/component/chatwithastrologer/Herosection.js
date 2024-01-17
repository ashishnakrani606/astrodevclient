"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import googleplay from "../../assets/image/googleplay.png";
import appstore from "../../assets/image/appstore.png";
import appimg from "../../assets/image/mobile-img.png";
import appimg2 from "../../assets/image/arrowherosec.png";

const Herosection = (props) => {
  return (
    <>
      <div className="bg-gradientbackground  relative overflow-hidden">
        <div className="flex lg:flex-row lg:items-end items-center sm:flex-col flex-col max-w-[1660px] mx-auto justify-between md:px-6 px-4 lgm:gap-10">
          <div className="z-10 xl:max-w-[627px] lg:max-w-[480px] lg:w-full md:py-6 pt-4 lg:text-left text-center">
            <h1 className="text-primary-black lg:text-4xl md:text-3xl xsm:text-xl text-lg font-semibold !mb-2">
              {props.title}
            </h1>
            <div className="md:block hidden">
              <span className="font-semibold text-base text-secondary-black">
                {props.subtitle}
              </span>
              <div className="flex md:mt-[18px] mt-3 gap-4 lg:justify-start justify-center">
                <Link href={"#0"}>
                  <Image
                    src={googleplay}
                    alt=""
                    className="max-w-[130px] w-full"
                  />
                </Link>
                <Link href={"#0"}>
                  <Image
                    src={appstore}
                    alt=""
                    className="max-w-[130px] w-full"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:py-12 py-4 md:block hidden xl:mr-7">
            <Link
              href="#0"
              className="text-secondary-black font-semibold text-base"
            >
              {props.getlink}
            </Link>
            <div className="flex gap-3 mt-4 sm:flex-row flex-col">
              <div className="flex xl:min-w-[314px] min-w-[260px] max-w-[273px] border bg-white border-[#F0F0F5] rounded-sm">
                <div className="md:text-base text-sm relative -right-1 py-2 bg-[#fff] rounded-sm text-[#000] items-center flex pl-4 font-bold whitespace-nowrap pr-0">
                  + 91{" "}
                  <span className="px-3 md:text-xl text-[#7f7f7f] font-thin">
                    {" "}
                    |{" "}
                  </span>
                </div>
                <input
                  type="number"
                  placeholder=" Enter Phone number"
                  id="roll"
                  name="roll"
                  className="numberinput md:text-base text-sm md:placeholder:text-base placeholder:text-[#787887] placeholder:text-sm sm:max-w-[289px] max-w-[189px] w-full py-2 px-1 rounded-sm leading-tight placeholder:leading-tight"
                  required
                  minLength="10"
                  maxLength="10"
                />
              </div>
              <button className="bg-[#00F076] text-[#000000] font-bold text-base whitespace-nowrap md:py-2 py-1 px-6 rounded-[2px] max-w-[157px] w-full transition-all duration-300 hover:bg-[#9966CC] hover:text-[#fff] border border-[#9966CC]">
                <Link href="#0">Send app link</Link>
              </button>
            </div>
          </div>
          <div className="bg-cover bg-[center_center] lgm:flex items-center object-cover hidden max-w-[385px] w-full ">
            <Image src={appimg2} alt="" className="max-w-[100%]" />
            <Image src={appimg} alt="" className="max-w-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Herosection;
