import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Lagnachart from "./../../assets/image/lagnachart.png";
import Southchart from "./../../assets/image/south.png";
import Eastchart from "./../../assets/image/east.png";


const LagnaChart = () => {
  const [Planetary, setPlanetary] = useState(1);
  const [chart, setChart] = useState(1);

  return (
    <div className="shadow-shadow-btn rounded-sm mt-5 pt-4 text-left">
      <div className="flex border-b">
        <div
          className={
            "pl-6 mb-2 cursor-pointer " +
            (Planetary === 1
              ? " text-primary-orange font-semibold"
              : "text-[#605F5F]")
          }
          onClick={(e) => { 
            e.preventDefault();
            setPlanetary(1);
          }}
          data-toggle="tab"
          role="tablist"
        >
          Lagna Chart
        </div>
        <div
          className={
            " block pl-6 mb-2 cursor-pointer  " +
            (Planetary === 2
              ? "text-primary-orange font-semibold"
              : "text-[#605F5F]")
          }
          onClick={(e) => {
            e.preventDefault();
            setPlanetary(2);
          }}
          data-toggle="tab"
          role="tablist"
        >
          Planetary Position
        </div>
      </div>
      <div className="relative flex flex-col min-w-0 break-words bg-white">
        <div className="tab-content tab-space text-center">
          <div className={Planetary === 1 ? "block" : "hidden"} id="">
            <h3 className="text-lg font-medium pt-3 pb-5">
              Lagna Chart at Sunrise
            </h3>
            <div>
            <div className={chart === 1 ? "block" : "hidden"}>
            <Image src={Lagnachart} alt="" className="mx-auto" />
            </div>
            <div className={chart === 2 ? "block" : "hidden"}>
            <Image src={Southchart} alt="" className="mx-auto" />
            </div>
            <div className={chart === 3 ? "block" : "hidden"}>
            <Image src={Eastchart} alt="" className="mx-auto" />
            </div>
            </div>
            <div className="flex justify-center pt-8">
              <Link
              href={"#0"}
                className={
                  "py-2 px-4 cursor-pointer border-r " +
                  (chart === 1
                    ? "text-white bg-primary-orange font-semibold"
                    : "text-[#605F5F]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setChart(1);
                }}
                data-toggle="tab"
                role="tablist"
              >
                North
              </Link>
              <Link
              href={"#0"}
                className={
                  " block py-2 px-4 cursor-pointer border-r " +
                  (chart === 2
                    ? "text-white bg-primary-orange font-semibold"
                    : "text-[#605F5F]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setChart(2);
                }}
                data-toggle="tab"
                role="tablist"
              >
                South
              </Link>
              <Link
              href={"#0"}
                className={
                  " block py-2 px-4 cursor-pointer border-r  " +
                  (chart === 3
                    ? "text-white bg-primary-orange font-semibold"
                    : "text-[#605F5F]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setChart(3);
                }}
                data-toggle="tab"
                role="tablist"
              >
                East
              </Link>
            </div>
          </div>
          <div className={Planetary === 2 ? "block" : "hidden"}>
            <h3 className="text-lg font-medium pt-3 pb-5">
              Planetary Position at Sunrise
            </h3>
            <div className="overflow-x-auto table-contain">
              <table className="sm:w-full w-[720px]">
                <thead>
                  <tr className="border-b-2">
                    <th className="pb-3">Planets</th>
                    <th className="pb-3">Rashi</th>
                    <th className="pb-3">Longitude</th>
                    <th className="pb-3">Nakshatra</th>
                    <th className="pb-3">Pada</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">Sun</td>
                    <td className="p-2">Leo</td>
                    <td className="p-2">12-13-51</td>
                    <td className="p-2">Magha</td>
                    <td className="p-2">4</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Moon</td>
                    <td className="p-2">Capricorn</td>
                    <td className="p-2">27-13-24</td>
                    <td className="p-2">Dhanishta</td>
                    <td className="p-2">2</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Mars</td>
                    <td className="p-2">Virgo</td>
                    <td className="p-2">07-24-47</td>
                    <td className="p-2">Uttaraphal</td>
                    <td className="p-2">4</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Jupt</td>
                    <td className="p-2">Aries</td>
                    <td className="p-2">21-20-07</td>
                    <td className="p-2">Bharani</td>
                    <td className="p-2">3</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Venu</td>
                    <td className="p-2">Cancer</td>
                    <td className="p-2">18-31-58</td>
                    <td className="p-2">Ashlesha</td>
                    <td className="p-2">1</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Satn</td>
                    <td className="p-2">Aquarius</td>
                    <td className="p-2">09-26-27</td>
                    <td className="p-2">Satabhisa</td>
                    <td className="p-2">1</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Rahu</td>
                    <td className="p-2">Aries</td>
                    <td className="p-2">03-15-03</td>
                    <td className="p-2">Ashvini</td>
                    <td className="p-2">1</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Ketu</td>
                    <td className="p-2">Libra</td>
                    <td className="p-2">03-15-03</td>
                    <td className="p-2">Chitra</td>
                    <td className="p-2">3</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Uran</td>
                    <td className="p-2">Aries</td>
                    <td className="p-2">28-57-20</td>
                    <td className="p-2">Krittika</td>
                    <td className="p-2">1</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Nept</td>
                    <td className="p-2">Pisces</td>
                    <td className="p-2">02-34-10</td>
                    <td className="p-2">Purvabhadra</td>
                    <td className="p-2">4</td>
                  </tr>
                  <tr>
                    <td className="p-2">Plut</td>
                    <td className="p-2">Capricorn</td>
                    <td className="p-2">03-54-01</td>
                    <td className="p-2">Uttarashadha</td>
                    <td className="p-2">3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default LagnaChart;
