import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

export const MovieCard = ({
  // id,
  title,
  year,
  format,
  actors,
}) => (
  <div className="movies__card card">
    <div className="card__title">
      <h3 className="card__name">{title}</h3>
      <p className="card__year">{year}</p>
      <p className="card__id">122</p>
    </div>
    <div className="card__hidden">
      <p className="card__format">
        <strong>Format:</strong>
        {' '}
        {format}
      </p>
      <p className="card__actors">
        <strong>Actors:</strong>
        {' '}
      </p>
      <ul className="card__list">
        {actors.map(actor => (
          <li className="card__item" key={actor}>
            <p>
              {actor}
              +
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

MovieCard.propTypes = {
  // id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  format: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
