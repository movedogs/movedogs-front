import { useState } from "react";
import { useParams } from "react-router-dom";
import CommonHeader from "../../common-header/CommonHeader";
import SearchResultIndex from "../../search-result-index/SearchResultIndex";
import SearchResultThumb from "../../search-result-thumb/SearchResultThumb";
import "./SearchResultPage.scss";

const SearchResultPage = () => {
  const { keyword } = useParams();
  const [index, setIndex] = useState(0);
  const results = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  return (
    <div className="search-result-page">
      <CommonHeader />
      <div className="content">
        <span className="result-count">
          Search <span>{results.length}</span> Results for
          <span> '{keyword}'</span>
        </span>
        {results.slice(index * 10, index * 10 + 10).map(() => {
          return <SearchResultThumb />;
        })}
        <SearchResultIndex
          maxIndex={Math.floor(results.length / 10)}
          setIndex={setIndex}
          selectedIndex={index}
        />
      </div>
    </div>
  );
};

export default SearchResultPage;
