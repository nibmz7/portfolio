import nextMDX from "@next/mdx";
import recmaNextjsStaticProps from "recma-nextjs-static-props";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
    recmaPlugins: [recmaNextjsStaticProps],
  },
});

export default withMDX({
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.go$/,
      use: "raw-loader",
    });
    return config;
  },
});
