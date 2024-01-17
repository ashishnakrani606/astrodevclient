"use client";
import React from "react";
import Herosection from "../../src/component/chatwithastrologer/Herosection";
import Online from "../../src/component/Kundli/Online-Kundli";
import Getkundli from "../../src/component/Kundli/Get-Kundli";
import GemstoneParagraph from "../../src/component/gemstone-suggestion/Gemstone-paragraph";
import Offer from "../../src/component/content/Offer";
import Asttodev from "../../src/component/content/AstrodevApp";
import Faq from "../../src/component/content/Faq";
import Floating from "../../src/component/Floating";

const Faqs = [
  {
    id: 1,
    title: "What is the purpose of AstroDev's 'Gemstone Suggestion' feature?",
    description:
      "AstroDev's 'Gemstone Suggestion' feature is designed to provide personalized recommendations on which gemstones to wear, based on a user's unique astrological chart and life objectives. Our seasoned astrologers analyze the individual's birth chart, which is a cosmic snapshot of the universe at the moment of their birth. This chart is significant as it shapes their personality, potential, challenges, and life purpose. The gemstones suggested align with your personal planetary positions and aspirations, which can help enhance life's experience, overcome challenges, and realize your full potential.",
  },
  {
    id: 2,
    title: "How can I find out which gemstone is suitable for me?",
    description:
      "To find out which gemstone is suitable for you, you can make use of AstroDev's 'Gemstone Suggestion' feature. This feature provides a personalized recommendation based on your birth chart, life objectives, and planetary positions. Remember that the most suitable gemstone for you is the one that resonates with your personal energy. While the feature provides an initial recommendation, we always suggest consulting with experienced astrologers for detailed, personalized guidance to choose the gemstone that can best aid you in your journey.",
  },
  {
    id: 3,
    title: "What is the significance of wearing a gemstone in a specific finger?",
    description:
      "In Vedic astrology, each finger corresponds to a specific planet, and each gemstone is associated with a specific planet. For example, the thumb represents Mars, while the index finger is symbolic of Jupiter. Wearing the right gemstone on the corresponding finger is believed to harmonize the energies of the planet it represents. This harmonization can lead to a balanced and fruitful life, helping you in overcoming challenges and attracting prosperity and good fortune. However, these are general guidelines and the exact finger may vary from person to person, depending on their unique birth chart. For personalized advice, it's best to consult with an experienced astrologer.",
  },
  {
    id: 4,
    title: 'What is the concept behind "firoza gemstone for which planet"?',
    description:
      "The Firoza or Turquoise gemstone is traditionally associated with the planet Venus or Shukra in Vedic astrology. This beautiful blue-green stone is known to have a calming effect and is believed to bestow the wearer with good health, fortune and protection from evil forces. The association of the Firoza gemstone with Venus is rooted in the characteristics of this planet, which represents love, beauty, art, and music.",
  },
  {
    id: 5,
    title: "Why should I trust AstroDev's 'Gemstone Suggestion'?",
    description:
      "At AstroDev, we take great pride in our team of seasoned astrologers who have a wealth of experience and knowledge in the field of Vedic astrology. Our 'Gemstone Suggestion' feature is backed by the wisdom of this experienced team. They carefully analyze your birth details and planetary positions to provide a personalized recommendation. The suggestions provided by AstroDev aim to harmonize your energies with the universe, helping you lead a more balanced and fulfilling life.",
  },
  {
    id: 6,
    title: "I am suggested an Alexandrite gemstone, in which finger to wear Alexandrite gemstone?",
    description:
      "In general, Alexandrite, a rare and precious stone associated with the planet Mercury or Budha, is usually worn on the little finger of the right hand as per Vedic astrology. This is because the little finger represents Mercury, which rules intelligence, communication, and business acumen. However, this may vary depending upon your personal astrological chart and other factors. Therefore, we always recommend consulting with an experienced astrologer for personalized advice.",
  },
  {
    id: 7,
    title: 'How does AstroDev decide "which gemstone is suitable for me"?',
    description:
      "AstroDev's expert astrologers consider various factors to determine the most suitable gemstone for you. This includes a thorough analysis of your natal chart, the positions and conditions of planets, their relationships with each other, and their influences on different aspects of your life. This holistic analysis, along with understanding your personal challenges and goals, helps us suggest the gemstone that can amplify the positive effects of beneficial planets and mitigate the negative effects of malefic ones.",
  },
  {
    id: 8,
    title: 'What process do I have to follow to get "gemstone suggestion" from AstroDev?',
    description:
      "Getting a gemstone suggestion from AstroDev is a simple and straightforward process. All you need to do is provide us with your accurate birth details, which includes date, time, and place of birth. Our seasoned astrologers analyze your natal chart based on these details and provide you with a comprehensive report suggesting the most suitable gemstone along with instructions on how to wear it, the best time to start wearing it, and the necessary rituals to be performed before wearing it.",
  },
  {
    id: 9,
    title: 'How to know which gemstone to wear based on Vedic astrology?',
    description:
      "Vedic astrology associates different gemstones with different planets. The planet ruling the ascendant or Lagna in your birth chart is considered significant in deciding the gemstone. Apart from that, the current Dasha and Mahadasha (planetary periods) also play a crucial role. An expert astrologer can guide you by analyzing these factors and suggest the gemstone that will bring you prosperity, good health, and peace. AstroDev's expert astrologers are here to provide you with precise gemstone suggestions based on your natal chart.",
  },
  {
    id: 10,
    title: 'Which gemstone for me" would work best if I have multiple planets that are malefic?',
    description:
      "The recommendation of gemstones depends on the overall analysis of your birth chart. If multiple planets are malefic in your chart, astrologers may suggest more than one gemstone or recommend a Navratna ring, which contains all nine precious gemstones, representing the nine planets in Vedic Astrology. At AstroDev, our seasoned astrologers carefully analyze your chart to provide a balanced and effective gemstone recommendation.",
  },
  {
    id: 11,
    title: 'In which finger to wear alexandrite gemstone?" How does AstroDev provide such specific suggestions?',
    description:
      "The finger to wear a gemstone on is as important as the gemstone itself. Each finger is associated with a particular planet, and wearing the gemstone on the correct finger enhances its astrological effectiveness. Alexandrite, representing Mercury, should generally be worn on the little finger. However, at AstroDev, we don't just provide general recommendations. We consider your unique astrological circumstances and provide precise guidance, including which finger you should wear your gemstone on.",
  },
  {
    id: 12,
    title: 'Is the "firoza gemstone for which planet", and how is it beneficial?',
    description:
      "Firoza or Turquoise is connected to Venus and Jupiter in Vedic Astrology. It is believed to improve the powers of communication, enhance creativity, and bring prosperity. This gemstone is known to balance emotions and create a positive influence around the wearer. It is particularly beneficial for people with a weak or ill-placed Venus or Jupiter in their chart. However, a comprehensive analysis of your birth chart by AstroDev's expert astrologers is suggested before you start wearing a Firoza.",
  },
  {
    id: 13,
    title: 'Is there a "gemstone suggestion" tool I can use to make my own decision?',
    description:
      "At AstroDev, while we do provide detailed information about various gemstones, we highly recommend a comprehensive birth chart analysis by one of our expert astrologers. This is due to the highly individualized nature of astrology, where a gemstone beneficial for one person might not have the same effects for another. Our astrologers take into account your unique astrological positions and suggest the best gemstones accordingly.",
  },
  {
    id: 14,
    title: "What should I do if I'm unsure about 'which gemstone should I wear' based on my birth chart?",
    description:
      "If you're unsure about which gemstone to wear, it's always best to consult with an expert astrologer. At AstroDev, our astrologers are skilled in analyzing complex birth charts and can provide clear, personalized advice. The right gemstone can have a significant impact on your life, so it's important to make this decision with professional guidance.",
  },
  {
    id: 15,
    title: "I'm interested in 'how to know which gemstone to wear.' Can I learn how to analyze this myself?",
    description:
      "Learning astrology, including gemstone astrology, requires a deep understanding of celestial relationships, planets, houses, and zodiac signs. While it's possible to learn these concepts, it can take considerable time and practice. If you're interested, AstroDev has resources to get you started on your learning journey. However, for immediate and precise gemstone suggestions, we recommend consulting with our experienced astrologers.",
  },
  {
    id: 16,
    title: 'What does the phrase "firoza gemstone for which planet" mean and how can it benefit me?',
    description:
      "Firoza, also known as Turquoise, is the gemstone associated with the planet Venus or Shukra in Vedic Astrology. Wearing Firoza can help in enhancing the positive effects of Venus in one's life, such as prosperity, beauty, love, and creative expression. However, it's essential to have your birth chart thoroughly analyzed by an expert astrologer before deciding to wear any gemstone, including Firoza.",
  },
  {
    id: 17,
    title: 'Can you tell me "in which finger to wear alexandrite gemstone"?',
    description:
      "According to Vedic Astrology, Alexandrite, which is often associated with the planet Mercury or Budha, should ideally be worn on the little finger of the right hand for maximum benefits. However, the optimal finger can vary depending on the individual's specific astrological chart. Hence, it's recommended to consult with an AstroDev astrologer for personalized advice.",
  },
  {
    id: 18,
    title: 'How can AstroDev help me figure out "which gemstone for me"?',
    description:
      "AstroDev offers a personalized gemstone suggestion service based on your birth chart analysis. Our experienced astrologers take into account the positions of planets at the time of your birth to understand your life patterns and suggest the most suitable gemstone or gemstones for you. This personalized advice can help harness positive energies and mitigate any negative effects from your planetary positions.",
  },
  {
    id: 19,
    title: 'Is there a universal rule for "which gemstone in which finger" or does it vary?',
    description:
      "The finger on which to wear a gemstone largely depends on the planetary correspondence of the gemstone in Vedic Astrology. For instance, the ring finger is associated with the Sun and thus is the appropriate finger for gemstones such as Ruby. The middle finger, related to Saturn, is suitable for Blue Sapphire. However, these rules aren't absolute, and personal astrological details can influence these recommendations. Always consult an experienced astrologer for precise guidance.",
  },
  {
    id: 20,
    title: 'Can I wear multiple gemstones at the same time?',
    description:
      "Yes, you can wear multiple gemstones at the same time, provided they are compatible as per your astrological chart. However, it's crucial to get an expert opinion on this as certain gemstones may counteract each other's effects. At AstroDev, our experienced astrologers will study your horoscope and recommend the best combination of gemstones for you.",
  },
  {
    id: 21,
    title: 'How often should I consult for a gemstone suggestion?',
    description:
      "It's advisable to seek gemstone suggestion every few years or during significant life changes as planetary influences can shift over time. At AstroDev, we help you understand these shifts and offer timely gemstone suggestions to ensure you receive the most beneficial cosmic energies. However, if you experience sudden, unexplained life events or challenges, it's recommended to consult an astrologer immediately.",
  },

];
const kundliData = [
  {
    description:
      "Gemstones have been deeply connected with astrology, holding great significance in our lives through their cosmic vibrations. However, choosing the right gemstone is a unique and personal process. It's not about what appeals most to the eye, but rather what resonates with your astrological chart, your life path, and your overall spiritual and emotional well-being.",
  },
  {
    description:
      "AstroDev's gemstone suggestion feature is designed to demystify the process. Our user-friendly platform uses your birth details to map out your individual astrological landscape, providing guidance on the gemstones best suited to enhance your life's journey. Whether you're looking to bolster your courage with a ruby, cultivate wisdom with a sapphire, or encourage love and harmony with a diamond, we can guide you towards the right choice.",
  },
  {
    description:
      "Our gemstone recommendations are not one-size-fits-all but tailored to each individual. They factor in everything from your ruling planet to your ascendant sign and the various influences impacting your life. We delve deep into the specifics, even advising on which finger is best to wear each gemstone. The Alexandrite gemstone, for example, is known for its magnificent color-changing properties and is often linked to the planet Mercury. It is typically worn on the little finger of the right hand, according to Vedic astrology.",
  },
  {
    description:
      "From Firoza gemstone for which planet it's beneficial to understand which gemstone should be worn for the best possible effects, AstroDev offers comprehensive, insightful, and personalized gemstone suggestions. Our aim is to assist you in aligning your life and aspirations with the cosmic energies of gemstones, helping you navigate your life path with confidence and tranquility.",
  },
  {
    description:
      "Get ready to uncover your gemstone path with AstroDev - your ultimate guide to understanding which gemstone to wear.",
  },
];

const gemstoneSuggestion = () => {
  return (
    <>
      <Herosection
        title={"Gemstone Suggestion"}
        subtitle={"Align Your Life With Cosmic Energies of Gemstones."}
        getlink={"Read about all gemstones on our mobile app."}
      />
      <Online
        title={
          "Which gemstone should I wear?: Unearth Your Ideal Gemstone with AstroDev’s Personalized Recommendations"
        }
        kundliData={kundliData}
      />
      <div className="lg:pb-8">
        <Getkundli
          title={"Free Child Kundli / Child Birth Astrology"}
          btn={"Suggest Gemstones"}
        />
      </div>
      <GemstoneParagraph />
      <Offer />
      <Asttodev />
      <Faq heading={"FAQs about Free Online Kundli"} Faqs={Faqs} />
      <Floating downlodNow={false} />
    </>
  );
};
export default gemstoneSuggestion;
