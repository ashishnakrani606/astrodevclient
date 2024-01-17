"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Offer from "../../../src/component/content/Offer";
import AstrodevApp from "../../../src/component/content/AstrodevApp";
import Faq from "../../../src/component/content/Faq";
import Profile from "../../../src/component/talkwithastrologer/Profile";

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

const AstrologerProfile = () => {
  let curl = useRouter();
  

  return (
    <>
      <Profile />
      <Offer userImage2 />
      <div className="pt-1 pb-2">
        <AstrodevApp />
      </div>
      <Faq heading={"FAQs about Talk to Astrologer"} Faqs={Faqs} />
    </>
  );
};
export default AstrologerProfile;
