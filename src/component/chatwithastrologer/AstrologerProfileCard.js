"use client"
import React, { useState, useMemo } from 'react'
import Image from 'next/image';
import Profile from './../../assets/image/profile1.png'
import Profile2 from './../../assets/image/profile-2.png'
import Profile3 from './../../assets/image/profile-3.png'
import Star from './../../assets/icon/star.svg'
import Gift from './../../assets/image/gift.svg'
import Filter from './../../assets/icon/filter.svg'
import Sort from './../../assets/icon/sort.svg'
import Seach from './../../assets/icon/search.svg'
import { Roboto } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Login from "./../model/Login";

import Link from "next/link";
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

const profileData = [
  {
    id: 1,
    img: Profile,
    badge: "Online",
    review: 'Reviews:',
    reviewNumber: ' 2216',
    name: 'SunnilM',
    work: 'Numerology',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 108/min',
    charge2: '₹ 150/min',
    gift: 'Deal',
    giftIcon: Gift,
    btn: 'Chat',
    rate: 'Top Rated',
    callbtn: 'Call'
  },
  {
    id: 2,
    img: Profile2,
    badge: "Online",
    review: 'Reviews:',
    reviewNumber: ' 445',
    name: 'HemaS',
    work: 'Tarot Reading',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 88/min',
    charge2: '₹ 120/min',
    gift: 'Deal',
    giftIcon: Gift,
    btn: 'Chat',
    bgColor: '!bg-[#374CB3]',
    rate: 'Must Try',
    callbtn: 'Call'
  },
  {
    id: 3,
    img: Profile3,
    badge: "Offline",
    review: 'Reviews:',
    reviewNumber: ' 445',
    name: 'Sanchit',
    work: 'Tarot Reading',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi, Punjabi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 88/min',
    btn: 'Offline',
    callbtn: 'Offline',
    offline: 'bg-[#E8E8E8]',
  },
  {
    id: 4,
    img: Profile,
    badge: "Busy",
    review: 'Reviews:',
    reviewNumber: ' 2216',
    name: 'SunnilM',
    work: 'Numerology',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 108/min',
    charge2: '₹ 150/min',
    gift: 'Deal',
    giftIcon: Gift,
    btn: 'Busy',
    rate: 'Top Rated',
    busy: 'bg-[#E50019]',
    time: 'Wait ~ 8m',
    callbtn: 'Call'
  },
  {
    id: 5,
    img: Profile2,
    badge: "Online",
    review: 'Reviews:',
    reviewNumber: ' 445',
    name: 'HemaS',
    work: 'Tarot Reading',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 88/min',
    charge2: '₹ 120/min',
    gift: 'Deal',
    giftIcon: Gift,
    btn: 'Chat',
    bgColor: '!bg-[#374CB3]',
    rate: 'Must Try',
    callbtn: 'Call'
  },
  {
    id: 6,
    img: Profile3,
    badge: "Offline",
    review: 'Reviews:',
    reviewNumber: ' 445',
    name: 'Sanchit',
    work: 'Tarot Reading',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi, Punjabi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 88/min',
    btn: 'Offline',
    callbtn: 'Offline',
    offline: 'bg-[#E8E8E8]'

  },
  {
    id: 7,
    img: Profile,
    badge: "Online",
    review: 'Reviews:',
    reviewNumber: ' 2216',
    name: 'SunnilM',
    work: 'Numerology',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 108/min',
    charge2: '₹ 150/min',
    gift: 'Deal',
    giftIcon: Gift,
    btn: 'Chat',
    rate: 'Top Rated',
    callbtn: 'Call'
  },
  {
    id: 8,
    img: Profile2,
    badge: "Online",
    review: 'Reviews:',
    reviewNumber: ' 445',
    name: 'HemaS',
    work: 'Tarot Reading',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 88/min',
    charge2: '₹ 120/min',
    gift: 'Deal',
    giftIcon: Gift,
    btn: 'Chat',
    bgColor: '!bg-[#374CB3]',
    rate: 'Must Try',
    callbtn: 'Call'
  },
  {
    id: 9,
    img: Profile3,
    badge: "Offline",
    review: 'Reviews:',
    reviewNumber: ' 445',
    name: 'Sanchit',
    work: 'Tarot Reading',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi, Punjabi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 88/min',
    btn: 'Offline',
    offline: 'bg-[#E8E8E8]',
    callbtn: 'Offline',

  },
  {
    id: 10,
    img: Profile,
    badge: "Online",
    review: 'Reviews:',
    reviewNumber: ' 2216',
    name: 'SunnilM',
    work: 'Numerology',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 108/min',
    charge2: '₹ 150/min',
    gift: 'Deal',
    giftIcon: Gift,
    btn: 'Chat',
    rate: 'Top Rated',
    callbtn: 'Call'
  },
  {
    id: 11,
    img: Profile2,
    badge: "Online",
    review: 'Reviews:',
    reviewNumber: ' 445',
    name: 'HemaS',
    work: 'Tarot Reading',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 88/min',
    charge2: '₹ 120/min',
    gift: 'Deal',
    giftIcon: Gift,
    btn: 'Chat',
    bgColor: '!bg-[#374CB3]',
    rate: 'Must Try',
    callbtn: 'Call'
  },
  {
    id: 12,
    img: Profile3,
    badge: "Offline",
    review: 'Reviews:',
    reviewNumber: ' 445',
    name: 'Sanchit',
    work: 'Tarot Reading',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi, Punjabi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 88/min',
    btn: 'Offline',
    callbtn: 'Offline',
    offline: 'bg-[#E8E8E8]'

  },
  {
    id: 13,
    img: Profile,
    badge: "Online",
    review: 'Reviews:',
    reviewNumber: ' 2216',
    name: 'SunnilM',
    work: 'Numerology',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 108/min',
    charge2: '₹ 150/min',
    gift: 'Deal',
    giftIcon: Gift,
    btn: 'Chat',
    rate: 'Top Rated',
    callbtn: 'Call'
  },
  {
    id: 14,
    img: Profile2,
    badge: "Online",
    review: 'Reviews:',
    reviewNumber: ' 445',
    name: 'HemaS',
    work: 'Tarot Reading',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 88/min',
    charge2: '₹ 120/min',
    gift: 'Deal',
    giftIcon: Gift,
    btn: 'Chat',
    bgColor: '!bg-[#374CB3]',
    rate: 'Must Try',
    callbtn: 'Call'
  },
  {
    id: 15,
    img: Profile3,
    badge: "Offline",
    review: 'Reviews:',
    reviewNumber: ' 445',
    name: 'Sanchit',
    work: 'Tarot Reading',
    rating: '4.91',
    icon: Star,
    Langague: 'English, Hindi, Punjabi',
    experiance: 'Exp: 16 Years',
    charge: '₹ 88/min',
    btn: 'Offline',
    callbtn: 'Offline',
    offline: 'bg-[#E8E8E8]',


  },
]

const languageOptions = ["Bengali", "English", "Gujarati", "Hindi", "Kannada", "Marathi", "Punjabi", "Tamil", "Telugu"];
const skill = ["Face Reading", "Kp", "Life Coach", "Nadi", "Numerology", "Palmistry", "Prashana", "Psychic", "Tarot", "Vastu", "Vedic"];
const gender = ["Female", "Male"];
const country = ["India", "Outside India"];
const offer = ["Active", "Not Active"];
const topChoice = [" Active", "All", "Must Try", "Top Choice"];

const AstrologerProfileCard = (props) => {
  const [sort, setSortBy] = useState(false);
  const [filter, setFilter] = useState(false);
  const [filterTab, setFilterTab] = useState(1);
  const [search, setSearch] = useState("");
  const ProfileCard = useMemo(() => {
    if (search) {
      return profileData.filter(
        (item) =>
          (item.name).toLowerCase().indexOf(search.toLocaleLowerCase()) > -1
      );
    }
    return profileData;
  }, [search]);

  const selectAllCheckboxes = (e) => {
    let tempSelectAll = [];

    if (e.target.checked) {
      TableRow.forEach((el, index) => {
        tempSelectAll.push(index);
      });
    }

    setSelected(tempSelectAll);
  };

  const [sortList, setSortList] = useState('first');
  // const [selectAllClear, setSelectAllClear] = useState();

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectAll = () => {
    setSelectedOptions(languageOptions);
  };
  const handleskillSelectAll = () => {
    setSelectedOptions(skill);
  };

  const handleClearAll = () => {
    setSelectedOptions([]);
  };

  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;
    if (selectedOptions.includes(selectedOption)) {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== selectedOption)
      );
    } else {
      setSelectedOptions([...selectedOptions, selectedOption]);

    }
  };
  const handleSkillChange = (e) => {
    const selectedOption = e.target.value;
    if (selectedOptions.includes(selectedOption)) {
      setSelectedOptions(
        selectedOptions.filter((skilldata) => skilldata !== selectedOption)
      );
    } else {
      setSelectedOptions([...selectedOptions, selectedOption]);

    }
  };

  return (
    <>
      <div>
        <div className='bg-[#374CB3] mt-[3px]'>
          <div className='max-w-[1196px] w-full mx-auto text-white lg:px-11 px-3'>
            <div className='flex md:gap-5 gap-2 gap-y-3 py-3 sm:flex-row flex-col justify-between items-center'>
              <div className='flex lg:gap-5 gap-2 items-center'>
                <h3 className='lg:text-[22px] md:text-base text-sm font-medium'>Available Balance: ₹888</h3>
                <Link href={"#0"} className={`border-2 rounded-md md:px-4 px-2 py-[5px] lg:text-base text-sm ${poppins.className}`}>Recharge Now</Link>
              </div>
              <div className='flex gap-[10px]'>
                <div className={`flex border gap-1 border-white rounded-md sm:py-[7px] py-1 px-4 lg:text-base text-sm cursor-pointer ${poppins.className}`} onClick={() => setFilter(true)}>
                  <Image src={Filter} alt="" />
                  Filter
                </div>
                <div className={`flex border gap-1 border-white rounded-md sm:py-[7px] py-1 px-3 lg:text-base text-sm cursor-pointer ${poppins.className}`} onClick={() => setSortBy(true)}>
                  <Image src={Sort} alt="" />
                  Sort
                </div>
                <div className='relative'>
                  <input placeholder='Search Name..' type="search"
                    name="search"
                    // value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='lg:pl-5 pl-2 md:pr-9 pr-6 border text-black rounded-md bg-white h-full lg:max-w-[261px] md:max-w-[180px] max-w-[142px] w-full lg:text-base text-sm md:placeholder:text-base placeholder:text-sm placeholder:text-[#C3C3C3]' />
                  <Image src={Seach} alt="" className='absolute md:right-5 right-2  translate-y-[-50%] top-[50%]' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='max-w-[1196px] md:px-11 w-full mx-auto'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-[22px] md:gap-y-[18px] gap-y-[12px] md:my-12 my-6'>
              {ProfileCard.map((item, index) => (
                <div key={index} className='border border-[#CED5DD] rounded-[10px] relative overflow-hidden shadow-dropshadow'>
                  <div className='flex justify-between p-[10px] md:pb-5 pb-3 h-full'>
                    <div className='flex gap-4 xsm:justify-start justify-between'>
                      <div>
                        <div className='relative'>
                          <Image src={item.img} alt="" className='xsm:min-w-[81px]'/>
                          <div className={` rounded-full w-[17px] h-[17px] absolute right-0 border-2 border-white bottom-[6px] ${(item.offline) ? 'bg-[#E8E8E8]' : 'bg-[#50C878]' && (item.busy) ? 'bg-[#E50019] text-[#E50019]' : 'text-[#50C878] bg-[#50C878]'}`}></div>
                        </div>
                        <div className={` rounded-[30px] text-center text-[11px] sm:my-2 my-1 xsm:py-[2px] ${roboto.className} ${item.offline ? 'text-[#737373] bg-[#F8F8F8]' : 'text-[#50C878] bg-[#B9E9C980]' && (item.busy ? 'bg-[#FFC5CB80] text-[#E50019]' : 'text-[#50C878] bg-[#B9E9C980]')}`}>
                          {item.badge}
                        </div>
                        <h4 className={`text-xs text-black ${roboto.className}`}> {item.review}<span className='text-primary-orange font-bold'>{item.reviewNumber}</span> </h4>
                      </div>
                      <div>
                        <Link href={"/talk-to-astrologer/astrologer-profile"} className='font-semibold sm:text-[17px] text-black'>{item.name} </Link>
                        <h3 className='text-primary-orange text-xs font-medium'>{item.work}</h3>
                        <div className='sm:pt-[10px] pt-1 pb-1'>
                          <span className='bg-[#FBC02DA8] text-sm font-bold p-[3px] rounded-[3px] '>{item.rating}
                            <Image src={item.icon} alt="" className='inline-block ml-1 pb-1' />
                          </span>
                        </div>
                        <h4 className={`text-black-100 text-[11px] ${roboto.className}`}>{item.Langague}</h4>
                        <h4 className={`text-black-100 text-[11px] ${roboto.className}`}>{item.experiance}</h4>
                      </div>
                    </div>
                    <div className='flex flex-col  justify-between xsm:items-end items-center'>
                      <div className='pr-1'>
                        <h3 className='font-bold text-sm text-[#212529]'>{item.charge}</h3>
                        <h4 className='text-xs font-medium text-[#8A8A8A]'><del>{item.charge2}</del></h4>
                      </div>
                      <div className='pr-1'>
                        {item.gift &&
                          <span className={`bg-[#50C878] text-xs text-white p-[2px] px-[5px] rounded ${roboto.className}`}>{item.gift}
                            <Image src={item.giftIcon} alt="" className='inline-block pl-1 pb-2' />
                          </span>
                        }
                      </div>
                      <div className='relative'>
                        {props.btn &&
                          <div className={`border-2 text-center font-bold md:text-lg text-sm  px-2 py-1 leading-tight rounded-lg xsm:min-w-[94px] min-w-[80px] ${item.offline ? "text-[#737373] border-[#F8F8F8]" : 'border-[#50C878] text-[#50C878] cursor-pointer' && (item.busy ? 'text-[#E50019] border-[#FFC5CB] cursor-pointer' : 'border-[#50C878] text-[#50C878] cursor-pointer')} `}>
                            {item.btn}
                          </div>
                        }
                        {props.callbtn &&
                          <div className={`border-2 text-center font-bold text-lg  md:px-5 px-3 rounded-lg max-w-[94px] ${item.offline ? "text-[#737373] border-[#F8F8F8]" : 'border-[#50C878] text-[#50C878] cursor-pointer' && (item.busy ? 'text-[#E50019] border-[#FFC5CB] cursor-pointer' : 'cursor-pointer border-[#50C878] text-[#50C878]')} `}>
                            {item.callbtn}
                          </div>
                        }
                        {item.time &&
                          <span className='text-[#E50019] md:text-xs text-[10px] font-medium text-center block sm:absolute md:right-[16%] right-[18%]'>{item.time}</span>
                        }
                      </div>
                    </div>
                  </div>
                  {item.rate &&
                    <div className={`bg-primary-orange absolute text-white text-[8px] top-2 -left-[19px] profiledata py-1 font-medium px-6 ${item.bgColor}`}>{item.rate}</div>
                  }
                </div>
              ))}
            </div>
            <div className='text-center lg:pb-12 md:pb-8 pb-4 pt-1'>
              <button className='border-[#A6AFDD] border-2 rounded-lg text-lg font-extrabold text-[#374CB3] px-[10px] py-1 leading-tight
              '>Load More</button>
            </div>
          </div>
        </div>
      </div>
      <Login
        SignupIcon={true}
        className={"hidden"}
        show={sort}
        setOpen={setSortBy}
        name={"Sort By"}
      >
        <div className="pt-4">
          <div className='pb-4 cursor-default'>
            <input type='radio' defaultChecked={sortList === 'first'} onClick={() => setSortList('first') } id='first' name="sort_by" className='check-input border border-primary-orange' />
            <label for='first' className='cursor-pointer'> Popularity </label>
          </div>
          <div className='pb-4 cursor-default' >
            <input type='radio' defaultChecked={sortList === 'second'} onClick={() => setSortList('second')} id='second' name="sort_by" className='check-input' />
            <label for='second' className='cursor-pointer'>Experience  : High to Low </label>
          </div>
          <div className='pb-4 cursor-default' >
            <input type='radio' defaultChecked={sortList === 'third'} onClick={() => setSortList('third')} id='third' name="sort_by" className='check-input' />
            <label for='third' className='cursor-pointer'> Experience  : Low to High  </label>
          </div>
          <div className='pb-4 cursor-default' >
            <input type='radio' defaultChecked={sortList === 'forth'} onClick={() => setSortList('forth')} id='forth' name="sort_by" className='check-input' />
            <label for='forth' className='cursor-pointer'> Total orders : High to Low   </label>
          </div>
          <div className='pb-4 cursor-default' >
            <input type='radio' defaultChecked={sortList === 'five'} onClick={() => setSortList('five')} id='five' name="sort_by" className='check-input' />
            <label for='five' className='cursor-pointer'> Total orders : Low to High </label>
          </div>
          <div className='pb-4 cursor-default' >
            <input type='radio' defaultChecked={sortList === 'six'} onClick={() => setSortList('six')} id='six' name="sort_by" className='check-input' />
            <label for='six' className='cursor-pointer'> Price : High to Low </label>
          </div>
          <div className='pb-4 cursor-default' >
            <input type='radio' defaultChecked={sortList === 'seven'} onClick={() => setSortList('seven')} id='seven' name="sort_by" className='check-input' />
            <label for='seven' className='cursor-pointer'> Price : Low to High </label>
          </div>
          <div className='pb-4 cursor-default' >
            <input type='radio' defaultChecked={sortList === 'eight'} onClick={() => setSortList('eight')} id='eight' name="sort_by" className='check-input' />
            <label for='eight' className='cursor-pointer'> Rating : High to Low  </label>
          </div>
        </div>
      </Login>
      <Login
        SignupIcon={true}
        className={"hidden"}
        show={filter}
        setOpen={setFilter}
        name={"Filters"}
      >
        <div className="">
          <div className="flex ">
            <ul
              className="flex mb-0 list-none flex-col border-r text-sm"
              role="tablist"
            >
              <li className="
             mr-2 ">
                <a
                  className={
                    "font-bold uppercase pt-4 pb-2 block leading-normal " +
                    (filterTab === 1
                      ? "text-primary-orange decoration-primary-orange underline underline-offset-8 decoration-[2px]"
                      : "")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setFilterTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <h4 className="">Skill </h4>
                </a>
              </li>
              <li className="-mb-px mr-2">
                <a
                  className={
                    "font-bold uppercase py-4  block leading-normal " +
                    (filterTab === 2
                      ? "text-primary-orange decoration-primary-orange underline underline-offset-8 decoration-[2px]"
                      : "")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setFilterTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Language
                </a>
              </li>
              <li className="-mb-px mr-2">
                <a
                  className={
                    "font-bold uppercase py-4 block leading-normal " +
                    (filterTab === 3
                      ? "text-primary-orange decoration-primary-orange underline underline-offset-8 decoration-[2px]"
                      : "")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setFilterTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Gender
                </a>
              </li>
              <li className="-mb-px mr-2">
                <a
                  className={
                    "font-bold uppercase py-4 block leading-normal " +
                    (filterTab === 4
                      ? "text-primary-orange decoration-primary-orange underline underline-offset-8 decoration-[2px]"
                      : "")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setFilterTab(4);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Country
                </a>
              </li>
              <li className="-mb-px mr-2">
                <a
                  className={
                    "font-bold uppercase py-4 block leading-normal " +
                    (filterTab === 5
                      ? "text-primary-orange decoration-primary-orange underline underline-offset-8 decoration-[2px]"
                      : "")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setFilterTab(5);
                  }}
                  data-toggle="tab"
                  href="#link5"
                  role="tablist"
                >
                  Offer
                </a>
              </li>
              <li className="-mb-px mr-2">
                <a
                  className={
                    "font-bold uppercase py-4 block leading-normal whitespace-nowrap" +
                    (filterTab === 6
                      ? " text-primary-orange decoration-primary-orange underline underline-offset-8 decoration-[2px] whitespace-nowrap"
                      : "")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setFilterTab(6);
                  }}
                  data-toggle="tab"
                  href="#link6"
                  role="tablist"
                >
                  Top Choice
                </a>
              </li>
            </ul>
            <div className="relative flex filterscroll flex-col min-w-0 break-words bg-white w-full mb-6 pt-4 pl-4 overflow-y-auto">
              <div className="h-[400px]">
                <div className="tab-content tab-space">
                  <div className={filterTab === 1 ? "block" : "hidden"} id="link1">
                    <div>
                      <div className='flex justify-end text-primary-orange gap-4 pb-4 pr-1'>
                        <label className='cursor-pointer'>
                          <input
                            type="checkbox"
                            className='hidden'
                            checked={selectedOptions.length === skill.length}
                            onChange={handleskillSelectAll}
                          />
                          Select All
                        </label>
                        <button onClick={handleClearAll}>Clear</button>
                      </div>
                      {skill.map((skilldata) => (
                        <div key={skilldata} className='pb-4 cursor-default'>
                          <label  className='cursor-pointer'>
                            <input
                              className='check-input'
                              type="checkbox"
                              value={skilldata}
                              checked={selectedOptions.includes(skilldata)}
                              onChange={handleSkillChange}
                            />
                            {skilldata}
                          </label>
                        </div>
                      ))}

                    </div>
                  </div>

                  <div className={filterTab === 2 ? "block" : "hidden"} id="link2">
                    <div>
                      <div className='flex justify-end text-primary-orange gap-4 pb-4 pr-1'>
                        <label className='cursor-pointer'>
                          <input
                            type="checkbox"
                            className='hidden'
                            checked={selectedOptions.length === languageOptions.length}
                            onChange={handleSelectAll}
                          />
                          Select All
                        </label>
                        <button onClick={handleClearAll}>Clear</button>
                      </div>
                      {languageOptions.map((option) => (
                        <div key={option} className='pb-4 cursor-default'>
                          <label className='cursor-pointer'>
                            <input
                              className='check-input'
                              type="checkbox"
                              value={option}
                              checked={selectedOptions.includes(option)}
                              onChange={handleOptionChange}
                            />
                            {option}
                          </label>
                        </div>
                      ))}

                    </div>
                  </div>
                  <div className={filterTab === 3 ? "block" : "hidden"} id="link3">
                    {gender.map((option) => (
                      <div key={option} className='pb-4 cursor-default'>
                        <label className='cursor-pointer'>
                          <input
                            className='check-input'
                            defaultChecked
                            type="checkbox"
                          />
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className={filterTab === 4 ? "block" : "hidden"} id="link4">
                  {country.map((option) => (
                      <div key={option} className='pb-4 cursor-default'>
                        <label className='cursor-pointer'>
                          <input
                            className='check-input'
                            defaultChecked
                            type="checkbox"
                          />
                          {option}
                        </label>
                      </div>
                    ))}                    
                  </div>
                  <div className={filterTab === 5 ? "block" : "hidden"} id="link5">
                  {offer.map((option) => (
                      <div key={option} className='pb-4 cursor-default'>
                        <label className='cursor-pointer'>
                          <input
                            className='check-input'
                            defaultChecked
                            type="checkbox"
                          />
                          {option}
                        </label>
                      </div>
                    ))}                    
                  </div>
                  <div className={filterTab === 6 ? "block" : "hidden"} id="link6">
                  {topChoice.map((option) => (
                      <div key={option} className='pb-4 cursor-default'>
                        <label  className='cursor-pointer'>
                          <input
                            className='check-input'
                            defaultChecked
                            type="checkbox"
                          />
                          {option}
                        </label>
                      </div>
                    ))}                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='border-t flex justify-between pt-5'>
            <button
            className='font-medium'
              onClick={e => {
                setFilter(false)
                e.preventDefault();
                setFilterTab(1);
              }}
            >Reset</button>
            <div onClick={() => setFilter(false)}>
              <button className='bg-primary-orange p-2 rounded-lg text-white min-w-[200px]'>Apply</button>

            </div>
          </div>
        </div>

      </Login>
    </>
  );
};
export default AstrologerProfileCard;

