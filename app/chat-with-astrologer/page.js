import React from "react";
import Head from "next/head";
import Herosection from "../../src/component/chatwithastrologer/Herosection";
import AstrologerProfileCard from "../../src/component/chatwithastrologer/AstrologerProfileCard";
import Offer from "../../src/component/content/Offer";
import Paragraph from "../../src/component/chatwithastrologer/Paragraph";
import AstrodevApp from "../../src/component/content/AstrodevApp";
import Faq from "../../src/component/content/Faq";
import Floating from "../../src/component/Floating";

const Faqs = [
  {
    id: 1,
    title: "How can I chat with astrologers on AstroDev?",
    description:
      "On AstroDev, you can directly chat with expert astrologers. Choose the astrologer based on their specialties and initiate a chat by clicking the chat button.",
  },
  {
    id: 2,
    title: "What services do astrologers offer in their chats?",
    description:
      "AstroDev astrologers offer varied services, such as Vedic astrology, numerology, and tarot reading, among others, during the chat sessions.",
  },
  {
    id: 3,
    title: "How much does it cost to chat with an astrologer on AstroDev?",
    description:
      "On AstroDev, each astrologer sets their per-minute rate. The charges for the chat session will depend on this rate and the total duration of your chat.",
  },
  {
    id: 4,
    title: "Can I chat with an astrologer online for free?",
    description:
      "AstroDev is a premium service. However, we often have promotional offers that might include free initial minutes to chat with our astrologers.",
  },
  {
    id: 5,
    title: "Is there an AstroDev app for free astrology chat?",
    description:
      "Yes, you can download the AstroDev app to chat with astrologers conveniently. While the chat service is paid, the app itself is free to download and use.",
  },
  {
    id: 6,
    title: "How can I find the right astrologer for me on AstroDev?",
    description:
      "Every astrologer on AstroDev mentions their specialties, allowing you to choose one that aligns with your needs. You can chat with multiple astrologers to find the one you resonate with.",
  },
  {
    id: 7,
    title: "Can I chat with astrologers from India online on AstroDev?",
    description:
      "Yes, AstroDev hosts a wide array of experienced astrologers from India, offering you their expertise through online chat.",
  },
  {
    id: 8,
    title: "How does the online chat with astrologers work?",
    description:
      "Once you select an astrologer on AstroDev, you can initiate a chat. You'll be charged per minute, with the price set by the individual astrologer.",
  },
  {
    id: 9,
    title: "Can I get a free astrology chat in India on AstroDev?",
    description:
      "AstroDev is a premium service. However, we frequently run promotions that may include free initial chat minutes with our astrologers.",
  },
  {
    id: 10,
    title: "Is AstroDev a free astrology chat app?",
    description:
      "While AstroDev does have a free app for easier access to our services, the astrology chat service is a premium offering.",
  },
  {
    id: 11,
    title: "How can I benefit from an astrology free chat on AstroDev?",
    description:
      "While AstroDev is a premium service, any promotional free chat offers can give you a glimpse of our astrologers' expertise and the quality of our consultations.",
  },
  {
    id: 12,
    title: "How do I pay for an online chat with an astrologer?",
    description:
      "After your chat session on AstroDev, you'll be charged based on the per-minute rate of the astrologer and the duration of the chat. Payment methods will be displayed at the time of payment.",
  },
  {
    id: 13,
    title: "What topics can I discuss during the free chat with an astrologer?",
    description:
      "In your chat with an astrologer, you can explore a variety of topics including Vedic astrology, numerology, tarot reading, life queries, future predictions, and much more.",
  },
  {
    id: 14,
    title: "Is my information secure while chatting with astrologers online?",
    description:
      "At AstroDev, we prioritize your privacy and ensure all conversations during the astrology chat remain confidential and secure.",
  },
];

export default function ChatAstrologer() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

      <Herosection
        title={"Chat with Astrologer on the go!"}
        subtitle={"Get ₹50 AstroCash when you download our app."}
        getlink={"Get the link to download the app"}
      />
      <AstrologerProfileCard btn />
      <Offer />
      <div className="pt-[6px]">
        <Paragraph />
      </div>
      <div className="pt-6">
        <AstrodevApp />
      </div>
      <Faq heading={"FAQs about Chat with Astrologer"} Faqs={Faqs} />
      <Floating downlodNow />
    </>
  );
}

export function generateMetadata() {
  return {
    title:
      " Chat with Astrologer Online | Instant Astrological Solutions - AstroDev",
    description:
      "Connect instantly with expert astrologers at AstroDev for real-time chat. Find solutions to your problems, understand your horoscope, and unlock your destiny. Start your astrological journey now.",
    keywords:
      "Astrology chat, online astrology, chat with astrologer, astrology consultation, instant astrology advice, horoscope chat, astrology chat online, AstroDev",
  };
}
