import React from "react";
import FilmList from "./FilmList";
import FilmDetailes from "./FilmDetailes";
import "./index.css";
import "./normalize.css";
import TMDB from "./TMDB";

function App() {
  return (
    <div className="film-library">
      <div className="film-list">
        <FilmList db={TMDB.films} />
      </div>
        <FilmDetailes />
    </div>
  );
}

export default App;