import GithubSigninButton from "../github-signin-button/GithubSigninButton";
import Search from "../search/Search";
import "./CommonHeader.scss";

const CommonHeader = () => {
  return (
    <div className="common-header">
      <i />
      <Search />
      <GithubSigninButton />
    </div>
  );
};

export default CommonHeader;
