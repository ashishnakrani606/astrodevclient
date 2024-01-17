import React from 'react'
import Offer from '../../src/component/content/Offer'
import Asttodev from '../../src/component/content/AstrodevApp'
import SpiritualJourney from '../../src/component/Spiritual-Journey'
import Ourofferings from '../../src/component/Our-Offerings'
import BehindAstrodev from '../../src/component/Behind-Astrodev'
import Joinnewsletter from '../../src/component/Join-Newsletter'


const offeringData = [
    {
        id: 1,
        heading: 'Astrologer Chat',
        description: 'Access instant astrological insights through our convenient and discrete chat services.'

    },
    {
        id: 2,
        heading: 'Astrologer Talk',
        description: 'Engage in enlightening conversations with our experienced astrologers for personalized guidance.'

    },
    {
        id: 3,
        heading: 'Kundli Analysis',
        description: "Benefit from our detailed Kundli reports to decode your life's blueprint and destiny."

    },
    {
        id: 4,
        heading: 'Gemstone Guidance',
        description: 'Explore the power of gemstones with our expert recommendations tailored to your astrological chart.'

    },
]
const about = () => {
    return (
        <>

            <SpiritualJourney />
            <Ourofferings
                title='Our Offerings'
                offeringData={offeringData}
            />
            <BehindAstrodev />
            <Offer 
            />
            <Asttodev />
            < Joinnewsletter />
        </>
    )
}

export default about
