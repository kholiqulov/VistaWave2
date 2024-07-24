import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

// ---> Images
import Logo from "../../Assets/Images/logo.svg";
import Close from "../../Assets/Images/close.svg";

// ------> Css
import "aos/dist/aos.css";

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
        } w-full h-full absolute top-0 bg-[#535353] px-5 z-50 rounded-br-[50px]`}
      >
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={onClose}
              className="inline-block shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]"
            >
              <img className="w-[103px] h-[50px]" src={Logo} alt="logo" />
            </Link>
            <button className="" onClick={onClose}>
              <img className="w-[38px] h-[38px]" src={Close} alt="menu-closer" />
            </button>
          </div>
          <ul className="my-[50px] flex flex-col items-center space-y-5">
            <li onClick={onClose}>
              <Link className="font-normal text-white text-[25px] leading-[30px]" to="/second">
                About
              </Link>
            </li>
            <li onClick={onClose}>
              <Link className="font-normal text-white text-[25px] leading-[30px]" to="/second">
                Portfolio
              </Link>
            </li>
            <li onClick={onClose}>
              <Link className="font-normal text-white text-[25px] leading-[30px]" to="/second">
                Experience
              </Link>
            </li>
            <li onClick={onClose}>
              <Link className="font-normal text-white text-[25px] leading-[30px]" to="/second">
                Contact Us
              </Link>
            </li>
          </ul>
          <span className="w-full h-[2px] bg-[#5A5A5A] inline-block"></span>
          <ul className="my-[50px] flex flex-col items-center space-y-5">
            <li className="font-normal text-[#FDE753] text-[20px] leading-[30px]">Russian</li>
            <li className="font-normal text-white text-[20px] leading-[30px]">Uzbek</li>
            <li className="font-normal text-white text-[20px] leading-[30px]">English</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SiteBar;
