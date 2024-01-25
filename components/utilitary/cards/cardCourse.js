import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardCourse({
  imgWidth,
  imgHeight,
  imgAlt,
  imgSrc,
  title,
  paragraph,
  newPrice,
  previousPrice,
  date,
}) {
  return (
    <div className="w-full relative shadow-md rounded-lg overflow-hidden bg-neutral-400 bg-opacity-10 backdrop-blur-xl">
      <Image
        className="w-full object-cover"
        width={imgWidth || 200}
        height={imgHeight || 200}
        alt={imgAlt}
        src={imgSrc}
      />
      <div className="w-full flex flex-col gap-3 items-start p-4">
        <span className="py-1 px-4 text-sm bg-main text-white font-medium rounded-3xl">
          Organisme
        </span>
        <h3>{title}</h3>
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-lightMain px-3 py-1 rounded-3xl font-medium text-sm">
            DPC
          </span>
          <span className="bg-lightMain px-3 py-1 rounded-3xl font-medium text-sm">
            Formation continue
          </span>
          <span className="bg-lightMain px-3 py-1 rounded-3xl font-medium text-sm">
            Médecin généraliste
          </span>
        </div>
        <div className="flex mt-6 justify-between w-full items-center">
          <div className="flex items-center gap-2">
            <span className="text-secondary text-base font-medium">
              {newPrice}
            </span>
            <span className="">{previousPrice}</span>
          </div>
          <Link
            className="flex gap-2 items-center text-main hover:underline underline-offset-2"
            href="/"
          >
            <span className="text-main text-sm font-bold uppercase">
              Voir la formation
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
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
