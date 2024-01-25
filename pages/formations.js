import React, { useState } from "react";
import courses from "../data/content/courses/courses.json";
import Image from "next/image";
import CardCourse from "@/components/utilitary/cards/cardCourse";

export default function Formations() {
  const [isELearning, setIsELearning] = useState(true);
  return (
    <section className="min-h-screen pt-[50px] pb-[100px]">
      <div className="max-w-[1400px] flex flex-col gap-6 mx-auto items-center justify-center">
        <h2 className="">Toutes les formations</h2>

        <div>
          <div className="relative outline outline-2 outline-black bg-black w-[500px] rounded-3xl h-[60px] flex items-center px-1 py-1">
            <button
              onClick={() => setIsELearning(true)}
              className={`z-20  font-semibold uppercase w-1/2 rounded-3xl h-full ${
                isELearning ? "text-black" : "text-white"
              }`}
            >
              E-learning
            </button>
            <div
              className={`absolute bg-white font-semibold uppercase w-1/2 top-1 bottom-1 left-1 rounded-3xl tr ease-linear duration-200 ${
                isELearning ? "translate-x-0" : "translate-x-[97%]"
              }`}
            ></div>
            <button
              onClick={() => setIsELearning(false)}
              className={`z-20 font-semibold uppercase w-1/2 rounded-3xl h-full ${
                isELearning ? "text-white" : "text-black"
              }`}
            >
              Présentiel
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 w-full">
          {courses.courses.map((elem) => (
            <CardCourse
              imgWidth={elem.image.width}
              imgHeight={elem.image.height}
              imgAlt={elem.image.alt}
              imgSrc={elem.image.src}
              title={elem.textContainer.title}
              paragraph={elem.textContainer.paragraph}
              date={elem.textContainer.date}
              newPrice={elem.prices.newPrice}
              previousPrice={elem.prices.previousPrices}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
