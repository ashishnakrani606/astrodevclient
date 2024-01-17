import React, { useState } from "react";
import Arrow from "./../../assets/icon/breadcrump_arrow.svg";
import Image from "next/image";
import AstrologerProfile from "./../../assets/image/dr-sumanth-shetty-dentist.png";
import BlueTick from "./../../assets/icon/bluetick.svg";
import Right from "./../../assets/icon/right.svg";
import Done from "./../../assets/icon/done.svg";
import Phone from "./../../assets/icon/phonecall.svg";
import PhoneCall from "./../../assets/icon/phonecallwhite.svg";
import Tabs from "./../talkwithastrologer/Tab";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Profile = () => {
  const [availableTab, setAvailableTab] = useState(1);

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text-secondary-black text-sm pb-2 pt-1  max-w-[626px]">
        {isReadMore ? text.slice(0, 154) : text}
        <span
          onClick={toggleReadMore}
          className={`relative text-primary-orange cursor-pointer`}
        >
          {isReadMore ? "more..." : ""}
        </span>
      </p>
    );
  };

  return (
    <div>
      <div className="max-w-[1400px] mx-auto px-4 pt-1">
        <ul class="breadcrumb flex gap-2 items-center text-secondary-black text-xs">
          <li>
            <a href="#" className="flex gap-1">
              Home
              <Image src={Arrow} alt="" />
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-1">
              Astrologers
              <Image src={Arrow} alt="" />
            </a>
          </li>
          <li>
            <a href="#">Mahendram</a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="flex lg:flex-row flex-col lg:items-start items-center justify-between lgm:gap-16 gap-6 gap-y-8 relative lgm:pb-12 pb-8">
          <div>
            <div className="flex sm:flex-row flex-col lg:pt-11 md:pt-9 pt-6 md:gap-11 gap-4 items-start 2xl:-ml-8">
              <Image src={AstrologerProfile} alt="" className="" />
              <div>
                <div className="flex items-center gap-1 flex-wrap">
                  <h2 className="lg:text-[26px] md:text-2xl text-lg font-bold text-black">
                    Mahendram{" "}
                  </h2>
                  <Image src={BlueTick} alt="" />
                  <h3 className="text-[#787887] font-bold md:text-sm text-xs">
                    Profile is claimed
                  </h3>
                </div>
                <div className="text-[#616161] md:pt-4 pt-2 leading-tight">
                  <h3 className="md:text-base text-sm">
                    Vedic, Vastu, Palmistry
                  </h3>
                  <h4 className="pt-2 md:text-[15px] text-sm">
                    English, Hindi, Sanskrit, Bhojpuri, Rajasthani
                  </h4>
                  <h5 className="md:text-[15px] text-sm pt-2">
                    <span className="font-bold">Exp:</span> 31 Years
                  </h5>
                </div>
                <div className="text-secondary-black flex text-sm gap-2 pt-4">
                  <Image src={Right} alt="" />
                  Profile verified
                </div>
                <div className="text-[#01A400] flex gap-2 items-center pt-3">
                  <Image src={Done} alt="" />
                  97%
                  <span className="text-[#787887] text-xs">(43 votes) </span>
                </div>
                <ReadMore>
                  Mahendra is a renowned Vedic Astrologer from Lucknow having
                  more than 16 years of experience in the same field. He had his
                  educational background in Mass Communication
                </ReadMore>
              </div>
            </div>
            <Tabs />
          </div>
          {/* slider tab strat */}
          <div className="text-secondary-black lg:max-w-[386px] w-full lg:sticky lgm:top-10 top-20">
            <h3 className="md:text-[20px] text-lg font-bold pl-2 pb-3">
              Pick a time slot
            </h3>
            <div className="bg-[#00F076] rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-start">
                  <Image src={Phone} alt="" />
                  <div className="leading-tight">
                    <h4 className="md:text-[22px] text-xl font-semibold">
                      Start Chat
                    </h4>
                    <p className="text-xs">Wait time ~ 6m</p>
                  </div>
                </div>
                <p className="font-semibold">₹ 88 / min</p>
              </div>
            </div>
            <div className="bg-[#374CB3] text-white rounded-xl p-4 mt-[14px]">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-start">
                  <Image src={PhoneCall} alt="" />
                  <div className="leading-tight">
                    <h4 className="md:text-[22px] text-xl font-semi-bold">
                      Start Chat
                    </h4>
                    <p className="text-xs">Online in 3h 13m</p>
                  </div>
                </div>
                <p className="font-semibold">₹ 88 / min</p>
              </div>
            </div>
            <div className="border border-[#DCDCDC] rounded-lg mt-5 px-2 pb-6 pt-4 profile-tab">
              <h3 className="text-[17px] font-bold px-2">Availability</h3>
              <div className="shadow-dropshadow-tab">
                <Swiper
                  slidesPerView={3}
                  slidestoscroll={1}
                  noSwiping={true}
                  loop={false}
                  navigation={true}
                  modules={[Navigation]}
                  className=" swiper  mb-4 ml-5"
                >
                  <div className="">
                    <SwiperSlide>
                      <div className="text-center xsm:mx-3 mx-1">
                        <a
                          className={
                            "sm:px-2 px-1 pt-[10px] pb-[7px] block leading-normal text-secondary-black" +
                            (availableTab === 1
                              ? " font-bold border-b-4 border-primary-orange"
                              : "text-[#787887]")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setAvailableTab(1);
                          }}
                          data-toggle="tab"
                          href="#link1"
                          role="tablist"
                        >
                          <h4 className="text-xs pb-[5px]">Today</h4>
                          <p className="text-[10px] text-[#01A400] font-normal">
                            7 slots available
                          </p>
                        </a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="xsm:mx-3 mx-1 text-center">
                        <a
                          className={
                            "sm:px-2 px-1 pt-[10px] pb-[7px] block leading-normal text-secondary-black " +
                            (availableTab === 2
                              ? " font-bold border-b-4 border-primary-orange"
                              : " text-primary-oranges")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setAvailableTab(2);
                          }}
                          data-toggle="tab"
                          href="#link2"
                          role="tablist"
                        >
                          <h4 className="text-xs pb-[5px]">Tomorrow</h4>
                          <p className="text-[10px] text-[#01A400] font-normal">
                            15 slots available
                          </p>
                        </a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="xsm:mx-3 mx-1 text-center">
                        <a
                          className={
                            "sm:px-2 px-1 pt-[10px] pb-[7px] block leading-normal text-secondary-black " +
                            (availableTab === 3
                              ? " font-bold border-b-4 border-primary-orange"
                              : "text-[#787887]")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setAvailableTab(3);
                          }}
                          data-toggle="tab"
                          href="#link3"
                          role="tablist"
                        >
                          <h4 className="text-xs pb-[5px]">Fri, 7 Jul</h4>
                          <p className="text-[10px] text-[#01A400] font-normal">
                            16 slots available
                          </p>
                        </a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="xsm:mx-3 mx-1 text-center">
                        <a
                          className={
                            "sm:px-2 px-1 pt-[10px] pb-[7px] block leading-normal text-secondary-black " +
                            (availableTab === 4
                              ? " font-bold border-b-4 border-primary-orange"
                              : "text-[#787887]")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setAvailableTab(4);
                          }}
                          data-toggle="tab"
                          href="#link4"
                          role="tablist"
                        >
                          <h4 className="text-xs pb-[5px]">sat</h4>
                          <p className="text-[10px] text-[#01A400] font-normal">
                            10 slots available
                          </p>
                        </a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="xsm:mx-3 mx-1 text-center">
                        <a
                          className={
                            "sm:px-2 px-1 pt-[10px] pb-[7px] block leading-normal text-secondary-black " +
                            (availableTab === 5
                              ? " font-bold border-b-4 border-primary-orange"
                              : "text-[#787887]")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setAvailableTab(5);
                          }}
                          data-toggle="tab"
                          href="#link5"
                          role="tablist"
                        >
                          <h4 className="text-xs pb-[5px]">mon, 12 Jul</h4>
                          <p className="text-[10px] text-[#01A400] font-normal">
                            15 slots available
                          </p>
                        </a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="xsm:mx-3 mx-1 text-center">
                        <a
                          className={
                            "sm:px-2 px-1 pt-[10px] pb-[7px] block leading-normal text-secondary-black " +
                            (availableTab === 6
                              ? " font-bold border-b-4 border-primary-orange"
                              : "text-[#787887]")
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            setAvailableTab(6);
                          }}
                          data-toggle="tab"
                          href="#link6"
                          role="tablist"
                        >
                          <h4 className="text-xs pb-[5px]">Tues, 12 Jul</h4>
                          <p className="text-[10px] text-[#01A400] font-normal">
                            15 slots available
                          </p>
                        </a>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full">
                <div className="">
                  <div className="tab-content tab-space">
                    <div
                      className={
                        availableTab === 1 ? "block px-[15px]" : "hidden"
                      }
                      id="link1"
                    >
                      <div>
                        <div className="text-sm text-secondary-black font-bold">
                          Morning
                          <spna className="text-xs text-[#787887] font-normal">
                            {" "}
                            (1 slot)
                          </spna>
                        </div>
                        <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                          4:30 AM - 7:00 AM
                        </button>
                      </div>
                      <div className="pt-6">
                        <div className="text-sm text-secondary-black font-bold">
                          Afternoon
                          <spna className="text-xs text-[#787887] font-normal">
                            {" "}
                            (2 slots)
                          </spna>
                        </div>
                        <div className="flex gap-3">
                          <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                            1:30 PM - 3:00 PM
                          </button>
                          <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                            4:30 PM - 5:00 PM
                          </button>
                        </div>
                      </div>
                      <div className="pt-6">
                        <div className="text-sm text-secondary-black font-bold">
                          Evening
                          <spna className="text-xs text-[#787887] font-normal">
                            {" "}
                            (1 slot)
                          </spna>
                        </div>
                        <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                          6:30 PM - 8:00 PM
                        </button>
                      </div>
                    </div>
                    <div
                      className={
                        availableTab === 2 ? "block px-[15px]" : "hidden"
                      }
                      id="link2"
                    >
                      <div>
                        <div>
                          <div className="text-sm text-secondary-black font-bold">
                            Morning
                            <spna className="text-xs text-[#787887] font-normal">
                              {" "}
                              (1 slot)
                            </spna>
                          </div>
                          <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                            4:30 AM - 7:00 AM
                          </button>
                        </div>
                        <div className="pt-6">
                          <div className="text-sm text-secondary-black font-bold">
                            Afternoon
                            <spna className="text-xs text-[#787887] font-normal">
                              {" "}
                              (2 slots)
                            </spna>
                          </div>
                          <div className="flex gap-3">
                            <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                              1:30 PM - 3:00 PM
                            </button>
                            <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                              4:30 PM - 5:00 PM
                            </button>
                          </div>
                        </div>
                        <div className="pt-6">
                          <div className="text-sm text-secondary-black font-bold">
                            Evening
                            <spna className="text-xs text-[#787887] font-normal">
                              (1 slot)
                            </spna>
                          </div>
                          <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                            6:30 PM - 8:00 PM
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        availableTab === 3 ? "block px-[15px]" : "hidden"
                      }
                      id="link3"
                    >
                      <div>
                        <div className="pt-6">
                          <div className="text-sm text-secondary-black font-bold">
                            Afternoon
                            <spna className="text-xs text-[#787887] font-normal">
                              (2 slots)
                            </spna>
                          </div>
                          <div className="flex gap-3">
                            <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                              1:30 PM - 3:00 PM
                            </button>
                            <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                              4:30 PM - 5:00 PM
                            </button>
                          </div>
                        </div>
                        <div className="pt-6">
                          <div className="text-sm text-secondary-black font-bold">
                            Evening
                            <spna className="text-xs text-[#787887] font-normal">
                              (1 slot)
                            </spna>
                          </div>
                          <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                            6:30 PM - 8:00 PM
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        availableTab === 4 ? "block px-[15px]" : "hidden"
                      }
                      id="link3"
                    >
                      <div>
                        <div>
                          <div className="text-sm text-secondary-black font-bold">
                            Morning
                            <spna className="text-xs text-[#787887] font-normal">
                              {" "}
                              (1 slot)
                            </spna>
                          </div>
                          <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                            4:30 AM - 7:00 AM
                          </button>
                        </div>
                        <div className="pt-6">
                          <div className="text-sm text-secondary-black font-bold">
                            Afternoon
                            <spna className="text-xs text-[#787887] font-normal">
                              {" "}
                              (2 slots)
                            </spna>
                          </div>
                          <div className="flex gap-3">
                            <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                              1:30 PM - 3:00 PM
                            </button>
                            <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                              4:30 PM - 5:00 PM
                            </button>
                          </div>
                        </div>
                        <div className="pt-6">
                          <div className="text-sm text-secondary-black font-bold">
                            Evening
                            <spna className="text-xs text-[#787887] font-normal">
                              {" "}
                              (1 slot)
                            </spna>
                          </div>
                          <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                            6:30 PM - 8:00 PM
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        availableTab === 5 ? "block px-[15px]" : "hidden"
                      }
                      id="link5"
                    >
                      <div>
                        <div>
                          <div className="text-sm text-secondary-black font-bold">
                            Morning
                            <spna className="text-xs text-[#787887] font-normal">
                              {" "}
                              (1 slot)
                            </spna>
                          </div>
                          <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                            4:30 AM - 7:00 AM
                          </button>
                        </div>
                        <div className="pt-6">
                          <div className="text-sm text-secondary-black font-bold">
                            Afternoon
                            <spna className="text-xs text-[#787887] font-normal">
                              {" "}
                              (2 slots)
                            </spna>
                          </div>
                          <div className="flex gap-3">
                            <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                              1:30 PM - 3:00 PM
                            </button>
                            <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                              4:30 PM - 5:00 PM
                            </button>
                          </div>
                        </div>
                        <div className="pt-6">
                          <div className="text-sm text-secondary-black font-bold">
                            Evening
                            <spna className="text-xs text-[#787887] font-normal">
                              {" "}
                              (1 slot)
                            </spna>
                          </div>
                          <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                            6:30 PM - 8:00 PM
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        availableTab === 6 ? "block px-[15px]" : "hidden"
                      }
                      id="link6"
                    >
                      <div>
                        <div>
                          <div className="text-sm text-secondary-black font-bold">
                            Morning
                            <spna className="text-xs text-[#787887] font-normal">
                              {" "}
                              (1 slot)
                            </spna>
                          </div>
                          <button className="text-primary-orange border border-primary-orange rounded-[3px] py-[9px] xsm:px-[14px] px-2 text-xs mt-3">
                            4:30 AM - 7:00 AM
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
