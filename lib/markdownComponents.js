import Head from "next/head";

export const markdownComponents = {
  wrapper: (props) => {
    return (
      <div className="p-4">
        <Head>
          <title>{`${props.meta.title} - Nur Ilyas Blog`}</title>
        </Head>
        <div className="shadow rounded-md bg-white p-4">{props.children}</div>
      </div>
    );
  },
  h1: (props) => {
    return (
      <h1 className="mt-6 first:mt-0 mb-2 text-2xl font-bold">
        {props.children}
      </h1>
    );
  },
  h2: (props) => {
    return <h2 className="mt-6 mb-2 text-xl font-medium">{props.children}</h2>;
  },
  p: (props) => {
    return <p className="mb-2">{props.children}</p>;
  },
  a: (props) => {
    return (
      <a className="hover:underline" href={props.href} target="_blank">
        {props.children}
      </a>
    );
  },
  em: (props) => {
    return (
      <em className="text-indigo-700" href={props.href} target="_blank">
        {props.children}
      </em>
    );
  },
  li: (props) => {
    return <li>- {props.children}</li>;
  },
};
