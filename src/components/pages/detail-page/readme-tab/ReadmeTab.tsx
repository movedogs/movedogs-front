import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeRaw from "rehype-raw";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

import {BACKEND_URL, IPackage} from "../../../../const";
import "./ReadmeTab.scss";
import { getTimeSince } from "../../../../utii";

interface Props {
  pac?: IPackage;
}

const ReadmeTab = ({ pac }: Props) => {
  const [readmeText, setReadmeText] = useState("");
  const [authors, setAuthors] = useState<string[]>([]);
  const [modules, setModules] = useState<string[]>([]);
  const updateReadmeText = async (_pac: IPackage) => {
    try {
      const masterReadmeText = (
        await axios.get(
          `https://raw.githubusercontent.com/${
            _pac?.githubURI.split("github.com/")[1]
          }/master/README.md`
        )
      ).data;
      setReadmeText(masterReadmeText);
    } catch (e: any) {
      const mainReadmeText = (
        await axios.get(
          `https://raw.githubusercontent.com/${
            _pac?.githubURI.split("github.com/")[1]
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

  const getAuthorInfo = async (pac: IPackage) => {
    const _authors = (
      await axios.get(
        `${BACKEND_URL}/package/author?packageName=${pac?.packageName}`
      )
    ).data;
    setAuthors(_authors);
  };

  const getModuleInfo = async (pac: IPackage) => {
    const _modules = (
        await axios.get(
            `${BACKEND_URL}/package/module?packageName=${pac?.packageName}`
        )
    ).data;
    setModules(_modules);
  };

  useEffect(() => {
    if (pac) {
      updateReadmeText(pac);
      getAuthorInfo(pac);
      getAuthorInfo(pac);
    }
  }, [pac]);

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
          <span>{getTimeSince(pac?.timestamp ?? 0)}</span>
        </div>
        <div className="info">
          <i className="license" />
          <span>{pac?.license}</span>
        </div>
        <span className="title">Install</span>
        <span className="install-guide">
          Add the following line to your Move.toml:
        </span>
        <div
          className="guide-container"
          onClick={() => copy(`${pac?.packageName} = ‘${pac?.version}’`)}
        >
          {pac?.packageName} = ‘{pac?.version}’
        </div>
        {/* <span className="title">Aptos address</span>
        <button className="info">
          <i className="aptos" />
          <span className="underline">{module?.packageName}</span>
        </button> */}
        <span className="title">Repository</span>
        <button className="info" onClick={() => window.open(pac?.githubURI)}>
          <i className="github" />
          <span className="underline">{pac?.githubURI}</span>
        </button>
        <span className="title">Owners</span>
        {authors.map((author) => {
          return (
            <div className="info">
              <i className="github" />
              <span>{author}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReadmeTab;
