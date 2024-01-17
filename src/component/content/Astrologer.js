import Image from "next/image";
import React from "react";
import Astrologerimg from "./../../assets/image/astrologer-1.svg";
import Astrologerimg2 from "./../../assets/image/astrologer-2.svg";
import Astrologerimg3 from "./../../assets/image/astrologer-3.svg";
import Trusted from "./../../assets/icon/trusted.svg";
import Clear from "./../../assets/icon/chatsteardrop.svg";
import Connection from "./../../assets/icon/yinyang.svg";
import Heroimg from "./../../assets/image/heromain.png";
import Link from "next/link";
const Astrologer = () => {
  return (
    <div className="bg-gradientbackground relative overflow-hidden">
      <div className="2xl:!max-w-[1375px] container relative">
        <div className="flex justify-between lg:items-end items-center lg:flex-row flex-col 3xl:pl-0 lg:pl-14">
          <div className="lgm:pt-[68px] md:pt-12 pt-8 max-w-[640px] w-full pr-4">
            <h3 className="md:text-[22px] text-lg font-semibold">
              Instant, Personalized, Insightful
            </h3>
            <h2 className="md:text-4xl text-2xl font-semibold md:py-3 py-1">
              Chat with Astrologers
            </h2>
            <h4 className="md:text-xl text-base">
              Chat directly with experienced astrologers for personal guidance.
            </h4>
            <div className="flex md:pt-6 pt-3 items-center md:gap-5 gap-2 flex-wrap">
              <div className="flex ">
                <Image
                  src={Astrologerimg}
                  alt=""
                  className="rounded-full z-40 md:max-w-full max-w-[34px]"
                />
                <Image src={Astrologerimg2} alt="" className="-ml-2 z-20 md:max-w-full max-w-[34px]"  />
                <Image src={Astrologerimg3} alt="" className="-ml-2 md:max-w-full max-w-[34px]"/>
              </div>    
              <p className="relative pulse before:absolute before:bg-[hsl(150,100%,47%)] before:h-2 before:w-2 before:rounded-full before:-right-[16px] before:top-2 mr-5 md:text-base text-sm">+152 Astrologers are online              
              </p>  
            </div>
            <button className="bg-[#00F076] text-lg font-bold py-[9px] px-8 rounded border border-primary-black md:mt-5 mt-3 lgm:mb-12 md:mb-7 mb-5 hover:bg-[#fff] transition-all duration-300">
              <Link href="#0">Chat Now</Link>
            </button>
            <div className="flex gap-3 md:pb-7 pb-1">
              <div className="flex gap-2">
                <Image src={Trusted} alt="" className="xsm:max-w-full max-w-[16px]"/>
                <p className="xsm:text-sm text-[11px]">Trusted Astrologers</p>
              </div>
              <div className="flex gap-2">
                <Image src={Connection} alt="" className="xsm:max-w-full max-w-[16px]" />
                <p className="xsm:text-sm text-[11px]">Direct Connection</p>
              </div>
              <div className="flex gap-2">
                <Image src={Clear} alt="" className="xsm:max-w-full max-w-[16px]" />
                <p className="xsm:text-sm text-[11px]">Clear Communication</p>
              </div>
            </div>
          </div>         
        </div>
      </div>
      <div className="lg:absolute 3xl:right-0 2xl:-right-32 xl:-right-[23%] lg:-right-[12%] bottom-0 z-0 w-full max-w-[1000px] ml-auto">
        <Image src={Heroimg} alt="" className="max-h-[420px] w-full ml-auto 2xl:max-w-[100%] xl:max-w-[100%] lg:max-w-[60%] max-w-[100%]" />
      </div>
    </div>
  );
};

export default Astrologer;
