import React from 'react'
import Darkblue from '../../assets/icon/darkblue.svg'
import Image from 'next/image';
import Link from 'next/link';
import googleplay from '../../assets/image/googleplay.png'
import appstore from '../../assets/image/appstore.png'
import appimg from '../../assets/image/app-img.png'

const AstrodevApp = () => {
  return (
    <div className='bg-[#E0D1F0]  relative overflow-hidden'>
      <div className='flex lg:flex-row sm:flex-col flex-col  max-w-[1488px] mx-auto justify-center lg:px-6 items-center lg:items-end'>
        <div className='z-10 lg:max-w-[601px] lg:w-full md:px-7 lg:px-0 px-4 lg:pt-24 pt-6'>
          <h2 className='text-primary-black lg:text-4xl sm:text-3xl text-2xl font-bold !mb-2'>Download the AstroDev app</h2>
          <span className='font-bold text-base text-secondary-black'>Get ₹50 AstroCash</span>
          <ul className='md:py-8 py-3 main-astro'>
            <li className='flex font-normal text-sm text-secondary-black items-center pb-2 gap-[10px]'>
              <div className='mainclass'>
                <Image
                  src={Darkblue}
                  width={30}
                  height={30}
                  className=''
                  alt=""
                />
              </div>
              Instant access to experienced astrologers
            </li>
            <li className='flex font-normal text-sm text-secondary-black items-center pb-2 gap-[10px]'>
              <Image
                src={Darkblue}
                width={30}
                height={30}
                alt=""
              />
              24/7 astrology consultations at fingertips
            </li>
            <li className='flex font-normal text-sm text-secondary-black items-center pb-2 gap-[10px]'>
              <Image
                src={Darkblue}
                width={30}
                height={30}
                alt=""
              />
              Personalized insights based on horoscopes
            </li>
            <li className='flex font-normal text-sm text-secondary-black items-center pb-2 gap-[10px]'>
              <Image
                src={Darkblue}
                width={30}
                height={30}
                alt=""
              />
              Confidential and secure astrological guidance
            </li>
          </ul>
          <Link href="#0" className='text-secondary-black font-bold text-base'>Get the link to download the app</Link>
          <div className='flex gap-[11px] mt-4  sm:flex-row flex-col overflow-hidden'>
            <div className='flex sm:max-w-[314px] max-w-[273px] border bg-white border-[#F0F0F5] rounded-sm'>
              <div className='md:text-base text-sm relative py-[6px] rounded-sm text-[#000] items-center flex px-[18px] font-bold whitespace-nowrap'>
                +  91 <span className='pl-4 md:text-2xl text-[#7f7f7f] font-thin'> | </span>
              </div>
              <input
                type="number"
                placeholder=' Enter Phone number'
                id="roll"
                name="roll"
                className='numberinput md:text-base text-sm md:placeholder:text-base placeholder:text-sm sm:max-w-[289px] max-w-[189px] w-full py-[6px] px-1 rounded-sm rounded-tl-none rounded-bl-none'
                required
                minLength="10"
                maxLength="20"
              />
            </div>
            <button className='bg-[#00F076] text-[#000000] font-bold text-base whitespace-nowrap md:py-2 py-2 px-6 rounded-sm max-w-[157px] w-full transition-all duration-300 hover:bg-[#9966CC] hover:text-[#fff] border border-[#9966CC]'>
              <Link href="#0">Send app link</Link>
            </button>
          </div>
          <div className='flex md:mt-6 my-5 gap-4 md:mb-[60px]'>
            <Link href={"#0"}>
            <Image
              src={googleplay}
              alt=""
              className='max-w-[130px] min-w-[130px] w-full'
            />
            </Link>
            <Link href={"#0"}>
            <Image
              src={appstore}
              alt=""
              className='max-w-[130px] min-w-[130px] w-full'
            />
            </Link>
          </div>
        </div>
        <div className='bg-cover bg-[center_center] object-cover lg:px-0 sm:px-8 px-8 -mb-0 3xl:-mr-32 2xl:-mr-12'>
          <Image
            src={appimg}
            alt=""
            className='max-w-[100%] 3xl:min-w-[1049px]'
          />
        </div>
      </div>
    </div>
  )
}

export default AstrodevApp