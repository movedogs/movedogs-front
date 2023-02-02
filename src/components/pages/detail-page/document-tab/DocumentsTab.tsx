import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL, IModule } from "../../../../const";
import "./DocumentsTab.scss";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeRaw from "rehype-raw";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  module: IModule | undefined;
}

const DocumentsTab = ({ module }: Props) => {
  const [document, setDocument] = useState("");
  const getMdFile = async () => {
    const document = (
      await axios.get(
        `${BACKEND_URL}/document?documentId=${module?.moduleName}+${module?.aptosAddress}`
      )
    ).data;
  };
  useEffect(() => {
    getMdFile();
  }, []);
  return (
    <div className="document-tab">
      <div className="md-area">
        <ReactMarkdown
          children={document}
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
                  style={nord as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                // <code {...props} className="emphasize language-textile">
                //   {children}
                // </code>
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
    </div>
  );
};

export default DocumentsTab;
