import React, { useState } from "react";
import SiteBar from "../Modal/Modal";
import { Link } from "react-router-dom";

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
  const [uzb, setUzb] = useState(true);
  const [rus, setRus] = useState(false);
  const [eng, setEng] = useState(false);
  const [uzbFlag, setFlag] = useState(Uzb);
  // ---> Others
  const [down, setDown] = useState(false);

  // ---> Change Language
  const ChangeUzb = () => {
    setUzb(true);
    setRus(false);
    setEng(false);
    setFlag(Uzb);
  };
  const ChangeRus = () => {
    setRus(true);
    setUzb(false);
    setEng(false);
    setFlag(Rus);
  };
  const ChangeEng = () => {
    setEng(true);
    setRus(false);
    setUzb(false);
    setFlag(Eng);
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
              {uzb ? "UZB" : rus ? "RUS" : eng ? "ENG" : ""}
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
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-[21px]">
              <li className="nav_item">
                <a
                  href="#about"
                  className="nav_link font-serif text-lg text-white tracking-[0.48px]"
                >
                  About
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#services"
                  className="nav_link font-serif text-lg text-white tracking-[0.48px]"
                >
                  Services
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#staff"
                  className="nav_link font-serif text-lg text-white tracking-[0.48px]"
                >
                  Staff
                </a>
              </li>
              <li className="nav_item">
                <a
                  href="#contact"
                  className="nav_link font-serif text-lg text-white tracking-[0.48px]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <a
            className="hidden lg:flex items-center font-serif text-base text-white tracking-[0.48px]"
            href="tel:+998 933354018"
          >
            <img className="w-5 h-5 mr-2" src={Call} alt="call" />
            +998 97 013-03-22
          </a>
          <button
            onClick={() => setShowModal(true)}
            className="block sm:hidden"
          >
            <img className="w-[38px] h-[38px]" src={Burger} alt="menu-burger" />
          </button>
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
