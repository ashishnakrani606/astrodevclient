import Link from "next/link";
import Image from "next/image";
import React from "react";
import Nexticon from "./../../../src/assets/icon/breadcrump_arrow.svg";
import User from "./../../../src/assets/icon/user.svg";
import Clock from "./../../../src/assets/icon/clock.svg";
import Herobanner from "./../../../src/assets/image/inner-banner.png";
import Herobanner2 from "./../../../src/assets/image/banner2.png";
import Arrow from "./../../../src/assets/icon/arrow-right.svg";
import Quote from "./../../../src/assets/icon/quote.svg";
import Mail from "./../../../src/assets/icon/emailico.svg";
import Facebookico from "./../../../src/assets/icon/facebookico.svg";
import Instagram from "./../../../src/assets/icon/instaico.svg";
import Twitter from "./../../../src/assets/icon/twittericon.svg";
import Pintrest from "./../../../src/assets/icon/pinterest.svg";
import Tiktok from "./../../../src/assets/icon/tiktok.svg";
import Linkdin from "./../../../src/assets/icon/linkdinicon.svg";
import Innerleft from "./../../../src/assets/image/inner-left.svg";
import Innerright from "./../../../src/assets/image/inner-right.svg";
import BlackArrowLeft from "./../../../src/assets/icon/arrow-left.svg";
import BlackArrow from "./../../../src/assets/icon/arrow-left.svg";
import Joinnewsletter from "./../../../src/component/Join-Newsletter";
import Offer from "../../../src/component/content/Offer";
import Asttodev from "../../../src/component/content/AstrodevApp";

const blogInner = () => {
  return (
    <>
      <div className="max-w-[1368px] w-full mx-auto px-4 text-[#3E3E59]">
        <div className="flex lgm:items-start items-center lgm:flex-row flex-col justify-between xl:gap-[80px] lgm:gap-10 gap-5 relative pb-10">
          <div className="max-w-[880px] w-full">
            <div className="lg:pt-14 pt-10">
              <div className="flex items-center text-xs gap-5 text-[#605F5F] pb-1">
                <div className="flex items-center gap-2 ">
                  <Link href="#0">Home</Link>
                  <Image src={Nexticon} alt="" />
                </div>
                <div className="flex items-center gap-2 ">
                  <Link href="#0">Blog</Link>
                  <Image src={Nexticon} alt="" />
                </div>
              </div>
              <div>
                <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold pt-2 text-[#2B2B2B]">
                  {
                    "How Becho's inventory management system helped XYZ reduce stockouts and increase sales"
                  }
                </h2>
                <div className="flex md:gap-6 gap-4 flex-wrap py-4">
                  <div className="flex items-center gap-2">
                    <Image src={User} alt="" />
                    <h3 className="font-bold sm:text-base text-sm text-[#3F3B3B]">
                      Heena Vinayak{" "}
                      <span className="font-normal text-[#807E7E]">&</span>{" "}
                      Siddhesh Surve
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 sm:text-base text-sm">
                    <Image src={Clock} alt="" />
                    <h3 className="text-[#3E3E59]">Today 11:43pm </h3>
                  </div>
                </div>
                <h4 className="text-[#212121] text-sm">
                  <span className="text-[#605F5F]">Tags:</span> Marketing,
                  Ecommerce Sales
                </h4>
                <div className="pt-4 md:text-lg">
                  <>
                    <Image src={Herobanner} alt="" />
                    <p className="font-semibold pt-5">
                      Nayzak, everyone in my team works towards the samegoal.
                      This enabled our teams to ship new ideas and feel more
                      capable. Podcasting operational — change management inside
                      of workflows. Completely synergize.
                    </p>
                    <p className="pt-6">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself
                    </p>
                    <p className="pt-6">
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will, which is the same
                      as saying through.
                    </p>
                  </>
                  <div className="md:my-14 my-8">
                    <button className="flex bg-black md:text-[22px] text-lg font-bold text-white rounded-[39px] md:py-[18px] py-4 px-3 max-w-[271px] w-full justify-center gap-3">
                      Button style 1
                      <Image src={Arrow} alt="" />
                    </button>
                  </div>
                  <div className="bg-[#FAFAFB] text-center md:mb-14 mb-12">
                    <div className="text-[#121212] md:max-w-[770px] mx-auto w-full md:px-2 px-5 md:py-14 py-8 md:text-xl text-lg">
                      <Image src={Quote} alt="" className="mx-auto pb-4" />
                      <p className="">
                        Nayzak, everyone in my team works towards the samegoal.
                        This enabled our teams to ship new ideas and feel more
                        capable. Podcasting operational
                      </p>
                      <h4 className="pt-4">— Carl Sagan</h4>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-[#121212] md:text-[40px] md:leading-tight text-3xl font-bold">
                      This is the first H2 Heading
                    </h2>
                    <p className="md:text-lg md:mt-6 mt-3">
                      Nayzak, everyone in my team works towards the samegoal.
                      This enabled our teams to ship new ideas and feel more
                      capable. Podcasting operational — change management inside
                      of workflows. Completely synergize.
                    </p>
                    <p className="md:text-lg mt-8">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself
                    </p>
                  </div>
                  <div className="md:mt-14 mt-8">
                    <h3 className="text-[#121212] md:text-3xl text-2xl font-bold">
                      This is a sub heading of H3
                    </h3>
                    <p className="md:text-lg md:mt-6 mt-3">
                      Nayzak, everyone in my team works towards the samegoal.
                      This enabled our teams to ship new ideas and feel more
                      capable. Podcasting operational — change management inside
                      of workflows. Completely synergize.
                    </p>
                    <p className="md:text-lg mt-8">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself
                    </p>
                  </div>
                  <div className="md:mt-14 mt-8">
                    <h3 className="text-[#121212] md:text-3xl text-2xl font-bold">
                      This is a sub heading of H3
                    </h3>
                    <p className="md:text-lg md:mt-6 mt-3">
                      Nayzak, everyone in my team works towards the samegoal.
                      This enabled our teams to ship new ideas and feel more
                      capable. Podcasting operational — change management inside
                      of workflows. Completely synergize.
                    </p>
                    <p className="md:text-lg mt-8">
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself
                    </p>
                    <div className="mt-6">
                      <button className="flex bg-[#4541FF] text-white rounded-[39px] md:py-[22px] py-4 md:text-[26px] text-xl font-bold px-3 max-w-[337px] w-full justify-center gap-3">
                        <Image src={Arrow} alt="" />
                        Button style 2
                        <Image src={Arrow} alt="" />
                      </button>
                    </div>
                    <div className="md:mt-14 mt-8">
                      <div className="md:pb-14 pb-8">
                        <Image src={Herobanner2} alt="" />
                        <span className="text-[#605F5F] text-sm text-center block pt-4">
                          Nayza’s Figma builder — Design your next ecommerce
                          project instantly
                        </span>
                      </div>
                      <p className="md:text-xl">
                        Nayzak, everyone in my team works towards the samegoal.
                        This enabled our teams to ship new ideas and feel more
                        capable. Podcasting operational — change management
                        inside of workflows. Completely synergize.
                      </p>
                      <p className="pt-6 md:text-xl">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness. No one
                        rejects, dislikes, or avoids pleasure itself
                      </p>
                    </div>
                    <div className="md:mt-14 mt-8">
                      <h2 className="text-[#121212] md:text-[40px] text-3xl font-bold leading-tight">
                        This is the second H2 Heading which comes in 2 lines
                      </h2>
                      <p className="md:text-lg md:mt-6 mt-3">
                        Nayzak, everyone in my team works towards the samegoal.
                        This enabled our teams to ship new ideas and feel more
                        capable. Podcasting operational — change management
                        inside of workflows. Completely synergize.
                      </p>
                      <p className="md:text-lg mt-8">
                        But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness. No one
                        rejects, dislikes, or avoids pleasure itself
                      </p>
                    </div>
                    <div className="md:mt-14 mt-8 border-b border-[#EAEAEA] pb-2">
                      <h3 className="text-[#121212] md:text-3xl text-2xl font-bold">
                        This is a sub heading of H3
                      </h3>
                      <p className="md:text-lg md:mt-6 mt-3">
                        Nayzak, everyone in my team works towards the samegoal.
                        This enabled our teams to ship new ideas and feel more
                        capable. Podcasting operational — change management
                        inside of workflows. Completely
                      </p>
                    </div>
                    <div className="md:py-14 py-8 border-t border-b border-black200">
                      <div className="flex md:gap-6 gap-4 justify-end items-center">
                        <span className="font-semibold text-base">Share:</span>
                        <Link href={""} target="_blank">
                          <Image src={Facebookico} alt="" />
                        </Link>
                        <Link href={""} target="_blank">
                          <Image src={Instagram} alt="" />
                        </Link>
                        <Link href={""} target="_blank">
                          <Image src={Twitter} alt="" />
                        </Link>
                        <Link href={""} target="_blank">
                          <Image src={Pintrest} alt="" />
                        </Link>
                        <Link href={""} target="_blank">
                          <Image src={Tiktok} alt="" />
                        </Link>
                        <Link href={""} target="_blank">
                          <Image src={Linkdin} alt="" />
                        </Link>
                        <Link href={""} target="_blank">
                          <Image src={Mail} alt="" />
                        </Link>
                      </div>
                      <div className="flex justify-between md:mt-16 mt-10 text-[#121212]">
                        <Link href={""} className="flex gap-3 items-center">
                          <Image src={BlackArrowLeft} alt="" />
                          <span className="font-medium">Previous</span>
                        </Link>
                        <Link href={""} className="flex gap-3 items-center">
                          <span className="font-medium">Next</span>
                          <Image
                            src={BlackArrow}
                            alt=""
                            className="rotate-180"
                          />
                        </Link>
                      </div>
                      <div className="flex lg:flex-row flex-col justify-between md:mt-16 mt-10 gap-5 text-[#212121]">
                        <div className="flex gap-4 items-center">
                          <Image src={Innerleft} alt="" />
                          <span className="font-semibold md:text-lg text-base lg:max-w-[255px] w-full">
                            How to run effective email marketing campaigns in
                            India?
                          </span>
                        </div>
                        <div
                          className={`flex gap-4 items-center lg:flex-row flex-row-reverse`}
                        >
                          <span className="font-semibold lg:max-w-[255px] w-full md:text-lg text-base lg:text-right flex-row-reverse">
                            {
                              " The use case of Becho's payment gateway for easy and secure online transactions"
                            }
                          </span>
                          <Image src={Innerright} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[375px] w-full lgm:mt-44 sticky top-10">
            <div className="bg-[#FAFAFB] md:p-6 p-4 text-[#121212] ">
              <h3 className="border-b border-[#121212] pb-3 font-semibold text-lg">
                Table of Contents
              </h3>
              <h2 className="md:text-lg font-semibold py-4 border-b border-black200 leading-8">
                This is the first H2 Heading
              </h2>
              <h3 className="text-[#121212] pt-4 md:pb-5 pb-3 border-b border-black200 leading-[26px]">
                Home & This is a sub heading of H3
              </h3>
              <h3 className="text-[#121212] pt-4 md:pb-5 pb-3 border-b border-black200 leading-[26px]">
                Home & This is a sub heading of H3
              </h3>
              <h2 className="md:text-lg font-semibold py-4 border-b border-black200 leading-tight">
                This is the second H2 Heading which comes in 2 lines
              </h2>
              <h3 className="text-[#121212] py-4 md:pb-5 pb-3 leading-[26px]">
                Home & This is a sub heading of H3
              </h3>
            </div>
            <div className="bg-blue-gradient p-6 text-[#121212] md:mt-14 mt-8">
              <h3 className="text-lg border-b border-[#121212] pb-3 font-semibold">
                Join our newsletter
              </h3>
              <p className="text-sm leading-[22px] pt-4">
                Be the first to know about our platform updates, industry
                insights, and exclusive offers. Join our newsletter today and
                stay ahead of the game!
              </p>
              <div className="relative mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full placeholder:text-base pl-11 px-4 py-3 rounded-md border border-[#121212]"
                />
                <Image
                  src={Mail}
                  alt=""
                  className="absolute top-[50%] -translate-y-[50%] left-4"
                />
              </div>
              <button
                color={"black"}
                className="py-[10px] bg-[#121212] rounded-md text-white w-full mt-4 leading-8"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Offer />
      <Asttodev />
      <Joinnewsletter />
    </>
  );
};

export default blogInner;
