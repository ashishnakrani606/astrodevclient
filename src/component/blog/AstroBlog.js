"use client"
import React, { useState } from "react";
import Image from "next/image";
import Nexticon from './../../assets/icon/breadcrumpsarrow.svg'
import Link from "next/link";
import Yellochair from "./../../assets/image/blog-yellochair.svg";
import Mainsofa from "./../../assets/image/blog-main-sofa.svg";
import Chair from "./../../assets/image/blog-chair.svg";
import Roomwholw from "./../../assets/image/blog-roomwholw.svg";
import Room from "./../../assets/image/blog-room.svg";
import Mirror from "./../../assets/image/blog-mirrow.svg";
import Flower from "./../../assets/image/blog-flower.svg";
import Wollroom from "./../../assets/image/blog-hole.svg";
import Blogbed from "./../../assets/image/blog-bed.svg";
import Blogwindowsol from "./../../assets/image/blog-windowsol.svg";
import Sofaflower from "./../../assets/image/blogsofaflower.svg";
import Blogtable from "./../../assets/image/blog-table.svg";

const activeNumber = [
  {
    id: 1,
    number: 1,
  },
  {
    id: 2,
    number: 2,
  },
  {
    id: 3,
    number: 3,
  },
  {
    id: 4,
    number: 4,
  },
  {
    id: 5,
    number: "...",
  },
  {
    id: 6,
    number: 32,
  },
  {
    id: 7,
    number: 33,
  },
  {
    id: 8,
    number: 34,
  },
];
const valueData = [
  {
    id: 1,
    img: Yellochair,
    title: "October 12, 2024",
    description: "3 Instagram-Inspired Interior Design Trends to Buy, Like, Immediately",
  },
  {
    id: 2,
    img: Mainsofa,
    title: "October 12, 2024",
    description: "What’s The First Light Jacket You Wear Come Fall?",
  },
  {
    id: 3,
    img: Chair,
    title: "October 12, 2024",
    description: "Take Your Bed With you: 3 Cozy People Style Quilted Clothes",
  },
  {
    id: 4,
    img: Roomwholw,
    title: "October 12, 2024",
    description: "NYFW: Collina Strada Went All Out and Waaay Out",
  },
  {
    id: 5,
    img: Room,
    title: "October 12, 2024",
    description: "Take Your Bed With you: 3 Cozy People Style Quilted Clothes",
  },
  {
    id: 6,
    img: Mirror,
    title: "October 12, 2024",
    description: "7 Printed Pants Recipes for Fall",
  },
  {
    id: 7,
    img: Flower,
    title: "October 12, 2024",
    description: "Advice: Am I The Only One Who Doesn’t Want To Look Like Glass?",
  },
  {
    id: 8,
    img: Wollroom,
    title: "October 12, 2024",
    description: "You Look Moist: The Conscious Consumer who Swears by *Gasp* Coconut Oil",
  },
  {
    id: 9,
    img: Blogbed,
    title: "October 12, 2024",
    description: "I Asked 3 Beauty Experts to Help Me Create a Minimalist Skincare Routine",
  },
  {
    id: 10,
    img: Blogwindowsol,
    title: "October 12, 2024",
    description: "You Look Moist: A Graphic Designer’s Cheap & Simple Approach to Dewy Skin",
  },
  {
    id: 11,
    img: Sofaflower,
    title: "October 12, 2024",
    description: "The Outnet Sale Just Made Me Really, Really Excited for Fall",
  },
  {
    id: 12,
    img: Blogtable,
    title: "October 12, 2024",
    description: "You Look Moist: Team Repeller’s Marisa Lifschutz’s K-Beauty-Inspired Routine",
  },
];
const AstroBlog = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <div className="container xl:!max-w-[1368px]">
        <div className="grid lg:grid-cols-4 xsm:grid-cols-2 md:my-14 my-6 lg:gap-y-16 md:gap-8 md:gap-y-12 gap-6 pt-4">
          {valueData.map((item, index) => (
            <div key={index}>
              <Link href={"/astrology-blog/blog-inner"}>
                <div className="overflow-hidden">
                  <Image src={item.img} alt="" className="w-full transition-all duration-500 hover:scale-105" />
                </div>
                <h3 className="font-normal text-sm text-[#807E7E] md:mt-4 mt-3 md:mb-2 mb-1">{item.title}</h3>
                <p className="md:text-lg text-sm md:leading-7 text-[#121212]">
                  {item.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="lg:my-16 md:my-12 my-8">
          <ul className="flex items-center justify-center" >
            {activeNumber.map((item, index) => (
              <li key={index} onClick={() => setActive(item.id)} className={`cursor-pointer font-semibold md:text-lg text-sm md:h-[44px] h-[30px] md:w-[44px] w-[30px] rounded-full flex justify-center items-center md:mr-3 mr-1 ${active == item.id ? 'active bg-[#F5F5F5] text-[#121212]' : 'text-[#3E3E59]'}`}>
                <Link href={"#0"}>{item.number}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AstroBlog;
