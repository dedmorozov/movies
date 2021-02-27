import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList/MoviesList';
import { Modal } from './components/Modal/Modal';
import { Form } from './components/Form/Form';
import list from './api/list.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const [isModalActive, setModalActive] = useState(false);
  const [moviesList, changeMoviesList] = useState(list);

  const addMovie = (movie) => {
    changeMoviesList([...moviesList, movie]);
  };

  const filteredMovies = moviesList.filter(movie => (
    movie.title.toLowerCase().includes(
      query.toLowerCase(),
    )
    || movie.stars.find(actor => actor.toLowerCase().includes(
      query.toLowerCase(),
    ))
  ));

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
      <MoviesList movies={filteredMovies} />
      <Modal
        active={isModalActive}
        setActive={setModalActive}
      />
      <Form addMovie={addMovie} />
    </div>
  );
};
