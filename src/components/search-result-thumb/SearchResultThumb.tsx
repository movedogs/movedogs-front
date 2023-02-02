import { useNavigate } from "react-router-dom";
import "./SearchResultThumb.scss";

interface Props {}

const SearchResultThumb = ({}: Props) => {
  const navigate = useNavigate();
  const hashtagList = ["io", "network", "socket"];
  return (
    <div className="search-result-thumb" onClick={() => navigate("/django")}>
      <div className="tag" />
      <div className="left">
        <span className="title">django</span>
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
      <div className="right">
        <span>5 months ago</span>
        <i className="right-arrow" />
      </div>
    </div>
  );
};

export default SearchResultThumb;
