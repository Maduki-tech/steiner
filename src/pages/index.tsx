import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "~/Components/Hero";
import { Leistungen } from "~/Components/Leistungen";
import werbung from "~/../public/steiner_werbung.png";
import test1 from "~/../public/cov.jpg";
import test2 from "~/../public/sean-pollock-PhYq704ffdA-unsplash.jpg";
import test3 from "~/../public/cdc-c4IBsSCuwIU-unsplash.jpg";
import test4 from "~/../public/collin-8FxJi5wuwKc-unsplash.jpg";
import logoAnWand from "~/../public/WhatsApp Image 2023-05-12 at 11.31.01.jpeg";
import auto from "~/../public/WhatsApp Image 2023-05-12 at 11.48.53.jpeg";
import Footer from "~/Components/Footer";
import Header from "~/Components/Header";
import { motion } from "framer-motion";
import Link from "next/link";
import CTA from "~/Components/CTA";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Steiner Secutity</title>
        <meta
          name="description"
          content="Ihre Sicherheitsfirma des Vertrauens"
        />

        <meta property="og:title" content="Steiner Security" />
        <meta
            property="og:description"
            content="Ihre Sicherheitsfirma des Vertrauens"
            />
        <meta property="og:image" content="logo 1.png" />
        <meta property="og:url" content="https://steiner-security.de" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Steiner Security" />
        <link rel="icon" href="logo 1.png" />
      </Head>
      {/* <Navbar /> */}
      <Header />
      <main className="">
        <Hero />
      </main>

      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <Leistungen />
        <CTA />
        <section className="h-[30rem]">
          <div className="container mx-auto flex flex-col md:gap-8 px-8 md:relative">
            <Image
              src={werbung}
              alt=""
              className="inset-0 w-full overflow-hidden rounded-md md:absolute lg:w-3/4"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="right-0 md:absolute xl:top-20 2xl:right-52"
            >
              <div className="card w-full bg-gradient-to-tr from-yellow-500 to-yellow-700 shadow-xl">
                <div className="card-body text-white">
                  <h2 className="card-title">
                    Wir sind da, wo sie uns brauchen
                  </h2>
                  <p>Wir halten ihr Unternehmen sicher </p>
                  <p>Rund um die Uhr für sie da!</p>
                  <div className="card-actions justify-end">
                    <Link href={"/kontakt"} className="btn border-0 hover:bg-white  bg-yellow-400 shadow-xl text-black">
                      Jetzt Anfragen
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-4">
          <h1 className="mb-2 text-center text-4xl">Unsere Arbeit</h1>
          <Gallery />
        </section>
      </div>
      <Footer />
    </>
  );
};

function Gallery() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={test1}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={test2}
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={auto}
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={logoAnWand}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={test3}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={test4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
