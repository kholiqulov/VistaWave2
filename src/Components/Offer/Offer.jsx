import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
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

function Offer() {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();

  const datas = [
    {
      id: "0",
      image: Image1,
      title: t("offer.subtitle1"),
      text: t("offer.text1"),
    },
    {
      id: "1",
      image: Image2,
      title: t("offer.subtitle2"),
      text: t("offer.text2"),
    },
    {
      id: "2",
      image: Image3,
      title: t("offer.subtitle3"),
      text: t("offer.text3"),
    },
    {
      id: "3",
      image: Image4,
      title: t("offer.subtitle4"),
      text: t("offer.text4"),
    },
    {
      id: "4",
      image: Image5,
      title: t("offer.subtitle5"),
      text: t("offer.text5"),
    },
    {
      id: "5",
      image: Image6,
      title: t("offer.subtitle6"),
      text: t("offer.text6"),
    },
  ];

  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="services" className="offer">
      <div className="container !pt-[100px] !pb-[20px] sm:!pt-[150px] sm:!pb-[20px]">
        <h2 className="font-bold text-[28px] leading-[30px] text-white text-center">
          {t("offer.title")}
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
              <li className="w-full sm:w-[60%]">
                <h3 className="font-medium text-white text-[23px] leading-[30px] mt-[10px]">
                  {data?.title}
                </h3>
                <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
                  {data?.text}
                </p>
              </li>
              <div className="flex justify-center mx-auto w-[80%] sm:w-[40%]">
                <img className="object-cover"  src={data?.image} alt="card-icon" />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Offer;
