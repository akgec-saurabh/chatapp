import React from "react";
import "./SearchBar.scss";
const SearchBar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search or start a new chat" />
    </div>
  );
};

export default SearchBar;
