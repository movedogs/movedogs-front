import "./MarkDownCode.scss";
import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark, nord } from "react-syntax-highlighter/dist/esm/styles/prism";
// @ts-ignore: Unreachable code error
import Vector from "../../Vector.md";
import rehypeRaw from "rehype-raw";
const MarkDownCode = () => {
  console.log(nord, "nord");
  const [markdownText, setMarkdownText] = useState("");
  useEffect(() => {
    fetch(Vector)
      .then((res) => res.text())
      .then((res) => setMarkdownText(res));
  }, []);
  return (
    <div className="markdown-container">
      <ReactMarkdown
        children={markdownText}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return inline ? (
              // 강조
              <code
                style={{
                  background: "var(--highlight-color)",
                  padding: "2px",
                }}
                {...props}
              >
                {children}
              </code>
            ) : match ? (
              // 코드
              // 언어가 선택됨
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dark as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              // 언어가 선택되지 않음
              <code {...props} className="emphasize language-textile">
                {children}
              </code>
              // <SyntaxHighlighter
              //   children={String(children).replace(/\n$/, "")}
              //   style={nord as any}
              //   language="textile"
              //   PreTag="div"
              //   {...props}
              // />
            );
          },
        }}
      ></ReactMarkdown>
    </div>
  );
};

export default MarkDownCode;
