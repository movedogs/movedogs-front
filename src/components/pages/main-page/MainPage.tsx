import MainPageHeader from "../../main-page-header/MainPageHeader";
import PackageThumb from "../../package-thumb/PackageThumb";
import "./MainPage.scss";

const MainPage = () => {
  const recentReleaseList: any[] = [0, 0, 0, 0, 0, 0, 0, 0];
  const mostPopularList: any[] = [0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className="main-page">
      <MainPageHeader />
      <div className="main-page-body">
        <div className="list">
          <span className="title">Recent Release</span>
          {recentReleaseList.map((recentRelease) => (
            <PackageThumb title={"django"} version={"v3.3"} />
          ))}
        </div>
        <div className="list">
          <span className="title">Most Popular</span>
          {mostPopularList.map((recentRelease) => (
            <PackageThumb title={"django"} version={"v3.3"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
