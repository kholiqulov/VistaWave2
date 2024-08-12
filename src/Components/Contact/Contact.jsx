import AOS from "aos";
import axios from "axios";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";

// ---> Css
import "./contact.css";

// ---> Images
import Office from "../../Assets/Images/office.svg";
import Phone from "../../Assets/Images/phone.svg";
import World from "../../Assets/Images/world.svg";
import { Link } from "react-router-dom";

function Contact() {
  const [number, setNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [comment, setComment] = useState("");

  const token = "7489345989:AAEa7g_4c4IRrYkio8MT69CybnA7vuFTUME";
  const chatId = "5022460942";

  const onSubmit = (evt) => {
    evt.preventDefault();
    let fullText = `\u{2705} Full name: ${fullName}%0A\u{2705} Phone Number: ${number}%0A\u{2705} Comment: ${comment}`;

    // --- Sent Message for Telegram
    axios
      .post(
        `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullText}`
      )
      .then((res) => {
        toast.success("Successfully sent!");
        if (res.status === 200) {
          evt.target.reset();
        }
      })
      .catch(() => toast.error("It did not work."))
      .finally(() => evt.target.reset());
  };

  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="contact !pt-[100px] !pb-[20px] sm:!pt-[150px] sm:!pb-[20px]"
    >
      <div className="container">
        <Toaster />
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="50">
            <h2 className="font-semibold text-center text-white text-[28px] leading-[35px]">
              {t("contact.title")}
            </h2>
            <p className="max-w-[500px] w-full mx-auto font-medium text-white text-center my-[30px]">
              {t("contact.text")}
            </p>
            <div className="max-w-[486px] w-full bg-white card mt-[50px] p-5 rounded-lg">
              <form onSubmit={onSubmit} className="mt-[30px]">
                <div className="space-y-7">
                  <div className="relative z-0">
                    <input
                      required
                      autoComplete="off"
                      onChange={(e) => setFullName(e.target.value.trim())}
                      type="text"
                      id="floating_standard"
                      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0081c6] focus:outline-none focus:ring-0 focus:border-[#0081c6] peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_standard"
                      className="absolute text-base text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0081c6] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {t("contact.full_name")}
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input
                      required
                      type="text"
                      autoComplete="off"
                      onChange={(e) => setNumber(e.target.value.trim())}
                      id="floating_standard2"
                      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0081c6] focus:outline-none focus:ring-0 focus:border-[#0081c6] peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_standard2"
                      className="absolute text-base text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0081c6] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {t("contact.number")}
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input
                      required
                      type="text"
                      autoComplete="off"
                      onChange={(e) => setComment(e.target.value.trim())}
                      id="floating_standard3"
                      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#0081c6] focus:outline-none focus:ring-0 focus:border-[#0081c6] peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_standard3"
                      className="absolute text-base text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#0081c6] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      {t("contact.comment")}
                    </label>
                  </div>
                </div>
                <button
                  className="block mx-auto font-medium text-base leading-[28px] text-white px-[34px] py-1 border border-[#ABABAB] mt-[50px] hover:bg-[#0081c6] duration-200 rounded-md"
                  type="submit"
                >
                  {t("contact.submit")}
                </button>
              </form>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="150"
            className="!mt-[50px] lg:!mt-0 sm:mt-0 lg:ml-6"
          >
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
                  <p className="font-medium text-center sm:text-start text-[18px] leading-[21px] text-white mt-4">
                  {t("contact.address")}
                  </p>
                </li>
                <li className="sm:max-w-[205px] w-full justify-center py-[45px] px-[15px] bg-[#181818] border-b-[1px]">
                  <img
                    className="block mx-auto sm:ml-0 w-[35px] h-[35px]"
                    src={Phone}
                    alt="card-icon"
                  />
                  <div className="space-y-[10px] mt-4">
                    <p className="flex justify-center font-medium text-[18px] leading-[21px] text-white">
                      +998 97 013-03-22
                    </p>
                    <p className="flex justify-center font-medium text-[18px] leading-[21px] text-white">
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
                    <Link
                      to="/https://t.me/vistawave_uz"
                      className="block font-medium text-[18px] leading-[21px] text-white underline"
                    >
                      Telegram
                    </Link>
                    <Link
                      to="/https://www.instagram.com/vistawave_uz/"
                      className="block font-medium text-[18px] leading-[21px] text-white underline"
                    >
                      Instagram
                    </Link>
                    <Link
                      to="/https://www.linkedin.com/company/vistawaveitgroup"
                      className="block font-medium text-[18px] leading-[21px] text-white underline"
                    >
                      LinkedIn
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
