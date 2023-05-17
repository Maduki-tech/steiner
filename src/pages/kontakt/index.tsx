import React from "react";
import Footer from "~/Components/Footer";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";
import Header from "~/Components/Header";

export default function Index() {
  const [vorName, setVorname] = React.useState("");
  const [nachName, setNachname] = React.useState("");
  const [nachricht, setNachricht] = React.useState("");
  const form = React.useRef<HTMLFormElement>(null);

  const handleMessageForWhatsapp = () => {
    const message =
      `Hallo, ich bin ${vorName} ${nachName} und ich möchte mit Ihnen zusammenarbeiten. ${nachricht}`.replace(
        / /g,
        "%20"
      );

      form.current?.reset();

    return message;
  };

  return (
    <div className="mx-auto ">
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
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Lass uns zusammenarbeiten
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Helfen sie dabei, ihr vorhaben abzusichern
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form ref={form} method="POST" className="lg:flex-auto">
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
                      onChange={(e) => setVorname(e.target.value)}
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      onChange={(e) => setNachname(e.target.value)}
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      onChange={(e) => setNachricht(e.target.value)}
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://web.whatsapp.com/send?phone=+4917661532329&text=${handleMessageForWhatsapp()}`}
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Schreibe auf WhatsApp
                </Link>
              </div>
            </form>
            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              <AiOutlineWhatsApp className="mx-auto h-16 w-16 text-lime-600" />
              <figure className="mt-10">
                <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                  <p>
                    Kommen sie direkt mit mir in Kontakt, damit wir ihr
                    unternehmen absichern können.
                  </p>
                  <p>
                    Bereits einige meiner Kunden haben mich auf diesem Weg
                    erreicht.
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex gap-x-6">
                  <img
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                    alt=""
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  />
                  <div>
                    <div className="text-base font-semibold text-gray-900">
                      Brenna Goyette
                    </div>
                    <div className="text-sm leading-6 text-gray-600">
                      Jahrelange Kundin
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
