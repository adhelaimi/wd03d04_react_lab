import React from 'react';
import FilmList from './FilmList';
import FilmDetailes from './FilmDetailes';
// import FilmRow from './FilmRow'
import './App.css';
import TMDB from './TMDB'


function App() {
  return (
  <div className="film-library">
  
  <FilmList db={TMDB}/>
  <FilmDetailes />
  
  </div>
  );
}

export default App;
