import React from "react";
import SearchBar from "./SearchBar/SearchBar";

function NavBar() {
  return (
    <div className="navbar">
      {" "}
      <p className="navbar-title"> WOOKIE MOVIES</p>{" "}
      <p className="searchBar">
        {" "}
        <SearchBar />
      </p>{" "}
    </div>
  );
}

export default NavBar;
