import React, { useEffect, useState } from "react";
import Link from "next/link"; 

const TabList = ({defultTab}) => {
  const [openPolicies, setOpenPolicies] = useState(false);  
  
  useEffect(() => {
    setOpenPolicies(defultTab)      
  }, [defultTab]) 
  

  return (
    <>
      <div className="flex flex-wrap lg:py-[105px] md:py-16 py-8">
        <div className="w-full flex justify-between gap-8 md:flex-row flex-col">
          <div className=" mb-0 list-none" role="tablist">
            <div className="max-w-[193px] w-full">
              <h2 className="text-3xl text-[#121212] font-bold">Browse</h2>
              <div>
                <h3                  
                  className="font-semibold text-lg text-[#212121] block mb-2 mt-6 whitespace-nowrap"
                >
                  Terms of Service
                </h3>
                <a
                  className={
                    "block  md:pl-6 mb-2 cursor-pointer  " +
                    (openPolicies === 1
                      ? " text-primary-orange font-semibold"
                      : "text-[#605F5F]")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenPolicies(1);
                  }}
                  data-toggle="tab"
                  href=""
                  role="tablist"
                >
                  General terms
                </a>
                <a
                  className={
                    " block md:pl-6 mb-2 cursor-pointer  " +
                    (openPolicies === 2
                      ? "text-primary-orange font-semibold"
                      : "text-[#605F5F]")
                  }
                  data-toggle="tab"
                  href="/disclaimer"
                  role="tablist"                 
                  >
                  Disclaimer
                </a>
              </div>
            </div>
            <div>
              <h3               
                className="font-semibold text-lg block text-[#212121] mb-2 md:mt-[21px] mt-3 "
              >
                Privacy Policy
              </h3>

              <a
                className={
                  " block md:pl-6 mb-2 cursor-pointer " +
                  (openPolicies === 3
                    ? "text-primary-orange font-semibold"
                    : "text-[#605F5F]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenPolicies(3);
                }}
                data-toggle="tab"
                href=""
                role="tablist"
              >
                For everyone
              </a>
              <a
                className={
                  " block md:pl-6 mb-2 cursor-pointer " +
                  (openPolicies === 4
                    ? "text-primary-orange font-semibold"
                    : "text-[#605F5F]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenPolicies(4);
                }}
                data-toggle="tab"
                href=""
                role="tablist"
              >
                For users
              </a>
              <a
                className={
                  " block md:pl-6 mb-2 cursor-pointer " +
                  (openPolicies === 5
                    ? "text-primary-orange font-semibold"
                    : "text-[#605F5F]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenPolicies(5);
                }}
                data-toggle="tab"
                href=""
                role="tablist"
              >
                For astrologers
              </a>
              <a
                className={
                  " block md:pl-6 mb-2 cursor-pointer " +
                  (openPolicies === 6
                    ? "text-primary-orange font-semibold"
                    : "text-[#605F5F]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenPolicies(6);
                }}
                data-toggle="tab"
                href=""
                role="tablist"
              >
                For partners
              </a>
              <a
                className={
                  " block md:pl-6 cursor-pointer " +
                  (openPolicies === 7
                    ? "text-primary-orange font-semibold"
                    : "text-[#605F5F]")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenPolicies(7);
                }}
                data-toggle="tab"
                href=""
                role="tablist"
              >
                For visitors
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#212121] mb-2 md:mt-[21px] mt-3">
                Cookies Policy
              </h3>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#212121] mb-2 md:mt-[21px] mt-3">
                Refund Policy
              </h3>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#212121] mb-2 md:mt-[21px] mt-3">
                Cancellation Policy
              </h3>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full max-w-[958px]">
            <div>
              <div className="tab-content tab-space">
                <div
                  className={openPolicies === 1 ? "block" : "hidden"}
                  id="link1"
                >
                  <div className="text-[#3E3E59]">
                    <div className="border-b border-[#EAEAEA] pb-6">
                      <h2 className="lgm:text-5xl md:text-4xl text-2xl font-bold text-[#212121] mb-[6px]">
                        Terms of Service
                      </h2>
                      <p className="lg:text-xl md:text-lg text-base lg:leading-[32px]">
                        Version 1.0 — Oct 2022
                      </p>
                    </div>
                    <p className="lg:text-xl md:text-lg text-base lgm:pt-12 md:pt-10 pt-8 lgm:mb-[64px] lg:mb-10 md:mb-5 mb-3 lg:leading-[32px]">
                      This Privacy Policy describes how official Nayzak Website
                      (the “Site” or “we”) collects, uses, and discloses your
                      Personal Information when you visit or make a purchase
                      from the Site.
                    </p>
                    <div className="lgm:mb-[64px] lg:mb-10 md:mb-5 mb-3">
                      <h4 className="lgm:text-xl text-lg font-semibold text-[#121212] lg:mb-6 md:mb-2 mb-2">
                        Collecting personal information
                      </h4>
                      <p className="lg:text-xl md:text-lg text-base lg:leading-[32px]">
                        When you visit the Site, we collect certain information
                        about your device, your interaction with the Site, and
                        information necessary to process your purchases. We may
                        also collect additional information if you contact us
                        for customer support. In this Privacy Policy, we refer
                        to any information that can uniquely identify an
                        individual (including the information below) as
                        “Personal Information”. See the list below for more
                        information about what Personal Information we collect
                        and why.
                      </p>
                    </div>
                    <div className="lgm:mb-[64px] lg:mb-10 md:mb-5 mb-3">
                      <h4 className="lgm:text-xl text-lg font-semibold text-[#121212] lg:mb-6 md:mb-2 mb-2">
                        Device information
                      </h4>
                      <p className="lg:text-xl md:text-lg text-base lg:leading-[32px] lgm:mb-8 md:mb-3 mb-3">
                        ✦ Examples of Personal Information collected: version of
                        web browser, IP address, time zone, cookie information,
                        what sites or products you view and how you interact
                        with the Site.
                      </p>
                      <p className="lg:text-xl md:text-lg text-base lg:leading-[32px] lgm:mb-8 md:mb-3 mb-3">
                        ✦ Purpose of collection: to load the Site accurately for
                        you, and to perform analytics on Site usage to optimize
                        our Site.
                      </p>
                      <p className="lg:text-xl md:text-lg text-base lg:leading-[32px] lgm:mb-8 md:mb-3 mb-3">
                        ✦ Source of collection: Collected automatically when you
                        access our Site using cookies, log files, web beacons,
                        tags, or pixels.
                      </p>
                      <p className="lg:text-xl md:text-lg text-base lg:leading-[32px]">
                        ✦ Disclosure for a business purpose: shared with our
                        processor.
                      </p>
                    </div>
                    <div className="lgm:mb-[64px] lg:mb-10 md:mb-5 mb-3">
                      <h4 className="lgm:text-xl text-lg font-semibold text-[#121212] lg:mb-6 md:mb-2 mb-2">
                        Using personal information
                      </h4>
                      <p className="lg:text-xl md:text-lg text-base lg:leading-[32px]">
                        We use your personal Information to provide our services
                        to you, which includes: offering products for sale,
                        processing payments, shipping and fulfillment of your
                        order, and keeping you up to date on new products,
                        services, and offers.
                      </p>
                    </div>
                    <div className="lgm:mb-[64px] lg:mb-10 md:mb-5 mb-3">
                      <h4 className="lgm:text-xl text-lg font-semibold text-[#121212] lg:mb-6 md:mb-2 mb-2">
                        GDPR
                      </h4>
                      <p className="lg:text-xl md:text-lg text-base lg:leading-[32px] lgm:mb-8 md:mb-3 mb-3">
                        If you are a resident of the EEA, you have the right to
                        access the Personal Information we hold about you, and
                        to ask that your Personal Information be corrected,
                        updated, or erased. If you would like to exercise these
                        rights, please contact us
                        <br />
                        <br />
                        Your Personal Information will be initially processed in
                        Ireland and then will be transferred outside of Europe
                        for storage and further processing, including to Canada
                        and the United States. For more information on how data
                        transfers comply with the GDPR, see Shopify’s GDPR
                        Whitepaper:{" "}
                        <Link className="break-all" href={""}>
                          https://help.shopify.com/en/manual/your-account/privacy/GDPR.
                        </Link>
                      </p>
                    </div>
                    <div className="lgm:mb-[64px] lg:mb-10 md:mb-5 mb-3">
                      <h4 className="lgm:text-xl text-lg font-semibold text-[#121212] lg:mb-6 md:mb-2 mb-2">
                        CCPA
                      </h4>
                      <p className="lg:text-xl md:text-lg text-base lg:leading-[32px] lgm:mb-8 md:mb-3 mb-3">
                        If you are a resident of California, you have the right
                        to access the Personal Information we hold about you, to
                        port it to a new service, and to ask that your Personal
                        Information be corrected, updated, or erased. If you
                        would like to exercise these rights, please contact us
                        <br />
                        <br />
                        If you would like to designate an authorized agent to
                        submit these requests on your behalf, please contact us
                        at the address below.
                      </p>
                    </div>
                    <div className="">
                      <h4 className="lgm:text-xl text-lg font-semibold text-[#121212] lg:mb-6 md:mb-2 mb-2">
                        Contact
                      </h4>
                      <p className="lg:text-xl md:text-lg text-base lg:leading-[32px]">
                        For more information about our privacy practices, if you
                        have questions, or if you would like to make a
                        complaint, please contact us by e-mail at
                        support@nayzak.website
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={openPolicies === 2 ? "block" : "hidden"}                  
                >
                  <div className="p-5">Disclaimer</div>
                </div>
                <div
                  className={openPolicies === 3 ? "block" : "hidden"}                 
                >
                  <div className="p-5">For everyone</div>
                </div>
                <div
                  className={openPolicies === 4 ? "block" : "hidden"}                 
                >
                  <div className="p-5">For users</div>
                </div>
                <div
                  className={openPolicies === 5 ? "block" : "hidden"}                 
                >
                  <div className="p-5">For astrologers</div>
                </div>
                <div
                  className={openPolicies === 6 ? "block" : "hidden"}                 
                >
                  <div className="p-5">For partners</div>
                </div>
                <div
                  className={openPolicies === 7 ? "block" : "hidden"}                 
                >
                  <div className="p-5">For visitors</div>
                </div>
                <div
                  className={openPolicies === 8 ? "block" : "hidden"}                 
                >
                  <div className="p-5">Cookies Policy</div>
                </div>
                <div
                  className={openPolicies === 9 ? "block" : "hidden"}                 
                >
                  <div className="p-5">Refund Policy</div>
                </div>
                <div
                  className={openPolicies === 10 ? "block" : "hidden"}                 
                >
                  <div className="p-5">Cancellation Policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabList;
