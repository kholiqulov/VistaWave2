import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";

// ---> Css
import "./whyus.css";

// ---> Images
import Bar from "../../Assets/Images/bar.svg";
import Briefcase from "../../Assets/Images/briefcase.svg";

function WhyUs() {
  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();

  return (
    <section className="container">
      <div className="backImg md:mt-[100px]">
        <div className="insertBg p-10">
          <h2
            data-aos="fade-up"
            data-aos-duration="600"
            className="font-bold text-[28px] leading-[30px] text-white text-center sm:text-start"
          >
            {t("whyus.title")}
          </h2>
          <ul className="flex flex-wrap items-center justify-between mt-[50px] gap-12">
            <li
              data-aos="fade-up"
              data-aos-duration="600"
              className="sm:max-w-[300px] w-full text-center sm:text-start"
            >
              <img
                className="w-[50px] h-[50px] mx-auto sm:m-0"
                src={Briefcase}
                alt="card-icon"
              />
              <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
                {t("whyus.text1")}
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="50"
              className="sm:max-w-[300px] w-full text-center sm:text-start"
            >
              <img
                className="w-[50px] h-[50px] mx-auto sm:m-0"
                src={Bar}
                alt="card-icon"
              />
              <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
                {t("whyus.text2")}
              </p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              className="sm:max-w-[300px] w-full text-center sm:text-start"
            >
              <img
                className="w-[50px] h-[50px] mx-auto sm:m-0"
                src={Bar}
                alt="card-icon"
              />
              <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
                {t("whyus.text3")}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
