import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
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
    <MDXProvider>
      <main className="h-screen w-screen">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={asPath}
            className="h-full w-full"
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
