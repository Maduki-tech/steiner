import Link from "next/link";
import React from "react";
import Footer from "~/Components/Footer";
import Header from "~/Components/Header";
import CTA from "~/Components/CTA";


export default function Index() {
  return (
    <div>
      <Header />

      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
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
                <dd className="text-md mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  ab sofort
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Beschäftigungsmöglichkeiten
                </dt>
                <dd className="text-md mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Vollzeit, Teilzeit, Aushilfe
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Einsatzzeiten
                </dt>
                <dd className="text-md mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Schichtbetrieb
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Vergütung
                </dt>
                <dd className="text-md mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  nach LTV für Sicherheitsdienstleistungen in BW
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-md font-medium leading-6 text-gray-900">
                  Das musst du mitbringen
                </dt>
                <dd className="text-md mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
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
                <dd className="text-md mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
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

      <hr className="border-0 bg-gray-300"></hr>

      <CTA />

      <Footer />
    </div>
  );
}

