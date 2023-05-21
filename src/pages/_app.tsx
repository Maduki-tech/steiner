import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect, useState } from "react";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [scrollButtonVisible, setScrollButtonVisible] = useState(false);

  useEffect(() => {
    const handleScrolLButtonVisibility = () => {
      window.pageYOffset > 300
        ? setScrollButtonVisible(true)
        : setScrollButtonVisible(false);
    };
    window.addEventListener("scroll", handleScrolLButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrolLButtonVisibility);
    };
  }, []);
  return (
    <>
      <Component {...pageProps} />

      {scrollButtonVisible && (
        <button
            className="fixed bottom-4 right-4 bg-yellow-500 rounded-full p-2.5"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
            <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
            </svg>
        </button>
        )}

    </>
  );
};

export default MyApp;
