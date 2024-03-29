import React, { useState } from "react";
import courses from "../data/content/courses/courses.json";
import Image from "next/image";
import CardCourse from "@/components/utilitary/cards/cardCourse";
import Input from "@/components/utilitary/input";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";

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
      <div className="max-w-[1400px] flex flex-col gap-14 mx-auto md:items-center md:justify-center">
        <h2 className="">Toutes les formations</h2>

        <div className="flex flex-col gap-14">
          <div className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-col md:flex-row md:justify-between items-start md:items-center">
              <div className="flex gap-4 items-center overflow-auto py-4 md:py-0">
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
                <AdjustmentsVerticalIcon className="h-6 w-6" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
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
