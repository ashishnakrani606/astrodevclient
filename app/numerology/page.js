import React from "react";
import Herosection from "../../src/component/chatwithastrologer/Herosection";
import Online from "../../src/component/Kundli/Online-Kundli";
import Detailparagraph from "../../src/component/Kundli/Detailkundli-Paragraph";
import Offer from "../../src/component/content/Offer";
import Asttodev from "../../src/component/content/AstrodevApp";
import Faq from "../../src/component/content/Faq";
import CalculateNumerology from "../../src/component/numerology/Calculate-numerology";
import Floating from "../../src/component/Floating";

const Faqs = [
  {
    id: 1,
    title: "What is the significance of Rajyogas in Detailed Kundli?",
    description:
      "Rajyogas are considered auspicious combinations of planets in a kundli that bestow prosperity, success, and royal ranks in one's life. A detailed kundli identifies these Rajyogas and provides an in-depth interpretation of their implications. In Astrodev's Detailed Kundli, you'll find information about any potential Rajyogas present in your horoscope, helping you understand and utilize these beneficial periods to achieve success in life.",
  },
  {
    id: 2,
    title: "What does 'Favorable Periods for Life' mean in a Detailed Kundli?",
    description:
      "'Favorable Periods for Life' in a Detailed Kundli refers to specific time periods predicted to be auspicious or beneficial for various aspects of life such as marriage, finance, health, children, property, and family. Astrodev's Detailed Kundli provides this crucial information, allowing individuals to make informed decisions and undertake significant actions or changes during these auspicious periods for the best outcomes.",
  },
  {
    id: 3,
    title: "What is Lal Kitab and how is it related to Detailed Kundli?",
    description:
      "Lal Kitab is a unique branch of Vedic Astrology, emphasizing effective remedies to alleviate astrological afflictions. In a Detailed Kundli, a Lal Kitab report provides insights into one's Lal Kitab Kundli, including remedies, debts, and Varsh charts. Astrodev's Detailed Kundli offers a comprehensive Lal Kitab report to help individuals understand their astrological landscape and adopt suitable remedies to navigate life's challenges",
  },
  {
    id: 4,
    title: "What is Stellar Astrology and its role in a Detailed Kundli?",
    description:
      "Stellar Astrology, or Nakshatra Nadi, is a sophisticated system of astrology that provides accurate predictions by analyzing the stellar and sub-stellar positions of planets in a kundli. Detailed Kundli includes this advanced system, along with others like KP, KCIL, Cuspal Interlinks, and 4-Step, to provide precise, in-depth astrological analysis. Astrodev's Detailed Kundli incorporates Stellar Astrology for a thorough understanding of one's life prospects.",
  },  
];

const kundliData = [
  {
    description:
      "When it comes to understanding the intricate dynamics of your life through astrology, a detailed Kundli serves as an essential guide. AstroDev is proud to offer a platform where you can obtain your detailed Kundli, providing an in-depth analysis of various aspects of your life.",
  },
  {
    description:
      'Our "Detailed Kundli" service is more than just an astrological chart. It is a blueprint of your life, unfolding intricate details about your personality, career, relationships, health, and much more. Crafted with precision using your birth details, our comprehensive Kundli provides a microscopic view of your life events.',
  },
  {
    description:
      '"Detailed Janam Kundli" at AstroDev is a unique blend of Vedic wisdom and advanced astrological calculations. Each house in your Kundli represents a different aspect of your life, and the positioning of various celestial bodies signifies unique influences. Our expert astrologers read these celestial placements and translate them into meaningful insights.',
  },
  {
    description:
      "This service caters to those seeking a 'detailed horoscope' analysis, including predictions and remedies based on your planetary positions. The detailed horoscope is akin to a cosmic mirror, reflecting your past, present, and potential future events. It serves as a roadmap, helping navigate life's journey more effectively.",
  },
  {
    description:
      'Moreover, a "Kundli in detail" from AstroDev can help identify any astrological doshas or discrepancies that might be affecting your life. It can provide you with suitable remedies or "upayas" to alleviate these doshas, fostering prosperity and contentment in life.',
  },
  {
    description:
      "Whether you are seeking guidance on your career trajectory, insights into your relationships, understanding of your health prospects, or clarity about your life's purpose, a detailed Kundli from AstroDev can answer these queries. With accurate birth details, our expert astrologers will provide a detailed Kundli that serves as a personalized astrological manual for your life.",
  },
  {
    description:
      "Trust AstroDev for a comprehensive and detailed Kundli analysis, and take the first step towards a journey of self-discovery and cosmic understanding. Unlock the mysteries of your life with a detailed Kundli today!",
  },
];

const Numerology = () => {
  return (
    <>
      <Herosection
        title={"Numerology Calculator"}
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
      <CalculateNumerology />
      <Detailparagraph />
      <Offer />
      <Asttodev />
      <Faq heading={"FAQs about Free Online Kundli"} Faqs={Faqs} />
      <Floating downlodNow={false} />
    </>
  );
};

export default Numerology;
