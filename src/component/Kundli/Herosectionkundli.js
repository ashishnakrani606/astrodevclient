"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import appimg from '../../assets/image/brihat-books.png'
import appimg2 from '../../assets/image/arrowherosec.png'


const Herosection = (props) => {
 
  return (
    <>
      <div className='bg-gradientbackground  relative overflow-hidden'>
        <div className='lgm:flex lg:flex-row items-center sm:flex-col flex-col max-w-[1660px] mx-auto lgm:justify-between justify-center md:px-6 px-4 gap-3'>
          <div className='flex gap-5 items-center lgm:justify-start justify-between'>
            <div className='z-10 xl:max-w-[688px]  max-w-full w-full md:py-6 py-4'>
              <h1 className='text-secondary-black lg:text-4xl md:text-3xl xsm:text-xl text-lg font-semibold md:text-left text-center !mb-2'>Detailed Kundli / Detailed Horoscope</h1>
              <div className='md:text-left text-center'>
                <span className='font-semibold md:text-base text-sm text-secondary-black pt-1'>Explore the Depth of Your Life with Detailed Janam Kundli.</span>
              </div>
            </div>
              <div className='py-4 md:block hidden'>
                <Link href="#0" className='text-secondary-black font-bold text-base'>{props.getlink}</Link>
                <div className=''>
                  <span class="text-secondary-black text-[22px] font-semibold pt-[6px]">@ <del> Rs 799/-</del> Rs. 399/-</span>
                  <button className='bg-[#00F076] mt-4 ml-1 text-[#000000] font-bold text-base whitespace-nowrap md:py-2 py-1 px-6 rounded-[2px] max-w-[120px] w-full transition-all duration-300 hover:bg-[#9966CC] hover:text-[#fff] border border-[#9966CC]'>
                    <Link href="#0">Buy Now</Link>
                  </button>
                </div>
              </div>
          </div>
          <div className='bg-cover bg-[center_center] lgm:flex items-center object-cover hidden pt-6 pb-2 3xl:mr-16 2xl:mr-10'>
            <Image
              src={appimg2}
              alt=""
              className='max-w-[100%]'
            />
            <Image
              src={appimg}
              alt=""
              className='max-w-[100%]'
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Herosection;
