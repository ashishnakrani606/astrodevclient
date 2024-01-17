"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/swiper.scss";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Astropic from "./../../assets/image/abhy-v1.svg";
import Astropic2 from "./../../assets/image/women-v1.svg";
import Astropic3 from "./../../assets/image/deepak-v1.svg";
import Image from "next/image";

const AstrodevSlider = [
  {
    id: 1,
    img: Astropic,
    name: "Abhy",
    profession: "33 yr old IT Professional",
    discription:
      "I was really sick and <strong>couldn’t get out of bed.</strong> I talked to the doctor through Practo and he shared a <strong>prescription in 10 minutes.</strong> I even got the medicines <strong>delivered on the same day</strong> through Practo, just a WOW experience.",
  },
  {
    id: 2,
    img: Astropic2,
    name: "Preeti",
    profession: "26 yr old IT Professional",
    discription:
      " I was <strong>in pain</strong> and it was really <strong>late at night.</strong> I wanted help but couldn’t go to see the doctor due to lateness of the hour. Consulted online on Practo and <strong> doctor responded immediately. </strong>",
  },
  {
    id: 3,
    img: Astropic3,
    name: "Deepak",
    profession: "29 yr old traveller",
    discription:
      " I was travelling to a <strong>remote place</strong> for scuba diving and <strong>injured myself.</strong> Tough to find doctors around, so did an <strong>online consultation</strong> on Practo and hey presto, I have my <strong>medicines. </strong> Disruptive. Convenient.",
  },
  {
    id: 4,
    img: Astropic,
    name: "Abhy",
    profession: "33 yr old IT Professional",
    discription:
      "I was really sick and <strong>couldn’t get out of bed.</strong> I talked to the doctor through Practo and he shared a <strong>prescription in 10 minutes.</strong> I even got the medicines <strong>delivered on the same day</strong> through Practo, just a WOW experience.",
  },
];
const AstrodevSwiper = () => {
  return (
    <div className="mt-8">
      <div className="container pl-12 pr-9">
        <div>
          <h2 className="text-primary-black font-bold md:text-3xl text-2xl">
            User Reflections: Navigating the Cosmos with AstroDev
          </h2>
          <div className="md:py-9 md:pb-6 py-6 astroswiper max-w-[1266px]">
            <Swiper
              slidesPerView={1}
              slidestoscroll={1}
              spaceBetween={20}
              noSwiping={true}
              loop={true}
              centeredSlides={AstrodevSlider.length < 5 ? false : true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper swiper"
              breakpoints={{
                992: {
                  spaceBetween: 35,
                  slidesPerView: 3,
                  isDuplicate: true,
                },
                768: {
                  slidesPerView: 2.5,
                },
                575: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              {AstrodevSlider.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="border border-[#F0F0F5] rounded p-[17px] shadow-boxshadow-box">
                    <div className="flex gap-3">
                      <Image src={item.img} alt="" />
                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-sm">{item.profession}</p>
                      </div>
                    </div>
                    <p
                      className="text-sm pt-4 lg:min-h-[116px] xsm:min-h-[156px] min-h-[136px]"
                      dangerouslySetInnerHTML={{ __html: item.discription }}
                    ></p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrodevSwiper;
