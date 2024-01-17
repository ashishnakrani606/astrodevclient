"use client"
import Astrologer from "../src/component/content/Astrologer";
import Offer from "../src/component/content/Offer";
import Kundali from "../src/component/content/Kundali";
import Article from "../src/component/content/Article";
import Benefits from "../src/component/content/Benefits";
import ChatNow from "./../src/component/content/ChatNow";
import Paragraph from "./../src/component/content/Paragraph";
import AstrodevApp from "./../src/component/content/AstrodevApp";
import AstrodevSwiper from "./../src/component/content/AstrodevSwiper";
import { useRouter } from "next/navigation";
import Faq from "./../src/component/content/Faq";
import Floating from "./../src/component/Floating";
import { Inter } from 'next/font/google'

const Faqs = [
  {
    id: 1,
    title: "What is Kundli and how is it used in AstroDev?",
    description: "Kundli, or natal chart, represents the positions of planets at your birth time. At AstroDev, we use this data to provide personalized astrological insights.",
  },
  {
    id: 2,
    title: "How does AstroDev facilitate Kundali matching for marital compatibility?",
    description: "AstroDev's Kundali matching evaluates the compatibility of potential partners based on their respective Kundlis, examining the 'gunas' or characteristics for a harmonious relationship.",
  },
  {
    id: 3,
    title: "Can AstroDev help interpret Numerology numbers and their significance in my life?",
    description: "Numerology numbers play a vital role in understanding our life and personality. AstroDev's expert astrologers interpret these numbers, providing a personalized numerological analysis.",
  },
  {
    id: 4,
    title: "Where can I find 'Aaj ka Rashifal' (today's horoscope) on AstroDev?",
    description: "Aaj ka Rashifal, or today's horoscope, is readily available on AstroDev. It provides a daily glimpse into your zodiac sign's planetary influences and potential challenges or opportunities.",
  },
  {
    id: 5,
    title: "Does AstroDev provide 'Aaj ka Panchang' (today's almanac) for auspicious timings?",
    description: "AstroDev provides Aaj ka Panchang, detailing the auspicious timings (muhurat) for the day. It helps in planning activities according to Vedic guidelines for maximum benefit."
  },
  {
    id: 6,
    title: "How reliable is Kundli matching for marriage compatibility on AstroDev?",
    description: "AstroDev's Kundli matching is a comprehensive compatibility analysis based on Vedic astrology principles. It evaluates 'gunas' for a prosperous and harmonious marital life.",
  },
  {
    id: 7,
    title: "How is a Kundali chart prepared and interpreted on AstroDev?",
    description: "A Kundali chart, prepared at AstroDev, details the positions of celestial bodies at your birth time. Our astrologers interpret it to provide individualized life predictions and guidance."
  },
  {
    id: 8,
    title: "What is 'Kundli Milan' (horoscope matching) and how does AstroDev assist with it?",
    description: "Kundli Milan or horoscope matching at AstroDev involves comparing two Kundlis for marital compatibility. This Vedic practice aids in determining the potential success of a marriage."
  },
  {
    id: 9,
    title: "Can AstroDev help me understand how astrology impacts my life?",
    description: "Astrology explores the influence of celestial bodies on our lives. AstroDev's experienced astrologers use your Kundli to understand these influences and provide personalized guidance."
  },
  {
    id: 10,
    title: "How can AstroDev assist me in making decisions based on my Kundli?",
    description: "AstroDev's astrologers interpret your Kundli to provide personalized guidance, assisting you in decision-making. These insights can help optimize your actions according to celestial influences."
  }
]

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'block'
})


export default function Home() {
  // let curl = useRouter();

  return (
    <> 
      <main className={inter.className}>
        <Astrologer />
        <Offer userImage />
        <Kundali />
        <Benefits />
        <ChatNow />
        <Article />
        <Faq heading={"FAQs"} Faqs={Faqs}  />
        <AstrodevSwiper />
        <AstrodevApp />
        <Paragraph />
        <Floating downlodNow={false} />
      </main>
    </>
  );
}
