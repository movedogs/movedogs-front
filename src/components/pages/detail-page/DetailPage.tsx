import axios from "axios";
import {useEffect, useState} from "react";
import {BACKEND_URL, hashtagList, IPackage} from "../../../const";
import {useQuery} from "../../../hooks/useQuery";
import CommonHeader from "../../common-header/CommonHeader";
import "./DetailPage.scss";
import DocumentsTab from "./document-tab/DocumentsTab";
import ReadmeTab from "./readme-tab/ReadmeTab";

type Tabs = "Readme" | "Documents" | "Versions" | "Dependencies";

const DetailPage = () => {
  const query = useQuery();
  const [pac, setPac] = useState<IPackage>();
  useEffect(() => {
    const packageName = query.get("packageName");
    if (!packageName) {
      alert("module not found");
    } else {
      axios
        .get(`${BACKEND_URL}/package/?packageName=${packageName}`)
        .then((res) => {
          setPac(res.data[0]);
        });
    }
  }, [query]);

  const [selectedTab, setSelectedTab] = useState<Tabs>("Readme");

  return (
    <div className="detail-page">
      <CommonHeader />
      <div className="contents">
        <div className="header">
          <span className="name">{pac?.packageName}</span>
          <span className="version">{pac?.version}</span>
          <span className="description">{pac?.description}</span>
          <div className="hash-list">
            {hashtagList.map((hash) => (
              <span key={hash}>#{hash}</span>
            ))}
          </div>
        </div>
        <div className="tab-container">
          <button
            className={`${selectedTab === "Readme" && "selected"}`}
            onClick={() => setSelectedTab("Readme")}
          >
            Readme
          </button>
          <button
            className={`${selectedTab === "Documents" && "selected"}`}
            onClick={() => setSelectedTab("Documents")}
          >
            Document
          </button>
          <button
            className={`${selectedTab === "Versions" && "selected"}`}
            onClick={() => alert("Will be updated soon")}
          >
            Versions
          </button>
          <button
            className={`${selectedTab === "Dependencies" && "selected"}`}
            onClick={() => alert("Will be updated soon")}
          >
            Dependencies
          </button>
        </div>
        {selectedTab === "Readme" && <ReadmeTab pac={pac} />}
        {selectedTab === "Documents" && <DocumentsTab pac={pac} />}
      </div>
    </div>
  );
};

export default DetailPage;
