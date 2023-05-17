import React from "react";
import Footer from "~/Components/Footer";
import Header from "~/Components/Header";
import Navbar from "~/Components/Navbar";

export default function Index() {
  return (
    <div>
      <Header />

      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-64}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="white" />
            </pattern>
          </defs>
          <svg x="50%" y={-64} className="overflow-visible fill-yellow-200">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div className="md:px-96">
          <div className="px-4 sm:px-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Jobs
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Informationen zu offenen Stellen
            </p>
          </div>
          <div className="mt-6 border-t-2 border-yellow-300">
            <dl className="divide-y divide-yellow-300">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Beschäftigungsbeginn
                </dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  ab sofort
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Beschäftigungsmöglichkeiten
                </dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Vollzeit, Teilzeit, Aushilfe
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Einsatzzeiten
                </dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Schichtbetrieb
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Vergütung
                </dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  nach LTV für Sicherheitsdienstleistungen in BW
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Das musst du mitbringen
                </dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <ul className="list-disc">
                    <li>Mindestens 18 Jahre</li>
                    <li>Qualifikation mind, SKP §34a der GewO </li>
                    <li>
                      Polizeiliches Führungszeugnis ohne Einträge ( nicht älter
                      als 3 Monate )
                    </li>
                    <li>Führerschein und PKW (wenn vorhanden )</li>
                    <li>Bereit zum Schicht und Wochenendarbeit</li>
                    <li>Deutsche Sprache in Wort und Schrift</li>
                  </ul>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Deine Bewerbung sollte enthalten
                </dt>
                <dd className="mt-1 text-md leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <ul className="list-disc">
                    <li>Lebenslauf</li>
                    <li>Qualifikationsnachweise</li>
                    <li>Führungszeugnis</li>
                    <li>Einsatzort</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
