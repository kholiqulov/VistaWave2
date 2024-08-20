import React, { useState } from "react";
import SiteBar from "../Modal/Modal";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// ---> Images
// import Logo from "../../Assets/Images/logo.svg";
import Logo from "../../Assets/Images/logov.png";
import Down from "../../Assets/Images/down.svg";
import Call from "../../Assets/Images/call.svg";
import Rus from "../../Assets/Images/rus.png";
import Uzb from "../../Assets/Images/uzb.png";
import Eng from "../../Assets/Images/eng.png";
import Burger from "../../Assets/Images/burger.svg";

function Header() {
  // ---> Open modal
  const [showModal, setShowModal] = useState(false);
  // ---> Dropdown
  const [drop, setDrop] = useState(false);
  // ---> Change Languages
  const [uzb, setUzb] = useState(false);
  const [rus, setRus] = useState(false);
  const [eng, setEng] = useState(true);
  const [uzbFlag, setFlag] = useState(Eng);
  // ---> Others
  const [down, setDown] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();

  // ---> Change Language
  const ChangeUzb = () => {
    setUzb(true);
    setRus(false);
    setEng(false);
    setFlag(Uzb);
    i18n.changeLanguage("uz");
  };
  const ChangeRus = () => {
    setRus(true);
    setUzb(false);
    setEng(false);
    setFlag(Rus);
    i18n.changeLanguage("ru");
  };
  const ChangeEng = () => {
    setEng(true);
    setRus(false);
    setUzb(false);
    setFlag(Eng);
    i18n.changeLanguage("en");
  };

  // ---> Close dropdown
  window.addEventListener("click", (e) => {
    if (e.target.id !== "wrapper") setDrop(false);
  });

  // ---> Check scroll
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      setDown(true);
    } else {
      setDown(false);
    }
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-20 bg-[#181818] ${
          down ? "border-b-[1px] border-[#0081c6] opacity-95" : ""
        }`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center py-3">
            <Link
              className="inline-block shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
              to="/"
            >
              <img
                className="w-[70px] sm:w-[80px] h-[50px] sm:h-[60px]"
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-[21px]">
              <li className="nav_item group">
                <a
                  href="#about"
                  className="nav_link font-serif text-lg text-white tracking-[0.48px] group-hover:text-[#0081c6] transition-all duration-200"
                >
                  {t("header.navbar.about")}
                </a>
              </li>
              <li className="nav_item group">
                <a
                  href="#services"
                  className="nav_link font-serif text-lg text-white tracking-[0.48px] group-hover:text-[#0081c6] transition-all duration-200"
                >
                  {t("header.navbar.services")}
                </a>
              </li>
              <li className="nav_item group">
                <a
                  href="#staff"
                  className="nav_link font-serif text-lg text-white tracking-[0.48px] group-hover:text-[#0081c6] transition-all duration-200"
                >
                  {t("header.navbar.staff")}
                </a>
              </li>
              <li className="nav_item group">
                <a
                  href="#contact"
                  className="nav_link font-serif text-lg text-white tracking-[0.48px] group-hover:text-[#0081c6] transition-all duration-200"
                >
                  {t("header.navbar.contact")}
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center justify-between space-x-10">
            <button
              id="wrapper"
              onClick={() => setDrop(!drop)}
              className="hidden relative z-0 sm:flex items-center font-serif text-base text-white ml-16"
            >
              {
                <img
                  className="w-[22px] h-[22px] mr-2"
                  src={uzbFlag}
                  alt="countries-flag"
                />
              }
              {uzb ? "Uzb" : rus ? "Rus" : eng ? "Eng" : ""}
              <img
                className={`w-6 h-6 ml-1 duration-200 ${
                  drop ? "-rotate-180" : ""
                }`}
                src={Down}
                alt="down"
              />
              {/* ------ Dropdown ------ */}
              {drop ? (
                <ul className="absolute z-50 -left-4 top-[50px] w-[140px] bg-[#6F6F6F] rounded-[10px] duration-300">
                  <li
                    onClick={ChangeUzb}
                    className="flex items-center font-light text-base text-white pt-[10px] pb-[5px] px-[10px]"
                  >
                    <img className="w-6 h-6 mr-2" src={Uzb} alt="country" />
                    Uzbek
                  </li>
                  <li
                    onClick={ChangeRus}
                    className="flex items-center font-light text-base text-white py-[5px] px-[10px]"
                  >
                    <img className="w-6 h-6 mr-2" src={Rus} alt="country" />
                    Russian
                  </li>
                  <li
                    onClick={ChangeEng}
                    className="flex items-center font-light text-base text-white pb-[10px] pt-[5px] px-[10px]"
                  >
                    <img className="w-6 h-6 mr-2" src={Eng} alt="country" />
                    English
                  </li>
                </ul>
              ) : null}
            </button>
            <a
              className="hidden lg:flex items-center font-serif text-base text-white tracking-[0.48px]"
              href="tel:+998 933354018"
            >
              <img className="w-5 h-5 mr-2" src={Call} alt="call" />
              +998 97 013-03-22
            </a>
          </div>
          <div className="flex sm:hidden items-center justify-center space-x-5">
            <button
              id="wrapper"
              onClick={() => setDrop(!drop)}
              className="relative z-0 flex items-center font-serif text-base text-white ml-16"
            >
              {
                <img
                  className="w-[22px] h-[22px] mr-2"
                  src={uzbFlag}
                  alt="countries-flag"
                />
              }
              {uzb ? "Uzb" : rus ? "Rus" : eng ? "Eng" : ""}
              <img
                className={`w-6 h-6 ml-1 duration-200 ${
                  drop ? "-rotate-180" : ""
                }`}
                src={Down}
                alt="down"
              />
              {/* ------ Dropdown ------ */}
              {drop ? (
                <ul className="absolute z-50 -left-4 top-[50px] w-[140px] bg-[#6F6F6F] rounded-[10px] duration-300">
                  <li
                    onClick={ChangeUzb}
                    className="flex items-center font-light text-base text-white pt-[10px] pb-[5px] px-[10px]"
                  >
                    <img className="w-6 h-6 mr-2" src={Uzb} alt="country" />
                    Uzbek
                  </li>
                  <li
                    onClick={ChangeRus}
                    className="flex items-center font-light text-base text-white py-[5px] px-[10px]"
                  >
                    <img className="w-6 h-6 mr-2" src={Rus} alt="country" />
                    Russian
                  </li>
                  <li
                    onClick={ChangeEng}
                    className="flex items-center font-light text-base text-white pb-[10px] pt-[5px] px-[10px]"
                  >
                    <img className="w-6 h-6 mr-2" src={Eng} alt="country" />
                    English
                  </li>
                </ul>
              ) : null}
            </button>
            <button onClick={() => setShowModal(true)} className="block">
              <img
                className="w-[38px] h-[38px]"
                src={Burger}
                alt="menu-burger"
              />
            </button>
          </div>
        </div>

        {/* --- Sitebar --- */}
      </header>
      <SiteBar
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </>
  );
}

export default Header;
