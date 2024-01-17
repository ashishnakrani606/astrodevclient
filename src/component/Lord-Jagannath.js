import React from "react";
import Image from "next/image";
import Spiritual from "./../assets/image/spiritualjourney.png";
import AstrodevLogo from "./../assets/image/pillarsstrength.png";
import wish from "./../assets/icon/wish-icon.svg";

const LordJagannath = () => {
  return (
    <div>
      <div className="max-w-[1380px] w-full mx-auto lg:pt-[70px] md:pt-10 pt-6 lgm:pb-[120px] lg:pb-20 md:pb-10 pb-6 px-4">
        <h1 className="font-semibold 2xl:text-[88px] lg:text-7xl md:text-6xl text-3xl 2xl:leading-[94px] text-[#212121] tracking-tight leading-tight">
          AstroDev: Under the Divine Guidance of{" "}
          <span className="font-bold"> Lord Jagannath.</span>{" "}
        </h1>
      </div>
      <div className="container">
        <div>
          <div className="w-full flex justify-between md:flex-row flex-col-reverse items-center lgm:py-24 lg:py-16 md:py-10 py-7 lg:gap-20 gap-10">
            <div className="md:max-w-[518px]">
              <h2 className="lg:text-[44px] md:text-4xl text-2xl font-bold lg:leading-[52px] text-[#212121]">
                Divine Inspiration
              </h2>
              <p className="font-normal lg:text-xl md:text-lg mt-6 text-[#3E3E59]">
                {
                  "Lord Jagannath, an incarnation of Lord Vishnu, symbolizes universal love and brotherhood. He is revered as the Lord of the Universe, overseeing all aspects of life, including our destiny. At AstroDev, we take inspiration from Lord Jagannath's wisdom and benevolence. He represents the essence of AstroDev's mission - to guide individuals through their cosmic journey with love, respect, and an understanding that we are all interconnected."
                }
              </p>
              <div className="md:mt-8 mt-5 lg:text-xl md:text-lg">
                <h4 className=" font-semibold text-[#121212]">
                  Cosmic Connection
                </h4>
                <p className="text-[#3E3E59] pt-4">
                  {
                    "Embracing Jagannath's wisdom to guide your stellar explorations."
                  }
                </p>
              </div>
            </div>
            <div className="max-w-[551px]">
              <Image
                src={Spiritual}
                alt=""
                className="lgm:max-w-[551px] lg:max-w-[420px] md:max-w-auto max-w-[400px] herologo"
              />
            </div>
          </div>

          <div className="lgm:py-40 lg:py-20 py-8 flex justify-between md:flex-row flex-col lg:gap-20 gap-10 items-center">
            <div className="max-w-[660px]">
              <Image
                src={AstrodevLogo}
                alt=""
                className="lgm:max-w-[660px] lg:max-w-[420px] md:max-w-auto max-w-[357px] herologo"
              />
            </div>
            <div className="md:max-w-[518px] w-full">
              <h2 className="lg:text-[42px] md:text-4xl !leading-tight text-2xl font-bold">
                {"Jagannath’s Divine Influence on AstroDev"}
              </h2>
              <div className="mt-6">
                <div className="flex gap-2">
                  <Image src={wish} alt="" />
                  <h4 className="text-lg font-bold">Divine Wisdom</h4>
                </div>
                <p className="font-normal text-base mt-3">
                  {
                    "Lord Jagannath’s timeless wisdom helps shape the core principles of AstroDev. His teachings illuminate our journey, providing guidance and insight into the mystical realms of astrology."
                  }
                </p>
              </div>
              <div className="mt-6">
                <div className="flex gap-2">
                  <Image src={wish} alt="" />
                  <h4 className="text-lg font-bold">Cosmic Connection</h4>
                </div>
                <p className="font-normal text-base mt-3">
                  Our logo reflects the profound connection between the cosmos,
                  Lord Jagannath, and our purpose. We believe in harmonizing
                  this celestial synergy to provide accurate and empathetic
                  astrological guidance.
                </p>
              </div>
              <div className="mt-6">
                <div className="flex gap-2">
                  <Image src={wish} alt="" />
                  <h4 className="text-lg font-bold">Ethical Practices</h4>
                </div>
                <p className="font-normal text-base mt-3">
                  With Lord Jagannath as our guiding force, we at AstroDev are
                  committed to upholding integrity and honesty in our services.
                  Our ethical conduct mirrors the divine righteousness embodied
                  by our revered deity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LordJagannath;
