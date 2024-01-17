"use client";
import React from "react";
import Herosection from "../../src/component/chatwithastrologer/Herosection";
import Online from "../../src/component/Kundli/Online-Kundli";
import Rashifal from "../../src/component/aaj-ka-rasifal/Rashifal";
import Rashifalparagraph from "../../src/component/aaj-ka-rasifal/Rashifal-paragraph";
import Offer from "../../src/component/content/Offer";
import Asttodev from "../../src/component/content/AstrodevApp";
import Faq from "../../src/component/content/Faq";
import Floating from "../../src/component/Floating";

const Faqs = [
  {
    id: 1,
    title: 'What is "Aaj Ka Rashifal"?',
    description:
      "Aaj Ka Rashifal, also known as 'Today's Horoscope,' offers astrological insights and predictions for each zodiac sign on a daily basis. It provides guidance on various aspects of life, including career, love, finances, health, and more. The predictions are based on the positions of celestial bodies and their influence on your zodiac sign for the day",
  },
  {
    id: 2,
    title: 'How Accurate Is "Aaj Ka Rashifal"?',
    description:
      "AstroDev aims to provide accurate and relevant horoscope predictions, but it's important to remember that horoscopes offer general guidance rather than specific certainties. The accuracy of predictions depends on various factors, including the astrologer's expertise, the current planetary positions, and your personal life circumstances.",
  },
  {
    id: 3,
    title: 'How Can "Aaj Ka Rashifal" Benefit Me?',
    description:
      '"Aaj Ka Rashifal" can offer valuable insights into the energies and opportunities of the day. By reading your horoscope, you can gain a better understanding of potential challenges and positive aspects. This can help you make informed decisions, navigate your day with mindfulness, and take advantage of favorable circumstances.',
  },
  {
    id: 4,
    title: 'Can I Rely on "Aaj Ka Rashifal" for Major Decisions?',
    description:
      "While 'Aaj Ka Rashifal' can offer valuable insights, it's not advisable to base major life decisions solely on horoscope predictions. AstroDev's horoscopes are designed to provide guidance for daily situations and trends rather than life-altering choices.",
  },
  {
    id: 5,
    title: 'Can I Read "Aaj Ka Rashifal" for Other Zodiac Signs?',
    description:
      "Absolutely! While your own zodiac sign's horoscope is likely to resonate most with you, you can gain insights from reading the horoscopes of other zodiac signs. It can provide a broader perspective on the energies of the day and help you understand different influences.",
  },
  {
    id: 6,
    title: 'How Can I Make the Most of "Aaj Ka Rashifal"?',
    description:
      'To make the most of "Aaj Ka Rashifal," read your horoscope with an open mind and consider how the predictions align with your current circumstances. Reflect on the guidance provided, but also remember that your actions and choices play a significant role in shaping your day.',
  },
  {
    id: 7,
    title: 'How Often Should I Read "Aaj Ka Rashifal"?',
    description:
      'You can read "Aaj Ka Rashifal" daily to gain insights into the energies of the day. Regularly checking your horoscope can help you stay attuned to astrological influences and make conscious choices based on the prevailing trends.',
  },
  {
    id: 8,
    title: 'Can I Use "Aaj Ka Rashifal" as a Source of Inspiration?',
    description:
      'Absolutely! "Aaj Ka Rashifal" can serve as a source of inspiration by offering insights into potential opportunities and challenges. Use the horoscope to set positive intentions for the day and make mindful choices.',
  },
];
const kundliData = [
  {
    description:
      'Welcome to the world of "Aaj Ka Rashifal" – your go-to destination for daily horoscope predictions that offer valuable insights into the cosmic influences shaping your day. Our comprehensive horoscope guide empowers you to make informed decisions, harness positive energies, and navigate challenges with confidence.',
  },
  {
    description:
      "'Aaj Ka Rashifal' is your trusted companion, providing personalized horoscope readings tailored to your zodiac sign. Whether you're an avid astrology enthusiast or simply seeking guidance for the day, our horoscopes offer a blend of ancient wisdom and modern insights.",
  },
  {
    description:
      "As you embark on your daily journey, our horoscope predictions illuminate key areas of your life, including love, career, health, and more. Each horoscope is carefully crafted by our expert astrologers, who analyze the celestial alignments and planetary transits to provide accurate and relevant guidance.",
  },
  {
    description:
      "With 'Aaj Ka Rashifal,' you'll gain a deeper understanding of the energies at play and how they impact your zodiac sign. Our horoscopes offer not only predictions but also practical advice on how to make the most of the day's cosmic vibrations. By aligning your actions with the prevailing energies, you can maximize opportunities and overcome obstacles.",
  },
  {
    description:
      "Whether you're seeking insights for personal growth, relationship dynamics, or career decisions, 'Aaj Ka Rashifal' empowers you to approach each day with intention and awareness. Stay connected to the stars and embrace the wisdom they offer to enhance your life's journey.",
  },
  {
    description:
      "Immerse yourself in the celestial guidance of 'Aaj Ka Rashifal' and embark on a path of self-discovery, empowerment, and cosmic alignment. Let the stars be your guiding light as you navigate the intricacies of life's daily adventures.",
  },
];

const AajkaRasifal = () => {
  return (
    <>
      <Herosection
        title={"Aaj Ka Rashifal"}
        subtitle={
          "Unlock the Secrets of the Stars for a Guided Day Ahead"
        }
        getlink={"Download & save your Janam Kundli on your phone."}
      />
      <Online
        title={
          "Today Rashifal: Stay Informed with 'Aaj Ka Rashifal' – Your Daily Horoscope Guidei"
        }
        kundliData={kundliData}
      />
      <div className="lg:pb-8">
        <Rashifal />
      </div>
      <Rashifalparagraph />
      <Offer />
      <Asttodev />
      <Faq heading={"FAQs about Aaj Ka Rashifal"} Faqs={Faqs} />
      <Floating downlodNow={false} />
    </>
  );
};
export default AajkaRasifal;
