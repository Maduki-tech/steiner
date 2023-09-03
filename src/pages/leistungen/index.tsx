import Image from "next/image";
import React from "react";
import doorman from "~/../public/flex-point-security-inc-GuAGlGAMdAs-unsplash.jpg";
import eventschutz from "~/../public/markus-spiske-lUc5pRFB25s-unsplash.jpg";
import objSchutz from "~/../public/collin-8FxJi5wuwKc-unsplash.jpg";
import sicherheit from "~/../public/illumination-marketing-XzFJoQPYAuc-unsplash.jpg";
import baustelle from "~/../public/baustelle.jpg";
import hotel from "~/../public/Hotel.jpg";
import andere from "~/../public/andere.jpg";
import transfer from "~/../public/transfer.jpg";

import Footer from "~/Components/Footer";
import Header from "~/Components/Header";
import { motion } from "framer-motion";
import CTA from "~/Components/CTA";

const posts = [
  {
    title: "Fahrdienste",
    description:
      "Sie brauchen ein Fahrer, der Sie an den Flughafen fährt oder in ein Hotel oder zu Ihrem Termin, dann sind sie bei uns richtig. Wir haben auch russische und ukrainisch und polnische sprechendes Personal ",
    imageUrl: transfer,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Fahrdienste" },
    special: true,
  },
  {
    title: "Sicherheitsdienst",
    description:
      "Wir bieten eine breite Palette an Sicherheitsdienstleistungen an, darunter Alarmüberwachung, Patrouillen, Zugangskontrolle, Veranstaltungssicherheit, mobile Sicherheitsdienste und Beratung. Unsere maßgeschneiderten Lösungen werden speziell auf die Bedürfnisse unserer Kunden zugeschnitten. Kontaktieren Sie uns, um mehr darüber zu erfahren, wie wir Ihnen helfen können, Ihre Sicherheitsanforderungen zu erfüllen.",
    imageUrl: sicherheit,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Sicherheitsdienst" },
    special: false,
  },
  {
    title: "Doorman",
    description:
      "Als Teil unseres Doorman-Services bieten wir einen professionellen Empfangsdienst an, der individuell angepasst werden kann. Zu unseren Leistungen gehören Gästebegrüßung, Gepäckunterstützung, Zugangskontrolle und Lieferkoordination. Kontaktieren Sie uns, um mehr darüber zu erfahren, wie wir Ihnen helfen können, einen zuverlässigen Empfangsdienst anzubieten.",
    imageUrl: doorman,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Doorman" },
    special: false,
  },
  {
    title: "Eventschutz",
    description:
      "Unser Eventschutz umfasst professionelle Sicherheitspatrouillen, Zugangskontrolle, VIP-Schutz, Notfallreaktion und mehr. Wir bieten maßgeschneiderte Lösungen für Veranstaltungen jeder Größe und Art, um Ihnen ein Gefühl der Sicherheit und des Schutzes zu geben. Kontaktieren Sie uns, um mehr zu erfahren.",
    imageUrl: eventschutz,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Eventschutz" },
    special: false,
  },
  {
    title: "Werk- und Objektschutz",
    description:
      "Unser Werkschutz und Objektschutz umfasst Sicherheitspatrouillen, Zugangskontrolle, Alarmüberwachung und -reaktion, Notfallplanung und -reaktion, Schließdienstleistungen und Brandwache. Kontaktieren Sie uns, um maßgeschneiderte Lösungen für Ihr Unternehmen zu finden.",
    imageUrl: objSchutz,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Werk- und Objektschutz" },
    special: false,
  },

  {
    title: "Hotel Bewachung",
    description:
      "Mit geschultem Personal und modernster Technologie gewährleisten wir eine diskrete und effiziente Überwachung von öffentlichen Bereichen, Eingängen, Fluren und anderen sensiblen Zonen. Unser Fokus liegt darauf, Gästen ein Gefühl der Sicherheit zu vermitteln, ohne dabei den erstklassigen Service und die angenehme Atmosphäre zu beeinträchtigen.",
    imageUrl: hotel,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Hotel Bewachung" },
    special: false,
  },
  {
    title: "Revierfahrten",
    description:
      "Während der Revierfahrten überprüfen wir kritische Bereiche, reagieren auf verdächtige Aktivitäten und stellen sicher, dass die Sicherheitsprotokolle eingehalten werden. Unsere Revierfahrten bieten eine effiziente Möglichkeit, die Sicherheit zu erhöhen und wertvolle Ressourcen zu schützen, ohne den normalen Betriebsablauf zu beeinträchtigen.",
    imageUrl: andere,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Revierfahrten" },
    special: false,
  },
  {
    title: "Baustellenbewachung",
    description:
      "Durch den Einsatz moderner Überwachungstechnologien und geschultem Sicherheitspersonal gewährleisten wir eine kontinuierliche Überwachung der Baustelle. Unser Fokus liegt darauf, potenzielle Sicherheitslücken zu identifizieren, unerlaubten Zutritt zu verhindern und sicherzustellen, dass Sicherheitsrichtlinien strikt eingehalten werden. Mit unserer Baustellenüberwachung tragen wir dazu bei, den reibungslosen Ablauf von Projekten sicherzustellen und gleichzeitig Risiken zu minimieren.",
    imageUrl: baustelle,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Baustellenbewachung" },
    special: false,
  },
];

export default function index() {
  return (
    <>
      <Header />
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
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
                  <>
                    {post.special ? (
                      <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.5,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        key={idx}
                        className="relative isolate flex flex-col gap-8 rounded-2xl bg-yellow-400/40 p-8 shadow-xl lg:flex-row"
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
                            <span className="relative z-10 rounded-full bg-yellow-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                              Neuheiten
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
                    ) : (
                      <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.5,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        key={idx}
                        className="relative isolate flex flex-col gap-8 rounded-2xl bg-yellow-400/10 p-8 shadow-xl lg:flex-row"
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
                            <span className="relative z-10 rounded-full bg-yellow-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
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
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />

      <Footer />
    </>
  );
}

