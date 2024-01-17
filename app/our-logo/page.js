import React from "react";
import Offer from "../../src/component/content/Offer";
import Asttodev from "../../src/component/content/AstrodevApp";
import LordJagannath from "../../src/component/Lord-Jagannath";
import Ourofferings from "../../src/component/Our-Offerings";
import BehindAstrodev from "../../src/component/Behind-Astrodev";
import Joinnewsletter from "../../src/component/Join-Newsletter";

const offeringData = [
  {
    id: 1,
    heading: "Divine Vision",
    description:
      "Lord Jagannath's eyes, a symbol of divine vision, guide us towards truth and clarity.",
  },
  {
    id: 2,
    heading: "Universe Symbiosis",
    description:
      "The logo represents our belief in the universe's intricate balance and celestial interconnectedness.",
  },
  {
    id: 3,
    heading: "Inclusive Embrace",
    description:
      "The wide arms of Jagannath symbolize our inclusive approach to serving all seekers.",
  },
  {
    id: 4,
    heading: "Spiritual Roots",
    description:
      "Our roots in Jagannath's wisdom help us deliver accurate, honest, and empathetic guidance.",
  },
];
const JagannathLogo = () => {
  return (
    <>
      <LordJagannath />
      <Ourofferings title="Logo Significance" offeringData={offeringData} />
      <BehindAstrodev />
      <Offer  />
      <Asttodev />
      <Joinnewsletter />
    </>
  );
};

export default JagannathLogo;
