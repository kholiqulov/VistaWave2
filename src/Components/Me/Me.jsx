import React from "react";

// ---> Css
import "./me.css";

// ---> Images
import Savlat from "../../Assets/Images/savlat.png";

// ------> Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// ------> Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Me() {
  return (
    <section className="container !mt-[50px]">
      <div className="pt-[30px]">
        <h2 className="font-bold text-[25px] leading-[30px] text-white text-center">
          What do we offer?
        </h2>
        <span className="block mx-auto mt-5 justify-center max-w-[125px] w-full h-[1px] bg-[#E2E2E2]"></span>
        <ul className="hidden sm:flex flex-wrap justify-center mt-[130px] gap-y-[75px] gap-x-6">
          <li className="userCard max-w-[300px] w-full text-center">
            <img
              className="block mx-auto max-w-[224px] w-full h-[172px] -translate-y-[50px] rounded-sm"
              src={Savlat}
              alt="me-img"
            />
            <h3 className="font-bold text-[20px] leading-[24px] text-white mt-[10px] -translate-y-[30px]">
              Nodirbek Xoliqulov
            </h3>
            <p className="font-medium text-[16px] leading-[19px] text-gray-300 mt-[5px] -translate-y-[30px]">
              Frontend Developer
            </p>
          </li>
          <li className="userCard max-w-[300px] w-full text-center -translate-y-[30px]">
            <img
              className="block mx-auto max-w-[224px] w-full h-[172px] -translate-y-[50px] rounded-sm"
              src={Savlat}
              alt="me-img"
            />
            <h3 className="font-bold text-[20px] leading-[24px] text-white mt-[10px] -translate-y-[30px]">
              Nodirbek Xoliqulov
            </h3>
            <p className="font-medium text-[16px] leading-[19px] text-gray-300 mt-[5px] -translate-y-[30px]">
              Frontend Developer
            </p>
          </li>
          <li className="userCard max-w-[300px] w-full text-center">
            <img
              className="block mx-auto max-w-[224px] w-full h-[172px] -translate-y-[50px] rounded-sm"
              src={Savlat}
              alt="me-img"
            />
            <h3 className="font-bold text-[20px] leading-[24px] text-white mt-[10px] -translate-y-[30px]">
              Nodirbek Xoliqulov
            </h3>
            <p className="font-medium text-[16px] leading-[19px] text-gray-300 mt-[5px] -translate-y-[30px]">
              Frontend Developer
            </p>
          </li>
          <li className="userCard max-w-[300px] w-full text-center">
            <img
              className="block mx-auto max-w-[224px] w-full h-[172px] -translate-y-[50px] rounded-sm"
              src={Savlat}
              alt="me-img"
            />
            <h3 className="font-bold text-[20px] leading-[24px] text-white mt-[10px] -translate-y-[30px]">
              Nodirbek Xoliqulov
            </h3>
            <p className="font-medium text-[16px] leading-[19px] text-gray-300 mt-[5px] -translate-y-[30px]">
              Frontend Developer
            </p>
          </li>
          <li className="userCard max-w-[300px] w-full text-center -translate-y-[30px]">
            <img
              className="block mx-auto max-w-[224px] w-full h-[172px] -translate-y-[50px] rounded-sm"
              src={Savlat}
              alt="me-img"
            />
            <h3 className="font-bold text-[20px] leading-[24px] text-white mt-[10px] -translate-y-[30px]">
              Nodirbek Xoliqulov
            </h3>
            <p className="font-medium text-[16px] leading-[19px] text-gray-300 mt-[5px] -translate-y-[30px]">
              Frontend Developer
            </p>
          </li>
          <li className="userCard max-w-[300px] w-full text-center">
            <img
              className="block mx-auto max-w-[224px] w-full h-[172px] -translate-y-[50px] rounded-sm"
              src={Savlat}
              alt="me-img"
            />
            <h3 className="font-bold text-[20px] leading-[24px] text-white mt-[10px] -translate-y-[30px]">
              Nodirbek Xoliqulov
            </h3>
            <p className="font-medium text-[16px] leading-[19px] text-gray-300 mt-[5px] -translate-y-[30px]">
              Frontend Developer
            </p>
          </li>
        </ul>
        <div className="block md:hidden mt-[50px]">
          <Swiper
            loop={true}
            navigation={true}
            pagination={false}
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
            <SwiperSlide className="flex justify-center">
              <li className="userCard max-w-[300px] w-full text-center">
                <img
                  className="block mx-auto max-w-[224px] w-full h-[172px] -translate-y-[50px] rounded-sm"
                  src={Savlat}
                  alt="me-img"
                />
                <h3 className="font-bold text-[20px] leading-[24px] text-white mt-[10px] -translate-y-[30px]">
                  Nodirbek Xoliqulov
                </h3>
                <p className="font-medium text-[16px] leading-[19px] text-gray-300 mt-[5px] -translate-y-[30px]">
                  Frontend Developer
                </p>
              </li>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <li className="userCard max-w-[300px] w-full text-center">
                <img
                  className="block mx-auto max-w-[224px] w-full h-[172px] -translate-y-[50px] rounded-sm"
                  src={Savlat}
                  alt="me-img"
                />
                <h3 className="font-bold text-[20px] leading-[24px] text-white mt-[10px] -translate-y-[30px]">
                  Nodirbek Xoliqulov
                </h3>
                <p className="font-medium text-[16px] leading-[19px] text-gray-300 mt-[5px] -translate-y-[30px]">
                  Frontend Developer
                </p>
              </li>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <li className="userCard max-w-[300px] w-full text-center">
                <img
                  className="block mx-auto max-w-[224px] w-full h-[172px] -translate-y-[50px] rounded-sm"
                  src={Savlat}
                  alt="me-img"
                />
                <h3 className="font-bold text-[20px] leading-[24px] text-white mt-[10px] -translate-y-[30px]">
                  Nodirbek Xoliqulov
                </h3>
                <p className="font-medium text-[16px] leading-[19px] text-gray-300 mt-[5px] -translate-y-[30px]">
                  Frontend Developer
                </p>
              </li>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Me;
