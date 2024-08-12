import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

// ---> Images
import Logo from "../../Assets/Images/logov.png";
import Close from "../../Assets/Images/close.svg";

// ------> Css
import "aos/dist/aos.css";
import "./modal.css";


function SiteBar({ isVisible, onClose }) {
  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  // ------> Check click menu for hide scroll
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const handleClick = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      onClick={handleClick}
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-[2px] flex justify-center items-center z-40 duration-300"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="600"
        className={`${
          isVisible ? "left-0" : "-left-[100%] transition-all"
        } w-[80%] h-full absolute top-0 modal px-5 z-50 rounded-br-[30px]`}
      >
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={onClose}
              className="inline-block shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
            >
              <img className="w-[70px] h-[50px]" src={Logo} alt="logo" />
            </Link>
            <button className="" onClick={onClose}>
              <img
                className="w-[38px] h-[38px]"
                src={Close}
                alt="menu-closer"
              />
            </button>
          </div>
          <ul className="my-[50px] flex flex-col space-y-5 px-5">
            <li onClick={onClose}>
              <a
                href="#about"
                className="font-normal text-white text-[25px] leading-[30px]"
              >
                About
              </a>
            </li>
            <li onClick={onClose}>
              <a
                href="#services"
                className="font-normal text-white text-[25px] leading-[30px]"
              >
                Services
              </a>
            </li>
            <li onClick={onClose}>
              <a
                href="#staff"
                className="font-normal text-white text-[25px] leading-[30px]"
              >
                Staff
              </a>
            </li>
            <li onClick={onClose}>
              <a
                href="#contact"
                className="font-normal text-white text-[25px] leading-[30px]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SiteBar;
