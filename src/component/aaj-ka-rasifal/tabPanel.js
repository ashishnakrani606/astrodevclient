import { Link } from "@nextui-org/react";
import React, { useState } from "react";

const TabPanel = () => {
  const [activetime, setActivetime] = useState(1);

  return (
    <>
      <div>
        <div className="flex justify-end font-semibold sm:gap-8 gap-2 border-b">
          <Link
            href={"#0"}
            className={`!text-primary-black md:px-5 px-1 md:text-base text-sm py-3 ${
              activetime === 1
                ? "!text-primary-orange border-b-2 border-primary-orange "
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActivetime(1);
            }}
          >
            Daily
          </Link>
          <Link
            href="#0"
            className={`!text-primary-black md:px-5 px-1 md:text-base text-sm py-3 ${
              activetime === 2
                ? "!text-primary-orange border-b-2 border-primary-orange "
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActivetime(2);
            }}
          >
            Weekly
          </Link>
          <Link
            href="#0"
            className={`!text-primary-black md:px-5 px-1 md:text-base text-sm py-3 ${
              activetime === 3
                ? "!text-primary-orange border-b-2 border-primary-orange "
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActivetime(3);
            }}
          >
            Love
          </Link>
          <Link
            href="#0"
            className={`!text-primary-black md:px-5 px-1 md:text-base text-sm py-3 ${
              activetime === 4
                ? "!text-primary-orange border-b-2 border-primary-orange "
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActivetime(4);
            }}
          >
            Monthly
          </Link>
          <Link
            href="#0"
            className={`!text-primary-black md:px-5 px-1 md:text-base text-sm py-3 ${
              activetime === 5
                ? "!text-primary-orange border-b-2 border-primary-orange "
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              setActivetime(5);
            }}
          >
            Annul
          </Link>
        </div>
        <div className="py-8 px-4">
          <div className={`${activetime === 1 ? "block" : "hidden"}`}>
            <div className="text-center">
              <h2 className="md:text-3xl text-xl font-bold pb-4">
                Daily Hindi Horoscope (Aries) / Mesh Rashifal
              </h2>
              <h3 className="md:text-xl text-lg text-primary-orange font-semibold pb-5">
                Saturday, August 12, 2023
              </h3>
            </div>
            <p className="pb-5 md:text-base text-sm">
              {
                "If your plan is to travel outside, then your time will be full of laughter and happiness. Your parents may be worried today seeing your extravagance and hence you may have to become a victim of their anger. The period of tension will remain intact, but family support will help. Romantic encounters will be very exciting, but will not last long. Free time should be put to good use, but today you will misuse this time and because of this your mood will be bad. There can be a tussle with the spouse regarding relatives. Express your happiness, it gives happiness to the people associated with you."
              }
            </p>
            <p className="md:text-base text-sm">
              To get your accurate daily horoscope on your phone, download now - AstroSage Kundli App
            </p>
          </div>
          <div className={`${activetime === 2 ? "block" : "hidden"}`}>
            <div className="text-center">
              <h2 className="md:text-3xl text-xl font-bold pb-4">
                Meena Saptahik Rashifal - Pisces Weekly Horoscope
              </h2>
              <h3 className="md:text-xl text-lg text-primary-orange font-semibold pb-5">
                7 Aug 2023 - 13 Aug 2023
              </h3>
            </div>
            <p className="pb-5 md:text-base text-sm">
              {
                "Due to the presence of inauspicious Rahu in the first house with respect to the Moon sign, you will feel less energetic this week than everyday. In such a situation, you have to keep in mind that, do not press yourself under excessive work, and whenever you get time, taking time out of your work, take some rest. This will also give you a feeling of freshness from inside.  During this time you will be seen spending some of your money on re-purchasing your valuables or on its maintenance. Because this time will bring many financial benefits for you, that is why you can plan to spend it on many important works. This week you will feel that family members are taking undue advantage of your generous behaviour. Due to which you have to suffer many troubles. But in spite of this, while making yourself strong, there is going to be a need to bring some change in your nature at this time. That's why taking care of this from the beginning will prove beneficial for you. Due to Saturn being situated in the eleventh house from the Moon sign, if you had faced some disappointment in your career in the past, then this week things will start recovering again and your business will start moving towards a positive direction. Due to which you will also get success in getting rid of your mental stress. This week, due to the presence of Mercury in the fourth house from the Moon sign, due to the blessings of many planets, in the field of higher education, students will get very good results. During this time you can also get good news of admission in a good place. In such a situation, especially those students who are dreaming of going abroad for studies, their dream will be fulfilled at this time."
              }
            </p>
            <p className="md:text-base text-sm"> This horoscope is based on your moon sign. Also connect with astrologers on phone or chat to get personalized predictions.
            </p>
          </div>
          <div className={`${activetime === 3 ? "block" : "hidden"}`}>
            <div className="text-center">
              <h2 className="md:text-3xl text-xl font-bold pb-4">
                Meena Saptahik Rashifal - Pisces Weekly Horoscope
              </h2>
              <h3 className="md:text-xl text-lg text-primary-orange font-semibold pb-5">
                7 Aug 2023 - 13 Aug 2023
              </h3>
            </div>
            <p className="pb-5 md:text-base text-sm">
              {
                "This week, due to the position of Venus in the fourth house from the Moon sign, your lover will be seen enjoying partying and hanging out with his friends, due to which you may feel bad about your importance. In such a situation, keeping these things in mind, you will give your reaction later at a wrong time, due to which the situation can become worse. This week you may have to face the most negative moments of your married life. Because of which the thought of not going home is bound to come in your mind."
              }
            </p>
            <p className="md:text-base text-sm"> This horoscope is based on your moon sign. Also connect with astrologers on phone or chat to get personalized predictions.
            </p>
          </div>
          <div className={`${activetime === 4 ? "block" : "hidden"}`}>
            <div className="text-center">
              <h2 className="md:text-3xl text-xl font-bold pb-4">
                Monthly Horoscope of Aries / Mesh Masik Rashifal in Hindi
              </h2>
              <h3 className="md:text-xl text-lg text-primary-orange font-semibold pb-5">
                August, 2023
              </h3>
            </div>
            <div>
              <h4 className="font-semibold pb-3">General</h4>
              <p className="">
                {
                  "Aries is a fiery sign, which is ruled by the planet Mars. Due to the rule of the fiery planet, the people of this zodiac are hot minded. The people of this zodiac are of more fierce nature, dynamic and efficient personality and follow this. The people of this zodiac are very soft-hearted and because of this they cannot see the pain of others, this shows their helpful nature. The people of Aries zodiac are always able to openly keep their feelings in front of anyone. On the other hand, when it comes to taking decisions, people of this zodiac are capable of taking quick and bold decisions. However, sometimes such decisions can prove to be negative for them. Aries people try to finish any work quickly."
                }
              </p>
              <p className="pb-3"> Aries people will get mixed results this month as both the nodal planets Rahu and Ketu are not present in a favorable house. Rahu is present in the first and Ketu in the seventh house.
              </p>
              <p className="pb-3">
                Another benefic planet Jupiter is present in the first house and twelfth house along with Rahu. This will not be a good sign for your auspicious results. Venus, the planet responsible for love, is present in the fourth house in a retrograde state, while thi dasha of Venus will start on 8th August 2023 and on 18th August 2023, Venus will rise back. On the other hand, Mercury, th planet responsible for intelligence, will turn retrograde on August 24, 2023. From August 18, 2023, Mars, the lord of Aries, will enter the sixth house.
              </p>
              <p>
                {
                  "Due to the conjunction of Jupiter with Rahu in the first house and Ketu in the seventh house, the people of Aries will have to take special care of their health. The natives may have to face undue stress and anxiety, and this will have an effect on their health. Due to the unfavorable condition of Mercury till 15 September 2023, the natives of Aries may have to face problems related to nerves. That's why the natives are advised to do meditation and yoga."
                }
              </p>
            </div>
          </div>
          <div className={`${activetime === 5 ? "block" : "hidden"}`}>
            <div className="text-center">
              <h2 className="text-3xl font-bold pb-4">Aries Horoscope 2023</h2>
              <p>
                {
                  "Through this special article of Aries Horoscope 2023 (Mesh Rashifal 2023), we will tell you what kind of results the year 2023 will bring in the areas like career, business, financial status, education, love relationship, married life and health of the people of Aries. Will come To know the answers to these questions, definitely read this article from beginning to end, because under this i.e., Aries Horoscope 2023 (Mesh Rashifal 2023) has given predictions about various aspects of the life of Aries people. This horoscope will help you to know in which areas you can get special achievements this year and in which areas you will have to work harder. You can make some special achievements for yourself in the year 2023 through this horoscope. What is this year bringing for you, You can read this also under this Aries Horoscope 2023 (Mesh Rashifal 2023). Based on Vedic astrology, this special AstroSage horoscope has been prepared by Dr. Mrigank keeping in mind the positions and transits of various planets and constellations in the year 2023. This horoscope is based on your moon sign, that is, if your moon sign or birth sign is Aries, then this horoscope is especially for you. So let's go ahead and know the annual horoscope 2023 for Aries."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabPanel;
