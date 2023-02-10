import { useNavigate } from "react-router-dom";
import GithubSigninButton from "../github-signin-button/GithubSigninButton";
import Search from "../search/Search";
import "./CommonHeader.scss";

const CommonHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="common-header">
      <i onClick={() => navigate("/")} />
      <Search />
      <div />
      {/* <GithubSigninButton /> */}
    </div>
  );
};

export default CommonHeader;
