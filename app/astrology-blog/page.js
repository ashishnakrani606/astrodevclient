import React from 'react'
import Offer from '../../src/component/content/Offer'
import Asttodev from '../../src/component/content/AstrodevApp'
import Image from "next/image";
import Search from '../../src/assets/icon/blogsearch.svg'
import HeroBanner from "../../src/component/blog/HeroBanner";
import AstroBlog from "../../src/component/blog/AstroBlog";
import Faq from '../../src/component/content/Faq'

const Faqs = [
    {
        id: 1,
        title: "What is the AstroDev's Astrology Blog about?",
        description: "Our Astrology Blog is an engaging platform where we share insightful articles related to different facets of astrology. Our mission is to make complex astrological concepts understandable and applicable to your everyday life.",
    },
    {
        id: 2,
        title: "Can I find articles about my Zodiac sign on your Astrology Blog?",
        description: "Absolutely! Our Astrology Blog includes comprehensive content about all the zodiac signs. From personality traits to love compatibility, we cover a wide range of topics related to each sign.",
    },
    {
        id: 3,
        title: "Are the articles on your Astrology Blog written by professional astrologers?",
        description: "Yes, our Astrology Blog content is penned by skilled astrologers and experts in the field, ensuring that the information we provide is reliable, insightful, and beneficial to our readers.",
    },
    {
        id: 4,
        title: "How often do you post on the Astrology Blog?",
        description: "We strive to maintain a regular posting schedule to keep our readers updated with fresh astrological insights. Make sure to check back often or subscribe to our newsletter for updates.",
    },
    {
        id: 5,
        title: "Does the Astrology Blog cover topics like Vedic Astrology and Kundli?",
        description: "Our Astrology Blog covers a broad spectrum of topics including Vedic Astrology, Kundli analysis, planetary movements, zodiac sign traits, and much more."
    },
    {
        id: 6,
        title: "What can I gain from reading the Astrology Blog?",
        description: "Avail a free online consultation with top doctors in India during the"
    },
    {
        id: 7,
        title: "Do you offer personalized horoscopes on the Astrology Blog?",
        description: "While our Astrology Blog provides general astrological insights, for personalized horoscopes, you can avail of our astrology services provided on the AstroDev platform."
    },
    {
        id: 8,
        title: "Can I request a topic to be covered on the Astrology Blog?",
        description: "We welcome reader input and encourage you to reach out if there's a specific topic you'd like us to cover. You can contact us through our website's contact form."
    },
    {
        id: 9,
        title: "Does the Astrology Blog cover topics on Numerology?",
        description: "Yes, our Astrology Blog does include topics related to Numerology. We believe in providing our readers a well-rounded understanding of the esoteric sciences."
    },
    {
        id: 10,
        title: "Can I share articles from your Astrology Blog on my social media?",
        description: "Absolutely! We encourage readers to share our posts and spread the knowledge. However, please make sure to credit AstroDev as the source."
    },
    {
        id: 11,
        title: "Is there a subscription fee for accessing the Astrology Blog?",
        description: "No, our Astrology Blog is free for all readers. Our aim is to make astrological knowledge accessible to everyone."
    },
    {
        id: 10,
        title: "How can I stay updated with new posts on the Astrology Blog?",
        description: "You can stay updated with our Astrology Blog by subscribing to our newsletter. You will receive email notifications whenever a new post is published."
    },
]
const Blog = () => {
    return (
        <>
            <HeroBanner
        className={""}
        title={"Astrology Blog"}
        detail={
          "Welcome to AstroDev's 'Astrology Blog,' your trusted source for insightful and enriching content that connects the cosmic world with our daily lives. Our blog explores the fascinating realms of astrology, from simple sun signs to complex celestial patterns, offering practical advice, spiritual insights, and the wisdom of ages to guide you on your life's journey. As believers in astrology's transformative power, we are dedicated to empowering you with knowledge that helps you better understand yourself and the universe. Dive into our articles and unearth the pearls of wisdom that lie within the cosmic depths."
        }
        link={"Blog"}>
        <div className="max-w-[1053px] w-full mx-auto mt-6 relative">
          <input type="text" name="" placeholder="Search" className="md:py-[14px] py-2 pl-[16px] pr-[50px] w-full rounded-md placeholder:text-[#A7A7A7]"/>
          <Image src={Search} alt="" className="absolute md:top-[15px] top-2 right-[15px]"/>
        </div>
      </HeroBanner>
      < AstroBlog />
            <Offer 
            />
            <Asttodev />
            <Faq
                heading={"FAQs about our Astrology Blog"}
                Faqs={Faqs}
            />
        </>
    )
}

export default Blog
