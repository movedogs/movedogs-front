import { useNavigate } from "react-router-dom";
import { hashtagList, IModule } from "../../const";
import { getTimeSince } from "../../utii";
import "./SearchResultThumb.scss";

interface Props {
  module: IModule;
}

const SearchResultThumb = ({ module }: Props) => {
  const navigate = useNavigate();
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
        <span className="description">{module.description}</span>
        <div className="hash-list">
          {hashtagList.map((hash) => (
            <span>#{hash}</span>
          ))}
        </div>
      </div>
      <div className="right">
        <span>{getTimeSince(module.timestamp)}</span>
        <i className="right-arrow" />
      </div>
    </div>
  );
};

export default SearchResultThumb;
