import React from "react";

// ---> Css
import "./contact.css";

// ---> Images
import Office from "../../Assets/Images/office.svg";
import Phone from "../../Assets/Images/phone.svg";
import World from "../../Assets/Images/world.svg";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="contact">
      <div className="container flex flex-col md:flex-row items-center justify-between !mt-[120px]">
        <div className="max-w-[486px] w-full">
          <h2 className="font-semibold text-white text-[35px] leading-[35px]">Contact Us</h2>
          <h3 className="font-medium text-[22px] leading-[35px] text-gray-300 mt-[50px]">
            Sent your choose
          </h3>
          <form className="mt-[30px]">
            <div className="space-y-7">
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  id="floating_standard"
                  className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_standard"
                  className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  id="floating_standard2"
                  className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_standard2"
                  className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  id="floating_standard3"
                  className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_standard3"
                  className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Comment
                </label>
              </div>
            </div>
            <button
              className="font-medium text-base leading-[28px] text-white px-[34px] py-1 border border-[#ABABAB] mt-[50px] hover:bg-[#0081c6] duration-200 rounded-md"
              type="submit"
            >
              Send Info
            </button>
          </form>
        </div>
        <div className="mt-[50px] sm:mt-0 sm:ml-6">
          <div className="flex flex-col sm:flex-row items-center w-full">
            <iframe
              title="Tashkent"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.5026376749!2d69.13928252010831!3d41.282512545785664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1679160867681!5m2!1sen!2s"
              className="max-[340px] w-full sm:w-[350px] md:w-[480px] h-[295px] sm:h-[614px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <ul className="">
              <li className="sm:max-w-[205px] w-full justify-center py-[45px] px-[15px] bg-[#181818] border-b-[1px]">
                <img
                  className="block mx-auto sm:ml-0 w-[35px] h-[35px]"
                  src={Office}
                  alt="card-icon"
                />
                <p className="font-medium text-center sm:text-start text-[18px] leading-[21px] text-gray-300 mt-4">
                  Sergili, Toshkent, Uzbekiston
                </p>
              </li>
              <li className="sm:max-w-[205px] w-full justify-center py-[45px] px-[15px] bg-[#181818] border-b-[1px]">
                <img
                  className="block mx-auto sm:ml-0 w-[35px] h-[35px]"
                  src={Phone}
                  alt="card-icon"
                />
                <div className="space-x-[10px] sm:space-x-0 space-y-0 sm:space-y-[10px]  mt-4 flex sm:block justify-center">
                  <p className="font-medium text-[18px] leading-[21px] text-gray-300">
                    +998 97 013-03-22
                  </p>
                  <p className="font-medium text-[18px] leading-[21px] text-gray-300">
                    +998 90 022-64-56
                  </p>
                </div>
              </li>
              <li className="sm:max-w-[205px] w-full justify-center py-[45px] px-[15px] bg-[#181818]">
                <img
                  className="block mx-auto sm:ml-0 w-[35px] h-[35px]"
                  src={World}
                  alt="card-icon"
                />
                <div className="flex sm:block justify-center space-x-[10px] sm:space-x-0 space-y-0 sm:space-y-[10px] mt-[6px]">
                  <Link to="/https://t.me/vistawave_uz" className="block font-medium text-[18px] leading-[21px] text-gray-300 underline">
                    Telegram
                  </Link>
                  <Link to="/https://www.instagram.com/vistawave_uz/" className="block font-medium text-[18px] leading-[21px] text-gray-300 underline">
                    Instagram
                  </Link>
                  <Link to="/https://www.linkedin.com/company/vistawaveitgroup" className="block font-medium text-[18px] leading-[21px] text-gray-300 underline">
                    LinkedIn
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
