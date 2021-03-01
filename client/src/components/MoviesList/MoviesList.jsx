import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies, removeMovie }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie._id}
        _id={(movie._id)}
        title={movie.title}
        year={parseInt(movie.year, 10)}
        format={movie.format}
        stars={movie.stars}
        removeMovie={removeMovie}
      />
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      format: PropTypes.string.isRequired,
      stars: PropTypes.string,
    }),
  ),
  removeMovie: PropTypes.func.isRequired,
};

MoviesList.defaultProps = {
  movies: [],
};
