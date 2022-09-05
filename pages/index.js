import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

import InfoIcon from "../components/icons/InfoIcon";
import { siteTitle } from "../components/layout";
import { BLOG_POST_ITEMS } from "../lib/posts";

const NAV_MENU_ITEMS = [
  { title: "About", icon: InfoIcon },
  { title: "LinkedIn", icon: InfoIcon },
  { title: "GitHub", icon: InfoIcon },
  { title: "Blog", icon: InfoIcon },
  { title: "Projects", icon: InfoIcon },
];

const HOVER_BG_COLOR = "#f0f9ff";

export default function Home() {
  return (
    <div className="flex flex-col py-4 min-h-full">
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="shadow flex rounded-md bg-white p-4 mx-5">
        <span className="flex justify-center items-center h-16 w-16 rounded-full bg-gray-300 text-white text-lg">
          NI
        </span>
        <div className="flex flex-col ml-4 justify-center">
          <span className="text-lg">Nur Ilyas</span>
          <span className="text-xs">Software engineer @ Shopee</span>
        </div>
      </section>
      <section className="relative">
        <div className="flex py-4 px-5 overflow-x-auto no-scrollbar space-x-4">
          {NAV_MENU_ITEMS.map(({ title, icon: Icon }) => (
            <motion.button
              key={title}
              className="shadow flex items-center rounded-md bg-white py-2 px-5 cursor-pointer"
              initial={{ backgroundColor: "#ffffff" }}
              whileHover={{ backgroundColor: HOVER_BG_COLOR }}
              whileTap={{ backgroundColor: HOVER_BG_COLOR }}
            >
              <span className="mr-2">
                <Icon className="h-5 w-5 fill-slate-400" />
              </span>
              <span>{title}</span>
            </motion.button>
          ))}
        </div>
        <div className="absolute top-1.5 left-0 bottom-1.5 w-5 bg-gradient-to-r from-gray-100 to-transparent"></div>
        <div className="absolute top-1.5 right-0 bottom-1.5 w-5 bg-gradient-to-l from-gray-100 to-transparent"></div>
      </section>
      <section className="shadow rounded-md bg-white mx-5 flex flex-col mb-7">
        {BLOG_POST_ITEMS.map(({ title, date, path }) => (
          <Link href={`posts/${path}`} passHref key={path}>
            <motion.a
              initial={{ backgroundColor: "#ffffff" }}
              whileHover={{ backgroundColor: HOVER_BG_COLOR }}
              whileTap={{ backgroundColor: HOVER_BG_COLOR }}
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
      <section className="text-center mt-auto pb-2">
        <a
          className="hover:underline cursor-pointer"
          href="https://github.com/nibmz7/portfolio"
          target="_blank"
        >
          Source code on GitHub
        </a>
      </section>
    </div>
  );
}
