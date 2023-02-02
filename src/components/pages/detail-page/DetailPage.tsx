import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BACKEND_URL, hashtagList, IModule } from "../../../const";
import { useQuery } from "../../../hooks/useQuery";
import CommonHeader from "../../common-header/CommonHeader";
import "./DetailPage.scss";
import ReadmeTab from "./readme-tab/ReadmeTab";

type Tabs = "Readme" | "Documents" | "Versions" | "Dependencies";

const DetailPage = () => {
  const query = useQuery();
  const [module, setModule] = useState<IModule>();
  useEffect(() => {
    const address = query.get("address");
    const name = query.get("name");
    if (!address || !name) {
      alert("module not found");
    } else {
      axios
        .get(`${BACKEND_URL}/module/?address=${address}&name=${name}`)
        .then((res) => setModule(res.data[0]));
    }
  }, [query]);

  const [selectedTab, setSelectedTab] = useState<Tabs>("Readme");

  return (
    <div className="detail-page">
      <CommonHeader />
      <div className="contents">
        <div className="header">
          <span className="name">{module?.moduleName}</span>
          <span className="version">{module?.version}</span>
          <span className="description">{module?.description}</span>
          <div className="hash-list">
            {hashtagList.map((hash) => (
              <span>#{hash}</span>
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
            Dcouments
          </button>
          <button
            className={`${selectedTab === "Versions" && "selected"}`}
            onClick={() => setSelectedTab("Versions")}
          >
            Versions
          </button>
          <button
            className={`${selectedTab === "Dependencies" && "selected"}`}
            onClick={() => setSelectedTab("Dependencies")}
          >
            Dependencies
          </button>
        </div>
        {selectedTab === "Readme" && <ReadmeTab module={module} />}
      </div>
    </div>
  );
};

export default DetailPage;
