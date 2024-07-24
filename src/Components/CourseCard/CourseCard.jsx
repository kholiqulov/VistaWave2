import React from "react";
import Title from "react-vanilla-tilt";

// ---> Css
import "./index.css";

// ---> Images
import Arrow from "../../Assets/Images/arrow-right.svg";

function CourseCard({ img, price, title, text, materialImgs }) {
  return (
    <Title
      axis={null}
      style={{
        maxWidth: 384,
        borderRadius: 6,
      }}
    >
      <li className="card w-full p-5 rounded-md">
        <div className="flex items-center justify-between">
          <img className="w-[42px] h-[42px]" src={img} alt="card-title-logo" />
          <p className="font-medium text-white text-base leading-[21px]">{price}</p>
        </div>
        <div className="mt-5">
          <h3 className="font-semibold text-white text-xl leading-[24px] mb-[15px]">{title}</h3>
          <p className="font-normal text-gray-300 text-base leading-[25px]">{text}</p>
        </div>
        <div>
          <h3 className="font-semibold text-white text-base leading-[21px] mt-[20px]">
            Материалы курса
          </h3>
          <div className="flex items-center flex-wrap">
            {materialImgs.map((item, id) => (
              <img
                key={id}
                className="h-[80px] mr-[30px] mt-[25px] hover:scale-110 duration-200"
                src={item}
                alt="logos"
              />
            ))}
          </div>
          <a
            className="flex items-center underline text-white text-base leading-[21px] mt-[30px]"
            href="/"
          >
            Записаться на курс
            <img className="w-6 h-6" src={Arrow} alt="arrow-left" />
          </a>
        </div>
      </li>
    </Title>
  );
}

export default CourseCard;
