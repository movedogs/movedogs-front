import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeRaw from "rehype-raw";
import { dark, nord } from "react-syntax-highlighter/dist/esm/styles/prism";

import { IModule } from "../../../../const";
import "./ReadmeTab.scss";
import { getTimeSince } from "../../../../utii";

interface Props {
  module?: IModule;
}

const ReadmeTab = ({ module }: Props) => {
  const [readmeText, setReadmeText] = useState("");
  const updateReadmeText = async (_module: IModule) => {
    try {
      const masterReadmeText = (
        await axios.get(
          `https://raw.githubusercontent.com/${
            _module?.githubURI.split("github.com/")[1]
          }/master/README.md`
        )
      ).data;
      setReadmeText(masterReadmeText);
    } catch (e: any) {
      const mainReadmeText = (
        await axios.get(
          `https://raw.githubusercontent.com/${
            _module?.githubURI.split("github.com/")[1]
          }/main/README.md`
        )
      ).data;
      setReadmeText(mainReadmeText);
    }
  };
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (e) {}
  };

  useEffect(() => {
    if (module) {
      updateReadmeText(module);
    }
  }, [module]);
  return (
    <div className="readme-tab">
      <div className="readme-area">
        <ReactMarkdown
          children={readmeText}
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
      <div className="module-info-area">
        <span className="title">Metadata</span>
        <div className="info">
          <i className="calender" />
          <span>{getTimeSince(module?.timestamp ?? 0)}</span>
        </div>
        <div className="info">
          <i className="license" />
          <span>{module?.license}</span>
        </div>
        <span className="title">Install</span>
        <span className="install-guide">
          Add the following line to your Move.toml:
        </span>
        <div
          className="guide-container"
          onClick={() => copy(`${module?.moduleName} = ‘${module?.version}’`)}
        >
          {module?.moduleName} = ‘{module?.version}’
        </div>
        <span className="title">Aptos address</span>
        <button className="info">
          <i className="aptos" />
          <span className="underline">{module?.aptosAddress}</span>
        </button>
        <span className="title">Repository</span>
        <button className="info" onClick={() => window.open(module?.githubURI)}>
          <i className="github" />
          <span className="underline">{module?.githubURI}</span>
        </button>
        <span className="title">Owners</span>
        <div className="info">
          <i className="github" />
          <span>{module?.author}</span>
        </div>
      </div>
    </div>
  );
};

export default ReadmeTab;
