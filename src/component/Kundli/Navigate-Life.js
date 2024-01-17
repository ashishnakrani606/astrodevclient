import React from 'react'
import Unravel from './../../assets/icon/unravel.svg'
import Unravel2 from './../../assets/icon/balancejourney.svg'
import Unravel3 from './../../assets/icon/secreate.svg'
import Unravel4 from './../../assets/icon/crusial.svg'
import Unravel5 from './../../assets/icon/deeper.svg'
import Unravel6 from './../../assets/icon/nakshtra.svg'
import Image from "next/image";

const navigateLife = [
    {
        id: 1,
        img: Unravel,
        title: 'Unravel Your Life’s Mystery with Detailed Astrological Predictions',
        detail: 'Gain profound insights about your life’s direction and make informed decisions.'
    },
    {
        id: 2,
        img: Unravel2,
        title: 'Understand Doshas & Remedies for a Balanced Life Journey',
        detail: 'Mitigate the challenges posed by Doshas with our detailed, cost-effective remedies.'
    },
    {
        id: 3,
        img: Unravel3,
        title: 'Explore the Success Secrets of Rajyogas in Your Kundli',
        detail: 'Discover prosperity Yogas, golden periods, and strengths in life.'
    },
    {
        id: 4,
        img: Unravel4,
        title: 'Determine Favorable Periods for Life’s Crucial Decisions',
        detail: 'Find out the best times for marriage, finance, health, children, property, and family decisions.'
    },
    {
        id: 5,
        img: Unravel5,
        title: 'Delve Deeper with our Comprehensive Lal Kitab Report',
        detail: 'Get Lal Kitab Kundli, remedies, debt, Teva Type, Varsh Charts, and more.'
    },
    {
        id: 6,
        img: Unravel6,
        title: 'Analyze your Stellar Astrology - Nakshatra Nadi in Detail',
        detail: 'Understand your KP, KCIL, Cuspal Interlinks, 4-Step & other advanced systems.'
    },
]

const navigatelife = () => {
    return (
        <div className='max-w-[1510px] px-4 mx-auto'>
            <div className='text-secondary-black text-center lg:py-20 md:py-10 py-6'>
                <div className='max-w-[998px] mx-auto'>
                    <h3 className='sm:text-lg text-sm font-semibold'>Unlock your potential with in-depth astrological analysis and guidance</h3>
                    <h2 className='lg:text-[56px] md:text-4xl sm:text-3xl text-2xl font-bold !leading-[1.2] pt-6'>Navigate Life’s Course with Detailed Kundli from Astrodev</h2>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 xsm:grid-cols-2 xl:gap-10 lg:gap-8 gap-6 gap-y-[26px] lg:py-[70px] md:py-12 py-7'>
                    {navigateLife.map((item, index) => (
                        <div key={index} className='text-left border border-[#DCE7ED] rounded-3xl sm:p-6 p-4 lg:p-6 xl:py-8 xl:px-12 px-6 lg:min-h-[411px] sm:min-h-[311px] flex'>
                            <div className='flex flex-col justify-between gap-4'>                                <div>
                                <Image src={item.img} alt="" className='md:max-w-full max-w-[40px]'/>
                                <h4 className='lg:text-2xl sm:text-lg md:text-xl font-semibold pt-6'>{item.title}</h4>
                            </div>
                                <p className='lg:pt-16 text-sm sm:text-base'>{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className='sm:text-lg text-base'><span className='font-bold'>Astrodev’s Detailed Kundli </span> is your roadmap to a prosperous and harmonious life. Unlock your life’s potential, today.</p>
            </div>
        </div>
    )
}

export default navigatelife


