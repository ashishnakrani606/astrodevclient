"use client";
import React, { useState } from "react";
import Image from "next/image";
import Plus from "./../../assets/icon/plus-accordian.svg";
import Minus from "./../../assets/icon/minus-accordian.svg";

const useAccordion = ({className }) => {
  const [accordian, setAccordian] = useState(0);

  const handleAccordionClick = (index) => {
    setAccordian(index);
  };
  
const accordionData = [
  {
    id: 1,
    title: "What is the best way to contact your customer support team?",
    content:
      "More than just UI design tools – if you’re collaborating on new concepts, building beautiful prototypes or crafting the perfect app icon, we’ve got your whole design process covered. Excepteur sint occaecat cupidat",
  },
  {
    id: 2,
    title:
      "How can I report a problem or issue with my Becho account or store?",
    content:
      "More than just UI design tools – if you’re collaborating on new concepts, building beautiful prototypes or crafting the perfect app icon, we’ve got your whole design process covered. Excepteur sint occaecat cupidat",
  },
  {
    id: 3,
    title:
      "How long does it typically take to receive a response from Becho customer support?",
    content:
      "More than just UI design tools – if you’re collaborating on new concepts, building beautiful prototypes or crafting the perfect app icon, we’ve got your whole design process covered. Excepteur sint occaecat cupidat",
  },
  {
    id: 4,
    title:
      "Is there a specific email address I should use for customer inquiries?",
    content:
      "More than just UI design tools – if you’re collaborating on new concepts, building beautiful prototypes or crafting the perfect app icon, we’ve got your whole design process covered. Excepteur sint occaecat cupidat",
  },
  {
    id: 5,
    title: "Can I request a call from one of your representatives?",
    content:
      "More than just UI design tools – if you’re collaborating on new concepts, building beautiful prototypes or crafting the perfect app icon, we’ve got your whole design process covered. Excepteur sint occaecat cupidat",
  },
];

  return (
    <>
      <div className={` ${className}`}>
       
        {accordionData.map((item, index) => (
          <div key={index}>
         
            <div
              className="flex items-center justify-between pt-4 pb-3 cursor-pointer border-b border-[#605F5F]"
              onClick={() => handleAccordionClick(index)}
            >
              <h3 className="font-semibold block md:text-[22px] text-lg text-[#3F3B3B]">
                {item.title}
              </h3>
              {accordian === index ? (
                <Image
                  src={Plus}
                  alt=""
                  className={`transition-all duration-300 md:max-w-full max-w-[24px] ${
                    accordian ? "" : ""
                  }`}
                />
              ) : (
                <Image
                  src={Minus}
                  alt=""
                  className={`transition-all duration-300 md:max-w-full max-w-[24px]  ${
                    accordian ? "" : ""
                  }`}
                />
              )}
            </div>
            {accordian === index && (
              <p className="duration-300 transition-all h-full opacity-100 pt-4 md:text-lg pb-8">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default useAccordion;
