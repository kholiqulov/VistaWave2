import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <section id="about">
      <div className="container mt-[56px] sm:mt-[84px]">
        <div className="flex flex-wrap justify-center lg:justify-between items-center pt-[150px] pb-[100px] sm:py-[120px] space-y-[50px] lg:space-y-0">
          <div className="md:max-w-[450px] w-full block mx-auto lg:m-0 text-center lg:text-start">
            <button className="font-medium relative py-[5px] px-2 border text-white rounded-tr-[5px] rounded-bl-[5px] border-[#D2E66A] duration-300">
              Digital studio
              <span className="inline-block absolute max-w-[150px] w-full h-[35px] top-[5px] left-[5px] border border-[#D2E66A]  rounded-tr-[5px] rounded-bl-[5px] hover:top-0 hover:left-0 duration-300"></span>
            </button>
            <h2 className="font-bold text-[50px] leading-[60px] mt-4 text-white">
              VistaWave
            </h2>
            <p className="font-normal text-[18px] leading-[28px] text-gray-300 mt-5">
              - is an experienced and passionate group of designers, developers
              and project managers. Every client we work with becomes a part of
              the team. Together we face the challenges and celebrate the
              victories. Our small team is active in the creative community,
              endlessly interested in what’s next, and generally pleasant to be
              around.
            </p>
            <Link
              className="py-[10px] px-[30px] border border-[#ABABAB] hover:bg-[#0081c6] block mx-auto lg:m-0 w-fit !mt-10 text-lg text-white duration-200 rounded-lg"
              href="/"
            >
              See more
            </Link>
          </div>
          <div className="max-w-[560px] w-full">
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
              <h3 className="font-medium text-base leading-[19px] text-white">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="font-normal text-sm leading-[24px] text-gray-300 mt-[15px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <div className="max-w-[332px] w-full">
              <h3 className="font-medium text-base leading-[19px] text-white">
                Consectetur adipisicing elit. Velit, rerum.
              </h3>
              <p className="font-normal text-sm leading-[24px] text-gray-300 mt-[15px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <div className="max-w-[332px] w-full">
              <h3 className="font-medium text-base leading-[19px] text-white">
                Officiis sit exercitationem eveniet, eos in consectetur.
              </h3>
              <p className="font-normal text-sm leading-[24px] text-gray-300 mt-[15px]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Hero;
