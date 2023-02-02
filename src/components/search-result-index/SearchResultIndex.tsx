import "./SearchResultIndex.scss";

interface Props {
  maxIndex: number;
  setIndex: (index: number) => void;
  selectedIndex: number;
}

const SearchResultIndex = ({ maxIndex, setIndex, selectedIndex }: Props) => {
  return (
    <div className="search-result-index">
      <button className="left-button"></button>
      {Array(maxIndex + 1)
        .fill(0)
        .map((value, index) => {
          return (
            <span
              className={`index ${index === selectedIndex && "selected"}`}
              onClick={() => setIndex(index)}
            >
              {index + 1}
            </span>
          );
        })}
      <button className="right-button"></button>
    </div>
  );
};

export default SearchResultIndex;
