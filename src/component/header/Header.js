"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HeaderLogo from "./../../assets/image/header-logo.svg";
import Link from "next/link";
import Select from "react-select";
import Login from "../model/Login";
import Apple from "./../../assets/icon/apple-icon.svg";
import Google from "./../../assets/icon/google-icon.svg";
import SignupIcon from "./../../assets/icon/signup-con.svg";
import CountryDropdown from "../model/CountryStateDropdown/CountryDropdown";
import OtpInput from "react-otp-input";

const StoreDetaildData = [
  {
    id: 4,
    title: "Country code",
    color: "hidden",
    indiaState: "true",
  },
];

const navItem = [
  {
    id: 1,
    name: "Chat with Astrologer",
    link: "/chat-with-astrologer",
  },
  {
    id: 2,
    name: "Talk to Astrologer",
    link: "/talk-to-astrologer",
  },
  {
    id: 3,
    name: "Free Kundli",
    link: "/free-kundli",
  },
  {
    id: 4,
    name: "Kundli Matching",
    link: "/kundli-matching",
  },
  {
    id: 5,
    name: "Detailed Kundli",
    link: "/detailed-horoscope",
  },
];

const Header = () => {
  const [model, setModel] = useState(false);
  const [modellogin, setModellogin] = useState(false);
  const [otps, setOtps] = useState(false);
  const [signup, setSignup] = useState(false);
  const [signupemail, setSignupEmail] = useState(false);
  const [signupmobile, setSignupMobile] = useState(false);
  const [signupmessage, setSignupMessage] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("+ 91");
  const [openinput, setOpeninput] = useState(true);
  const [otp, setOtp] = useState([3066]);

  const colourOptions = [
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
  ];

  const colourStyles = {
    option: (styles, { isFocused }) => {
      1;
      return {
        ...styles,
        backgroundColor: isFocused ? "#F15A2B" : null,
        color: isFocused ? "#fff " : "#000",
      };
    },
  };

  const pathname = usePathname();
  return (
    <>
      <div className="max-w-[1472px] mx-auto lgm:px-4">
        <div className="flex justify-between lgm:flex-row flex-col-reverse items-center lgm:py-[10px] lgm:gap-3">
          <div className="xl:gap-[52px] gap-6 lgm:w-auto w-full flex">
            <Link href={"/"} className="lgm:block hidden">
              <Image
                src={HeaderLogo}
                alt="Header_Logo"
                className="sm:max-w-[192px] xl:w-[192px] xsm:max-w-[130px] max-w-[115px] w-full"
              />
            </Link>
            <div
              className={`lgm:block hidden w-full lgm:py-0 py-4 lgm:pb-0 pb-0 lgm:px-0 px-4`}
            >
              <div className="font-medium flex justify-between sm:gap-x-[22px] md:gap-x-4 gap-x-2 h-full lgm:items-center gap-y-4">
                <>
                  {navItem.map((item, index) => {
                    const isActive = pathname.startsWith(item.link);
                    return (
                      <div
                        key={index}
                        className={`pt-0 lgm:px-0 lgm:pb-0 pb-2.5 underline-offset-[12px] decoration-transparent  md:decoration-[5px] decoration-[3px] hover:text-primary-orange transition-all duration-300 md:text-base text-xs lgm:border-0 border-b-2  xsm:text-left text-center ${
                          isActive
                            ? " border-b-2 !border-[#F15A2BA8] !decoration-[#F15A2BA8] text-primary-orange underline"
                            : ""
                        }`}
                      >
                        <Link href={item.link}>{item.name}</Link>
                      </div>
                    );
                  })}
                </>
              </div>
            </div>
          </div>
          <div className="flex justify-between lgm:w-auto w-full items-center lgm:px-0 px-3 lgm:py-0 py-3 lgm:border-0 border-b">
            <Link href={"/"} className="lgm:hidden block">
              <Image
                src={HeaderLogo}
                alt=""
                className="sm:max-w-[192px] xl:w-[192px] xsm:max-w-[130px] max-w-[120px] w-full"
              />
            </Link>
            <div className="flex items-center xl:gap-3 sm:gap-2 gap-1">
              <div className="bg-primary-orange text-white rounded-lg text-center p-[1px] pb-[3px] px-[5px] text-[10px] leading-none md:block hidden">
                Language
              </div>
              <div className="select-language z-[99]">
                {/* text-sm h-auto */}
                <Select
                  className={{
                    control: (state) =>
                      state.isFocused ? "bg-active" : "bg-active",
                  }}
                  options={colourOptions}
                  styles={colourStyles}
                  defaultValue={colourOptions[0]}
                  isSearchable={false}
                />
              </div>
              <>
                <button
                  className="text-[13px] text-[#787887] border border-[#D3D3D3] rounded-[4px] xl:px-[9px] px-1 xl:py-[5px] py-1 whitespace-nowrap hover:bg-primary-orange hover:border-primary-orange hover:text-[#fff] transition-all duration-300"
                  onClick={() => {
                    setModel(true);
                  }}
                >
                  Log in
                </button>
              </>
              <button
                className="text-[13px] text-[#787887] border border-[#D3D3D3] rounded-[4px] xl:px-[9px] px-1 xl:py-[5px] py-1 whitespace-nowrap hover:border-primary-orange hover:bg-primary-orange hover:text-[#fff] transition-all duration-300"
                onClick={() => {
                  setSignup(true);
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>

        <Login
          loginMOdel={true}
          show={model}
          setOpen={setModel}
          className={"bg-white"}
          title={"Log in to your account"}
          subtitle={"Welcome back! Please enter your details."}
        >
          <div className="pt-5">
            <label htmlFor="" className="block mb-[6px] text-sm">
              Email
            </label>
            <input
              type="email"
              autocomplete="off"
              placeholder="Enter your email"
              className="border block border-[#D0D5DD] placeholder:text-[#999999] w-full rounded-lg py-[10px] px-[14px]"
            />
            <label htmlFor="" className="block mb-[6px] text-sm md:mt-4 mt-2">
              Password
            </label>
            <input
              type="password"
              className="border block border-[#D0D5DD] text-[#999999] w-full rounded-lg py-[10px] px-[14px]"
              autocomplete="off"
              placeholder="••••••••"
            />
            <div className="flex justify-between mt-5 gap-1">
              <div className="flex text-sm items-center md:gap-2 gap-1 relative">
                <input
                  type="checkbox"
                  id="styled-checkbox-1"
                  value="value1"
                  className="styled-checkbox absolute opacity-0 border border-[#D0D5DD] placeholder:text-[#999999] rounded-lg py-[10px] px-[14px] w-4 h-4"
                />
                <label
                  for="styled-checkbox-1"
                  className="before:border before:rounded"
                >
                  Remember for 30 days
                </label>
              </div>
              <div>
                <Link
                  href={"#0"}
                  className="text-primary-orange text-sm font-semibold"
                >
                  Forgot password
                </Link>
              </div>
            </div>
            <div
              className="bg-primary-orange text-white text-center font-medium p-[10px] rounded-lg md:mt-8 mt-5 mb-3"
              onClick={() => {
                setModel(false), setModellogin(true);
              }}
            >
              <button>Confirm</button>
            </div>
            <div className="text-[#444444] border border-[#D0D5DD] text-center font-medium p-[10px] rounded-lg mt-3">
              <button>Cancel</button>
            </div>
            <div className="text-center sm:text-sm text-xs pt-5">
              or{" "}
              <Link href="#0" className="text-primary-orange">
                Log in using Phone number
              </Link>
            </div>
            <div className="flex items-center mt-5">
              <span className="bg-[#E4E7EC] h-[1px] w-full"></span>
              <div className={`text-center px-1 text-sm font-medium font-sans`}>
                OR
              </div>
              <span className="bg-[#E4E7EC] h-[1px] w-full"></span>
            </div>
            <div className="mt-5">
              <button className="flex gap-3 text-[#344054] font-medium border border-[#D0D5DD] rounded-lg w-full justify-center items-center p-[10px]">
                <Image src={Google} alt="" />
                Sign up with Google
              </button>
              <button className="flex gap-3 text-[#344054] font-medium border border-[#D0D5DD] rounded-lg w-full justify-center items-center p-[10px] mt-3">
                <Image src={Apple} alt="" />
                Sign up with Apple
              </button>
            </div>
          </div>
        </Login>

        <Login
          loginMOdel={true}
          show={modellogin}
          setOpen={setModellogin}
          className={"bg-white"}
          title={"Log in to your account"}
          subtitle={"Welcome back! Please enter your details."}
        >
          <div className={"flex gap-[14px] pt-5"}>
            {StoreDetaildData.map((item, index) => (
              <div
                className="w-[48%] border block border-[#D0D5DD] rounded-lg py-[10px] px-[14px]"
                key={index}
              >
                <div className="block mb-[6px] text-sm text-black/40">
                  <p className="">{item.title}</p>
                  {item.indiaState == "true" && (
                    <div className="w-full mt-2 text-[#1c1c1c] rounded-lg">
                      <div
                        className={`${
                          openinput
                            ? " bg-white"
                            : "pointer-events-none [&>div>div>button>span:last-child]:!invisible"
                        }`}
                      >
                        <CountryDropdown
                          onChange={setSelectedCountry}
                          className={""}
                          defaultCountry={selectedCountry}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="border w-[48%] block border-[#D0D5DD] rounded-lg py-[10px] px-[14px]">
              <label
                htmlFor=""
                className="block mb-[6px] text-sm text-black/40"
              >
                Phone number
              </label>
              <input
                type="number"
                placeholder="80735 89105"
                className="placeholder:text-[#000000CC] md:placeholder:text-base text-sm  w-full rounded-lg font-normal"
              />
            </div>
          </div>
          <div
            className="bg-primary-orange text-white text-center font-medium p-[10px] rounded-lg md:mt-8 mt-5 mb-3"
            onClick={() => {
              setModellogin(false), setOtps(true);
            }}
          >
            <button>Send OTP</button>
          </div>
          <div className="text-[#444444] border border-[#D0D5DD] text-center font-medium p-[10px] rounded-lg">
            <button>Cancel</button>
          </div>
          <div className="text-center sm:text-sm text-xs md:pt-5 pt-2">
            or{" "}
            <Link href="#0" className="text-primary-orange">
              {" "}
              Log in using Email
            </Link>
          </div>
        </Login>

        <Login
          loginMOdel={true}
          show={otps}
          setOpen={setOtps}
          className={"bg-white"}
          title={"Please check your messages."}
          subtitle={"We've sent an OTP on +91 88888 88888"}
          numberLink={"Edit number"}
        >
          <div className="flex gap-3 items-center justify-center otp-sec md:pt-6 pt-5 pb-[14px]">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<div></div>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="border-2 border-[#F15A2B] text-[#F15A2B] !text-3xl rounded !w-12 h-12 sm:!w-16 sm:h-16 text-center focus:outline focus:outline-offset-1 focus:outline-[#F4EBFF]"
                />
              )}
            />
          </div>
          <div className={`xsm:text-sm text-xs`}>
            Didn’t get a code?
            <Link
              href={"#0"}
              className="text-[#444444] underline underline-offset-1-"
            >
              {" "}
              Click to resend.
            </Link>
          </div>
          <div>
            <div className="flex gap-3 md:mt-8 mt-5">
              <div className="text-[#444444] border w-full border-[#D0D5DD] text-center font-medium p-[10px] rounded-lg">
                <button>Cancel</button>
              </div>
              <div className="bg-primary-orange w-full text-white text-center font-medium p-[10px] rounded-lg ">
                <button>Confirm</button>
              </div>
            </div>
          </div>
        </Login>

        <Login
          loginMOdel={true}
          SignupIcon={SignupIcon}
          show={signup}
          setOpen={setSignup}
          className={"bg-white"}
          title={"Sign up"}
          subtitle={"Start your free 30-day trial. Cancel anytime."}
        >
          <div className="pt-5">
            <input
              type="email"
              autocomplete="off"
              placeholder="Enter your email"
              className="border block border-[#D0D5DD] placeholder:text-[#999999] w-full rounded-lg py-[10px] px-[14px]"
            />
            <div
              className="bg-primary-orange w-full text-white text-center font-medium p-[10px] rounded-lg mt-4"
              onClick={() => {
                setSignup(false), setSignupEmail(true);
              }}
            >
              <button>Get started</button>
            </div>
            <div className="flex items-center md:mt-[30px] mt-5">
              <span className="bg-[#E4E7EC] h-[1px] w-full"></span>
              <div className={`text-center px-1 text-sm font-medium font-sans`}>
                OR
              </div>
              <span className="bg-[#E4E7EC] h-[1px] w-full"></span>
            </div>
            <div className="mt-5">
              <button className="flex gap-3 text-[#344054] font-medium border border-[#D0D5DD] rounded-lg w-full justify-center items-center p-[10px]">
                <Image src={Google} alt="" />
                Sign up with Google
              </button>
              <button className="flex gap-3 text-[#344054] font-medium border border-[#D0D5DD] rounded-lg w-full justify-center items-center p-[10px] mt-3">
                <Image src={Apple} alt="" />
                Sign up with Apple
              </button>
            </div>
            <div className="text-center pt-5 text-[#999999] sm:text-sm text-xs font-semibold">
              or{" "}
              <Link href="#0" className="text-primary-orange">
                {" "}
                Log in
              </Link>
            </div>
          </div>
        </Login>

        <Login
          loginMOdel={true}
          SignupIcon={SignupIcon}
          show={signupemail}
          setOpen={setSignupEmail}
          className={"bg-white"}
          title={"Sign up"}
          subtitle={"Kindly enter your details."}
        >
          <div className="pt-5">
            <label htmlFor="" className="block mb-[6px] text-sm">
              Email*
            </label>
            <input
              type="email"
              autocomplete="off"
              placeholder="sahkoh08@gmail.com"
              className="border block border-[#D0D5DD] placeholder:text-[#1C1C1C] w-full rounded-lg py-[10px] px-[14px]"
            />
            <label htmlFor="" className="block mb-[6px] text-sm md:mt-4 mt-2">
              Name*
            </label>
            <input
              required
              type="text"
              autocomplete="off"
              placeholder="Enter your name"
              className="border block border-[#D0D5DD] text-[#667085] w-full rounded-lg py-[10px] px-[14px]"
            />
            <label htmlFor="" className="block mb-[6px] text-sm md:mt-4 mt-2">
              Password*
            </label>
            <input
              type="password"
              autocomplete="off"
              placeholder="Create a password"
              className="border block border-[#D0D5DD] text-[#667085] w-full rounded-lg py-[10px] px-[14px]"
              required
            />
            <div className="text-sm pt-[6px] text-[#475467]">
              Must be at least 8 characters.
            </div>

            <div
              className="bg-primary-orange text-white text-center font-medium p-[10px] rounded-lg md:mt-8 mt-5"
              onClick={() => {
                setSignupEmail(false), setSignupMobile(true);
              }}
            >
              <button>Confirm</button>
            </div>
            <div className="text-[#444444] border border-[#D0D5DD] text-center font-medium p-[10px] rounded-lg mt-3">
              <button>Cancel</button>
            </div>
          </div>
        </Login>

        <Login
          loginMOdel={true}
          SignupIcon={SignupIcon}
          show={signupmobile}
          setOpen={setSignupMobile}
          className={"bg-white"}
          title={"Enter your phone number"}
          subtitle={"For easy access to your account."}
        >
          <div className="pt-5">
            <div className={"flex gap-[14px]"}>
              {StoreDetaildData.map((item, index) => (
                <div
                  className="w-[55%] border block border-[#D0D5DD] rounded-lg py-[10px] px-[14px]"
                  key={index}
                >
                  <div className="block mb-[6px] text-sm text-black/40">
                    <p className="">{item.title}</p>
                    {item.indiaState == "true" && (
                      <div className="w-full mt-2 text-[#000000CC] rounded-lg">
                        <div
                          className={`${
                            openinput
                              ? "`bg-white"
                              : "pointer-events-none [&>div>div>button>span:last-child]:!invisible"
                          }`}
                        >
                          <CountryDropdown
                            onChange={setSelectedCountry}
                            className={""}
                            defaultCountry={selectedCountry}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="border block border-[#D0D5DD] rounded-lg py-[10px] px-[14px]">
                <label
                  htmlFor=""
                  className="block mb-[6px] text-sm text-black/40"
                >
                  Phone number
                </label>
                <input
                  type=""
                  value="80735 89105"
                  className="placeholder:text-[#999999] md:text-base text-sm w-full rounded-lg"
                />
              </div>
            </div>
            <div
              className="bg-primary-orange text-white text-center font-medium p-[10px] rounded-lg md:mt-8 mt-5"
              onClick={() => {
                setSignupMobile(false), setSignupMessage(true);
              }}
            >
              <button>Confirm</button>
            </div>
            <div className="text-[#444444] border border-[#D0D5DD] text-center font-medium p-[10px] rounded-lg mt-3">
              <button>Cancel</button>
            </div>
            <Link
              href={"#0"}
              className="text-[#999999] font-semibold text-sm block text-center pt-5"
            >
              Skip
            </Link>
          </div>
        </Login>

        <Login
          loginMOdel={true}
          show={signupmessage}
          setOpen={setSignupMessage}
          className={"bg-white"}
          title={"Please check your messages."}
          subtitle={"We've sent an OTP on +91 88888 88888"}
          numberLink={"Edit number"}
        >
          <div className="flex gap-3 items-center justify-center otp-sec md:pt-6 pt-4 pb-[14px]">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<div></div>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="border-2 border-[#F15A2B] text-[#F15A2B] !text-3xl rounded !w-12 h-12 sm:!w-16 sm:h-16 text-center focus:outline focus:outline-offset-1 focus:outline-[#F4EBFF]"
                />
              )}
            />
          </div>
          <div className={`text-sm`}>
            Didn’t get a code?
            <Link
              href={"#0"}
              className="text-[#444444] text-sm underline underline-offset-1-"
            >
              {" "}
              Click to resend.
            </Link>
          </div>
          <div>
            <div className="flex gap-3 md:mt-8 mt-5">
              <div className="text-[#444444] border w-full border-[#D0D5DD] text-center font-medium p-[10px] rounded-lg">
                <button>Cancel</button>
              </div>
              <div className="bg-primary-orange w-full text-white text-center font-medium p-[10px] rounded-lg">
                <button>Confirm</button>
              </div>
            </div>
          </div>
        </Login>
      </div>
      <div
        className={`lgm:hidden block sticky shadow-dropshadow-tab top-0 overflow-x-auto bg-white w-full left-0 z-[60] transition-all duration-300 lgm:py-0 py-4 lgm:pb-0 pb-0 lgm:px-0 px-4`}
      >
        <div className="font-medium flex justify-between sm:gap-x-[22px] md:gap-x-4 gap-x-2 h-full lgm:items-center gap-y-4">
          {navItem.map((item, index) => {
            const isActive = pathname.startsWith(item.link);
            return (
              <div
                key={index}
                className={`pt-0 lgm:px-0 lgm:pb-0 pb-2.5 hover:text-primary-orange transition-all duration-300 md:text-base text-xs  border-b-2 border-transparent xsm:text-left text-center ${
                  isActive
                    ? "border-b-2 !border-[#F15A2BA8] text-primary-orange"
                    : ""
                }`}
              >
                <Link href={item.link}>{item.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
