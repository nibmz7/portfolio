import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

import InfoIcon from "../components/icons/InfoIcon";
import { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { BLOG_POST_ITEMS } from "./posts/_data";

const NAV_MENU_ITEMS = [
  { title: "About", icon: InfoIcon },
  { title: "Blog", icon: InfoIcon },
  { title: "GitHub", icon: InfoIcon },
  { title: "Projects", icon: InfoIcon },
  { title: "LinkedIn", icon: InfoIcon },
];

export default function Home({ allPostsData }) {
  return (
    <div className="flex flex-col bg-gray-100 py-6 min-h-full">
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <header className="mb-4 mx-5">
        <h1>NIMZ.dev</h1>
      </header>
      <section className="shadow flex rounded-md bg-white p-4 mx-5">
        <span className="flex justify-center items-center h-16 w-16 rounded-full bg-gray-300 text-white text-lg">
          NI
        </span>
        <div className="flex flex-col ml-4 justify-center">
          <span className="text-lg">Nur Ilyas</span>
          <span className="text-xs">Software engineer @ Shopee</span>
        </div>
      </section>
      <section>
        <ul className="flex py-4 px-5 overflow-x-auto no-scrollbar space-x-4">
          {NAV_MENU_ITEMS.map(({ title, icon: Icon }) => (
            <motion.li
              className="shadow flex items-center rounded-md bg-white py-2 px-5"
              initial={{ backgroundColor: "#ffffff" }}
              whileHover={{ backgroundColor: "#f3f4f6" }}
              whileTap={{ backgroundColor: "#f3f4f6" }}
            >
              <span className="mr-2">
                <Icon className="h-5 w-5 fill-slate-400" />
              </span>
              <span>{title}</span>
            </motion.li>
          ))}
        </ul>
      </section>
      <section className="shadow rounded-md bg-white mx-5 flex flex-col">
        {BLOG_POST_ITEMS.map(({ title, date, path }) => (
          <Link href={`posts/${path}`} passHref>
            <motion.a
              initial={{ backgroundColor: "#ffffff" }}
              whileHover={{ backgroundColor: "#f3f4f6" }}
              whileTap={{ backgroundColor: "#f3f4f6" }}
              className="flex flex-col p-5 border-b last:border-b-0 border-b-slate-200 first:rounded-t-md last:rounded-b-md group"
            >
              <span className="mb-2 text-lg group-hover:underline">
                {title}
              </span>
              <span className="text-xs text-gray-500">{date}</span>
            </motion.a>
          </Link>
        ))}
      </section>
      <section className="text-center mt-auto">
        <a className="hover:underline">Source code on GitHub</a>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
