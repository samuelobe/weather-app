import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
    return (
        <div>
            <input 
                type="text"
                placeholder='Search for city'
                className='search-bar'
             />
        </div>
    )
}

export default SearchBar
