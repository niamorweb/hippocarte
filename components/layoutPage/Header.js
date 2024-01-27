import React, { useEffect, useState } from "react";
import content from "../../data/content/navbar/navbar.json";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../utilitary/buttons/Button";

export default function Header() {
  const pathname = usePathname();
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  return (
    <header className="px-5 md:px-10 py-5">
      <nav className="hidden lg:flex justify-between w-full mx-auto items-center h-fit max-w-[1400px]">
        <span className="font-bold text-2xl text-black ">
          {content.websiteName}
        </span>
        <div className="flex items-center gap-6">
          {content.nav.map((elem, index) => (
            <Link
              className={`${
                elem.link === pathname && "underline underline-offset-4"
              }`}
              href={elem.link}
            >
              {elem.name}
            </Link>
          ))}
        </div>
        <Button
          isIcon={true}
          iconSide="right"
          text={content.cta.not_connected}
        />
      </nav>
      <nav className="flex justify-between w-full mx-auto items-center h-fit">
        <span className="font-bold text-2xl text-black ">
          {content.websiteName}
        </span>
        <button
          onClick={() => setIsMobileNavActive(!isMobileNavActive)}
          className={`w-10 h-10  top-3 right-4 z-30 justify-center items-center ${
            isMobileNavActive ? "fixed" : "absolute"
          }`}
        >
          {isMobileNavActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>

      {isMobileNavActive && (
        <div className="fixed shadow-md w-3/4 py-20 px-5 bg-white gap-10 top-0 right-0 bottom-0 z-10 flex flex-col">
          <div className="flex flex-col items-start gap-6">
            {content.nav.map((elem, index) => (
              <Link
                className={`${
                  elem.link === pathname && "underline underline-offset-4"
                }`}
                href={elem.link}
              >
                {elem.name}
              </Link>
            ))}
          </div>
          <Button
            isIcon={true}
            iconSide="right"
            text={content.cta.not_connected}
          />
        </div>
      )}
    </header>
  );
}
