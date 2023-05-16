import Image from "next/image";
import React from "react";
import Navbar from "~/Components/Navbar";
import band from "~/../public/Band-image.webp";
import doorman from "~/../public/flex-point-security-inc-GuAGlGAMdAs-unsplash.jpg";
import eventschutz from "~/../public/markus-spiske-lUc5pRFB25s-unsplash.jpg";
import objSchutz from "~/../public/collin-8FxJi5wuwKc-unsplash.jpg";
import sicherheit from "~/../public/illumination-marketing-XzFJoQPYAuc-unsplash.jpg";
import Footer from "~/Components/Footer";

const index = () => {
  return (
    <>
      <Navbar />

      <div className="grid place-items-center gap-y-8 p-8 md:grid-cols-2 md:gap-8">
        <div>
          <h1 className="mb-4  text-center text-2xl font-bold md:text-4xl">
            Unsere Leistungen
          </h1>
          <Image
            src={band}
            alt=""
            className="aspect-auto rounded-lg shadow-xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p>
            Von der 24-Stunden-Alarmüberwachung bis hin zur
            Sicherheitspatrouille und zum Veranstaltungsschutz bieten wir
            maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen.
            Unsere geschulten Mitarbeiter arbeiten nach den höchsten Standards
            der Bewachungsverordnung und stehen Ihnen zur Seite, um Ihre
            Sicherheitsbedürfnisse zu erfüllen.
          </p>
          <p>
            Egal, ob Sie ein kleines Unternehmen oder eine große Organisation
            sind, wir können Ihnen helfen, ein Gefühl der Sicherheit und des
            Schutzes zu gewährleisten. Kontaktieren Sie uns noch heute, um mehr
            darüber zu erfahren, wie wir Ihnen helfen können.
          </p>
        </div>

        <div className="hidden md:flex flex-col gap-4">
          <h2 className="text-xl font-bold text-center">Sicherheitsdienst</h2>
          <p>
            Wir bieten eine breite Palette an Sicherheitsdienstleistungen an,
            darunter Alarmüberwachung, Patrouillen, Zugangskontrolle,
            Veranstaltungssicherheit, mobile Sicherheitsdienste und Beratung.
            Unsere maßgeschneiderten Lösungen werden speziell auf die
            Bedürfnisse unserer Kunden zugeschnitten. Kontaktieren Sie uns, um
            mehr darüber zu erfahren, wie wir Ihnen helfen können, Ihre
            Sicherheitsanforderungen zu erfüllen.
          </p>
        </div>
        <div>
        {/* TODO: Neu image */}
          <Image
            src={sicherheit}
            alt=""
            className="aspect-auto rounded-lg shadow-xl" 
          />
        </div>
        <div className="md:hidden flex flex-col gap-4">
          <h2 className="text-xl font-bold text-center">Sicherheitsdienst</h2>
          <p>
            Wir bieten eine breite Palette an Sicherheitsdienstleistungen an,
            darunter Alarmüberwachung, Patrouillen, Zugangskontrolle,
            Veranstaltungssicherheit, mobile Sicherheitsdienste und Beratung.
            Unsere maßgeschneiderten Lösungen werden speziell auf die
            Bedürfnisse unserer Kunden zugeschnitten. Kontaktieren Sie uns, um
            mehr darüber zu erfahren, wie wir Ihnen helfen können, Ihre
            Sicherheitsanforderungen zu erfüllen.
          </p>
        </div>

        <div>
          <Image
            src={doorman}
            alt=""
            className="aspect-auto rounded-lg shadow-xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-center">Doorman</h1>
          <p>
            Als Teil unseres Doorman-Services bieten wir einen professionellen
            Empfangsdienst an, der individuell angepasst werden kann. Zu unseren
            Leistungen gehören Gästebegrüßung, Gepäckunterstützung,
            Zugangskontrolle und Lieferkoordination. Kontaktieren Sie uns, um
            mehr darüber zu erfahren, wie wir Ihnen helfen können, einen
            zuverlässigen Empfangsdienst anzubieten.
          </p>
        </div>

        <div className="hidden md:flex flex-col gap-4">
          <h1 className="text-xl font-bold text-center">Eventschutz</h1>
          <p>
            Unser Eventschutz umfasst professionelle Sicherheitspatrouillen,
            Zugangskontrolle, VIP-Schutz, Notfallreaktion und mehr. Wir bieten
            maßgeschneiderte Lösungen für Veranstaltungen jeder Größe und Art,
            um Ihnen ein Gefühl der Sicherheit und des Schutzes zu geben.
            Kontaktieren Sie uns, um mehr zu erfahren.
          </p>
        </div>
        <div>
          <Image
            src={eventschutz}
            alt=""
            className="aspect-auto rounded-lg shadow-xl"
          />
        </div>
        <div className="flex md:hidden flex-col gap-4">
          <h1 className="text-xl font-bold text-center">Eventschutz</h1>
          <p>
            Unser Eventschutz umfasst professionelle Sicherheitspatrouillen,
            Zugangskontrolle, VIP-Schutz, Notfallreaktion und mehr. Wir bieten
            maßgeschneiderte Lösungen für Veranstaltungen jeder Größe und Art,
            um Ihnen ein Gefühl der Sicherheit und des Schutzes zu geben.
            Kontaktieren Sie uns, um mehr zu erfahren.
          </p>
        </div>
        <div>
          <Image
            src={objSchutz}
            alt=""
            className="aspect-auto rounded-lg shadow-xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-center">Werkschutz & Objektschutz</h1>
          <p>
            Unser Werkschutz und Objektschutz umfasst Sicherheitspatrouillen,
            Zugangskontrolle, Alarmüberwachung und -reaktion, Notfallplanung und
            -reaktion, Schließdienstleistungen und Brandwache. Kontaktieren Sie
            uns, um maßgeschneiderte Lösungen für Ihr Unternehmen zu finden.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default index;
