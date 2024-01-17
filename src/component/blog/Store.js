import React from "react";
import Image from "next/image";
import Inner from "@/assets/img/innerimg.svg";

const Store = (props) => {
  return (
    <>
      <div className="mt-2">
        <h3 className="lg:text-5xl md:text-4xl text-28 font-bold text-black800 tracking-[-0.6px]">{props.title}</h3>
        {props.detailInner == true ?          
        <div>
          <div className="flex flex-wrap gap-6 text-base mt-4 text-black800">
            <div className="flex items-center gap-2">
              <Image src={props.User} alt="" />
              <h3 className="font-bold text-darkpurple">
                {props.userName}
                <span className="font-normal text-greylight"> {props.name} </span>
                {props.userName1}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Image src={props.Clock} alt="" />
              <p className="text-darkpurple">{props.date}</p>
            </div>
          </div>
          <p className="text-black800 mt-4 text-base">
            <span className="text-black600">{props.tags}</span> {props.sale}
          </p>
        </div>
        : 
        ""}
        <p className="font-semibold leading-[30px] text-black900">{props.subtitle}</p>
      </div>
      <div className={`mt-11 ${props.className}`}>
        <Image src={Inner} alt="" className="pl-1" />
      </div>

      <div className="md:mt-10 mt-6">
        {props.StoreData.map((item, index) => (
          <p className={` md:leading-8 md:mb-10 mb-8 ${item.textbold}`} key={index}>
            {item.description}
          </p>
        ))}
      </div>
    </>
  );
};

export default Store;
