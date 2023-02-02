import { useNavigate } from "react-router-dom";
import { IModule } from "../../const";
import "./SearchResultThumb.scss";

interface Props {
  module: IModule;
}

const SearchResultThumb = ({ module }: Props) => {
  const navigate = useNavigate();
  const hashtagList = ["io", "network", "socket"];
  return (
    <div
      className="search-result-thumb"
      onClick={() =>
        navigate(
          `/package?address=${module.aptosAddress}&name=${module.moduleName}`
        )
      }
    >
      <div className="tag" />
      <div className="left">
        <span className="title">{module.moduleName}</span>
        <span className="version">{module.version}</span>
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
      <div className="right">
        <span>5 months ago</span>
        <i className="right-arrow" />
      </div>
    </div>
  );
};

export default SearchResultThumb;
