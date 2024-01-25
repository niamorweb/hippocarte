import React, { useEffect } from "react";
import content from "../../data/content/navbar/navbar.json";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../utilitary/buttons/Button";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="px-5 py-5 bg-neutral-100">
      <nav className="flex justify-between w-full mx-auto items-center h-fit max-w-[1400px]">
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
        {/* <Link
          className="py-3 text-base px-6 bg-main text-white font-semibold uppercase"
          href="/signin"
        >
          {content.cta.not_connected}
        </Link> */}
      </nav>
    </header>
  );
}
