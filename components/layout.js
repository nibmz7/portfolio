import Head from "next/head";

export const siteTitle = "Nur Ilyas Blog";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Nur Ilyas Blog" />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <main className="h-screen bg-gray-100">{children}</main>
    </div>
  );
}
