import Link from "next/link";
import React from "react";
import Arrowwhite from "./../../assets/icon/createcircle.svg";
import Arrowblack from "./../../assets/icon/circle-black.svg";
import Mobile from "./../../assets/image/offer-app-v1.png";
import Astro from "./../../assets/image/astrodev.png";
// import Astro2 from './../../assets/image/astro-talk.png'
import Image from "next/image";

const offerBox = [
  {
    id: 1,
    title: "OFFER",
    detail: "Download the App & get ",
    detail1: "₹50 AstroCash",
    linkBtn: "Download App",
    userImage: Mobile,
    icon: Arrowwhite,
    imgstyle: "lgm:mb-0",
  },
  {
    id: 2,
    className: "!bg-green-gradient",
    title: "TALK TO ASTROLOGER",
    detail: "Talk to the best Astrologers",
    detail1: "starting with just ₹29/minute",
    linkBtn: "Call Now",
    userImage: Astro,
    icon: Arrowblack,
    styleColor: "!text-black",
  },
];
const Offer = (props) => {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 md:my-6 my-5 lg:gap-8 gap-5 lgm:px-[43px] lg:px-5">
        {offerBox.map((item, index) => (
          <div
            key={index}
            className={`bg-purple-gradient rounded md:pl-5 pl-3 overflow-hidden xsm:min-h-full  ${item.className}`}
          >
            <div
              className={`text-white flex justify-between items-end h-full ${item.styleColor}`}
            >
              <div className="md:pt-5 pt-3">
                <span
                  className={`bg-white text-[#374CB3] xsm:text-sm text-[10px] md:text-base font-bold rounded-sm p-[7px] py-1 whitespace-nowrap ${item.styleColor}`}
                >
                  {item.title}
                </span>
                <h2
                  className={`lgm:text-2xl xsm:text-xl text-xs xsm:font-semibold font-medium md:mt-4 mt-3`}
                >
                  {item.detail}&nbsp;
                  <br className="xl:block lg:hidden xsm:block hidden" />
                  {item.detail1}
                </h2>
                <Link
                  href={"#0"}
                  className="flex font-semibold lgm:text-xl xsm:text-lg text-[10px] first-letter:items-center gap-1 xsm:py-5 py-2"
                >
                  {item.linkBtn}
                  <Image
                    src={item.icon}
                    alt=""
                    className="xsm:max-w-full max-w-[16px]"
                  />
                </Link>
              </div>
              <div className={`${item.imgstyle}`}>
                <Image
                  src={item.userImage}
                  alt=""
                  className="md:max-w-full xsm:max-w-[120px] max-w-[69px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
