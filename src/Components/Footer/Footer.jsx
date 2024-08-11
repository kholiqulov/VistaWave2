import React from "react";
import { Link } from "react-router-dom";

// ---> Css
import "./footer.css";

// ---> Images
import Logo from "../../Assets/Images/logov.png";
import Telegram from "../../Assets/Images/telegram.svg";

function Footer() {
  return (
    <footer className="footer mt-[100px] py-5">
      <div className="container flex flex-col sm:flex-row sm:items-center items-start sm:justify-between">
        <div>
          <Link to="/" className="block">
            <img
              className="w-[70px] sm:w-[80px] h-[50px] sm:h-[60px]"
              src={Logo}
              alt="logo"
            />
          </Link>
          <p className="font-medium text-[15px] leading-[18px] text-gray-300 mt-[17px] max-w-[300px] w-full">
            <strong>VistaWave</strong> - empowers large enterprises to establish
            a strong online presence through innovative digital solutions.
          </p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-[50px] gap-y-5 mt-[30px] sm:mt-0">
          <li>
            <a className="font-normal text-base text-gray-300" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-normal text-base text-gray-300" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-normal text-base text-gray-300" href="#staff">
              Staff
            </a>
          </li>
          <li>
            <a className="font-normal text-base text-gray-300" href="#contact">
              Contract
            </a>
          </li>
        </ul>
        <div className="sm:max-w-[282px] w-full mt-[30px] sm:mt-0">
          <h3 className="font-semibold text-base text-gray-300">
            Congratulation!
          </h3>
          <p className="font-medium text-[15px] leading-[18px] text-gray-300 mt-[5px]">
            Join our mailing list. We write rarely, but only the best content.
          </p>
          <form className="flex items-center mt-[15px]">
            <input
              className="h-[41px] text-sm bg-[#444444] text-gray-300 border-[0.5px] border-[#B8B8B8] rounded-l-[20px] px-4 outline-none w-full"
              type="text"
              placeholder="Your email address"
            />
            <button
              id="submitBtn"
              className="flex items-center justify-center ml-[5px] rounded-r-[10px] w-[48px] h-[41px] px-[10px] border"
              type="submit"
            >
              <img className="" src={Telegram} alt="telegram" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
