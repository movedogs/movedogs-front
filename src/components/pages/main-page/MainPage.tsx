import { useEffect, useState } from "react";
import MainPageHeader from "../../main-page-header/MainPageHeader";
import PackageThumb from "../../package-thumb/PackageThumb";
import "./MainPage.scss";
import axios from "axios";
import { BACKEND_URL, IModule } from "../../../const";

const MainPage = () => {
  const [recentReleaseList, setRecentReleaseList] = useState<IModule[]>([]);
  const [popularList, setPopularList] = useState<IModule[]>([]);
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/module/recent`)
      .then((res) => setRecentReleaseList(res.data));
    axios
      .get(`${BACKEND_URL}/module/popular`)
      .then((res) => setPopularList(res.data));
  }, []);

  return (
    <div className="main-page">
      <MainPageHeader />
      <div className="main-page-body">
        <div className="list">
          <span className="title">Recent Release</span>
          {recentReleaseList.map((recentRelease) => (
            <PackageThumb
              key={recentRelease.packageName}
              module={recentRelease}
            />
          ))}
        </div>
        <div className="list">
          <span className="title">Most Popular</span>
          {popularList.map((popular) => (
            <PackageThumb key={popular.packageName} module={popular} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
