import React from "react";
import SectionLayout from "./SectionLayout";
import Image from "next/image";
import content from "../../data/content/index/index.json";
import whoWeAreData from "../../data/content/index/whoWeAre.json";
import Link from "next/link";

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                  />
                </svg>
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
      </div>
    </SectionLayout>
  );
}
