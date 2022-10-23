import { useMemo } from "react";
import { tokenize } from "./tokenizer";

const tokenComponents = {
  Keyword: ({ token }) => {
    return (
      <span className="text-fuchsia-400" data-type={token.type}>
        {token.value}
      </span>
    );
  },
  Identifier: ({ token }) => {
    return (
      <span className="text-sky-400" data-type={token.type}>
        {token.value}
      </span>
    );
  },
  String: ({ token }) => {
    return (
      <span className="text-orange-400" data-type={token.type}>
        {token.value}
      </span>
    );
  },
  SingleLineComment: ({ token }) => {
    return (
      <span className="text-lime-400" data-type={token.type}>
        {token.value}
      </span>
    );
  },
  MultiLineComment: ({ token }) => {
    return (
      <span className="text-green-400" data-type={token.type}>
        {token.value}
      </span>
    );
  },
  Numeric: ({ token }) => {
    return (
      <span className="text-rose-400" data-type={token.type}>
        {token.value}
      </span>
    );
  },
  Default: ({ token }) => {
    return <span data-type={token.type}>{token.value}</span>;
  },
};

export const JSHighlighter = ({ code }) => {
  const tokens = useMemo(() => {
    return tokenize(code);
  }, [code]);

  return (
    <pre className="overflow-x-auto text-xs bg-gray-800 text-slate-50 p-2 rounded">
      {tokens.map((token, i) => {
        const Component =
          tokenComponents[token.type] || tokenComponents.Default;
        return <Component key={i} token={token} />;
      })}
    </pre>
  );
};
