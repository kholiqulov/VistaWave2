import React from "react";

// ---> Css
import "./whyus.css";

// ---> Images
import Img from "../../Assets/Images/why.png";
import Bar from "../../Assets/Images/bar.svg";
import Briefcase from "../../Assets/Images/briefcase.svg";

function WhyUs() {
  return (
    <section className="container">
      <img className="w-full h-[500px] hidden md:block" src={Img} alt="why-us-bg" />
      <div className="backImg">
        <div className="insertBg sm:px-[50px] pt-[50px] pb-[75px] sm:pb-[90px]">
          <h2 className="font-bold text-[25px] leading-[30px] text-white text-center sm:text-start">
            Why Us ?
          </h2>
          <ul className="flex flex-col sm:flex-row items-center justify-between mt-[50px] space-y-[50px] sm:space-y-0">
            <li className="sm:max-w-[250px] w-full text-center sm:text-start">
              <img className="w-[50px] h-[50px] mx-auto sm:m-0" src={Briefcase} alt="card-icon" />
              <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                amet.
              </p>
            </li>
            <li className="sm:max-w-[250px] w-full text-center sm:text-start">
              <img className="w-[50px] h-[50px] mx-auto sm:m-0" src={Bar} alt="card-icon" />
              <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                amet.
              </p>
            </li>
            <li className="sm:max-w-[250px] w-full text-center sm:text-start">
              <img className="w-[50px] h-[50px] mx-auto sm:m-0" src={Bar} alt="card-icon" />
              <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                amet.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
