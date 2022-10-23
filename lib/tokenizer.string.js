import {
  ValidIdentifierContinue,
  ValidIdentifierStart,
  Keywords,
  T_IDENTIFIER,
  Whitespace,
  T_WHITESPACE,
  T_LINEBREAK,
  T_SINGLE_LINE_COMMENT,
  T_MULTI_LINE_COMMENT,
  Puncuators,
  T_PUNCTUATOR,
  T_KEYWORD,
  T_STRING,
  T_NUMERIC,
} from "./tokenizer.constants";

function isIdentifierContinue(codePoint) {
  if (ValidIdentifierContinue.has(codePoint)) {
    return true;
  }

  // All ASCII identifier start code points are listed above
  if (codePoint < 0x7f) {
    return false;
  }

  // ZWNJ and ZWJ are allowed in identifiers
  if (codePoint == 0x200c || codePoint == 0x200d) {
    return true;
  }

  return false;
}

export function tokenize(code) {
  const tokens = [];

  let i = 0;
  let __strTemplateExprStack = 0;
  let __strTemplateQuoteStack = 0;
  const inStrTemplateLiterals = () =>
    __strTemplateQuoteStack > __strTemplateExprStack;
  const inStrTemplateExpr = () =>
    __strTemplateQuoteStack > 0 &&
    __strTemplateQuoteStack === __strTemplateExprStack;
  const scanTemplateString = () => {
    const start = i;
    let end = i + 1;
    while (true) {
      if (code[end] === "$" && code[end + 1] === "{") {
        __strTemplateExprStack++;
        end--;
        break;
      }
      if (code[end] === "`") {
        __strTemplateQuoteStack--;
        break;
      }
      end++;
    }
    tokens.push({
      type: T_STRING,
      value: code.slice(start, end + 1),
    });
    i = end + 1;
  };

  while (i < code.length) {
    const char = code[i];

    if (inStrTemplateLiterals()) {
      if (char === "`") {
        __strTemplateQuoteStack--;
        tokens.push({
          type: T_STRING,
          value: "`",
        });
        i++;
        continue;
      }
      scanTemplateString();
      continue;
    }

    if (char === "`") {
      __strTemplateQuoteStack++;
      scanTemplateString();
      continue;
    }

    if (Whitespace.has(char)) {
      const start = i;
      let end = i + 1;
      while (Whitespace.has(code[end])) {
        end++;
      }
      tokens.push({
        type: T_WHITESPACE,
        value: code.slice(start, end),
      });
      i = end;
      continue;
    }

    if (char === "\n") {
      tokens.push({
        type: T_LINEBREAK,
        value: char,
      });
      i++;
      continue;
    }

    if (char === "/") {
      const nextChar = code[i + 1];
      if (nextChar === "/") {
        const start = i;
        let end = i + 1;
        while (code[end] !== "\n") {
          end++;
        }
        tokens.push({
          type: T_SINGLE_LINE_COMMENT,
          value: code.slice(start, end),
        });
        i = end;
        continue;
      }

      if (nextChar === "*") {
        const start = i;
        let end = i + 1;
        while (code[end] !== "*" || code[end + 1] !== "/") {
          end++;
        }
        tokens.push({
          type: T_MULTI_LINE_COMMENT,
          value: code.slice(start, end + 2),
        });
        i = end + 2;
        continue;
      }
    }

    if (char === "'" || char === '"') {
      const start = i;
      let end = i + 1;
      while (code[end] !== char) {
        end++;
      }
      tokens.push({
        type: T_STRING,
        value: code.slice(start, end + 1),
      });
      i = end + 1;
      continue;
    }

    if (Puncuators.has(char)) {
      if (inStrTemplateExpr() && char === "}") {
        __strTemplateExprStack--;
      }

      tokens.push({
        type: T_PUNCTUATOR,
        value: char,
      });
      i++;
      continue;
    }

    if (ValidIdentifierStart.has(char)) {
      const start = i;
      let end = i + 1;
      while (isIdentifierContinue(code[end])) {
        end++;
      }
      const identifier = code.slice(start, end);
      const type = Keywords.has(identifier) ? T_KEYWORD : T_IDENTIFIER;
      tokens.push({ type, value: identifier });
      i = end;
      continue;
    }

    if (/\d/.test(char)) {
      const start = i;
      let end = i + 1;
      while (/[1-9a-z_]/.test(code[end])) {
        end++;
      }
      tokens.push({
        type: T_NUMERIC,
        value: code.slice(start, end),
      });
      i = end;
      continue;
    }

    i++;
  }

  return tokens;
}
