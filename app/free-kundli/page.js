"use client";
import React from "react";
import Herosection from "../../src/component/chatwithastrologer/Herosection";
import Online from "../../src/component/Kundli/Online-Kundli";
import Getkundli from "../../src/component/Kundli/Get-Kundli";
import Freeparagraph from "../../src/component/Kundli/Freekundli-Paragraph";
import Offer from "../../src/component/content/Offer";
import Asttodev from "../../src/component/content/AstrodevApp";
import Faq from "../../src/component/content/Faq";
import Floating from "./../../src/component/Floating";

const Faqs = [
  {
    id: 1,
    title: "What is online doctor consultation?",
    description:
      "Online doctor consultation or online medical consultation is a method",
  },
  {
    id: 2,
    title: "How do I start online consultation with doctors on Practo?",
    description:
      "Starting an online doctor consultation is very simple on Practo.Follow",
  },
  {
    id: 3,
    title: "Are your online doctors qualified?",
    description:
      "We follow a strict verification process for every doctor providing only",
  },
  {
    id: 4,
    title: "Is online doctor consultation safe and secured on Practo?",
    description:
      "The privacy of our patients is critical to us, and thus, we are compli",
  },
  {
    id: 5,
    title: "What happens if I don’t get a response from a doctor?",
    description:
      "In the unlikely event that an online doctor does not respond, you will",
  },
  {
    id: 6,
    title: "Can I do a free online doctor consultation on Practo?",
    description:
      "Avail a free online consultation with top doctors in India during the",
  },
];
const kundliData = [
  {
    description:
      "Your Kundli, or Janam Kundli, is more than just a birth chart. It's a detailed cosmic blueprint of your life, intricately plotted with the positionin celestial bodies at the time and place of your birth. This ancient Vedic tool is instrumental in understanding your past, navigating your present, and foreseeing your future.",
  },
  {
    description:
      "At AstroDev, we harness the profound wisdom of Vedic Astrology to analyze and interpret your Kundli. Our free Kundli service illuminates your life's patterns, propensities, and possibilities. It guides you through your life's journey, offering invaluable insights into your personality, destiny, and relationships. It provides clarity on aspects as diverse as your career prospects, health issues, and marital compatibility.",
  },
  {
    description:
      "By deeply examining the twelve houses of your Kundli, which represent different aspects of your life, our expert astrologers can provide you with clear guidance. These houses, filled with different celestial bodies (or 'Grahas'), hold the secrets to your karma and your dharma. Understanding their significance can help you harness your strengths, tackle challenges, and align your actions with cosmic rhythms.",
  },
  {
    description:
      "AstroDev's free Kundli service is rooted in a tradition of astrological expertise. Yet, it's finely tuned to the demands of the modern world. It's a convenient, user-friendly service that brings the wisdom of the cosmos to your fingertips. All it requires is your birth details, and our algorithm does the rest, generating your detailed Kundli and providing interpretative insights.",
  },
  {
    description:
      "In the vast cosmic play, your Kundli serves as your personal script. It helps you understand your character, your role, and the stage on which your life unfolds. So, why stay in the dark? Embrace the light of cosmic wisdom. Illuminate your path with AstroDev's free Kundli analysis today. Let the cosmos guide you, let AstroDev be the bridge.",
  },
];

const FreeKundli = () => {
  return (
    <>
      <Herosection
        title={"Free Janam Kundli"}
        subtitle={
          "Unearth the mysteries of your Janam Kundli through Astrology."
        }
        getlink={"Download & save your Janam Kundli on your phone."}
      />
      <Online
        title={
          "Free Kundli Online: Unlock Your Cosmic Blueprint with your free Astrology Kundli"
        }
        kundliData={kundliData}
      />
      <Getkundli title={"Get your Kundli / Janam Kundli"} btn={"Get Kundli"} />
      <Freeparagraph />
      <Offer />
      <Asttodev />
      <Faq heading={"FAQs about Free Online Kundli"} Faqs={Faqs} />
      <Floating downlodNow={false} />
    </>
  );
};
export default FreeKundli;
