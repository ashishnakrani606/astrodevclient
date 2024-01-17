import React from "react";
import { Tiro_Devanagari_Marathi } from "next/font/google";

const devangiri = Tiro_Devanagari_Marathi({
  subsets: ["latin"],
  variable: "--font-devanagari",
  weight: "400",
});

const TopHeader = () => {
  return (
    <>
      <div
        className={`h-[30px] marquee-container bg-greenyellow-gradient text-xs flex devanagari px-[2px] relative overflow-hidden ${devangiri.className}`}
      >
        <div className="marquee h-full py-1 absolute top-0 right-full w-full whitespace-nowrap flex gap-10 items-center">
          <span className="whitespace-nowrap">
            ॐ श्रीं ह्रीं क्लीं श्रीं क्लीं वित्तेश्वराय नमः॥ ॐ ह्रीं श्रीं
            क्रीं श्रीं कुबेराय अष्ट-लक्ष्मी मम गृहे धनं पुरय पुरय नमः॥ ॐ श्रीं
            ह्रीं क्लीं श्रीं क्लीं वित्तेश्वराय नमः॥ ॐ ह्रीं श्रीं क्रीं श्रीं
            कुबेराय अष्ट-लक्ष्मी मम गृहे धनं पुरय पुरय नमः॥ ॐ श्रीं ह्रीं क्लीं
            श्रीं क्लीं वित्तेश्वराय नमः॥ ॐ ह्रीं श्रीं क्रीं श्रीं कुबेराय
            अष्ट-लक्ष्मी मम गृहे धनं पुरय पुरय नमः॥ ॐ श्रीं ह्रीं क्लीं श्रीं
            क्लीं वित्तेश्वराय नमः॥ ॐ ह्रीं श्रीं क्रीं श्रीं कुबेराय
            अष्ट-लक्ष्मी मम गृहे धनं पुरय पुरय नमः॥
          </span>
          <span className="whitespace-nowrap">
            ॐ श्रीं ह्रीं क्लीं श्रीं क्लीं वित्तेश्वराय नमः॥ ॐ ह्रीं श्रीं
            क्रीं श्रीं कुबेराय अष्ट-लक्ष्मी मम गृहे धनं पुरय पुरय नमः॥ ॐ श्रीं
            ह्रीं क्लीं श्रीं क्लीं वित्तेश्वराय नमः॥ ॐ ह्रीं श्रीं क्रीं श्रीं
            कुबेराय अष्ट-लक्ष्मी मम गृहे धनं पुरय पुरय नमः॥ ॐ श्रीं ह्रीं क्लीं
            श्रीं क्लीं वित्तेश्वराय नमः॥ ॐ ह्रीं श्रीं क्रीं श्रीं कुबेराय
            अष्ट-लक्ष्मी मम गृहे धनं पुरय पुरय नमः॥ ॐ श्रीं ह्रीं क्लीं श्रीं
            क्लीं वित्तेश्वराय नमः॥ ॐ ह्रीं श्रीं क्रीं श्रीं कुबेराय
            अष्ट-लक्ष्मी मम गृहे धनं पुरय पुरय नमः॥
          </span>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
