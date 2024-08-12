import AOS from "aos";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoThin } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";

// ---> Css
import "./staff.css";

// ---> Images
import Shokhruz from "../../Assets/Images/team/shokhruz.webp";
import Axror from "../../Assets/Images/team/axror.jpg";
import Nodir from "../../Assets/Images/team/nodir.png";
import Nurillo from "../../Assets/Images/team/nurillo.jpg";
import Nozim from "../../Assets/Images/team/nozim.png";
import Shayboniy from "../../Assets/Images/team/shayboniyshoh.jpg";
import Zarif from "../../Assets/Images/team/zarif.jpg";
import Ilhom from "../../Assets/Images/team/ilhom.jpg";
import Ibrohim from "../../Assets/Images/team/ibrokhim.jpg";

// ------> Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// ------> Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Me() {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();

  const datas = [
    {
      id: 0,
      name: t("staff.subtitle1"),
      image: Nodir,
      position: t("staff.text1"),
      instagram: "https://www.instagram.com/khn_dev/",
      telegram: "https://t.me/khn_dev",
      linkedIn: "https://www.linkedin.com/in/nodirbek-kholiqulov-67a712246/",
      facebook:
        "https://www.facebook.com/people/Nodirbek-Xoliqulov/100079926716522/",
      github: "https://github.com/node-nodir",
    },
    {
      id: 1,
      name: t("staff.subtitle2"),
      image: Shokhruz,
      position: t("staff.text2"),
      instagram: "https://www.instagram.com/_cvrt55/",
      telegram: "https://t.me/prv33",
      linkedIn: "https://www.linkedin.com/in/shokhruz-abdugaffarov-260153279/",
      facebook: "",
      github: "https://github.com/shokhruz",
    },
    {
      id: 2,
      name: t("staff.subtitle3"),
      image: Nozim,
      position: t("staff.text3"),
      instagram: "https://www.instagram.com/nozimjon_keldiyev/",
      telegram: "https://t.me/Nozimjon_Keldiyev",
      linkedIn: "https://uz.linkedin.com/in/nozimjon-keldiyev-7081bb232",
      facebook: "",
      github: "https://github.com/nozimjonpro",
    },
    {
      id: 3,
      name: t("staff.subtitle4"),
      image: Nurillo,
      position: t("staff.text4"),
      instagram: "https://www.instagram.com/nurillo.o3/",
      telegram: "https://t.me/Nurillo_Suyunboyev",
      linkedIn: "https://www.linkedin.com/in/nurillo-suyunboyev-b30422255/",
      facebook: "",
      github: "https://github.com/Nurillo18",
    },
    {
      id: 4,
      name: t("staff.subtitle5"),
      image: Ilhom,
      position: t("staff.text5"),
      instagram: "https://www.instagram.com/ilkhamburkhonov/",
      telegram: "https://t.me/IlkhamBurkhonov",
      linkedIn: "https://www.linkedin.com/in/ilhomjon-burxonov-/",
      facebook: "",
      github: "https://github.com/IlkhamBurkhanov",
    },
    {
      id: 5,
      name: t("staff.subtitle6"),
      image: Ibrohim,
      position: t("staff.text6"),
      instagram: "https://www.instagram.com/_ismailov_098/",
      telegram: "https://t.me/CoderIS",
      linkedIn: "https://www.linkedin.com/in/ibrokhim-ismoilov-876280221/",
      facebook: "",
      github: "https://github.com/IsmailovTech",
    },
    {
      id: 6,
      name: t("staff.subtitle7"),
      image: Shayboniy,
      position: t("staff.text7"),
      instagram: "https://www.instagram.com/shayboniyshohabduvaliev",
      telegram: "https://t.me/Shayboniyshoh",
      linkedIn: "https://www.linkedin.com/in/shayboniyshoh/",
      facebook: "",
      github: "https://github.com/Shayboniyshoh/",
    },
    {
      id: 7,
      name: t("staff.subtitle8"),
      image: Axror,
      position: t("staff.text8"),
      instagram: "https://www.instagram.com/axrorbek_jorayev",
      telegram: "https://t.me/axrorbekjuraev",
      linkedIn: "https://www.linkedin.com/in/axror-juraev-6369401b8/",
      facebook: "",
      github: "https://github.com/axrorbek041997",
    },
    {
      id: 8,
      name: t("staff.subtitle9"),
      image: Zarif,
      position: t("staff.text9"),
      instagram: "https://www.instagram.com/sayfiddinovzarif/",
      telegram: "",
      linkedIn: "",
      facebook: "",
      github: "",
    },
  ];

  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="staff"
      className="container !pt-[100px] !pb-[20px] sm:!pt-[150px] sm:!pb-[20px]"
    >
      <div className="pt-[30px]">
        <h2 className="font-bold text-[28px] leading-[30px] text-white text-center">
          {t("staff.title")}
        </h2>
        <span className="block mx-auto mt-5 justify-center max-w-[125px] w-full h-[1px] bg-[#E2E2E2]"></span>
        <ul className="hidden sm:flex flex-wrap justify-center mt-[130px] gap-y-[100px] gap-x-10">
          {datas.map((data) => (
            <li
              key={data?.id}
              data-aos="fade-up"
              data-aos-duration="600"
              className={`userCard max-w-[300px] w-full text-center px-3 pb-10 rounded-xl shadow-lg shadow-gray-800`}
            >
              <img
                className="block mx-auto max-w-[240px] w-full h-[230px] -translate-y-[50px] rounded-xl object-cover"
                src={data?.image}
                alt="me-img"
              />
              <h3
                className={`font-bold text-[20px] leading-[24px] text-white mt-[10px] lg:${data?.class}`}
              >
                {data?.name}
              </h3>
              <p
                className={`font-medium text-[16px] leading-[19px] text-gray-300 mt-[5px] lg:${data?.class}`}
              >
                {data?.position}
              </p>
              <div className="flex items-center justify-center space-x-4 max-w-[200px] w-full mx-auto mt-[20px]">
                <div>
                  <a
                    className="block"
                    target="_blank"
                    rel="noreferrer"
                    name={`${data?.name}`}
                    href={`${data?.instagram}`}
                  >
                    <FaInstagram className="text-[26px] text-white" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    name={`${data?.name}`}
                    href={`${data?.telegram}`}
                  >
                    <PiTelegramLogoThin className="text-[26px] text-white" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    name={`${data?.name}`}
                    href={`${data?.linkedIn}`}
                  >
                    <CiLinkedin className="text-[26px] text-white" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    name={`${data?.name}`}
                    href={`${data?.github}`}
                  >
                    <LuGithub className="text-[26px] text-white" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    name={`${data?.name}`}
                    href={`${data?.facebook}`}
                  >
                    <FaFacebookF className="text-[26px] text-white" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="block md:hidden mt-[50px]">
          <Swiper
            loop={true}
            navigation={true}
            pagination={false}
            className="mySwiper px-[16px] sm:px-0 cursor-pointer"
            spaceBetween={24}
            slidesPerGroup={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3.5,
              },
            }}
            modules={[Pagination, Navigation]}
          >
            {datas.map((data) => (
              <SwiperSlide key={data?.id}>
                <ul className="flex flex-wrap justify-center mt-[130px] gap-y-[100px] gap-x-10">
                  <li
                    className={`userCard max-w-[300px] w-full text-center pb-10 rounded-xl shadow-lg shadow-gray-800`}
                  >
                    <img
                      className="block mx-auto max-w-[240px] w-full h-[230px] -translate-y-[50px] rounded-xl object-cover"
                      src={data?.image}
                      alt="me-img"
                    />
                    <h3
                      className={`font-bold text-[20px] leading-[24px] text-white mt-[10px] lg:${data?.class}`}
                    >
                      {data?.name}
                    </h3>
                    <p
                      className={`font-medium text-[16px] leading-[19px] text-gray-300 mt-[5px] lg:${data?.class}`}
                    >
                      {data?.position}
                    </p>
                    <div className="flex items-center justify-center space-x-4 max-w-[200px] w-full mx-auto mt-[20px]">
                      <div>
                        <a
                          className="block"
                          target="_blank"
                          rel="noreferrer"
                          name={`${data?.name}`}
                          href={`${data?.instagram}`}
                        >
                          <FaInstagram className="text-[26px] text-white" />
                        </a>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          name={`${data?.name}`}
                          href={`${data?.telegram}`}
                        >
                          <PiTelegramLogoThin className="text-[26px] text-white" />
                        </a>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          name={`${data?.name}`}
                          href={`${data?.linkedIn}`}
                        >
                          <CiLinkedin className="text-[26px] text-white" />
                        </a>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          name={`${data?.name}`}
                          href={`${data?.github}`}
                        >
                          <LuGithub className="text-[26px] text-white" />
                        </a>
                      </div>
                      <div>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          name={`${data?.name}`}
                          href={`${data?.facebook}`}
                        >
                          <FaFacebookF className="text-[26px] text-white" />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Me;
