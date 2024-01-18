import React, { useState , useEffect} from "react";
import Image from "next/image";
import axios from 'axios';
import TrueIcons from "./../../assets/icon/true.svg";


const Benefits  =  (id) => {
// const { benefitdata } = await getData();
  // const [benefitdata, setBenefitData]= useState([]);  
  const [sessions, setSessions] = useState([]); 


  useEffect (  () => {
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/benefits`);
        // const {data: response} = await axios.get(`http://localhost:3000/api/benefits`);
        setSessions(response.benefits);
        console.log(response ,"RESPONSE")
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
    console.log(fetchData(), "hello")
  }, []);
  
  // const handleSave = async () => {
  //   if (!title || !description) {
  //     alert("Title and description are required.");
  //     return;
  //   }
  
  //   console.log("Result", title, "Description", description);  
  //   try {
  //     // Fetch data from another website
  //     const response = await fetch('http://localhost:3000/api/benefits');
  //     const otherWebsiteData = await response.json();
  
  //     otherWebsiteData.forEach(async (item) => {
  //       try {
  //         // Use the item data to perform some operation
  //         const res = await fetch('http://localhost:3000/benefits', {
  //           method: 'post',
  //           headers: {
  //             'content-type': 'application/json',
  //           },
  //           body: JSON.stringify({ title: item.title, description: item.description }),
  //         });
  
  //         if (res.ok) {
  //           console.log('Topic created successfully');
  //         } else {
  //           throw new Error('Failed to create topic');
  //         }
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     });
  
  //     router.push('/benefits');
  //   } catch (error) {
  //     console.log(error);
  //     // Handle the error from fetching data from another website
  //   }
  // };
  return (
    <div className="container">
      <div className="lg:px-[42px] pt-7 pb-6">
        <h2 className="md:text-3xl sm:text-2xl text-xl font-bold md:mb-9 mb-6">
          Benefits of Online Astro Talk/Consultation
        </h2>
        <div className="border rounded">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-10 gap-6 md:p-[30px] p-5 justify-center">
             {sessions?.map((item, index) => (
              <div key={index} className="">
                <div className="flex items-center">
                  <div>
                    <Image src={item.icons} width={30} height={30} alt="" />
                  </div>
                  <div>
                    <h3
                      href="#0"
                      className="lg:text-xl md:text-lg sm:text-lg text-lg text-secondary-black font-bold"
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="md:mt-5 mt-2">
                  <h4
                    href="#0"
                    className="text-[#787887] font-normal text-base"
                  >
                    {item.description}
                  </h4>
                </div>
              </div>
            ))} 
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;