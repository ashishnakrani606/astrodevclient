"use client";
import React, { useState } from "react";
import Offer from "../../src/component/content/Offer";
import Asttodev from "../../src/component/content/AstrodevApp";
import Joinnewsletter from "../../src/component/Join-Newsletter";
import Floating from "../../src/component/Floating";
import TabList from "../../src/component/policies/TabList";
import Link from "next/link";

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

const Policies = () => {
  return (
    <>
      <div className="container">
        <TabList defultTab={1} />
      </div>
      <Offer />
      <Asttodev />
      <Joinnewsletter />
      <Floating downlodNow={false} />
    </>
  );
};
export default Policies;
