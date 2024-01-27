import React from "react";
import Image from "next/image";

export default function SectionLayout({ title, paragraph, children, bgColor }) {
  return (
    <section
      style={{ backgroundColor: bgColor }}
      className="w-full flex justify-center px-5 md:px-10 py-[150px]"
    >
      <div className="flex flex-col gap-20 max-w-[1400px]">
        <div className="flex flex-col items-center">
          <div className="relative w-fit self-center">
            <h2>{title}</h2>
            <Image
              className="absolute right-5 -bottom-4 h-10 w-20"
              src="/icons/line_title.svg"
              width={100}
              height={30}
              alt=""
            />
          </div>
          <p>{paragraph}</p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
