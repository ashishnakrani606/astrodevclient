"use client";
import React from "react";
import Herosection from "../../src/component/chatwithastrologer/Herosection";
import Online from "../../src/component/Kundli/Online-Kundli";
import Getkundli from "../../src/component/Kundli/Get-Kundli";
import ChildParagraph from "../../src/component/child-astrology/Child-paragraph";
import Offer from "../../src/component/content/Offer";
import Asttodev from "../../src/component/content/AstrodevApp";
import Faq from "../../src/component/content/Faq";
import Floating from "../../src/component/Floating";

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
      "Welcome to our specialized 'Child Astrology' service where the celestial blueprint of your child's future unfolds. The moment of birth is a magical instance, embedding your newborn's life with stellar imprints that can significantly shape their destiny. At AstroDev, we use the ancient wisdom of astrology to decipher these cosmic imprints in your child's birth chart or 'Child Kundli'.",
  },
  {
    description:
      "Every parent yearns for the best future for their child. Our 'Child Birth Astrology Calculato' allows parents to get insights into their child's potential strengths, challenges, career paths, and personality traits. This information can be an invaluable tool to guide them effectively through their early years and beyond.",
  },
  {
    description:
      "The influence of the stars at the time of birth plays a profound role in a child's life, and our expert astrologers meticulously analyze these patterns. We look into vital factors like the ascendant sign, moon sign, position of planets, the Nakshatra under which the child is born, and much more. These complex interpretations reveal many aspects of a child's life, including their health, education, and emotional well-being.",
  },
  {
    description:
      "Our astrology services are not just about predicting the future. They're about providing a comprehensive understanding of the celestial influences that govern your child's life. With the insights gleaned from our free child prediction astrology, parents can make informed decisions that align with their child's astrological profile, thus providing them with the best environment to thrive.",
  },
  {
    description:
      "With AstroDev's 'Child Birth Astrology' services, we hope to provide parents with a celestial roadmap that can guide their child towards a successful and fulfilling life. Explore the stars' influence on your child's destiny with us today.",
  },
];

const childAstrology = () => {
  return (
    <>
      <Herosection
        title={"Free Child Astrology"}
        subtitle={"Unfolding Life's Journey of Your Little One Through Stars"}
        getlink={"Download & save your Child’s Janam Kundli on your phone."}
      />
      <Online
        title={
          "Free Child Kundli Online: Decipher Your Newborn's Destiny with Our Free Child Prediction Astrology Services"
        }
        kundliData={kundliData}
      />
      <div className="lg:pb-8">
        <Getkundli
          title={"Free Child Kundli / Child Birth Astrology"}
          location={"Fetch Current Location, Date & Time"}
          btn={"Get Kundli"}
        />
      </div>
      <ChildParagraph />
      <Offer />
      <Asttodev />
      <Faq heading={"FAQs about Free Child Kundli / Astrology"} Faqs={Faqs} />
      <Floating downlodNow={false} />
    </>
  );
};
export default childAstrology;
