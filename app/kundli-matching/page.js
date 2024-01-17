"use client";
import React from "react";
import Herosection from "../../src/component/chatwithastrologer/Herosection";
import Online from "../../src/component/Kundli/Online-Kundli";
import Matchingparagraph from "../../src/component/Kundli/Matchingkundli-paragraph";
import Offer from "../../src/component/content/Offer";
import Asttodev from "../../src/component/content/AstrodevApp";
import Faq from "../../src/component/content/Faq";
import Kundlimilan from "../../src/component/Kundli/KundliMilan";
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
      "For centuries, Kundli matching, also known as Kundli Milan, has been a cornerstone of arranged marriages in Indian culture. It is a sacred practice believed to provide an insight into the compatibility of two individuals destined to spend their lives together. At AstroDev, we embrace this age-old wisdom of Vedic astrology to ensure you embark on your marital journey with the right partner.",
  },
  {
    description:
      "Our expert astrologers meticulously analyze the Kundlis of potential partners, focusing on the 'Ashtakoota' method, which assesses compatibility on eight parameters - Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot, and Nadi. These parameters evaluate the couple's mental compatibility, the likelihood of progeny, mutual understanding, and several other vital aspects crucial for a successful marriage.",
  },
  {
    description:
      "Kundli matching is not just an astrological practice but a reflection of the societal importance we attach to marriage. It aids in understanding the dynamics the couple might share after marriage. The matching of Kundlis, thereby, allows a deep understanding of each other's temperament, behavior, lifestyle, and interests, making the transition smoother and the bond stronger.",
  },
  {
    description:
      "Moreover, Kundli matching also identifies any potential difficulties the couple may face in their marital life. It allows the astrologer to suggest remedies to overcome or lessen the impact of such issues. Thus, Kundli matching acts as a guiding light, illuminating the path to a harmonious marital life.",
  },
  {
    description:
      "AstroDev's dedicated Kundli matching service is reliable and easily accessible. With an easy-to-use interface and a team of skilled astrologers at your service, we aim to simplify the Kundli matching process for you. Our commitment is to provide you with the most accurate and comprehensive Kundli matching results, helping you make one of life's most important decisions with confidence and peace of mind.",
  },
  {
    description:
      "Whether you're curious about Kundli matching for yourself or for a loved one, you can trust AstroDev for detailed and precise analysis. Experience the best of traditional wisdom blended with modern technology at AstroDev, and step into your marital life with assurance and joy.",
  },
];

const KundliMatching = () => {
  return (
    <>
      <Herosection
        title={"Kundli Matching"}
        subtitle={
          "Unveil the Secrets of Marital Harmony with AstroDev's Expert Kundli Matching Services."
        }
        getlink={"Auto-Save Your Kundlis - Download AstroDev App Now!"}
      />
      <Online
        title={
          "Kundli Matching at AstroDev: Your First Step Towards a Prosperous and Fulfilling Married Life"
        }
        kundliData={kundliData}
      />
      <Kundlimilan />
      <Matchingparagraph />
      <Offer />
      <Asttodev />
      <Faq heading={"FAQs about Free Online Kundli"} Faqs={Faqs} />
      <Floating downlodNow={false} />
    </>
  );
};
export default KundliMatching;
