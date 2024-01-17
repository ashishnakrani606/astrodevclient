"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footerlogo from "./../../assets/image/footer-logo.svg";
import Image from "next/image";
import FooterData from "./FooterData";

const Footer = () => {
  
  const astroDev = [
    { name: "About", link: '/about' },
    { name: "Jagannath Logo", link: '/our-logo' },
    { name: "Blog", link: '/astrology-blog' },
    { name: "Careers", link: '/careers' },
    { name: "Press", link: '/press' },
    { name: "Contact", link: '/contact' },
    { name: "Terms of Service", link: '/terms-of-service' },
    { name: "Privacy Policy", link: '/privacy-policy' },
    { name: "Cookies Policy", link: '/cookies-policy' },
    { name: "Disclaimer", link: '/disclaimer' },
    { name: "Refund Policy", link: '/refund-policy' },
    { name: "Cancellation policy", link: '/cancellation-policy' },
    { name: "Sitemap", link: '/sitemap' },
  ];
  const impotantLink = [
    { name: "Free Kundli", link: '/free-kundli' },
    { name: "Kundli Matching", link: '/kundli-matching' },
    { name: "How to read Kundli", link: '/how-to-read-kundli' },
    { name: "Detailed Kundli", link: '/detailed-horoscope' },
    { name: "Child Astrology", link: '/child-astrology' },
    { name: "Gemstone Suggestion", link: '/gemstone-suggestion' },
    { name: "Sunsign Gemstones", link: '/sunsign-gemstone' },
    { name: "Numerology", link: '/numerology' },
  ];
  const astrologers = [
    { name: "Astrologer Login", link: '/astrologer-login' },
    { name: " Astrologer Registration", link: '/astrologer-registration' },
    { titleLink: 'Find Astrologers', link: '/best-astrologer' },
    { name2: "Chat with Astrologer", link: '/chat-with-astrologer' },
    { name2: "Talk to Astrologer", link: '/talk-to-astrologer' },
  ];
  const findAstrologers = [
    { name: "Chat with Astrologer", link: '/chat-with-astrologer' },
    { name: "Talk to Astrologer", link: '/talk-to-astrologer' },
  ];
  const rashiFal = [
    { name: "Aaj ka Rashifal ", link: '/aaj-ka-rashifal' },
    { name: " What is Rashifal?", link: '/what-is-rashifal' },
    { name: 'Rashifal in Hindi', link: '/rashifal-in-hindi' },
    { title: 'Panchang', },
    { name2: "Aaj ka Panchang", link: '/aaj-ka-panchang' },
    { name2: "What is Panchang?", link: '/what-is-panchang' },
    { name2: "Kal ka Panchang", link: '/kal-ka-panchang' },
  ];
  const panching = [
    { name: "Aaj ka Panchang", link: '/aaj-ka-panchang' },
    { name: "What is Panchang?", link: '/what-is-panchang' },
    { name: "Kal ka Panchang", link: '/kal-ka-panchang' },
  ];
  const gemStone = [
    { name: "Blue Sapphire", link: ' https://veryraregems.com/blue-sapphire' },
    { name: 'Yellow Sapphire', link: 'https://veryraregems.com/yellow-sapphire' },
    { name: "Ruby", link: 'https://veryraregems.com/ruby' },
    { name: "Emerald", link: 'https://veryraregems.com/emerald' },
    { name: "Pearl", link: 'https://veryraregems.com/pearl' },
    { name: "Coral", link: 'https://veryraregems.com/coral' },
    { name: "Opal", link: 'https://veryraregems.com/opal' },
    { name: "Turquoise", link: 'https://veryraregems.com/turquoise' },
    { name: "Pyrite", link: 'https://veryraregems.com/pyrite' },
    { name: "Rudraksha", link: 'https://veryraregems.com/rudraksha' },
  ];
  const social = [
    { name: "Facebook" },
    { name: "Twitter" },
    { name: 'Instagram' },
    { name: "LinkedIn" },
    { name: "YouTube" },
    { title: "Mobile Apps" },
    { mobilename: "Android App" },
    { mobilename: "iOS App" },
  ];
  const mobileApp = [
    { name: "Android App" },
    { name: "iOS App" },
  ];

  return (
    <>
      <div className="bg-footer-gradient py-6">
        <div className="container">
          <div className="grid md:grid-cols-3 text-sm grid-cols-1 lg:flex justify-between items-start text-white lg:gap-y-10 md:gap-y-6 gap-y-3 gap-4">
            <FooterData title={"AstroDev"}>
              {astroDev.map((item, index) => (
                <li className="leading-[26px] pb-1" key={index}>
                  <Link href={item.link ? item.link : ''} className="inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </FooterData>
            <FooterData title={"Important Links"}>
              {impotantLink.map((item, index) => (
                <li className="leading-[26px] pb-1" key={index}>
                  <Link href={item.link ? item.link : ''} className="inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </FooterData>
            <FooterData title={"For Astrologers"}>
              {astrologers.map((item, index) => (
                <>
                  {item.name && (
                    <li className="leading-[26px] pb-1" key={index}>
                      <Link
                        href={item.link ? item.link : ''}
                        className="inline-block "
                      >
                        {item.name}
                      </Link>
                    </li>

                  )}
                  {item.title &&
                    <h3 className="font-bold py-[10px] pt-4 md:block hidden">{item.title}</h3>
                  }
                  {item.titleLink &&
                    <Link href={item.link ? item.link : ''} className="font-bold py-[10px] pt-4 md:block hidden">{item.titleLink}</Link>
                  }
                  {item.name2 &&
                    <li className="leading-[26px] pb-1 md:block hidden" key={index}>
                      <Link
                        href={item.link ? item.link : ''}
                        className="inline-block "
                      >
                        {item.name2}
                      </Link>
                    </li>
                  }
                </>
              ))}
            </FooterData>
            <FooterData title={"Find Astrologers"} className="md:hidden block">
              {findAstrologers.map((item, index) => (
                <>
                  {item.name && (
                    <li className="leading-[26px] pb-1" key={index}>
                      <Link
                        href={item.link ? item.link : ''}
                        className="inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>

                  )}
                  {item.title &&
                    <span className="font-bold py-[10px] block pt-4">{item.title}</span>
                  }
                </>
              ))}
            </FooterData>

            <FooterData title={"Rashifal"}>
              {rashiFal.map((item, index) => (
                <>
                  {item.name &&
                    <li className="leading-[26px] pb-1" key={index}>
                      <Link
                        href={item.link ? item.link : ''}
                        className="inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  }
                  {item.title &&
                    <h3 className="font-bold py-[10px]  pt-4 md:block hidden">{item.title}</h3>
                  }
                  {item.name2 &&
                    <li className="leading-[26px] pb-1 md:block hidden" key={index}>
                      <Link
                        href={item.link ? item.link : ''}
                        className="inline-block"
                      >
                        {item.name2}
                      </Link>
                    </li>
                  }
                </>
              ))}
            </FooterData>
            <FooterData title={"Panchang"} className={"md:hidden block"}>
              {panching.map((item, index) => (
                <li className="leading-[26px] pb-1" key={index}>
                  <Link
                    href={item.link ? item.link : ''}
                    className="inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </FooterData>

            <FooterData title={"Gemstones"}>
              {gemStone.map((item, index) => (
                <li className="leading-[26px] pb-1" key={index}>
                  <Link
                     href={item.link ? item.link : ''}
                    
                    className="inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </FooterData>


            <FooterData title={"Social"}>
              {social.map((item, index) => (
                <>
                  {item.name &&
                    <li className="leading-[26px] pb-1" key={index}>
                      <Link
                        href={"#0"}
                        className="inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  }
                  {item.title &&
                    <h3 className="font-bold py-[10px]  pt-4 md:block hidden">{item.title}</h3>
                  }
                  {item.mobilename &&
                    <Link
                      href={"#0"}
                      className=" md:block pb-1 hidden"
                    >
                      {item.mobilename}
                    </Link>
                  }
                </>
              ))}
            </FooterData>
            <FooterData title={"Mobile Apps"} className="md:hidden block">
              {mobileApp.map((item, index) => (
                <li className="leading-[26px] pb-1" key={index}>
                  <Link
                    href={"#0"}
                    className="inline-block"
                  >

                    {item.name}
                  </Link>
                </li>
              ))}
            </FooterData>

          </div>
          <Link href={"/"} className="lg:-mt-12 pt-8 lg:pt-0 block">
            <Image src={Footerlogo} alt="" className="mx-auto" />
          </Link>
          <div className={`text-center text-white pt-4 text-xs`}>
            <p>
              Copyright © 2023, AstroDev. All rights reserved by Anant Commerce
              India Private Limited.
            </p>
          </div>
        </div>
      </div>     

    </>
  );
};

export default Footer;
