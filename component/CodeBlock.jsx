/* eslint-disable react/no-deprecated */
import React, { PureComponent } from "react";
import { NextComponentType } from "next";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// 设置高亮样式
import { xonokai } from "/node_modules/react-syntax-highlighter/dist/cjs/styles/prism";
// 设置高亮的语言
import {
  html,
  css,
  jsx,
  javascript,
} from "/node_modules/react-syntax-highlighter/dist/cjs/languages/prism";
const CodeBlock = (props) => {
  const { language, value } = props;
  useEffect(() => {
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("javascript", javascript);
    SyntaxHighlighter.registerLanguage("js", javascript);
  }, []);
  return (
    <figure className="highlight">
      <SyntaxHighlighter language={language} style={xonokai}>
        {value}
      </SyntaxHighlighter>
    </figure>
  );
};
export default CodeBlock;
