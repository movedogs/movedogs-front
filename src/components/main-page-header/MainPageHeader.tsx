import GithubSigninButton from "../github-signin-button/GithubSigninButton";
import Search from "../search/Search";
import "./MainPageHeader.scss";

const MainPageHeader = () => {
  return (
    <div className="main-page-header">
      <div className="logo-container">
        <i className="main-header-logo" />
        <GithubSigninButton />
      </div>
      <span className="search-title">Move is everywhere</span>
      <Search />
    </div>
  );
};

export default MainPageHeader;
