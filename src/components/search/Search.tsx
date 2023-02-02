import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.scss";

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const onSearch = () => {
    navigate(`/search/${query}`);
  };
  const onKeyDown = (e: any) => {
    if (e.key == "Enter") {
      onSearch();
      return;
    }
  };
  useEffect(() => {
    // window.addEventListener("");
  }, []);
  return (
    <div className="input-container">
      <i className="expand-down" />
      <input
        placeholder="Type Keywords"
        value={query}
        onKeyDown={onKeyDown}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={onSearch}></button>
    </div>
  );
};

export default Search;
