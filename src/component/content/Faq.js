"use client";
import React, { useState } from "react";

const Faq = ({ Faqs, heading }) => {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    return (
      <div>
        <div className="text-[#787887] border-b pb-2 pt-3 border-[#787887] border-opacity-5">
          {isReadMore ? text[0].slice(0, 90) : text}
          <span onClick={toggleReadMore}>{isReadMore ? "..." : ""}</span>
          <span
            onClick={toggleReadMore}
            className={`relative underline underline-offset-2 decoration-[#787887] cursor-pointer`}
          >
            {isReadMore ? "Read More" : ""}
          </span>
        </div>
      </div>
    );
  };
  return (
    <div className={`lg:pt-16 md:pt-10 pt-6 mt-5`}>
      <div className="container">
        <div className="max-w-[1166px] mx-auto">
          <h2 className="md:text-3xl text-2xl font-semibold lg:pb-9 pb-6">
            {heading}
          </h2>
          <div className="grid md:grid-cols-2 gap-x-16 md:gap-y-10 gap-y-6 md:pb-12 pb-8 lg:px-8 md:px-6 px-2">
            {Faqs.map((item, index) => (
              <div key={index}>
                <h3 className="text-secondary-black font-bold">{item.title}</h3>
                <ReadMore>
                  {item.description}
                  {item.description2 && (
                    <div className="mt-6">{item.description2}</div>
                  )}
                  {item.description3 && (
                    <div className="mt-6">{item.description3}</div>
                  )}                   
                    <div className="">{item.description4}</div>
                    <div className="">{item.description5}</div>
                    <div className="">{item.description6}</div>
                    <div className="">{item.description7}</div>
                    <div className="">{item.description8}</div>
                  
                </ReadMore>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
