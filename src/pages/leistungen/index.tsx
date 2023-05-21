import Image from "next/image";
import React from "react";
import Navbar from "~/Components/Navbar";
import band from "~/../public/Band-image.webp";
import doorman from "~/../public/flex-point-security-inc-GuAGlGAMdAs-unsplash.jpg";
import eventschutz from "~/../public/markus-spiske-lUc5pRFB25s-unsplash.jpg";
import objSchutz from "~/../public/collin-8FxJi5wuwKc-unsplash.jpg";
import sicherheit from "~/../public/illumination-marketing-XzFJoQPYAuc-unsplash.jpg";
import Footer from "~/Components/Footer";
import Header from "~/Components/Header";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Sicherheitsdienst",
    description:
      "Wir bieten eine breite Palette an Sicherheitsdienstleistungen an, darunter Alarmüberwachung, Patrouillen, Zugangskontrolle, Veranstaltungssicherheit, mobile Sicherheitsdienste und Beratung. Unsere maßgeschneiderten Lösungen werden speziell auf die Bedürfnisse unserer Kunden zugeschnitten. Kontaktieren Sie uns, um mehr darüber zu erfahren, wie wir Ihnen helfen können, Ihre Sicherheitsanforderungen zu erfüllen.",
    imageUrl: sicherheit,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Sicherheitsdienst"},
  },
  {
    title: "Doorman",
    description:
      "Als Teil unseres Doorman-Services bieten wir einen professionellen Empfangsdienst an, der individuell angepasst werden kann. Zu unseren Leistungen gehören Gästebegrüßung, Gepäckunterstützung, Zugangskontrolle und Lieferkoordination. Kontaktieren Sie uns, um mehr darüber zu erfahren, wie wir Ihnen helfen können, einen zuverlässigen Empfangsdienst anzubieten.",
    imageUrl: doorman,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Doorman"},
  },
  {
    title: "Eventschutz",
    description:
      "Unser Eventschutz umfasst professionelle Sicherheitspatrouillen, Zugangskontrolle, VIP-Schutz, Notfallreaktion und mehr. Wir bieten maßgeschneiderte Lösungen für Veranstaltungen jeder Größe und Art, um Ihnen ein Gefühl der Sicherheit und des Schutzes zu geben. Kontaktieren Sie uns, um mehr zu erfahren.",
    imageUrl:eventschutz,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Eventschutz"},
  },
  {
    title: "Werk- und Objektschutz",
    description:
      "Unser Werkschutz und Objektschutz umfasst Sicherheitspatrouillen, Zugangskontrolle, Alarmüberwachung und -reaktion, Notfallplanung und -reaktion, Schließdienstleistungen und Brandwache. Kontaktieren Sie uns, um maßgeschneiderte Lösungen für Ihr Unternehmen zu finden.",
    imageUrl: objSchutz,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Werk- und Objektschutz"},
  },
];

export default function index() {
  return (
    <>
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
      <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unsere Leistungen
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Dinge die wir tun, um Ihr unternehmen zu schützen.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post, idx) => (
                <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay:0.5, ease: "easeOut" }}
                viewport={{once: true}}
                  key={idx}
                  className="relative isolate flex flex-col gap-8 lg:flex-row p-8 bg-yellow-400/10 rounded-2xl shadow-xl"
                >
                  <div className="relative aspect-[16/9] h-full w-full sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <Image
                      src={post.imageUrl}
                      alt=""
                      fill
                      className="absolute inset-0  rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center text-xs">
                      <span
                        className="relative z-10 rounded-full bg-yellow-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </span>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <span>
                          <span className="absolute inset-0" />
                          {post.title}
                        </span>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-6 flex border-t border-yellow-700 pt-6"></div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </>
  );
}
