import Image from "next/image";
import React from "react";
import Navbar from "~/Components/Navbar";
import mission from "~/../public/mission.png";
import logo from "~/../public/logo 1.png";
import Footer from "~/Components/Footer";

export default function index() {
  return (
    <>
      <Navbar />

      <div className="grid place-items-center md:gap-y-8 p-8 md:grid-cols-2 md:gap-8">
        <div>
          <h1 className="  text-center text-2xl font-bold md:text-4xl">
            Unsere Mission
          </h1>
          <Image src={mission} alt="" className="aspect-auto w-52 rounded-lg" />
        </div>
        <div className="mb-20 flex flex-col gap-8 text-center">
          <p>
            Sicherheit und Schutz für Kunden. Maßgeschneiderte Lösungen für Ihr
            Kerngeschäft. Zuverlässiger Partner.
          </p>
          <p>
            Servicequalität und Professionalität. Kontaktieren Sie uns für Ihre
            Sicherheitsbedürfnisse. Gewährleistung Ihrer Sicherheit und Ruhe.
          </p>
        </div>

        <div className="text-center md:col-span-2">
          <h1 className="text-2xl font-bold md:text-4xl ">Wir als Firma</h1>
          <Image
            src={logo}
            alt=""
            className="mx-auto aspect-auto w-52 rounded-lg"
          />

          <p className="mb-4">
            Als Unternehmen sind wir bestrebt, die höchsten Standards in der
            Sicherheitsdienstleistung zu erfüllen und kontinuierlich zu
            verbessern.
          </p>
          <p>
            Wir bieten maßgeschneiderte Sicherheitslösungen, die auf die
            spezifischen Bedürfnisse unserer Kunden zugeschnitten sind, um
            sicherzustellen, dass sie sich auf ihr Kerngeschäft konzentrieren
            können, ohne sich Gedanken über die Sicherheit machen zu müssen.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
