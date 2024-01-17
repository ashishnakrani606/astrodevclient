import React from "react";
import Image from "next/image";
import Spiritual from "./../assets/image/spiritualjourney.png";
import AstrodevLogo from "./../assets/image/pillarsstrength.png";
import wish from "./../assets/icon/wish-icon.svg";

const SpiritualJourney = () => {
  return (
    <div>
      <div className="max-w-[1380px] w-full mx-auto lg:pt-[70px] md:pt-10 pt-6 lgm:pb-[120px] lg:pb-20 md:pb-10 pb-6 px-4">
        <h1 className="font-semibold 2xl:text-[88px] lg:text-7xl md:text-6xl text-3xl 2xl:leading-[94px] text-[#212121] tracking-tight leading-tight">
          <span className="font-bold"> Blessed by Jagannath:</span> AstroDev,
          Your Guide in Cosmic Voyage
        </h1>
      </div>
      <div className="container">
        <div>
          <div className="w-full flex justify-between md:flex-row flex-col-reverse items-center lgm:py-24 lg:py-16 md:py-10 py-7 lg:gap-20 gap-10">
            <div className="md:max-w-[518px]">
              <h2 className="lg:text-[44px] md:text-4xl text-2xl font-bold lg:leading-[52px] text-[#212121]">
                {"Our Spiritual Journey: Tracing AstroDev's Path"}
              </h2>
              <p className="font-normal lg:text-xl md:text-lg mt-6 text-[#3E3E59]">
                AstroDev was conceived and built with a mission to simplify the
                profound science of astrology and make its wisdom accessible to
                everyone. We have brought together a diverse team of experienced
                astrologers who, under the blessings of Lord Jagannath, endeavor
                to provide guidance and insights that can help navigate the
                cosmic voyage of life. We take pride in our commitment to
                maintaining the highest standards of integrity, transparency,
                and customer service.
              </p>
              <div className="md:mt-8 mt-5 lg:text-xl md:text-lg">
                <h4 className=" font-semibold text-[#121212]">
                  {"AstroDev's Ethos"}
                </h4>
                <p className="text-[#3E3E59] pt-4">
                  {
                    "Harnessing the celestial wisdom to illuminate your life's journey."
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
              <h2 className="lg:text-[42px] md:text-4xl text-2xl font-bold lg:!leading-[52px]">
                AstroDev: Our Pillars of Strength
              </h2>
              <div className="mt-6">
                <div className="flex gap-2">
                  <Image src={wish} alt="" />
                  <h4 className="text-lg font-bold">Celestial Wisdom</h4>
                </div>
                <p className="font-normal text-base mt-3">
                  {
                    "At AstroDev, we bank on the profound wisdom of astrology to provide accurate insights and forecasts. Our expert astrologers meticulously analyze celestial patterns to help decode your life's path and purpose."
                  }
                </p>
              </div>
              <div className="mt-6">
                <div className="flex gap-2">
                  <Image src={wish} alt="" />
                  <h4 className="text-lg font-bold">Integrity First</h4>
                </div>
                <p className="font-normal text-base mt-3">
                  For us, maintaining integrity in our services is paramount. We
                  aim to provide authentic and reliable astrological guidance,
                  respecting your privacy and ensuring complete confidentiality
                  in our interactions.
                </p>
              </div>
              <div className="mt-6">
                <div className="flex gap-2">
                  <Image src={wish} alt="" />
                  <h4 className="text-lg font-bold">Customer Centricity</h4>
                </div>
                <p className="font-normal text-base mt-3">
                  {
                    "We place our customers at the core of our services. Every question you pose, every concern you share, is addressed with utmost care and dedication. We're here to guide you at every step of your cosmic voyage."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiritualJourney;
