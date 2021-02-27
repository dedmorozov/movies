import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList/MoviesList';
import { Modal } from './components/Modal/Modal';
import list from './api/list.json';

export const App = () => {
  const [query, setQuery] = useState('');
  const [isModalActive, setModalActive] = useState(false);

  const filteredMovies = list.filter(movie => (
    movie.Title.toLowerCase().includes(
      query.toLowerCase(),
    )
  ));

  return (
    <div className="container">
      <header className="header">
        <button
          type="button"
          onClick={() => setModalActive(!isModalActive)}
        >
          Add movie
        </button>

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
      <Modal active={isModalActive} setActive={setModalActive} />
    </div>
  );
};
