import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

export default function Button({
  imgWidth,
  imgHeight,
  isIcon,
  iconSide,
  text,
}) {
  return (
    <button
      className={`py-3 text-base px-6 bg-main font-semibold uppercase flex text-white items-center w-fit gap-2 ${
        iconSide === "left" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <span>{text}</span>
      {isIcon && <ChevronDownIcon className="w-6 h-6" />}
    </button>
  );
}
