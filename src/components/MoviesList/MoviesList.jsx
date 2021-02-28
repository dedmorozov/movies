import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';
import './MoviesList.scss';

export const MoviesList = ({ movies, removeMovie }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard
        key={movie.title}
        title={movie.title}
        year={parseInt(movie.year, 10)}
        format={movie.format}
        actors={(movie.stars).split(',')}
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
      actors: PropTypes.string,
    }),
  ),
  removeMovie: PropTypes.func.isRequired,
};

MoviesList.defaultProps = {
  movies: [],
};
