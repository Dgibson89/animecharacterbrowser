import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for an anime character..."
        className="form-control"
      />
      <div className="input-group-append">
        <span className="input-group-text">
          <i className="fa fa-search"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
