import React from "react";
import Image from "next/image";
import Nexticon from './../../assets/icon/breadcrumpsarrow.svg'
import Link from "next/link";

const HeroBanner = (props) => {
  return (
    <>
      <div className="bg-yellow-gradient">
        <div className="container">
          <div className={`z-50 relative md:py-[42px] py-8 px-1 ${props.className}`}>
            <div className="flex justify-center items-center text-xs gap-5 text-[#605F5F] pb-1">
              <div className="flex items-center gap-2 ">
                <Link href="#0">
                  Home
                </Link>
                <Image src={Nexticon} alt="" />
              </div>
              <Link href="#0">
                {props.link}
              </Link>
            </div>
            <div className="mx-auto text-center">
              <h1 className="lgm:text-[66px] md:text-5xl text-3xl font-bold mt-2 mb-3 text-[#121212] lgm:leading-[80px]">
                {props.title}
              </h1>
              <p className="md:text-lg text-base text-[#3E3E59] tracking-[-0.4px] md:leading-[30px]">{props.detail}</p>
            </div>
            <div>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
