import Input from "@/components/utilitary/input";
import React, { useState } from "react";

export default function signup() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [rpps, setRpps] = useState("");
  const [password, setPassword] = useState("");

  const specialityOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div className="bg-lightMain relative min-h-screen py-[100px] flex justify-center items-center">
      <h2 className="absolute left-5 top-3 text-main">Hippocarte</h2>
      <section className="bg-white p-14 shadow-md rounded-xl">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl">Inscription</h3>
          <p>
            Veuillez remplir les champs afin de créer votre compte Hippocarte
          </p>
        </div>
        <div className="flex flex-col gap-6 my-6">
          <Input
            label="Nom"
            type="text"
            name="lastname"
            placeholder="Nom"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            label="Prénom"
            type="text"
            name="firstname"
            placeholder="Prénom"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Input
            label="Adresse email"
            type="email"
            name="email"
            placeholder="Adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Numéro de téléphone"
            type="number"
            name="tel"
            placeholder="Numéro de téléphone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <Input
            label="Spécialité"
            type="select"
            name="speciality"
            placeholder="Spécialité"
            options={specialityOptions}
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
          />
          <Input
            label="RPPS"
            type="number"
            name="rpps"
            placeholder="RPPS"
            value={rpps}
            onChange={(e) => setRpps(e.target.value)}
          />
          <Input
            label="Mot de passe"
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-main text-lg w-full py-3 px-4 text-center text-white font-medium duration-100 hover:brightness-110">
          M'inscrire
        </button>
      </section>
    </div>
  );
}
