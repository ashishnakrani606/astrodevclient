import Link from "next/link";
import React, { useState } from "react";
import LagnaChart from "./Lagnachart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Close from './../../assets/icon/closeinputicon.svg';
import Image from "next/image";


const TodayPanchang = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [inputValue, setInputValue] = useState("");
  const [valuesArray, setValuesArray] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setValuesArray([...valuesArray, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeValue = (index) => {
    const updatedArray = valuesArray.filter((_, i) => i !== index);
    setValuesArray(updatedArray);
  };

  return (
    <div className="container">
      <div className="text-center pt-4">
        <h2 className="md:text-[28px] text-2xl pb-5 font-bold ">
          Today Panchang: Panchangam
        </h2>
        <h3 className="md:text-2xl text-lg">
          Wednesday, August 9, 2023 Panchang for New Delhi, India
        </h3>
        <div className="shadow-shadow-btn rounded-sm flex sm:flex-row flex-col sm:justify-between justify-center gap-4 mt-5 py-2 sm:px-8 md:px-5 px-4">
          <div className="flex sm:justify-start justify-center  sm:gap-5 gap-3 datepicker-main">
            <div className="flex items-center">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD-MM-YYYY"
                className="border p-[6px] max-w-[196px] md:text-base text-sm w-full px-3 rounded-md md:placeholder:text-base placeholder:text-sm"
              />
            </div>
            
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleEnterPress}
              className="border p-[6px] max-w-[196px] md:text-base text-sm w-full px-3 rounded-md"
              placeholder="Enter City Name"
            />
          
          </div>

          <div className="flex sm:justify-start justify-center items-center gap-1">
          <div className="mr-4 flex gap-1">
              {valuesArray.map((value, index) => (
                <div key={index} className="flex gap-2 items-center text-primary-orange bg-[#f8e5df]  rounded-full px-2 py-[2px]">
                  <span className="font-medium">{value}</span>
                  <button onClick={() => removeValue(index)}><Image src={Close} alt=""/></button>
                </div>
              ))}
            </div>
            <input
              type="button"
              id="previous"
              value=" << "
              className="border border-transparent rounded-sm cursor-pointer bg-primary-orange p-1 text-white"
            />
            <input
              type="button"
              id="today"
              value="TODAY"
              className="border border-transparent rounded-sm cursor-pointer bg-primary-orange p-1 text-white"
            />
            <input
              type="button"
              id="next"
              value=" >> "
              className="border border-transparent rounded-sm cursor-pointer bg-primary-orange p-1 text-white"
            />
          </div>
        </div>
        <div className="shadow-shadow-btn rounded-sm mt-5 px-5 py-4 text-left">
          <div>
            <h3 className="text-lg pb-5 font-semibold">Panchang For Today</h3>
            <div className="flex md:gap-20 gap-10 justify-between sm:flex-row flex-col">
              <div className="grid grid-cols-2 text-[15px] max-w-[400px] w-full">
                <div>
                  <Link
                    href={"#0"}
                    className="text-primary-orange block underline decoration-primary-orange font-semibold pb-2"
                  >
                    Tithi
                  </Link>
                  <Link
                    href={"#0"}
                    className="text-primary-orange block underline decoration-primary-orange font-semibold pb-2"
                  >
                    Nakshatra
                  </Link>
                  <Link
                    href={"#0"}
                    className="text-primary-orange block underline decoration-primary-orange font-semibold"
                  >
                    Karana
                  </Link>
                </div>
                <div>
                  <div className="pb-2">
                    <Link
                      href={"#0"}
                      className="border-b border-primary-orange text-primary-orange font-medium"
                    >
                      Chaturdashi
                    </Link>{" "}
                    upto 11:00:27
                  </div>
                  <div className="pb-2">
                    <Link
                      href={"#0"}
                      className="border-b border-primary-orange text-primary-orange font-medium"
                    >
                      Dhanishta
                    </Link>{" "}
                    upto 20:47:31
                  </div>
                  <div>
                    <Link
                      href={"#0"}
                      className="border-b border-primary-orange text-primary-orange font-medium"
                    >
                      Vanij
                    </Link>{" "}
                    upto 11:00:27,{" "}
                    <span>
                      <Link
                        href={"#0"}
                        className="border-b border-primary-orange text-primary-orange font-medium"
                      >
                        Vishti
                      </Link>{" "}
                      upto 21:03:43
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 text-[15px] max-w-[400px] w-full">
                <div>
                  <h4 className="font-semibold pb-2">Paksha</h4>
                  <Link
                    href={"#0"}
                    className="text-primary-orange block pb-2 underline decoration-primary-orange font-semibold"
                  >
                    Yoga
                  </Link>
                  <Link
                    href={"#0"}
                    className="text-primary-orange block underline decoration-primary-orange font-semibold"
                  >
                    Day
                  </Link>
                </div>
                <div>
                  <div className="pb-2">Shukla</div>
                  <div className="pb-2">
                    <Link
                      href={"#0"}
                      className="border-b border-primary-orange text-primary-orange font-medium"
                    >
                      Atiganda
                    </Link>{" "}
                    upto 21:32:17
                  </div>
                  <div>Buddhavara</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-shadow-btn rounded-sm mt-5 px-5 py-4 text-left">
          <div>
            <h3 className="text-lg pb-5 font-semibold">
              Sun And Moon Calculations
            </h3>
            <div className="flex md:gap-20 gap-10 justify-between sm:flex-row flex-col">
              <div className="grid grid-cols-2 text-[15px] max-w-[400px] w-full">
                <div>
                  <div className="font-semibold pb-2">Sun Rise</div>
                  <div className="font-semibold pb-2">Sun Set</div>
                  <div className="font-semibold">Moon Sign</div>
                </div>
                <div>
                  <div className="pb-2">05:57:47</div>
                  <div className="pb-2">18:45:29</div>
                  <div>
                    <Link
                      href={"#0"}
                      className="border-b border-primary-orange text-primary-orange font-medium"
                    >
                      Makara
                    </Link>{" "}
                    upto 10:19:34
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 text-[15px] max-w-[400px] w-full">
                <div>
                  <h4 className="font-semibold pb-2">Moon Rise</h4>
                  <h4 className="font-semibold pb-2">Moon Set</h4>
                  <h4 className="font-semibold">Ritu</h4>
                </div>
                <div>
                  <div className="pb-2">18:34:59</div>
                  <div className="pb-2">
                    <Link
                      href={"#0"}
                      className="border-b border-primary-orange text-primary-orange font-medium"
                    >
                      29:55:00
                    </Link>{" "}
                  </div>
                  <div>Sharad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-shadow-btn rounded-sm mt-5 px-5 py-4 text-left">
          <div>
            <h3 className="text-lg pb-5 font-semibold">Hindu Month And Year</h3>
            <div className="flex md:gap-20 gap-10 justify-between sm:flex-row flex-col">
              <div className="grid grid-cols-2 text-[15px] max-w-[400px] w-full">
                <div>
                  <div className="font-semibold pb-2">Shaka Samvat</div>
                  <div className="font-semibold pb-2">Vikram Samvat</div>
                  <div className="font-semibold pb-2">Kali Samvat</div>
                  <div className="font-semibold">Pravishte / Gate</div>
                </div>
                <div>
                  <div className="pb-2">1945 Shobhakruth</div>
                  <div className="pb-2">2080</div>
                  <div className="pb-2">5124</div>
                  <div>14</div>
                </div>
              </div>
              <div className="grid grid-cols-2 text-[15px] max-w-[400px] w-full">
                <div>
                  <h4 className="font-semibold pb-2">Month Purnimanta</h4>
                  <h4 className="font-semibold pb-2">Month Amanta</h4>
                  <h4 className="font-semibold">Day Duration</h4>
                </div>
                <div>
                  <div className="pb-2">Shravan</div>
                  <div className="pb-2">Shravan</div>
                  <div>12:47:42</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-shadow-btn rounded-sm mt-5 px-5 py-4 text-left">
          <div>
            <h3 className="text-lg pb-5 font-semibold">
              Inauspicious Timings (Ashubha Muhurat)
            </h3>
            <div className="flex md:gap-20 gap-10 justify-between sm:flex-row flex-col">
              <div className="grid grid-cols-2 text-[15px] max-w-[400px] w-full">
                <div>
                  <div className="font-semibold pb-2">Dushta Muhurtas</div>
                  <div className="font-semibold pb-2">Kulika</div>
                  <div className="font-semibold pb-2">Kantaka / Mrityu</div>
                  <div className="font-semibold">Rahu Kaal</div>
                </div>
                <div>
                  <div className="pb-2">From 11:56:02 To 12:47:13</div>
                  <div className="pb-2">From 11:56:02 To 12:47:13</div>
                  <div className="pb-2">From 17:03:07 To 17:54:18</div>
                  <div>From 12:21:38 To 13:57:35</div>
                </div>
              </div>
              <div className="grid grid-cols-2 text-[15px] max-w-[400px] w-full">
                <div>
                  <h4 className="font-semibold pb-2">Kalavela / Ardhayaam</h4>
                  <h4 className="font-semibold pb-2">Yamaghanta</h4>
                  <h4 className="font-semibold pb-2">Yamaganda</h4>
                  <h4 className="font-semibold">Gulika Kaal</h4>
                </div>
                <div>
                  <div className="pb-2">From 06:48:57 To 07:40:08</div>
                  <div className="pb-2">From 08:31:19 To 09:22:30</div>
                  <div className="pb-2">From 07:33:44 To 09:09:42</div>
                  <div>From 10:45:40 To 12:21:38</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-shadow-btn rounded-sm mt-5 px-5 py-4 text-left">
          <div>
            <h3 className="text-lg pb-5 font-semibold">
              Auspicious Timings (Shubha Muhurat)
            </h3>
            <div className="grid grid-cols-2 text-[15px] max-w-[400px] w-full">
              <div>
                <Link
                  href={"#0"}
                  className="text-primary-orange block underline decoration-primary-orange font-semibold pb-2"
                >
                  Abhijit
                </Link>
              </div>
              <div className="pb-2">none</div>
            </div>
          </div>
        </div>
        <div className="shadow-shadow-btn rounded-sm mt-5 px-5 py-4 text-left">
          <div>
            <h3 className="text-lg pb-5 font-semibold">Disha Shoola</h3>
            <div className="grid grid-cols-2 text-[15px] max-w-[400px] w-full">
              <div>Disha Shoola</div>
              <div className="pb-2">North</div>
            </div>
          </div>
        </div>
        <div className="shadow-shadow-btn rounded-sm mt-5 px-5 py-4 text-left">
          <div>
            <h3 className="text-lg pb-5 font-semibold">
              Chandrabalam And Tarabalam
            </h3>
            <div className="flex md:gap-20 gap-10 justify-between sm:flex-row flex-col">
              <div className="grid grid-cols-2 text-[15px] max-w-[500px] w-full">
                <div className="font-semibold pb-2">Tara Bala</div>
                <div>
                  <div className="pb-2">
                    Bharani, Rohini, Mrigashirsha, Ardra, Punarvasu, Ashlesha,
                    Poorva Phalguni, Hasta, Chitra, Swati, Vishakha, Jyeshta,
                    Poorva Ashadha, Shravana, Dhanishta, Satabisha, Poorva
                    Bhadrapada, Revati
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 text-[15px] max-w-[400px] w-full">
                <div>
                  <h4 className="font-semibold pb-2"> Chandra Bala</h4>
                </div>
                <div>
                  <div className="pb-2">
                    Mesha, Karka, Simha, Vrishchika, Makara, Meena
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LagnaChart />
    </div>
  );
};

export default TodayPanchang;
