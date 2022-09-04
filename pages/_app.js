import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";
import { AnimatePresence, motion } from "framer-motion";
import { markdownComponents } from "../lib/markdownComponents";
import "../styles/global.css";

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

export default function App({ Component, pageProps }) {
  const { asPath } = useRouter();

  return (
    <MDXProvider components={markdownComponents}>
      <main className="h-screen w-screen bg-gray-100 flex justify-center overflow-y-auto max-h-full">
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
