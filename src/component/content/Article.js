"use client";
import React, { useRef, useState } from "react";
import Corona from './../../assets/image/corona.png'
import Vegetables from './../../assets/image/vegetables.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import Image from "next/image";

const Article = () => {
  return (
    <div>
      <div className="container">
        <div className="flex xsm:flex-row flex-col justify-between md:gap-10 gap-6 mb-6 mt-10 border-b border-[#DFDFE5] md:pb-11 pb-6">
          <div className="xsm:max-w-[317px] w-full text-secondary-black">
            <h2 className="md:text-[30px] text-2xl font-bold leading-tight">Read top articles from our Astrology Blog</h2>
            <p className="pt-1 text-sm">Explore in-depth articles from our Astrology Blog, providing valuable insights into the cosmic realm of astrology.</p>
            <div>
            <button className="bg-primary-orange text-white font-bold text-sm py-4 px-7 rounded mt-2 hover:bg-opacity-90 transition-all duration-300">See all articles</button>
            </div>
          </div>
          {/* <div className=" gap-5 md:flex-nowrap flex-wrap"> */}
          <Swiper
            autoplay= {true}  
            loop={true}          
            slidesPerView={1}
            slidestoscroll={1}            
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper article-swiper sm:max-w-[880px] w-full h-full" 
            breakpoints={{              
              1024: {     
                slidesPerView: 3,
                slidestoscroll:1,
              },
              768: {
                slidesPerView: 2,      
                loop: true          
              },
              575: {
                slidesPerView: 1,              
                slidestoscroll:1,
              },             
            }}
            >
            <SwiperSlide>
              <div className="lg:max-w-[280px] w-full">
                <div className="cursor-pointer overflow-hidden">
                <Image src={Corona} alt='' className="w-full transition-all duration-500 hover:scale-105"/>
                </div>
                <div className="pt-[15px] text-secondary-black ">
                  <p className="text-primary-orange font-bold text-xs hover:opacity-90 cursor-pointer">Coronavirus</p>
                  <h3 className="font-bold hover:opacity-90 cursor-pointer">12 Coronavirus Myths and Facts That You Should Be Aware Of</h3>
                  <p className="text-sm pt-3 md:mb-0 mb-4">Dr. Diana Borgio</p>
                </div>
             </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="lg:max-w-[280px] w-full">
            <div className="cursor-pointer overflow-hidden">
              <Image src={Vegetables} alt='' className="w-full transition-all duration-500 hover:scale-105"/>
            </div>
              <div className="pt-[15px] text-secondary-black">
                <p className="text-primary-orange font-bold text-xs hover:opacity-90 cursor-pointer">Vitamins and Supplements</p>
                <h3 className="font-bold hover:opacity-90 cursor-pointer">Eating Right to Build Immunity Against Cold and Viral Infections</h3>
                <p className="text-sm pt-3 md:mb-0 mb-4">Dr. Diana Borgio</p>
              </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="lg:max-w-[280px] w-full">
             <div className="cursor-pointer overflow-hidden">
              <Image src={Vegetables} alt='' className="w-full transition-all duration-500 hover:scale-105"/>
            </div>
              <div className="pt-[15px] text-secondary-black">
                <p className="text-primary-orange font-bold text-xs hover:opacity-90 cursor-pointer">Vitamins and Supplements</p>
                <h3 className="font-bold hover:opacity-90 cursor-pointer">Eating Right to Build Immunity Against Cold and Viral Infections</h3>
                <p className="text-sm pt-3 md:mb-0 mb-4">Dr. Diana Borgio</p>
              </div>
            </div>
            </SwiperSlide>   
            <SwiperSlide>
            <div className="lg:max-w-[280px] w-full">
             <div className="cursor-pointer overflow-hidden">
              <Image src={Vegetables} alt='' className="w-full transition-all duration-500 hover:scale-105"/>
            </div>
              <div className="pt-[15px] text-secondary-black">
                <p className="text-primary-orange font-bold text-xs hover:opacity-90 cursor-pointer">Vitamins and Supplements</p>
                <h3 className="font-bold hover:opacity-90 cursor-pointer">Eating Right to Build Immunity Against Cold and Viral Infections</h3>
                <p className="text-sm pt-3 md:mb-0 mb-4">Dr. Diana Borgio</p>
              </div>
            </div>
            </SwiperSlide>               
          </Swiper>  
        </div>
      </div>
    </div>
  );
};

export default Article;
