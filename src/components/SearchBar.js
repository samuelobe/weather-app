import React from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

const SearchBar = ({onInput}) => {
  return (
    <div>
      <input type="text" placeholder="Search for city" className="search-bar" onInput={onInput} />
    </div>
  );
};

SearchBar.propTypes = {
    onInput : PropTypes.func.isRequired
};

export default SearchBar;
