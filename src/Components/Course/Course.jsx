import React from "react";

// ---> Css
import "./index.css";

// ---> Images
import Code from "../../Assets/Images/code.svg";
import Computer from "../../Assets/Images/comp.svg";
import Speaker from "../../Assets/Images/speaker.svg";
import Html from "../../Assets/Images/html.svg";
import Css from "../../Assets/Images/css.svg";
import Xd from "../../Assets/Images/xd.svg";
import Ps from "../../Assets/Images/ps.svg";
import Figma from "../../Assets/Images/figma.svg";
import ReactJs from "../../Assets/Images/react.svg";
import Boot from "../../Assets/Images/boot.svg";
import CourseCard from "../CourseCard/CourseCard";

function Course() {
  // ---> Data
  const datas = [
    {
      id: 1,
      img: Code,
      price: "595,000 сум/месяц",
      title: "Фронтенд разработка",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis ",
      materialImgs: [Html, Css, Boot],
    },
    {
      id: 2,
      img: Computer,
      price: "795,000 сум/месяц",
      title: "Основы Веб дизайна",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis ",
      materialImgs: [Figma, Xd, Ps],
    },
    {
      id: 3,
      img: Speaker,
      price: "1,795,000 сум/месяц",
      title: "SMM и Таргетинга",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis ",
      materialImgs: [Html, Ps, Boot],
    },
    {
      id: 4,
      img: Computer,
      price: "495,000 сум/месяц",
      title: "Основы Веб дизайна",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis ",
      materialImgs: [ReactJs, Xd, Css],
    },
    {
      id: 5,
      img: Code,
      price: "1,195,000 сум/месяц",
      title: "SMM и Таргетинг",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis ",
      materialImgs: [Xd, ReactJs, Ps],
    },
  ];

  return (
    <section className="course">
      <div className="container">
        <h2 className="font-serif font-normal text-white text-[35px] leading-[42px] max-w-[282px] mt-[50px] sm:mt-[120px] w-full pb-[50px]">
          Experience <br /> and Portfolio
        </h2>
        <ul className="flex flex-wrap justify-center gap-6">
          {datas.length > 0 &&
            datas?.map((data) => (
              <CourseCard
                key={data?.id}
                img={data?.img}
                text={data?.text}
                price={data?.price}
                title={data?.title}
                materialImgs={data?.materialImgs}
              />
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Course;
