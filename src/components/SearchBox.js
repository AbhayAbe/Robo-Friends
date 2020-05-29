import React from "react";
const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 bg-lightest-blue ba b--green"
        type="search"
        placeholder="Search..."
        onChange={searchChange}
      ></input>
    </div>
  );
};
export default SearchBox;
