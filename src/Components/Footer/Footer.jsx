import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// ---> Css
import "./footer.css";

// ---> Images
import Logo from "../../Assets/Images/logov.png";
import Telegram from "../../Assets/Images/telegram.svg";

function Footer() {
  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();

  return (
    <footer className="footer mt-[100px] py-7">
      <div className="container flex flex-wrap items-start lg:items-center justify-between space-y-7 md:space-y-10 lg:space-y-0 lg:space-x-10">
        <div>
          <Link to="/" className="block">
            <img
              className="w-[70px] sm:w-[80px] h-[50px] sm:h-[60px]"
              src={Logo}
              alt="logo"
            />
          </Link>
          <p className="font-medium text-[15px] text-white leading-5 mt-[17px] max-w-[300px] w-full">
            <strong className="text-xl tracking-[4px]">VistaWave - </strong>
            {t("footer.left_text")}
          </p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-[50px] gap-y-2 mt-[30px] md:mt-0">
          <li>
            <a className="font-normal text-base text-white" href="#about">
              {t("header.navbar.about")}
            </a>
          </li>
          <li>
            <a className="font-normal text-base text-white" href="#services">
              {t("header.navbar.services")}
            </a>
          </li>
          <li>
            <a className="font-normal text-base text-white" href="#staff">
              {t("header.navbar.staff")}
            </a>
          </li>
          <li>
            <a className="font-normal text-base text-white" href="#contact">
              {t("header.navbar.contact")}
            </a>
          </li>
        </ul>
        <div className="md:max-w-[282px] w-full mt-[30px] md:mt-0">
          <h3 className="font-semibold text-base text-white">
            {t("footer.right_title")}
          </h3>
          <p className="font-medium text-[15px] leading-[18px] text-white mt-[5px]">
            {t("footer.right_text")}
          </p>
          <form className="flex items-center mt-[15px]">
            <input
              className="h-[41px] text-sm bg-[#444444] text-white  border-[0.5px] border-[#B8B8B8] rounded-l-[20px] px-4 outline-none w-full"
              type="text"
              placeholder={t("footer.placeholder")}
            />
            <button
              id="submitBtn"
              className="flex items-center justify-center ml-[5px] rounded-r-[10px] w-[48px] h-[41px] px-[10px] border"
              type="button"
            >
              <img src={Telegram} alt="telegram" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
