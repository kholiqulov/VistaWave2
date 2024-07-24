import React from "react";
import { Link } from "react-router-dom";

// ---> Css
import "./hero.css";

// ---> Images
import Full from "../../Assets/Images/full.png";
import FullMobile from "../../Assets/Images/full-mobile.png";
import Text1 from "../../Assets/Images/text1.png";
import Text2 from "../../Assets/Images/text2.png";
import Male from "../../Assets/Images/male.png";

// ------> Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// ------> Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Hero() {
  return (
    <section className="relative">
      <div className="container hero2 mt-[56px] sm:mt-[84px] ">
        <div className="flex flex-col md:flex-row items-center justify-between pt-[145px] md:pt-[35px] pb-[150px] md:pb-[85px]">
          <div className="md:max-w-[450px] w-full md:mb-[250px]">
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
              className="py-[10px] px-[30px] border border-[#ABABAB] hover:bg-[#0081c6] mt-10 block w-fit text-lg text-white duration-200 rounded-lg"
              href="/"
            >
              See more
            </Link>
          </div>
          <div className="relative max-w-[560px] w-full h-[827px] hidden md:block">
            <img className="" src={Full} alt="bg-for-hero" />
            <img
              className="hidden md:block absolute bottom-[275px] -left-[20px] max-w-[340px] w-full h-[140px]"
              src={Text2}
              alt="text-img"
            />
            <img
              className="hidden md:block absolute top-[240px] -right-[50px] max-w-[340px] w-full h-[140px]"
              src={Text1}
              alt="text-img"
            />
          </div>
          <div className="absolute right-0 bottom-0 block md:hidden">
            <img src={FullMobile} alt="full-mobile" />
          </div>
        </div>
      </div>
      <div className="heroBottom absolute bottom-0 left-0 w-full hidden md:block">
        <ul className="container flex flex-col sm:flex-row items-center justify-between">
          <li className="max-w-[332px] w-full">
            <h3 className="font-medium text-base leading-[19px] text-white">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="font-normal text-sm leading-[24px] text-gray-300 mt-[15px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </li>
          <li className="max-w-[332px] w-full">
            <h3 className="font-medium text-base leading-[19px] text-white">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="font-normal text-sm leading-[24px] text-gray-300 mt-[15px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </li>
          <li className="max-w-[213px] w-full h-[232px]">
            <img className="w-full h-full" src={Male} alt="male-img" />
          </li>
        </ul>
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
