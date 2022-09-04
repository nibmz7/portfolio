import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";
import { AnimatePresence, motion } from "framer-motion";
import { markdownComponents } from "../lib/markdownComponents";
import "../styles/global.css";
import ArrowBack from "../components/icons/arrowBack";
import Link from "next/link";
import Head from "next/head";
import { siteTitle } from "../components/layout";

const fadeVariants = {
  inactive: {
    opacity: 0,
    pointerEvents: "none",
  },
  active: {
    opacity: 1,
    pointerEvents: "auto",
  },
};

const titleVariants = {
  homeInactive: {
    y: -30,
    pointerEvents: "none",
  },
  homeActive: {
    y: 0,
    pointerEvents: "auto",
  },
  postInactive: {
    y: 30,
    pointerEvents: "none",
  },
  postActive: {
    y: 0,
    pointerEvents: "auto",
  },
};

const titleTransitions = {
  type: "tween",
  duration: 0.7,
};

const HOVER_BG_COLOR = "#f0f9ff";

export default function App({ Component, pageProps }) {
  const { asPath } = useRouter();
  const isHome = asPath === "/";
  return (
    <MDXProvider components={markdownComponents}>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="description" content="Nur Ilyas Blog" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main className="h-screen w-screen bg-gray-100 flex flex-col items-center overflow-y-auto max-h-full">
        <header className="w-full max-w-md mt-4">
          <div className="shadow flex rounded-md bg-white p-2 mx-5">
            <div className="overflow-hidden relative w-full p-2">
              <AnimatePresence mode="popLayout" initial={false}>
                {isHome ? (
                  <motion.h1
                    key="home-title"
                    className="font-semibold text-slate-700"
                    transition={titleTransitions}
                    variants={titleVariants}
                    initial="homeInactive"
                    animate="homeActive"
                    exit="homeInactive"
                  >
                    Home
                  </motion.h1>
                ) : (
                  <motion.div
                    key="blog-title"
                    transition={titleTransitions}
                    variants={titleVariants}
                    initial="postInactive"
                    animate="postActive"
                    exit="postInactive"
                  >
                    <Link href="/">
                      <motion.div
                        className="flex items-center cursor-pointer w-max rounded-md -ml-1 pl-1 pr-2"
                        initial={{ backgroundColor: "#ffffff" }}
                        whileHover={{ backgroundColor: HOVER_BG_COLOR }}
                        whileTap={{ backgroundColor: HOVER_BG_COLOR }}
                      >
                        <ArrowBack className="h-3 w-5 fill-slate-700 stroke-2" />
                        <h1 className="font-semibold text-slate-700">
                          Go Back
                        </h1>
                      </motion.div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={asPath}
            className="h-full w-full max-w-md"
            variants={fadeVariants}
            initial="inactive"
            animate="active"
            exit="inactive"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </main>
    </MDXProvider>
  );
}
