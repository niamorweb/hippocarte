import React from "react";
import SectionLayout from "./SectionLayout";
import Image from "next/image";
import content from "../../data/content/index/index.json";
import whoWeAreData from "../../data/content/index/whoWeAre.json";
import Link from "next/link";
import {
  ArrowLongRightIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

export default function WhoWeAre() {
  return (
    <SectionLayout
      title={content.fourthSection.title}
      paragraph={content.fourthSection.paragraph}
    >
      <div
        className="flex flex-col lg:flex-row gap-10 items-center"
        id="apropos"
      >
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          alt=""
          className="lg:w-1/2"
        />
        <div className="lg:w-1/2">
          <div className="flex flex-col gap-8">
            {whoWeAreData.elements.map((elem) => (
              <div className="flex gap-6 items-start">
                <CalendarDaysIcon className="w-10 h-10" />
                <p className="flex-1">{elem.text}</p>
              </div>
            ))}
          </div>
          <Link
            className="flex gap-2 items-center text-main mt-8 hover:underline underline-offset-2"
            href="/"
          >
            <span className="text-main font-bold uppercase">
              En savoir plus
            </span>
            <ArrowLongRightIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </SectionLayout>
  );
}
