import { useNavigate } from "react-router-dom";
import {hashtagList, IModule, IPackage} from "../../const";
import { getTimeSince } from "../../utii";
import "./SearchResultThumb.scss";

interface Props {
  pac: IPackage;
}

const SearchResultThumb = ({ pac }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className="search-result-thumb"
      onClick={() =>
        navigate(
          `/package?packageName=${pac.packageName}`
        )
      }
    >
      <div className="tag" />
      <div className="left">
        <span className="title">{pac.packageName}</span>
        <span className="version">{pac.version}</span>
        <span className="description">{pac.description}</span>
        <div className="hash-list">
          {hashtagList.map((hash) => (
            <span>#{hash}</span>
          ))}
        </div>
      </div>
      <div className="right">
        <span>{getTimeSince(pac.timestamp)}</span>
        <i className="right-arrow" />
      </div>
    </div>
  );
};

export default SearchResultThumb;
