import React from "react";
import Herosection from "../../src/component/chatwithastrologer/Herosection";
import AstrologerProfileCard from "../../src/component/chatwithastrologer/AstrologerProfileCard";
import Offer from "../../src/component/content/Offer";
import Paragraph from "../../src/component/talkwithastrologer/Paragraph";
import AstrodevApp from "../../src/component/content/AstrodevApp";
import Faq from "../../src/component/content/Faq";
import Floating from "../../src/component/Floating";

const Faqs = [
  {
    id: 1,
    title: "What is the 'Talk to Astrologer' service on AstroDev?",
    description:
      "AstroDev's 'Talk to Astrologer' is a unique service where you can directly speak to experienced astrologers about your queries or concerns in life.",
  },
  {
    id: 2,
    title: "How can I talk to an astrologer online for free?",
    description:
      "While initial consultation costs may apply, AstroDev regularly offers promotional free talks with our astrologers. Keep an eye on our website and app for these offers.",
  },
  {
    id: 3,
    title: "Can I get free astrologer talk on AstroDev?",
    description:
      "AstroDev periodically provides free talk offers with astrologers as part of our promotional activities. Be sure to subscribe to our notifications to stay updated.",
  },
  {
    id: 4,
    title: "How can I talk with an astrologer for free on AstroDev?",
    description:
      "AstroDev occasionally offers promotional free talk time with our astrologers. Subscribe to our newsletters and notifications for updates.",
  },
  {
    id: 5,
    title: "What topics can I discuss when I talk to an astrologer online?",
    description:
      "You can discuss a variety of topics including your career, relationships, health, life purpose, or any specific issues that you are facing in your life.",
  },
  {
    id: 6,
    title:
      "Are my conversations during the 'Talk to Astrologer' service confidential?",
    description:
      "Absolutely. AstroDev respects your privacy and ensures that all conversations during the 'Talk to Astrologer' service are kept strictly confidential.",
  },
  {
    id: 7,
    title: "Can I talk to an astrologer online at any time?",
    description:
      "Yes, AstroDev's 'Talk to Astrologer' service is available 24/7. However, the availability of specific astrologers may vary based on their schedule.",
  },
  {
    id: 8,
    title: "Is the 'Talk to Astrologer' service available globally?",
    description:
      "Yes, you can access the 'Talk to Astrologer' service from anywhere in the world. All you need is a stable internet connection.",
  },
  {
    id: 9,
    title:
      "How experienced are the astrologers available for talk on AstroDev?",
    description:
      "All astrologers on AstroDev are well-experienced and have undergone a stringent verification process before being onboarded to ensure the quality of our service.",
  },
  {
    id: 10,
    title:
      "What language options are available for the 'Talk to Astrologer' service?",
    description:
      "AstroDev's astrologers are fluent in multiple languages. You can choose an astrologer based on your language preference.",
  },
  {
    id: 11,
    title: "How does the 'Talk to Astrologer' service work?",
    description:
      "You can choose an astrologer based on their profile and book a session. During the session, you can talk about your queries or concerns and receive astrological guidance.",
  },
  {
    id: 12,
    title:
      "Is it necessary to have prior knowledge of astrology to talk to an astrologer?",
    description:
      "Not at all. Our astrologers are skilled in explaining complex astrological concepts in simple, easy-to-understand language.",
  },
  {
    id: 13,
    title: "What if I am not satisfied with the 'Talk to Astrologer' service?",
    description:
      "AstroDev prioritizes customer satisfaction. If you are not satisfied with your session, please get in touch with our customer service team.",
  },
  {
    id: 14,
    title: "What are the charges for the 'Talk to Astrologer' service?",
    description:
      "The charges for the 'Talk to Astrologer' service vary based on the astrologer. However, AstroDev ensures that all charges are clearly mentioned upfront, with no hidden costs.",
  },
];

const TalkAstrologer = () => {
  return (
    <>
      <Herosection
        title={"Talk to Astrologer on the go!"}
        subtitle={"Get ₹50 AstroCash when you download our app."}
        getlink={"Get the link to download the app"}
      />
      <AstrologerProfileCard callbtn />
      <Offer />
      <Paragraph />
      <div className="pt-6">
        <AstrodevApp />
      </div>
      <Faq heading={"FAQs about Talk to Astrologer"} Faqs={Faqs} />
      <Floating downlodNow={true} />
    </>
  );
};
export default TalkAstrologer;

export function generateMetadata() {
  return {
    title:
      "SEO Title: Talk to Astrologer Directly | Personalized Astrology Consultation - AstroDev",
    description:
      "Schedule a personalized consultation with a qualified astrologer at AstroDev. Discuss your life concerns, understand your kundli, and gain insightful guidance. Your path to clarity is just a call away.",
    keywords:
      "Talk to astrologer, astrology consultation, personalized astrology, direct astrology call, phone astrology, astrological advice, kundli understanding, AstroDev",
  };
}
