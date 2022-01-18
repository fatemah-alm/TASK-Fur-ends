import { getSuggestedQuery } from "@testing-library/react";
import react from "react";

const SearchBar = ({ updateQuery }) => {
  return (
    <div className="input-group rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={(event) => {
          updateQuery(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
