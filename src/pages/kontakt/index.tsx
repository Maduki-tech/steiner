import React, { useEffect } from "react";
import Footer from "~/Components/Footer";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";
import Header from "~/Components/Header";
import { useRouter } from "next/router";

export default function Index() {
  const vorNameRef = React.useRef<HTMLInputElement>(null);
  const nachNameRef = React.useRef<HTMLInputElement>(null);
  const nachrichtRef = React.useRef<HTMLTextAreaElement>(null);

  const handleMessageForWhatsapp = () => {

    console.log(vorNameRef.current?.textContent);
    // get text from input fields
    const vorname = vorNameRef.current?.value || "";
    const nachname = nachNameRef.current?.value || "";
    const nachricht = nachrichtRef.current?.value || "";

    const message =
      `Hallo, ich bin ${vorname} ${nachname} und ich möchte mit Ihnen zusammenarbeiten. ${nachricht}`.replace(
        / /g,
        "%20"
      );

    const url = `https://web.whatsapp.com/send?phone=+4915757790138&text=${message}`
    // open URL in new tab

    window.open(url, '_blank');


    return message;
  };

  return (
    <div className="mx-auto ">
      <Header />
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Lass uns zusammenarbeiten
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Helfen sie dabei, ihr vorhaben abzusichern
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <div className="lg:flex-auto">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Vorname
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      ref={vorNameRef}
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nachname
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      ref={nachNameRef}
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nachricht
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      ref={nachrichtRef}
                      rows={4}
                      className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  className="block w-full rounded-md bg-yellow-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick= {() => handleMessageForWhatsapp()}
                >
                  Schreibe auf WhatsApp
                </button>
              </div>
            </div>
            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              <AiOutlineWhatsApp className="mx-auto h-16 w-16 text-lime-600" />
              <figure className="mt-10">
                <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                  <p>
                    Kommen Sie direkt mit mir in Kontakt, damit wir Ihr
                    Unternehmen absichern können.
                  </p>
                  <p>
                    Bereits einige meiner Kunden haben mich auf diesem Weg
                    erreicht.
                  </p>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
