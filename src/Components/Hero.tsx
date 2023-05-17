import Image from "next/image";
import React from "react";
import zert from "~/../public/zert.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero min-h-screen place-items-start bg-hero-pattern bg-cover bg-fixed bg-center md:place-items-center">
      <div className="hero-overlay bg-black bg-opacity-30"></div>
      <div className="hero-content text-center text-white">
        <div className="flex max-w-md flex-col gap-20">
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
              className="mb-5 text-4xl font-bold"
            >
              Ihr vertrauenswürdiger Sicherheitspartner
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            className="mb-5">
              Wir bieten erstklassige Sicherheitslösungen zum Schutz Ihrer
              Vermögenswerte.
            </motion.p>
            <motion.button className="btn-primary btn"
              initial={{ opacity: 0  }}
              animate={{ opacity: 1  }}
              transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}

            >Jetzt Anfragen</motion.button>
          </div>
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}

          className="flex items-center justify-center rounded-md bg-white/80">
            <Image src={zert} alt="zert" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
