import Image from "next/image";
import React from "react";
import logo from "~/../public/logo 1.png";
import Footer from "~/Components/Footer";
import Header from "~/Components/Header";
import {
  HeartIcon,
  ShieldCheckIcon,
  WrenchIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    name: "Unternehmen sicherer machen",
    description:
      "Wir wollen, dass ihre Events sicherer werden und Ihre Mitarbeiter und Gäste sich wohlfühlen. Deshalb haben wir uns auf die Fahne geschrieben, die Sicherheit in Unternehmen und Events zu erhöhen.",
    icon: BuildingOfficeIcon,
    delay: 0.4,
  },
  {
    name: "Baustellensicherheit",
    description:
      "Wir bieten zudem Baustellensicherheit an. Unsere Mitarbeiter sind speziell geschult und wissen, worauf es ankommt. Wir bieten Ihnen eine individuelle Lösung für Ihre Baustelle.",
    icon: WrenchIcon,
    delay: 0.5,
  },
  {
    name: "Doorman",
    description:
      "Unsere Doorman sind speziell geschult und wissen, worauf es ankommt. Wir bieten Ihnen eine individuelle Lösung für Ihre Veranstaltung.",
    icon: ShieldCheckIcon,
    delay: 0.6,
  },
  {
    name: "Begleitschutz",
    description:
      "Egal ob Kinder oder Erwachsene, wir bieten Ihnen einen Begleitschutz an. Unsere Mitarbeiter sind speziell geschult und wissen, worauf es ankommt. Wir bieten Ihnen eine individuelle Lösung für Ihre Veranstaltung.",
    icon: HeartIcon,
    delay: 0.7,
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
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div>
                <h2 className=" text-center mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Unsere Mission
                </h2>
                <div className="h-40 w-auto">
                  <Image src={logo as HTMLImageElement} alt="logo" />
                </div>
              </div>
              <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                {features.map((feature) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: feature.delay,
                      ease: "easeInOut",
                    }}
                    key={feature.name}
                  >
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-1 text-base leading-7 text-gray-600">
                      {feature.description}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
