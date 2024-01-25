import React from "react";
import Image from "next/image";
// import variables from "@/styles/variables.module.scss";
import content from "../../data/content/index/index.json";
// import css from "../../styles/index/hero.module.scss";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="px-5 py-20 bg-neutral-100" id="home">
      <div className="absolute top-2/3 right-40 w-[400px] h-[400px] blur-3xl bg-blue-200"></div>
      <div className="absolute top-1/4 right-72 w-[200px] h-[200px] blur-3xl bg-lightMain"></div>
      <div className="max-w-[1400px] mx-auto flex  ">
        <div className="z-20 flex flex-col gap-5 w-1/2 justify-start">
          <h1>{content.hero.title}</h1>
          <p>{content.hero.paragraph}</p>
          <button className="mt-8 outline-2 outline outline-main text-main font-semibold text-lg w-fit px-6 py-2">
            {" "}
            {content.hero.cta}
          </button>
        </div>
        <div className="relative w-1/2">
          <div className="-z-10 w- w-[400px] h-[400px] absolute bottom-0"></div>
          <Image
            className="-z-20"
            width={600}
            height={450}
            alt="Image d'illustration"
            src="/images/index/hero/hero_image_2.png"
          />
        </div>
      </div>
    </section>
  );
}
