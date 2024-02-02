import Input from "@/components/utilitary/input";
import Link from "next/link";
import React from "react";

export default function monCompte() {
  return (
    <section className="min-h-screen pt-[50px] pb-[100px]">
      <div className="max-w-[1400px] flex flex-col gap-14 mx-auto md:items-center md:justify-center">
        <h2 className="">Mon compte</h2>

        <div className="w-full">
          <div className="w-full flex justify-between items-start">
            <div className="flex flex-col gap-4 w-full max-w-[500px]">
              <h3>Mes informations personnelles</h3>
              <div className="flex flex-col gap-4 w-full">
                {[0, 1, 2, 3, 4, 5].map(() => (
                  <Input
                    label="Prénom"
                    type="text"
                    name="firstname"
                    placeholder="Prénom"
                  />
                ))}
              </div>
            </div>
            <div className="bg-lightMain flex flex-col items-end gap-3 rounded-xl bg-opacity-50 w-fit px-24 py-12 ">
              <p>Un problème sur votre compte ?</p>
              <Link
                className="flex gap-2 items-center text-main hover:underline underline-offset-2"
                href="/"
              >
                <span className="text-main font-bold uppercase">
                  Nous contacter
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
