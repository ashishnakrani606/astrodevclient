"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import DownArrow from "./../../assets/icon/downarrow.svg";

const FooterData = ({ children, title, className }) => {

  const [collapse, setCollapse] = useState(true);

  const collapseToggle  = () => {
    setCollapse((prevState) => !prevState);
  };

  const footerCollapse  = () => {
    if (window.innerWidth > 767) {
      setCollapse(true);
    } else {
      setCollapse((prevState) => !prevState);
    }
  };

  useEffect(() => {
    footerCollapse ();
    window.addEventListener('resize', footerCollapse );
    return () => window.removeEventListener('resize', footerCollapse );
  }, []);

  return (
    <>
      <ul className={`border-b border-[#F2EAD8] border-opacity-50 md:border-0 ${className}`} >
        <div className="flex items-center justify-between md:pb-0 pb-[10px] cursor-pointer" onClick={() => collapseToggle()}>
          <h3 className="font-bold md:pb-[10px] block">{title}</h3>
          <Image
            src={DownArrow}
            alt=""
            className={`md:hidden block transition-all duration-300 opacity-80 ${collapse ? "rotate-180" : ""
              }`}
          />
        </div>
        {collapse &&
          <div
            className={`md:!h-auto md:!opacity-100 duration-300 transition-all ${collapse
                ? "h-auto"
                : "opacity-0 h-0 duration-0"
              }`}
          >
            {children}
          </div>
        }
      </ul>
    </>
  );
};
export default FooterData;

