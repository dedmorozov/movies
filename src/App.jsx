import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList/MoviesList';
import { Modal } from './components/Modal/Modal';
import list from './api/list.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const [isModalActive, setModalActive] = useState(false);
  const [moviesList, changeMoviesList] = useState(list);
  const [isSorted, setSorted] = useState(true);

  const addMovie = (movie) => {
    changeMoviesList([...moviesList, movie]);
  };

  const removeMovie = (movie) => {
    moviesList.splice(movie, 1);
  };

  const filteredMovies = moviesList.filter(movie => (
    movie.title.toLowerCase().includes(
      query.toLowerCase(),
    )
    || movie.stars.split(',').find(actor => actor.toLowerCase().includes(
      query.toLowerCase(),
    ))
  ));

  const sortedMovies = () => {
    setSorted(!isSorted);
    moviesList.sort((a, b) => a.title.localeCompare(b.title));
  };

  return (
    <div className="container">
      <header className="header">
        <button
          type="button"
          onClick={() => setModalActive(!isModalActive)}
          className="header__button"
        >
          Add movie
        </button>

        <button
          type="button"
          onClick={sortedMovies}
          className="header__button"
          disabled={!isSorted}
        >
          {isSorted ? 'Sort movies' : 'Sorted'}
        </button>

        {(query
        && (
          <button
            onClick={() => setQuery('')}
            type="button"
            className="header__button header__clear"
          >
            Clear
          </button>
        ))}
        <label>
          <input
            type="text"
            className="header__input"
            placeholder="Search movie"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </label>
      </header>

      <MoviesList
        movies={filteredMovies}
        removeMovie={removeMovie}
      />

      <Modal
        active={isModalActive}
        setActive={setModalActive}
        addMovie={addMovie}
      />
    </div>
  );
};
