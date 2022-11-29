import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

import InfoIcon from "../components/icons/InfoIcon";
import { BLOG_POST_ITEMS } from "../lib/posts";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import GithubIcon from "../components/icons/GithubIcon";

const NAV_MENU_ITEMS = [
  {
    title: "About",
    icon: InfoIcon,
    href: "https://www.linkedin.com/in/nur-ilyas-827544133/",
  },
  {
    title: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/nur-ilyas-827544133/",
  },
  { title: "GitHub", icon: GithubIcon, href: "https://github.com/nibmz7" },
  { title: "Blog", icon: InfoIcon, href: "https://nimz.dev" },
  {
    title: "Projects",
    icon: InfoIcon,
    href: "https://www.linkedin.com/in/nur-ilyas-827544133/",
  },
];

const HOVER_BG_COLOR = "#f0f9ff";

export default function Home({ posts }) {
  return (
    <div className="flex flex-col py-4 min-h-full">
      <Head>
        <title>Home - Nur Ilyas Blog</title>
      </Head>

      <section className="shadow flex rounded-md bg-white p-4 mx-4">
        <h2 className="flex justify-center items-center h-16 w-16 rounded-full bg-gray-300 text-white text-lg">
          NI
        </h2>
        <div className="flex flex-col ml-4 justify-center">
          <h2 className="text-lg">Nur Ilyas</h2>
          <h2 className="text-xs">Software engineer @ Shopee</h2>
        </div>
      </section>
      <section className="relative">
        <div className="flex py-4 px-5 overflow-x-auto no-scrollbar space-x-4">
          {NAV_MENU_ITEMS.map(({ title, icon: Icon, href }) => (
            <motion.a
              key={title}
              className="shadow flex items-center rounded-md bg-white py-2 px-5 cursor-pointer"
              initial={{ backgroundColor: "#ffffff" }}
              whileHover={{ backgroundColor: HOVER_BG_COLOR }}
              whileTap={{ backgroundColor: HOVER_BG_COLOR }}
              href={href}
              target="_blank"
            >
              <span className="mr-2">
                <Icon className="h-5 w-5 fill-slate-400" />
              </span>
              <span>{title}</span>
            </motion.a>
          ))}
        </div>
        <div className="absolute top-1.5 left-0 bottom-1.5 w-5 bg-gradient-to-r from-gray-100 to-transparent"></div>
        <div className="absolute top-1.5 right-0 bottom-1.5 w-5 bg-gradient-to-l from-gray-100 to-transparent"></div>
      </section>
      <section className="shadow rounded-md bg-white mx-4 flex flex-col mb-7">
        {posts.map(({ title, date, path }) => (
          <Link href={`posts/${path}`} passHref key={path}>
            <motion.a
              initial={{ backgroundColor: "#ffffff" }}
              whileHover={{ backgroundColor: HOVER_BG_COLOR }}
              whileTap={{ backgroundColor: HOVER_BG_COLOR }}
              className="flex flex-col p-5 border-b last:border-b-0 border-b-slate-200 first:rounded-t-md last:rounded-b-md group"
            >
              <p className="mb-2 pr-2 text-lg group-hover:underline">{title}</p>
              <p className="text-xs text-gray-500">{date}</p>
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

export const getStaticProps = async () => {
  return {
    props: {
      posts: BLOG_POST_ITEMS,
    },
  };
};
