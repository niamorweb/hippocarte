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
    <div className="w-full relative shadow-md rounded-lg overflow-hidden">
      <Image
        className="w-full object-cover"
        width={imgWidth || 200}
        height={imgHeight || 200}
        alt={imgAlt}
        src={imgSrc}
      />
      <div className="w-full p-4">
        <h3>{title}</h3>
        <div className="">
          <div className="absolute flex items-center gap-2 bottom-5 right-5">
            <span className="text-secondary text-base font-medium">
              {newPrice}
            </span>
            <span className="">{previousPrice}</span>
          </div>
          <Link
            className="flex gap-2 items-center text-main mt-8 hover:underline underline-offset-2"
            href="/"
          >
            <span className="text-main font-bold uppercase">
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
