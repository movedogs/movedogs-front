import axios from "axios";
import { useEffect, useState } from "react";
import {BACKEND_URL, IModule, IPackage} from "../../../../const";
import "./DocumentsTab.scss";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeRaw from "rehype-raw";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import PackageElement from "../../../package-thumb/PackageElement";

interface Props {
  pac: IPackage | undefined;
}

const DocumentsTab = ({ pac }: Props) => {
  const [document, setDocument] = useState("");
  const [selectedModule, setSelectedModule] = useState<string>();
  const [moduleList, setModuleList] = useState<string[]>([]);
  const getMdFile = async (_module: string) => {
    const md = (
      await axios.get(
        `https://movedogs-md.s3.amazonaws.com/${pac?.packageName}%2B${_module}.md`
      )
    ).data;
    setDocument(md);
  };

  const getModuleList = async () => {
    const list = (
      await axios.get(
        `${BACKEND_URL}/package/module?packageName=${pac?.packageName}`
      )
    ).data;
    // const list = (
    //   await axios.get(
    //     `${BACKEND_URL}/module/dependency?name=${"example_module"}&pac=${"sample_pac"}`
    //   )
    // ).data;
    setModuleList(list);
  };
  useEffect(() => {
    getModuleList();
  }, []);

  useEffect(() => {
    if (selectedModule) {
      getMdFile(selectedModule);
    }
  }, [selectedModule]);

  return (
    <div className={`document-tab ${document ? "md" : "list"}`}>
      {document ? (
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
      ) : (
        moduleList.map((_module) => (
          <PackageElement
            onClick={() => setSelectedModule(_module)}
            title={_module}
          />
        ))
      )}
    </div>
  );
};

export default DocumentsTab;
