import React from "react";

const OnlineKundli = (props) => {
  return (
    <div className="max-w-[1430px] px-4 mx-auto">
      <h2 className="font-bold text-center mt-8 lg:text-[25px] lg:leading-tight sm:text-[22px] text-lg text-[#313131] ">
        {props.title}
      </h2>
      <div className="font-normal text-[#616161] text-sm lg:text-base pt-1 px-0 lg:mb-[48px] md:mb-8 mb-6">
        {props.kundliData.map((item, index) => (
          <div key={index}>
            <p className="mt-3">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineKundli;
