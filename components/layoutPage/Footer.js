import React from "react";
import footerData from "../../data/content/footer/footer.json";
import Link from "next/link";
import Image from "next/image";
import Input from "../utilitary/input";

export default function Footer() {
  return (
    <footer className="bg-lightMain py-[100px] ">
      <div className="flex flex-col justify-between max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-5 justify-center items-center">
          <p className="text-xl font-semibold text-black">
            Restez à jour avec les dernières informations
          </p>
          <div className="flex gap-3 items-center">
            <input
              type="email"
              className="w-[300px] outline-2 outline outline-neutral-100 px-4 py-3 h-12 "
              name=""
              id=""
            />
            <button className="bg-main text-white font-semibold h-12 px-4 py-2">
              Valider
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-2">
            <h2>Hippocarte</h2>
            <div>
              {footerData.infos.map((info) => (
                <div>
                  <span>{info.type} : </span>
                  <span>{info.content}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {footerData.links.map((link) => (
              <Link href={link.link}>{link.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
