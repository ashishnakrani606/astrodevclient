"use client";
import React from "react";
import Offer from "../../src/component/content/Offer";
import Asttodev from "../../src/component/content/AstrodevApp";
import Joinnewsletter from "../../src/component/Join-Newsletter";
import Floating from "../../src/component/Floating";
import TabList from "../../src/component/policies/TabList";

const refundPolicy = () => {
  return (
    <>
      <div className="container">
        <TabList defultTab={9} />
      </div>
      <Offer />
      <Asttodev />
      <Joinnewsletter />
      <Floating downlodNow={false} />
    </>
  );
};
export default refundPolicy;
