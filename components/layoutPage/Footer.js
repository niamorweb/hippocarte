import React from "react";
import footerData from "../../data/content/footer/footer.json";
import Link from "next/link";
import Image from "next/image";
import Input from "../utilitary/input";

export default function Footer() {
  return (
    <footer className="bg-lightMain py-[100px] px-5 md:px-10">
      <div className="flex flex-col justify-between max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-14 items-start justify-between">
          <div className="flex flex-col gap-2">
            <h2>Hippocarte</h2>
            <div className="max-w-[500px] flex flex-col gap-2">
              {footerData.infos.map((info) => (
                <div className="flex flex-wrap gap-1">
                  <span className="font-semibold">{info.type} : </span>
                  <span> {info.content}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold mb-6">Liens</span>
            {footerData.links.map((link) => (
              <Link href={link.link}>{link.name}</Link>
            ))}
          </div>

          <div className="flex flex-col gap-5 md:w-[400px]">
            <p className="text-base text-black">
              Restez à jour avec les dernières informations
            </p>
            <div className="w-full flex flex-col md:flex-row gap-3">
              <input
                type="email"
                placeholder="Adresse email"
                className="w-full outline-2 outline outline-neutral-100 px-4 py-3 h-12 "
                name=""
                id=""
              />
              <button className="bg-main text-white font-semibold h-12 px-4 py-2">
                Recevoir la newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
