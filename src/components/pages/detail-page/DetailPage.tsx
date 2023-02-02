import { useState } from "react";
import CommonHeader from "../../common-header/CommonHeader";
import "./DetailPage.scss";
import ReadmeTab from "./readme-tab/ReadmeTab";

type Tabs = "Readme" | "Documents" | "Versions" | "Dependencies";

const DetailPage = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>("Readme");
  const hashtagList = ["io", "network", "socket"];
  return (
    <div className="detail-page">
      <CommonHeader />
      <div className="contents">
        <div className="header">
          <span className="name">django</span>
          <span className="version">v3.3</span>
          <span className="description">
            Utilities for handling networking sockets with a maximal amount of
            configuration possible intended.
          </span>
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
        {selectedTab === "Readme" && <ReadmeTab />}
      </div>
    </div>
  );
};

export default DetailPage;
