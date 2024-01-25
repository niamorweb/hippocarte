import React from "react";
import content from "../../data/content/index/index.json";
import coursesData from "../../data/content/index/courses.json";
import Image from "next/image";
import { useState } from "react";
import SectionLayout from "./SectionLayout";
import { Baloo_2 } from "next/font/google";
import Link from "next/link";

const baloo = Baloo_2({
  subsets: ["latin"],
});

export default function Courses() {
  const [filterSelected, setFilterSelected] = useState("Tous les programmes");

  return (
    <SectionLayout
      bgColor="#F1F8E950"
      paragraph={content.firstSection.paragraph}
      title={content.firstSection.title}
    >
      {/* <div className="flex flex-col gap-8 items-center" id="formations">
        <div className="flex gap-4 items-center ">
          {coursesFilters.map((elem, index) => (
            <button
              className={`px-4 py-2  rounded-lg ${
                filterSelected === elem
                  ? "bg-main text-white outline-2 outline outline-main"
                  : " bg-slate-100 backdrop-blur-sm bg-opacity-20 outline outline-[1px] outline-slate-400"
              }`}
              onClick={() => setFilterSelected(elem)}
            >
              {elem}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-6">
          {coursesData.courses.map((course) => (
            <div className="w-full outline outline-2 outline-neutral-200 flex flex-col">
              <Image
                className="w-full"
                width={course.image.width}
                height={course.image.height}
                alt={course.image.alt}
                src={course.image.src}
              />
              <div className="p-4 flex flex-col gap-2">
                <p>{course.textContainer.date}</p>
                <h3>{course.textContainer.title}</h3>
                <p>{course.textContainer.paragraph}</p>
                <div className="flex justify-between mt-4">
                  <div className="flex gap-2 items-center">
                    <span>{course.prices.newPrice}</span>
                    <span>{course.prices.previousPrice}</span>
                  </div>
                  <button>Voir plus</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="flex gap-10 items-center">
        {[0, 2].map((item) => (
          <div className="shadow-lg bg-white from-lightMain to-white duration-150 hover:bg-gradient-to-br rounded-xl flex flex-col gap-5 w-[350px] p-10 justify-start">
            <Image src="/icons/calendar.svg" width={80} height={80} alt="" />
            <span className={`text-xl font-bold ${baloo.className}`}>
              FORMATIONS E-LEARNING
            </span>
            <span className="text-xs">
              C'est simple ! Connectez-vous à votre compte Hippocarte, trouvez
              la formation en ligne qui vous intéresse, puis laissez votre avis
              en quelques clics. Vos retours contribuent à enrichir la
              communauté des professionnels de santé.
            </span>
            <Link
              className="flex gap-2 items-center text-main hover:underline underline-offset-4"
              href="/"
            >
              <span className="text-main font-bold uppercase">
                Voir les formations
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

const coursesFilters = [
  "Tous les programmes",
  "Cardiologie",
  "Dermatologie",
  "Neurologie",
  "Psychiatrie",
  "Pédiatrie",
];
