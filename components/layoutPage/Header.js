import React, { useEffect, useState } from "react";
import content from "../../data/content/navbar/navbar.json";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../utilitary/buttons/Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

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
      <nav className="flex lg:hidden justify-between w-full mx-auto items-center h-fit">
        <span className="font-bold text-2xl text-black ">
          {content.websiteName}
        </span>
        <button
          onClick={() => setIsMobileNavActive(!isMobileNavActive)}
          className={`w-10 h-10  top-3 right-4 z-50 justify-center items-center ${
            isMobileNavActive ? "fixed" : "absolute"
          }`}
        >
          {isMobileNavActive ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </nav>

      {isMobileNavActive && (
        <div className="fixed z-40 shadow-md w-3/4 py-20 px-5 bg-white gap-10 top-0 right-0 bottom-0 flex flex-col">
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
