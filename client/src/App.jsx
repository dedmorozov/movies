import React, { useState, useEffect } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList/MoviesList';
import { Modal } from './components/Modal/Modal';

const currentUrl = window.location.href;
const server = currentUrl.includes('heroku')
  ? currentUrl
  : 'http://localhost:4000/';

export const App = () => {
  const [query, setQuery] = useState('');
  const [isModalActive, setModalActive] = useState(false);
  const [moviesList, changeMoviesList] = useState([]);
  const [isSorted, setSorted] = useState(true);

  useEffect(async() => {
    const movies = await loadMovies();

    changeMoviesList(movies);
  });

  const loadMovies = async() => {
    const response = await fetch(`${server}movies`);

    return response.json();
  };

  const loadToServer = async(movie) => {
    const response = await fetch(`${server}movies/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });

    return response.json();
  };

  const addMovie = async(movie) => {
    const instance = await loadToServer(movie);

    changeMoviesList([...moviesList, instance]);
  };

  const removeMovie = async(id) => {
    const URL = `${server}movies/${id}`;

    await fetch(URL, { method: 'DELETE' });

    changeMoviesList(moviesList.filter(movie => movie._id !== id));
  };

  const filteredMovies = moviesList.filter(movie => (
    movie.title.toLowerCase().includes(
      query.toLowerCase(),
    )
    || movie.stars.split(',').find(actor => actor.toLowerCase().includes(
      query.toLowerCase(),
    ))
  ));

  const sortedMovies = async() => {
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
            placeholder="Search by movie or actors"
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
