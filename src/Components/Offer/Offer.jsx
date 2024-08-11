import React, { useEffect } from "react";
import AOS from "aos";

// ---> Css
import "./offer.css";

// ---> Images
import Image1 from "../../Assets/Images/image1.png";
import Image2 from "../../Assets/Images/image2.png";
import Image3 from "../../Assets/Images/image3.png";
import Image4 from "../../Assets/Images/image4.png";
import Image5 from "../../Assets/Images/image5.png";
import Image6 from "../../Assets/Images/image6.png";

const datas = [
  {
    id: "0",
    image: Image1,
    title: "Development of landing pages",
    text: "The landing page is formed in such a way as to briefly and clearly state the essence of the proposal, arouse interest, and convince the client that this is what he wants.",
  },
  {
    id: "1",
    image: Image2,
    title: "Implementation of ERP systems",
    text: "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    id: "2",
    image: Image3,
    title: "Development of mobile applications",
    text: "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    id: "3",
    image: Image4,
    title: "IT StartUps",
    text: "A corporate site is a site of a company, its official virtual representation on the Internet.",
  },
  {
    id: "4",
    image: Image5,
    title: "IT consulting",
    text: "Online trade is gaining momentum in Uzbekistan, we create online stores on ready-made engines, as well as unique stores, we connect national and foreign payment methods.",
  },
  {
    id: "5",
    image: Image6,
    title: "Development of landing pages",
    text: "The landing page is formed in such a way as to briefly and clearly state the essence of the proposal, arouse interest, and convince the client that this is what he wants.",
  },
];

function Offer() {
  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="services" className="offer">
      <div className="container !pt-[100px] !pb-[20px] sm:!pt-[150px] sm:!pb-[20px]">
        <h2 className="font-bold text-[25px] leading-[30px] text-white text-center">
          What do we offer?
        </h2>
        <span className="block mx-auto mt-5 justify-center max-w-[125px] w-full h-[1px] bg-[#E2E2E2]"></span>
        <ul className="flex flex-wrap justify-center sm:gap-6 mt-[80px] space-y-[30px] sm:space-y-0">
          {datas.map((data) => (
            <div
              key={data?.id}
              data-aos="fade-up"
              data-aos-duration="600"
              className="sm:flex items-start justify-center text-center sm:text-start space-y-5 sm:space-y-0 card sm:max-w-[530px] w-full sm:space-x-5 p-6 rounded-lg"
            >
              <li className="w-full sm:w-1/2">
                <h3 className="font-medium text-white text-[20px] leading-[24px] mt-[10px]">
                  {data?.title}
                </h3>
                <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
                  {data?.text}
                </p>
              </li>
              <div className="flex justify-center w-full sm:w-1/2">
                <img src={data?.image} alt="card-icon" />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Offer;
