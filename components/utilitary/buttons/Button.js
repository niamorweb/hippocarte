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
      className={`py-3 text-base px-6 bg-main font-semibold uppercase flex text-white items-center gap-2 ${
        iconSide === "left" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <span>{text}</span>
      {isIcon && (
        <svg
          className="-rotate-90 w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      )}
    </button>
  );
}
