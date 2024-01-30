import Link from "next/link";
import React from "react";

export default function congres() {
  const dataTime = [
    { number: 32, type: "Jours" },
    { number: 5, type: "Heures" },
    { number: 42, type: "Minutes" },
  ];

  return (
    <section className="max-w-[1400px] mx-auto flex flex-col gap-20 pt-14 pb-32">
      <h2 className="text-center">Prochains évènements</h2>
      <div className="flex flex-col gap-32">
        <div className="flex  flex-col gap-10">
          {[0, 1].map((index) => (
            <div
              className={`bg-[#F6F5EF] shadow-lg flex items-start gap-20 p-14 h-[500px] rounded-xl justify-between w-full ${
                index === 1 ? "flex-row-reverse " : ""
              } `}
            >
              <div className="flex h-full justify-center w-1/2 flex-col gap-6">
                <h3>Journée des infirmiers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate beatae provident eum sit, necessitatibus ab iste
                  ducimus minima cum enim culpa eveniet praesentium doloribus
                  numquam! Architecto exercitationem veniam at ea dolorem, et
                  maxime optio. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptate beatae provident eum sit,
                  necessitatibus ab iste ducimus minima cum enim culpa eveniet
                  praesentium doloribus numquam! Architecto exercitationem
                  veniam at ea dolorem, et maxime optio.
                </p>
                <div className="flex gap-4 items-center">
                  <button className="px-6 py-2 bg-black text-white rounded-3xl">
                    M'inscrire
                  </button>
                  <Link className=" underline underline-offset-4" href="#">
                    En savoir plus
                  </Link>
                </div>
              </div>
              <div className="bg-white w-1/2 bg-opacity-50 backdrop-blur-2xl rounded-xl p-6 flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <p className="">Notre prochaine rencontre : </p>
                  <span className="text-4xl uppercase font-semibold">
                    Marseille
                  </span>
                </div>
                <div className="flex gap-4">
                  {dataTime.map((item) => (
                    <div className="flex flex-col gap-2 text-center">
                      <span className="text-4xl font-semibold">
                        {item.number}
                      </span>
                      <span>{item.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <h3>Plus d'évènements</h3>
          <div className="grid grid-cols-3 gap-10">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div className="bg-neutral-100 shadow-md w-full flex flex-col gap-10 p-10 rounded-xl">
                <div className="flex justify-between bg-white px-6 py-2 rounded-3xl">
                  <span>10/04/2024</span>
                  <span>Bordeaux</span>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="font-medium">Compte pro 100 % en ligne</p>
                  <p>
                    Un compte pro simple d'utilisation, avec tout ce qui faut
                    pour gérer votre activité en toute sérénité. Un compte pro
                    simple d'utilisation, avec tout ce qui faut pour gérer votre
                    activité en toute sérénité.
                  </p>
                  <Link
                    className="font-medium underline underline-offset-4"
                    href="#"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
