import Input from "@/components/utilitary/input";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Connexion réussie.");

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-lightMain relative min-h-screen py-[100px] flex justify-center items-center">
      <Toaster />
      <h2 className="absolute left-5 top-3 text-main">Hippocarte</h2>
      <section className="bg-white p-14 shadow-md rounded-xl">
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl">Connexion</h3>
          <p>Entrez vos identifiants pour accéder à votre compte Hippocarte</p>
        </div>
        <div className="flex flex-col gap-6 my-10">
          <Input
            label="Adresse email"
            type="email"
            name="email"
            placeholder="Adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button
          onClick={notify}
          className="bg-main uppercase text-lg w-full py-3 px-4 text-center text-white font-medium duration-100 hover:brightness-110"
        >
          Me connecter
        </button>
      </section>
    </div>
  );
}
