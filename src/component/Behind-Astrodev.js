import React from "react";
import Twitter from "./../assets/icon/twitter.svg";
import Chain from "./../assets/icon/chain.svg";
import Founder from "./../assets/image/founder1.png";
import Founder2 from "./../assets/image/founder2.png";
import Image from "next/image";
import Link from "next/link";

const BehindAstrodev = () => {
  return (
    <div className="container">
      <div className="text-center lg:py-32 md:py-20 py-10">
        <span className="font-semibold pb-2 text-lg">
          Introducing Our Founders
        </span>
        <h2 className="md:text-[44px] sm:text-3xl text-2xl font-semibold lgm:pb-[90px] md:pb-16 pb-8 max-w-[628px] mx-auto !leading-tight mt-2">
          Meet the Minds Behind AstroDev.com
        </h2>
        <div className="grid xsm:grid-cols-2 gap-8 max-w-[848px] mx-auto w-full">
          <div className="shadow-box-shadow2 rounded-3xl xsm:max-w-[408px] mx-auto w-full lg:py-12 md:py-8 sm:py-6 py-5 px-4">
            <Image src={Founder} alt="" className="mx-auto" />
            <h3 className="md:text-[22px] sm:text-lg text-base font-semibold pt-6">
              Sahil Kohli
            </h3>
            <h4 className="md:text-lg sm:text-base text-base pt-2">
              Co-founder
            </h4>
            <div className="flex gap-7 justify-center pt-8">
              <Link href={"#0"}>
                <Image src={Twitter} alt="" />
              </Link>
              <Link href={"#0"}>
                <Image src={Chain} alt="" />
              </Link>
            </div>
          </div>
          <div className="shadow-box-shadow2 rounded-3xl xsm:max-w-[408px] mx-auto w-full lg:py-12 md:py-8 sm:py-6 py-5 px-4">
            <Image src={Founder2} alt="" className="mx-auto" />
            <h3 className="md:text-[22px] sm:text-lg text-base font-semibold pt-6">
              Heena Kohli
            </h3>
            <h4 className="md:text-lg sm:text-base text-base pt-2">
              Co-founder
            </h4>
            <div className="pt-8 text-center">
              <Link href={"#0"}>
                <Image src={Twitter} alt="" className="mx-auto" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehindAstrodev;
