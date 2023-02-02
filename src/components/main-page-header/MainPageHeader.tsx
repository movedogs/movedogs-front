import { useNavigate } from "react-router-dom";
import GithubSigninButton from "../github-signin-button/GithubSigninButton";
import Search from "../search/Search";
import "./MainPageHeader.scss";

const MainPageHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page-header">
      <div className="logo-container">
        <i className="main-header-logo" onClick={() => navigate("/")} />
        <GithubSigninButton />
      </div>
      <span className="search-title">Move is everywhere</span>
      <Search />
    </div>
  );
};

export default MainPageHeader;
