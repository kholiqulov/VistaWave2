import React from "react";

// ---> Css
import "./whyus.css";

// ---> Images
import Bar from "../../Assets/Images/bar.svg";
import Briefcase from "../../Assets/Images/briefcase.svg";

function WhyUs() {
  return (
    <section className="container">
      <div className="backImg md:mt-[100px]">
        <div className="insertBg p-10">
          <h2 className="font-bold text-[25px] leading-[30px] text-white text-center sm:text-start">
            Why Us ?
          </h2>
          <ul className="flex flex-wrap items-center justify-between mt-[50px] gap-12">
            <li className="sm:max-w-[300px] w-full text-center sm:text-start">
              <img
                className="w-[50px] h-[50px] mx-auto sm:m-0"
                src={Briefcase}
                alt="card-icon"
              />
              <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
                We deliver customized IT solutions designed to fit your unique
                business needs, using innovative approaches to drive growth,
                efficiency, and a competitive edge in your industry. Industry
              </p>
            </li>
            <li className="sm:max-w-[300px] w-full text-center sm:text-start">
              <img
                className="w-[50px] h-[50px] mx-auto sm:m-0"
                src={Bar}
                alt="card-icon"
              />
              <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
                Our team’s extensive experience across various industries
                ensures that we provide solutions tailored to your specific
                challenges, delivering real value and strategic alignment with
                your business goals.
              </p>
            </li>
            <li className="sm:max-w-[300px] w-full text-center sm:text-start">
              <img
                className="w-[50px] h-[50px] mx-auto sm:m-0"
                src={Bar}
                alt="card-icon"
              />
              <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
                We offer exceptional customer support, partnering with you every
                step of the way to ensure our IT solutions continue to meet your
                needs as your business evolves and grows.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
