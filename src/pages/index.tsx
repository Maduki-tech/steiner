import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "~/Components/Hero";
import { Leistungen } from "~/Components/Leistungen";
import Navbar from "~/Components/Navbar";
import werbung from "~/../public/steiner_werbung.png";
import test1 from "~/../public/cov.jpg";
import test2 from "~/../public/sean-pollock-PhYq704ffdA-unsplash.jpg";
import test3 from "~/../public/cdc-c4IBsSCuwIU-unsplash.jpg";
import test4 from "~/../public/collin-8FxJi5wuwKc-unsplash.jpg";
import Footer from "~/Components/Footer";
import Header from "~/Components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Steiner Secutity</title>
        <meta
          name="description"
          content="Ihre Sicherheitsfirma des Vertrauens"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <Header />
      <main className="">
        <Hero />
      </main>

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
        <Leistungen />
        <section className="h-[30rem]">
          <div className="container mx-auto flex flex-col gap-8 px-8 md:relative">
            <Image
              src={werbung}
              alt=""
              className="inset-0 overflow-hidden rounded-md md:absolute"
            />
            <div className="right-0 md:absolute xl:top-20 2xl:right-52">
              <div className="card w-full bg-primary shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">
                    Wir sind da, wo sie uns brauchen
                  </h2>
                  <p>Wir halten ihr Unternehmen sicher </p>
                  <p>Rund um die Uhr für sie da!</p>
                  <div className="card-actions justify-end">
                    <button className="btn-info btn shadow-xl">
                      Jetzt Anfragen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4">
          <h1 className="mb-2 text-center text-4xl">Unsere Arbeit</h1>
          <Carousel />
        </section>
      </div>
      <Footer />
    </>
  );
};

function Carousel() {
  return (
    <div className="carousel mx-auto h-96 w-3/4 rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <Image src={test1} alt="" className="mx-auto rounded-lg md:w-1/2 " />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide2" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image src={test2} alt="" className="mx-auto w-fit rounded-lg" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide3" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image src={test4} alt="" className="mx-auto w-fit rounded-lg" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide4" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image src={test3} alt="" className="mx-auto w-fit rounded-lg" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide1" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
