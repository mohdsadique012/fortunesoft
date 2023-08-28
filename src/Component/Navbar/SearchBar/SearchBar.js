// SearchBar.js
import React, { useState, useContext } from "react";
import { AppContext } from "../../../MovieContext/MovieContext";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const Data = useContext(AppContext);

  const filteredTitles = Data?.movies?.filter((movie) =>
    searchTerm.toLowerCase() === ""
      ? ""
      : movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredTitles, "filter");

  return (
    <div>
      <input
        type="text"
        placeholder="Search movie titles"
        value={searchTerm}
        className="search-input"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm ? (
        <ul className="filtered-titles-list">
          {filteredTitles?.map((movie, index) => (
            <div className="container-search" key={index}>
              {" "}
              <img className="image-search" src={movie.poster} />{" "}
              <span className="title-search">{movie.title}</span>
            </div>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
