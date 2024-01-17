import React, { useState } from "react";
import Image from "next/image";
import Reviewers from "./../../assets/image/reviewers.svg";
import Like from "./../../assets/icon/likeicon.svg";
import Reviewers2 from "./../../assets/icon/feedback__icon.svg";
import Reviewers3 from "./../../assets/icon/narendra_rai.svg";
import Reviewers4 from "./../../assets/icon/vipin.svg";
import Link from "next/link";
import Book from "./../../assets/image/brihat-book.png";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap max-w-[786px] mx-auto mr-0 md:pt-5 pt-3">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap flex-row" role="tablist">
            <li
              className="
             mr-2 text-center"
            >
              <a
                className={
                  "font-semibold md:px-[18px] p-3 md:py-4 block leading-normal " +
                  (openTab === 1 ? "text-primary-orange" : "text-[#787887]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Reviews
              </a>
            </li>
            <li className="-mb-px mr-2 text-center">
              <a
                className={
                  "font-semibold md:px-[18px] p-3 md:py-4  block leading-normal " +
                  (openTab === 2 ? "text-primary-orange" : "text-[#787887]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Articles
              </a>
            </li>
            <li className="-mb-px mr-2 text-center">
              <a
                className={
                  "font-semibold md:px-[18px] p-3 md:py-4 block leading-normal " +
                  (openTab === 3 ? "text-primary-orange" : "text-[#787887]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Blogs
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full">
            <div>
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div>
                    <h2 className="md:text-lg text-base font-semibold lg:p-5 p-3 lg:mb-5 mb-3 border-b border-[#DCDCDC]">
                      Reviews for Astrologer Mahendram
                    </h2>
                    <div className="flex justify-between md:px-5 px-2 md:py-7 py-4 border-b border-[#DCDCDC]">
                      <div className="flex items-start md:gap-8 gap-3 ">
                        <Image src={Reviewers} alt="" />
                        <div>
                          <h4 className="text-[#787887] text-sm font-bold">
                            Manoj (Verified)
                          </h4>
                          <h3 className="md:text-lg text-base font-bold text-secondary-black md:pt-[18px] pt-3">
                            Visited For Zirconia Crowns
                          </h3>
                          <div className="flex gap-2 text-secondary-black md:text-base text-sm ">
                            <Image src={Like} alt="" />I recommend the doctor
                          </div>
                          <div className="flex gap-2 text-secondary-black py-3">
                            Happy with:
                            <span className="text-sm bg-[#D8F2FC] border-[#B3E2F4] border rounded-[3px] p-1">
                              Wait time
                            </span>
                          </div>
                          <p className="md:text-base text-sm">
                            {
                              "The place is comparable to any drs office in the Bangalore chisel dental clean and tidy and very professional, friendly and resolved my issues quickly. They accommodated me at short notice and the staff were very competent. They have an easy check in process and are completely automated. Would recommend them very highly to anyone who is considering getting dental work in Bangalore Kudos !!!!nrecently got a root canal done in Chisel I was very anxious and my tooth was in a very bad way .Dr Sumanth took me through the entire procedure in the first sitting and charged me nothing for the consultation . The process when performed by doctor Sumanth was painless and I slept through most of the root canal treatment which was almost one hour long . I had minimal pain even after the anesthesia wore off and the next day I even got a call from the clinic asking me how I was feeling I have had a crown fitting done.Overall satisfied.Thank u to the team of Chisel for providing such good care."
                            }
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="md:text-sm text-xs text-[#787887] xsm:whitespace-nowrap">
                          12 days ago 
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between md:px-5 px-2 md:py-7 py-4 border-b border-[#DCDCDC]">
                      <div className="flex items-start md:gap-8 gap-3 ">
                        <Image src={Reviewers2} alt="Reviwers" />
                        <div>
                          <h4 className="text-[#787887] text-sm font-bold">
                            Venkat (Verified)
                          </h4>
                          <div className="flex gap-2 text-secondary-black md:pt-4 pt-2 md:text-base text-sm">
                            <Image src={Like} alt="" />I recommend the doctor
                          </div>
                          <p className="pt-2 md:text-base text-sm">
                            I had a very great experience in chisel dental as I
                            was very happy with Dr sumanth detail exploitation
                            he is very good.
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="md:text-sm text-xs text-[#787887] xsm:whitespace-nowrap">
                          3 years ago  
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between md:px-5 px-2 py-7 border-b border-[#DCDCDC]">
                      <div className="flex items-start md:gap-8 gap-3 ">
                        <Image src={Reviewers3} alt="" />
                        <div>
                          <h4 className="text-[#787887] text-sm font-bold">
                            Narendra Rai (Verified)
                          </h4>
                          <h3 className="md:text-lg font-bold text-secondary-black md:pt-[18px] pt-3">
                            Visited For Zirconia Crowns
                          </h3>
                          <div className="flex gap-2 text-secondary-black md:text-base text-sm">
                            <Image src={Like} alt="" />
                            Visited For Zirconia Crowns
                          </div>
                          <div className="flex gap-2 text-secondary-black py-3">
                            Happy with:
                            <span className="text-sm bg-[#D8F2FC] border-[#B3E2F4] border rounded-[3px] p-1">
                              Wait time
                            </span>
                          </div>
                          <p className="md:text-base text-sm">
                            I am fully satisfied by the treatment and procedures
                            taken for my dental , the staffs , the doctors all
                            the time so helpful, one stop solution-thank u
                            chisel
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="md:text-sm text-xs text-[#787887] xsm:whitespace-nowrap">
                          11 days ago  
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between md:px-5 px-2 py-7 border-b border-[#DCDCDC]">
                      <div className="flex items-start md:gap-8 gap-3 ">
                        <Image src={Reviewers4} alt="" />
                        <div>
                          <h4 className="text-[#787887] text-sm font-bold">
                            Vipin (Verified)
                          </h4>
                          <h3 className="md:text-lg font-bold text-secondary-black md:pt-[18px] pt-3">
                            Visited For Zirconia Crowns
                          </h3>
                          <div className="flex gap-2 text-secondary-black md:pt-4 pt-2 md:text-base text-sm">
                            <Image src={Like} alt="" />I recommend the doctor
                          </div>
                          <p className="pt-2 md:text-base text-sm">
                            I had a very great experience in chisel dental as I
                            was very happy with Dr sumanth detail exploitation
                            he is very good.
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="md:text-sm text-xs text-[#787887] xsm:whitespace-nowrap">
                          26 days ago
                        </p>
                      </div>
                    </div>
                    <div className="py-6">
                      <Link
                        href={"#0"}
                        className="text-primary-orange text-sm font-semibold"
                      >
                        Show all reviews (2655)
                      </Link>
                    </div>
                  </div>
                  <div className="flex bg-[#E0D1F0] justify-between items-start py-2 max-w-[336px] mb-2">
                    <div className="pl-2">
                      <h2 className="text-[19px] text-[#1E1E28] font-bold pt-2">
                        Buy Detailed Horoscope
                      </h2>
                      <span className="text-[#1E1E28] text-[15px] font-bold pt-[6px]">
                        @ Rs. 399/-
                      </span>
                      <div className="bg-[#9966CC] text-white py-[9px] shadow-shadow-btn px-6 text-sm text-center mt-4 hover:bg-[#ad7be0] transition-all duration-700 rounded-[3px] max-w-[125px]">
                        <button> BUY NOW</button>
                      </div>
                    </div>
                    <Image src={Book} alt="" />
                  </div>
                  <div className="md:px-4 md:py-5 py-2 text-secondary-black">
                    <h2 className="text-secondary-black border-b border-[#DCDCDC] pb-[18px] text-lg font-bold">
                      Common questions & answers
                    </h2>
                    <div className="py-5 border-b border-[#DCDCDC]">
                      <h3 className="font-bold">
                        Q: Where does Astrologer Mahendram practice?
                      </h3>
                      <p className="pt-[10px]">
                        <b>A: </b> Dr. Sumanth Shetty practices at Chisel Dental
                        - Koramangala.
                      </p>
                    </div>
                    <div className="py-5 border-b border-[#DCDCDC]">
                      <h3 className="font-bold">
                        {
                          "Q: How can I take Astrologer Mahendram's appointment ?"
                        }
                      </h3>
                      <p className="pt-[10px]">
                        <b>A: </b> You can take{" "}
                        <span className="text-primary-orange">
                          {"Dr. Sumanth Shetty's appointment "}
                        </span>
                        online through Practo for in-clinic visit with the
                        doctor.
                      </p>
                    </div>
                    <div className="py-5 border-b border-[#DCDCDC]">
                      <h3 className="font-bold">
                        Q: Why do patients visit Astrologer Mahendram?
                      </h3>
                      <p className="pt-[10px]">
                        <b>A: </b>Patients frequently visit Dr. Sumanth Shetty
                        for Dental Fillings, Tooth Extraction, Teeth Whitening.
                        To see more reasons visit the{" "}
                        <span className="text-primary-orange">
                          {"doctor's profile"}
                        </span>{" "}
                        on Practo.
                      </p>
                    </div>
                    <div className="py-5 border-b border-[#DCDCDC]">
                      <h3 className="font-bold">
                        {"Q: What is Astrologer Mahendram's rating?"}
                      </h3>
                      <p className="pt-[10px]">
                        <b>A: </b>Dr. Sumanth Shetty has been recommended by
                        4207 patients and has recieved stories from 2655
                        patients. You can{" "}
                        <span className="text-primary-orange">
                          read detailed reviews{" "}
                        </span>{" "}
                        of the doctor on Practo.{" "}
                      </p>
                    </div>
                    <div className="py-5">
                      <h3 className="font-bold">
                        {
                          "Q: What is Astrologer Mahendram's education qualification?"
                        }
                      </h3>
                      <p className="pt-[10px]">
                        <b>A: </b>Dr. Sumanth Shetty has the following
                        qualifications - BDS, MDS - Paedodontics And Preventive
                        Dentistry. You can{" "}
                        <span className="text-primary-orange">
                          book the doctor
                        </span>{" "}
                        {"through the doctor's profile on Practo."}
                      </p>
                    </div>
                  </div>
                  <div className="md:px-5 px-2 md:pt-9 pt-4 text-secondary-black">
                    <div className="border-b border-[#DCDCDC] md:pb-6 pb-3">
                      <h3 className="text-lg font-bold">
                        Services
                        <span className="text-primary-orange text-[13px] font-bold pl-2">
                          View all (126)
                        </span>
                      </h3>
                      <div className="grid sm:grid-cols-3 xsm:grid-cols-2 sevices-data pt-[14px] text-sm">
                        <ul className="pl-5">
                          <li className="pb-2">Dental Fillings</li>
                          <li className="pb-2">Oral Rehabilitation</li>
                          <li className="pb-2">Teeth - Jewellery</li>
                          <li className="pb-2">Implant Rehabilitation</li>
                          <li className="pb-2">RCT - Root Canal Treatment</li>
                        </ul>
                        <ul className="pl-5">
                          <li className="pb-2">Tooth Extraction</li>
                          <li className="pb-2">Crowns and Bridges Fixing</li>
                          <li className="pb-2">Tooth Restoration</li>
                          <li className="pb-2">
                            Impaction / Impacted Tooth Extraction
                          </li>
                          <li className="pb-2">Artificial Teeth</li>
                        </ul>
                        <ul className="pl-5">
                          <li className="pb-2">Teeth Whitening</li>
                          <li className="pb-2">Dental Braces Fixing</li>
                          <li className="pb-2">Invisible/Clear Braces</li>
                          <li className="pb-2">Wisdom Tooth Extraction</li>
                          <li className="pb-2">
                            Cosmetic/ Aesthetic Dentistry
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="grid xsm:grid-cols-2 sevices-data gap-4">
                        <div className="border-b border-[#DCDCDC] md:pb-6 pb-3">
                          <h3 className="md:text-lg text-base font-bold inline-block pb-[14px]">
                            Specializations
                            <span className="text-primary-orange text-[13px] font-bold pl-2">
                              View all (6)
                            </span>
                          </h3>
                          <ul className="pl-5 text-sm">
                            <li className="pb-2">Dentist</li>
                            <li className="pb-2">Implantologist</li>
                            <li className="pb-2">Pediatric Dentist</li>
                            <li className="pb-2">Cosmetic/Aesthetic Dentist</li>
                            <li className="pb-2">Preventive Dentistry</li>
                          </ul>
                        </div>
                        <div className="border-b border-[#DCDCDC] md:pb-6 pb-3">
                          <h3 className="md:text-lg text-base font-bold inline-block pb-[14px]">
                            Awards and Recognitions
                          </h3>
                          <ul className="pl-5 text-sm">
                            <li className="pb-2">
                              Certified in Implants by Nobel Biocare - 2008
                            </li>
                            <li className="pb-2">
                              Certified Sinus Lift Implantologist by Ossteum -
                              2010
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="grid xsm:grid-cols-2 sevices-data gap-4">
                        <div className="border-b border-[#DCDCDC] md:pb-6 pb-3">
                          <h3 className="md:text-lg text-base font-bold inline-block pb-[14px]">
                            Education
                          </h3>
                          <ul className="pl-5 text-sm">
                            <li className="pb-2">
                              BDS - MS Ramaiah Dental College, Bangalore, 1999
                            </li>
                            <li className="pb-2">
                              MDS - Paedodontics And Preventive Dentistry -
                              Bapuji college of dental sciences,Davangere, 2004
                            </li>
                          </ul>
                        </div>
                        <div className="border-b border-[#DCDCDC] md:pb-6 pb-3">
                          <h3 className="md:text-lg text-base font-bold inline-block pb-[14px]">
                            Memberships
                          </h3>
                          <ul className="pl-5 text-sm">
                            <li className="pb-2">Indian Dental Association</li>
                            <li className="pb-2">
                              Indian Society of Pediatric and Preventive
                              Dentistry
                            </li>
                            <li className="pb-2">
                              Indian Society of Oral Implantologist
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4">
                      <div className="grid xsm:grid-cols-2 sevices-data gap-4">
                        <div className="">
                          <h3 className="md:text-lg text-base font-bold inline-block pb-[14px]">
                            Experience
                          </h3>
                          <ul className="pl-5 text-sm">
                            <li className="pb-2">
                              2004 - 2016 Dentist at Chisel Dental
                            </li>
                            <li className="pb-2">
                              2008 - 2016 Implantologist at Chisel dental
                              clinics
                            </li>
                            <li className="pb-2">
                              2005 - 2009 Asst. Professor - Paediatric dentistry
                              at Ambedkar College of Dental Sciences
                            </li>
                            <li className="pb-2">
                              2010 - 2013 Asso. Professor-Paediatric dentistry
                              at SAIMS
                            </li>
                            <li className="pb-2">
                              2013 - 2015 Prof.and HOD-Paediatric dentistry at
                              TMCollege
                            </li>
                          </ul>
                        </div>
                        <div className="">
                          <h3 className="md:text-lg text-base font-bold inline-block pb-[14px]">
                            Registrations
                          </h3>
                          <ul className="pl-5 text-sm">
                            <li className="pb-2">
                              9242A Karnataka State Dental Council, 2000
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="p-5">article</div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="p-5">blog</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
