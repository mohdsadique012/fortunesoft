import React, { useContext } from "react";
import { AppContext } from "../../MovieContext/MovieContext";
import MovieCard from "./Card/Card";
import NavBar from "../Navbar/NavBar";

function HomePage() {
  const moviesByGenre = {};

  const Data = useContext(AppContext);
  console.log(Data.genre, "Data");
  return (
    <div>
      <p style={{ borderBottom: "1px solid white" }}>
        <NavBar />
      </p>

      {Object.entries(Data.genre)?.map(([genre, movieTitles]) => (
        <div key={genre}>
          <h2 className="genre">{genre}</h2>
          <MovieCard movie={movieTitles} />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
