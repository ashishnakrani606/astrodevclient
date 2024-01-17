import React from "react";

const ourofferings = (props) => {
  return (
    <div>
      <div className="max-w-[1320px] w-full mx-auto px-4">
        <h2 className="lg:text-[44px] md:text-4xl text-2xl font-bold lgm:pb-14 md:pb-10 pb-3">
          {props.title}
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 gap-8 lg:pb-[104px]">
          {props.offeringData.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-[#212121]">
                {item.heading}
              </h3>
              <p className="text-[#3E3E59] md:pt-6 pt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ourofferings;
