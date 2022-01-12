import React from "react";
import PropTypes from "prop-types";
import "./SearchButton.css";

const SearchButton = ({ action }) => {
  return (
    <div>
      <button className="search-button" onClick={action}>
        Get Weather
      </button>
    </div>
  );
};

SearchButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default SearchButton;
