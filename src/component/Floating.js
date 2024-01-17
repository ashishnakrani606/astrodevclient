"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Floating = ({ downlodNow }) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 500);
    });
  }, []);

  return (
    <>
      {downlodNow ? (
        <>
          {scroll && (
            <div className="sticky z-50 bottom-0 left-0 w-full lg:hidden flex gap-2 py-2.5 px-4 justify-between items-center bg-white shadow-[0_-2px_3px_0_rgb(229,229,229,0.50)] slide_up_from_bottom_animatete">
              <div className="text-sm font-medium">
                <p>Get ₹50 AstroCash when you download our app.</p>
              </div>
              <Link
                href="#0"
                className="w-full max-w-[45%] text-center bg-primary-orange md:py-[9px] py-[10px] font-bold px-3 text-white rounded-[3px] hover:bg-opacity-90 transition-all duration-700 text-sm"
              >
                Download Now
              </Link>
            </div>
          )}
        </>
      ) : (
        <>
          {scroll && (
            <div className="sticky z-50 bottom-0 left-0 w-full lg:hidden flex gap-2 py-2.5 px-4 justify-between items-center bg-white shadow-[0_-2px_3px_0_rgb(229,229,229,0.50)] slide_up_from_bottom_animatete">
              <div className="text-sm font-medium">
                <p>Private consultation + call</p>
                <p>Starts at just ₹199</p>
              </div>
              <Link
                href="#0"
                className="w-full max-w-[45%] text-center bg-primary-orange md:py-[9px] py-[10px] font-bold px-4 text-white rounded-[3px] hover:bg-opacity-90 transition-all duration-700 text-sm"
              >
                Consult Now
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Floating;
