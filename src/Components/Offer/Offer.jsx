import React from "react";
import { Link } from "react-router-dom";

// ---> Css
import "./offer.css";

// ---> Images
import Bar from "../../Assets/Images/bar.svg";
import Briefcase from "../../Assets/Images/briefcase.svg";
import Arrow from "../../Assets/Images/arrow-right-blue.svg";

function Offer() {
  return (
    <section className="offer mt-[50px]">
      <div className="container sm:!p-[50px]">
        <h2 className="font-bold text-[25px] leading-[30px] text-white text-center">
          What do we offer?
        </h2>
        <span className="block mx-auto mt-5 justify-center max-w-[125px] w-full h-[1px] bg-[#E2E2E2]"></span>
        <ul className="flex flex-wrap justify-center sm:gap-6 mt-[80px] space-y-[30px] sm:space-y-0">
          <li className="card sm:max-w-[371px] w-full p-5">
            <img className="w-[50px] h-[50px] sm:m-0" src={Briefcase} alt="card-icon" />
            <h3 className="font-medium text-white text-[20px] leading-[24px] mt-[10px]">
              UI/UX/Web developer
            </h3>
            <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
            <Link
              className="flex items-center font-medium text-[#0075FF] text-[15px] leading-[22px] mt-[15px]"
              to="/"
            >
              In detail
              <img className="ml-2" src={Arrow} alt="arrow-icon" />
            </Link>
            <span className="inline-block w-full h-[1px] bg-[#E2E2E2]"></span>
            <ul className="space-y-[10px] mt-[15px]">
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
            </ul>
          </li>
          <li className="card sm:max-w-[371px] w-full p-5">
            <img className="w-[50px] h-[50px] sm:m-0" src={Bar} alt="card-icon" />
            <h3 className="font-medium text-white text-[20px] leading-[24px] mt-[10px]">
              UI/UX/Web designer
            </h3>
            <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
            <Link
              className="flex items-center font-medium text-[#0075FF] text-[15px] leading-[22px] mt-[15px]"
              to="/"
            >
              In detail
              <img className="ml-2" src={Arrow} alt="arrow-icon" />
            </Link>
            <span className="inline-block w-full h-[1px] bg-[#E2E2E2]"></span>
            <ul className="space-y-[10px] mt-[15px]">
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
            </ul>
          </li>
          <li className="card sm:max-w-[371px] w-full p-5">
            <img className="w-[50px] h-[50px] sm:m-0" src={Bar} alt="card-icon" />
            <h3 className="font-medium text-white text-[20px] leading-[24px] mt-[10px]">
              UI/UX/Graphic designer
            </h3>
            <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
            <Link
              className="flex items-center font-medium text-[#0075FF] text-[15px] leading-[22px] mt-[15px]"
              to="/"
            >
              In detail
              <img className="ml-2" src={Arrow} alt="arrow-icon" />
            </Link>
            <span className="inline-block w-full h-[1px] bg-[#E2E2E2]"></span>
            <ul className="space-y-[10px] mt-[15px]">
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
            </ul>
          </li>
          <li className="card sm:max-w-[371px] w-full p-5">
            <img className="w-[50px] h-[50px] sm:m-0" src={Briefcase} alt="card-icon" />
            <h3 className="font-medium text-white text-[20px] leading-[24px] mt-[10px]">
              UI/UX/SMM manager
            </h3>
            <p className="font-normal text-[15px] leading-[23px] text-white mt-[15px] sm:mt-[20px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
            <Link
              className="flex items-center font-medium text-[#0075FF] text-[15px] leading-[22px] mt-[15px]"
              to="/"
            >
              In detail
              <img className="ml-2" src={Arrow} alt="arrow-icon" />
            </Link>
            <span className="inline-block w-full h-[1px] bg-[#E2E2E2]"></span>
            <ul className="space-y-[10px] mt-[15px]">
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
              <li className="font-medium text-[15px] leading-[18px] text-gray-300">
                Web development
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Offer;
