import React, { useState } from "react";
import courses from "../data/content/courses/courses.json";
import Image from "next/image";
import CardCourse from "@/components/utilitary/cards/cardCourse";
import Input from "@/components/utilitary/input";

export default function Formations() {
  const [isELearning, setIsELearning] = useState(true);
  const [isFilterDisplay, setIsFilterDisplay] = useState(false);
  const [specialitySelected, setSpecialitySelected] = useState(0);

  const specialityOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <section className="min-h-screen pt-[50px] pb-[100px]">
      <div className="max-w-[1400px] flex flex-col gap-14 mx-auto items-center justify-center">
        <h2 className="">Toutes les formations</h2>

        <div className="flex flex-col gap-14 px-5">
          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-4 items-center">
                {[0, 1, 2, 3].map((item, index) => (
                  <button
                    onClick={() => setSpecialitySelected(index)}
                    className={`rounded-3xl text-sm py-2 px-5 font-medium  ${
                      specialitySelected === index
                        ? "bg-main text-white"
                        : "bg-neutral-400 bg-opacity-10 backdrop-blur-xl"
                    }`}
                  >
                    Spécialité
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsFilterDisplay(!isFilterDisplay)}
                className={`rounded-3xl text-sm py-2 px-5 flex gap-2 items-center font-medium ${
                  isFilterDisplay
                    ? "bg-black text-white"
                    : "bg-neutral-400 bg-opacity-10 backdrop-blur-xl "
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                  />
                </svg>
                <span className=" text-sm">Plus de fitres</span>
              </button>
            </div>
            {isFilterDisplay && (
              <div className="flex gap-4 items-center w-full">
                <Input
                  options={specialityOptions}
                  label="Spécialité"
                  type="select"
                  name="speciality"
                  placeholder="Spécialité"
                />
                <Input
                  options={specialityOptions}
                  label="Spécialité"
                  type="select"
                  name="speciality"
                  placeholder="Spécialité"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-6 w-full">
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
      </div>
    </section>
  );
}
