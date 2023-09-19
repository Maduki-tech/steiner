import React from "react";
import Image from "next/image";
import Example from "~/Components/Footer";
import Header from "~/Components/Header";
import ViSecInfo from "../../../public/Vi-sec-info.jpeg";
import ViSecImage from "../../../public/Vi-sec-image.jpeg";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import CTA from "~/Components/CTA";

export default function Index() {
  return (
    <>
      <Header />
      <Content />
      <Info />
      <CTA />
      <Example />
    </>
  );
}

function Content() {
  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-yellow-600">
                Sicherheitsturm
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Baustellenüberwachung
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Baustellen, Gewerbeimmobilien, Betriebsgelände und
                Veranstaltungen aller Art durch mobile Video-Türm.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[30rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem]"
            src={ViSecImage}
            alt="Information about the Vi-Sec Turm"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="flex max-w-xl flex-col gap-4 text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mb-3 text-2xl font-bold">
                Funktion des Sicherheitsturms{" "}
              </h1>
              <p>
                Die Full HD PTZ- Überwachungskamera und die 4 bis 8 Mega Pixel
                IP-Kameras erfassen einen festgelegten Bereich. Wenn eine Person
                oder ein Fahrzeug diesen Bereich betritt oder befährt, wird
                diese Person vom Videoüberwachungssystem als Eindringling
                erkannt und direkt über den LTE-Router der Leitstelle oder dem
                Betreiber gemeldet. Die Meldung erfolgt per Push-Nachricht,
                wobei Bilder oder kurze Videosequenzen des Eindringlings
                versendet werden.
              </p>
              <p>
                Dadurch kann die Leitstelle die Situation abschätzen und einen
                Fehlalarm praktisch ausschließen. Die Leitstelle (oder der
                Betreiber selbst) kann den Täter direkt über den Lautsprecher
                ansprechen und dadurch vertreiben oder sofort einen
                Sicherheitsdienst beziehungsweise die Polizei benachrichtigen.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-yellow-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Polizie benachrichtigen.
                    </strong>{" "}
                    Polizei und Sicherheitsdienst werden direkt benachrichtigt.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-yellow-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Videoüberwachung.
                    </strong>{" "}
                    Videoüberwachung mit Full HD PTZ-Überwachungskamera und 4
                    bis 8 Mega Pixel IP-Kameras.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    description: "2 x 4 Mega Pixel IP-Kameras mit Motorzoom",
  },
  {
    description:
      "1 x Schwenk/Neige/Zoom-Kamera 2 bis 4 Mega Pixel mit automatische Personenverfolgung",
  },
  {
    description: "1 x LTE-Router für den Fernzugriff",
  },
  {
    description: "1 x Lautsprecher für die Täteransprache",
  },
  {
    description:
      "Gesichert mit eigener Alarmanlage (2 Bewegungsmelder, Sirene, Alarmzentrale und Fernbedienung).",
  },
  {
    description:
      "Automatische Ereignis-Benachrichtigung per App (z.B. wenn eine Person den Erfassungsbereich der Kamera betritt).",
  },
  {
    description:
      "Auf Wunsch mit Alarmierung über Leitstelle oder Handy (mehrere Personenkreise möglich).",
  },
  {
    description: "Alarmierung bei Verlust der Spannungsversorgung.",
  },
  {
    description: "Rundum geschlossen (Einbruch- und Sabotagegesichert).",
  },
];

function Info() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-yellow-600">
            Ausstattung
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Was ist im Sicherheitsturm enthalten?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Der Sicherheitsturm ist mit einer Full HD PTZ-Überwachungskamera und 4
            bis 8 Mega Pixel IP-Kameras ausgestattet. Die Kameras sind mit einem
            4G LTE-Router verbunden, der die Bilder und Videos direkt an die
            Leitstelle oder den Betreiber sendet. Die Leitstelle oder der
            Betreiber können den Eindringling direkt über den Lautsprecher
            ansprechen und dadurch vertreiben oder sofort einen
            Sicherheitsdienst beziehungsweise die Polizei benachrichtigen.
          </p>
        </div>
      </div>
      <div className="relative pt-16">
        <div className="mx-auto  max-w-7xl px-6 lg:px-8">
          <Image
            src={ViSecInfo}
            alt="Informationen über den Vi-Sec Turm"
            className="mx-auto w-1/2 rounded-xl p-8 shadow-2xl ring-1 ring-gray-900/10"
          />
        </div>
      </div>
      <div className="mx-auto pb-8 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-3 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4">
          {features.map((feature) => (
            <ul
              key={feature.description}
              className="relative rounded-lg border border-black text-center bg-yellow-600/80 px-4 py-2 text-white shadow-xl"
            >
              <li className="inline">{feature.description}</li>
            </ul>
          ))}
        </dl>
      </div>
    </div>
  );
}
