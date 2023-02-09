import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL, IModule } from "../../../const";
import CommonHeader from "../../common-header/CommonHeader";
import SearchResultIndex from "../../search-result-index/SearchResultIndex";
import SearchResultThumb from "../../search-result-thumb/SearchResultThumb";
import "./SearchResultPage.scss";

const SearchResultPage = () => {
  const { keyword } = useParams();
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<IModule[]>([]);
  const searchResult = async (keyword: string) => {
    let result = [];
    const nameMatches = (
      await axios.get(`${BACKEND_URL}/module?name=${keyword}`)
    ).data;
    const addressMatches = (
      await axios.get(`${BACKEND_URL}/module?address=${keyword}`)
    ).data;
    result = [...nameMatches];
    addressMatches.forEach((addressMatch: IModule) => {
      if (
        !nameMatches.find(
          (nameMatch: IModule) =>
            nameMatch.packageName === addressMatch.packageName &&
            nameMatch.moduleName === addressMatch.moduleName
        )
      ) {
        result.push(addressMatch);
      }
    });
    return result;
  };

  const updateResult = (_results: IModule[]) => {
    setResults(_results);
  };

  useEffect(() => {
    searchResult(keyword ?? "").then((res) => updateResult(res));
  }, [keyword]);

  return (
    <div className="search-result-page">
      <CommonHeader />
      <div className="content">
        <span className="result-count">
          Search <span>{results.length}</span> Results for
          <span> '{keyword}'</span>
        </span>
        {results.slice(index * 10, index * 10 + 10).map((result) => {
          return <SearchResultThumb module={result} />;
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
