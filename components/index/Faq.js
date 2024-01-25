import React, { useState } from "react";
import SectionLayout from "./SectionLayout";
import content from "../../data/content/index/index.json";
import faqData from "../../data/content/index/faq.json";
import Link from "next/link";

export default function Faq() {
  const [questionSelected, setQuestionSelected] = useState([]);

  const handleClickQuestion = (index) => {
    if (questionSelected.includes(index)) {
      return setQuestionSelected(
        questionSelected.filter((item) => item !== index)
      );
    }
    return setQuestionSelected([...questionSelected, index]);
  };

  return (
    <SectionLayout
      bgColor="#E0F7FA30"
      title={content.secondSection.title}
      paragraph={content.secondSection.paragraph}
    >
      <div className="max-w-[1000px] flex flex-col gap-8" id="faq">
        {faqData.elements.map((elem, index) => (
          <div
            className="cursor-pointer relative py-8 px-10 border-[1px] border-neutral-200 rounded-xl shadow-md  "
            onClick={() => handleClickQuestion(index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`absolute top-10 right-6 rotate-90 w-4 h-4 duration-200 ${
                questionSelected.includes(index) && "rotate-[270deg]"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <div
              className={`flex flex-col  ${
                questionSelected.includes(index) && "gap-3"
              }`}
            >
              <span className="text-lg font-semibold">{elem.question}</span>
              <p
                className={`max-h-[0] overflow-hidden duration-300 ${
                  questionSelected.includes(index) && "max-h-[300px]"
                }`}
              >
                {elem.answer}
              </p>
            </div>
          </div>
        ))}
        <Link
          className="mt-12 flex text-xl gap-2 justify-center items-center text-main hover:underline underline-offset-4"
          href="/"
        >
          <span className="font-bold uppercase">Voir toutes les questions</span>
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
    </SectionLayout>
  );
}
