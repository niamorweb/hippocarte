import React, { useState } from "react";
import SectionLayout from "./SectionLayout";
import content from "../../data/content/index/index.json";
import faqData from "../../data/content/index/faq.json";
import Link from "next/link";
import { ArrowLongRightIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

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
            <ChevronUpIcon
              className={`absolute top-10 right-6 w-4 h-4 duration-200 ${
                questionSelected.includes(index) && "rotate-[180deg]"
              }`}
            />

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
          <ArrowLongRightIcon className="w-6 h-6" />
        </Link>
      </div>
    </SectionLayout>
  );
}
