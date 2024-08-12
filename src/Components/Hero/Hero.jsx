import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// ---> Css
import "./hero.css";

// ---> Images
import HeroIMage from "../../Assets/Images/hero.png";

// ------> Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// ------> Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Hero() {
  // ------> Use aos animation library
  useEffect(() => {
    AOS.init();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="container mt-[56px] sm:mt-[84px]">
        <div className="flex flex-wrap justify-center lg:justify-between items-center pt-[150px] pb-[100px] sm:py-[120px] space-y-[50px] lg:space-y-0">
          <div className="md:max-w-[450px] w-full block mx-auto lg:m-0 text-center lg:text-start">
            <button
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="50"
              className="font-medium relative py-[5px] px-2 border text-white rounded-tr-[5px] rounded-bl-[5px] border-[#D2E66A] duration-300"
            >
              {t("hero.studio")}
              <span className="inline-block absolute max-w-[150px] w-full h-[35px] top-[5px] left-[5px] border border-[#D2E66A]  rounded-tr-[5px] rounded-bl-[5px] hover:top-0 hover:left-0 duration-300"></span>
            </button>
            <h2
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              className="font-bold text-[50px] leading-[60px] mt-4 text-white"
            >
              VistaWave
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="150"
              className="font-normal text-[18px] leading-[28px] text-white mt-5"
            >
              {t("hero.text")}
            </p>
            <Link
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
              className="py-[10px] px-[30px] border border-[#ABABAB] hover:bg-[#0081c6] block mx-auto lg:m-0 w-fit !mt-10 text-lg text-white duration-200 rounded-lg"
              href="/"
            >
              {t("hero.see")}
            </Link>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
            className="max-w-[560px] w-full"
          >
            <img src={HeroIMage} alt="bg-for-hero" />
          </div>
        </div>
      </div>
      <div className="block md:hidden heroBottom">
        <Swiper
          loop={true}
          navigation={false}
          pagination={true}
          className="mySwiper px-[16px] sm:px-0 py-10 cursor-pointer"
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
          <SwiperSlide className="flex flex-col">
            <div className="max-w-[332px] w-full">
              <h3 className="font-medium text-xl leading-[26px] text-white">
                {t("hero.carousel.title1")}
              </h3>
              <p className="font-normal text-sm leading-[24px] text-white mt-[15px]">
                {t("hero.carousel.text1")}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <div className="max-w-[332px] w-full">
              <h3 className="font-medium text-xl leading-[26px] text-white">
                {t("hero.carousel.title2")}
              </h3>
              <p className="font-normal text-sm leading-[24px] text-white mt-[15px]">
                {t("hero.carousel.text2")}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <div className="max-w-[332px] w-full">
              <h3 className="font-medium text-xl leading-[26px] text-white">
                {t("hero.carousel.title3")}
              </h3>
              <p className="font-normal text-sm leading-[24px] text-white mt-[15px]">
                {t("hero.carousel.text3")}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Hero;
