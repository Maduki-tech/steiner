import Image from "next/image";
import React from "react";
import zert from "~/../public/zert.png";

export default function Hero() {
  return (
    <div className="hero min-h-screen place-items-start md:place-items-center bg-hero-pattern bg-cover bg-fixed bg-center">
      <div className="hero-overlay bg-black bg-opacity-30"></div>
      <div className="hero-content text-center text-white">
        <div className="flex max-w-md flex-col gap-20">
          <div>
            <h1 className="mb-5 text-4xl font-bold">
              Ihr vertrauenswürdiger Sicherheitspartner
            </h1>
            <p className="mb-5">
              Wir bieten erstklassige Sicherheitslösungen zum Schutz Ihrer
              Vermögenswerte.
            </p>
            <button className="btn-primary btn">Jetzt Anfragen</button>
          </div>
          <div className="flex items-center justify-center bg-white/80 rounded-md">
            <Image src={zert} alt="zert" />
          </div>
        </div>
      </div>
    </div>
  );
}
