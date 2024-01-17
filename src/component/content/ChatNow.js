import React from 'react'
import Link from "next/link";

const ChatNow = () => {
    return (
        <div className='bg-[#885544]'>
            <div className='container'>
                <div className='max-w-[1280px] lg:pl-[52px] lg:pr-[125px] mx-auto pt-8 pb-10 flex justify-between md:flex-col lg:flex-row flex-col items-center lg:gap-0 sm:gap-8 gap-6'>
                    <div className='text-[#fff] sm:text-center lg:text-left text-center'>
                        <h4 className='font-bold sm:text-2xl text-xl'>Still wondering about your astrological queries?</h4>
                        <p className='md:mt-8 mt-4 font-normal text-base'>Connect with top astrologers online at AstroDev.</p>
                    </div>
                    <button className='bg-[#374CB3] sm:py-3 py-2  max-w-[309px] w-full  text-[#FFFAFA] rounded text-lg border border-[#199FD9] whitespace-nowrap hover:bg-transparent hover:border-white transition-all duration-300'>
                        <Link href="#0">Chat Now</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatNow;