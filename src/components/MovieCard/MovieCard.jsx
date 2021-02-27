import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

export const MovieCard = ({
  // id,
  title,
  year,
  format,
  actors,
}) => {
  // const actorsArr = actors.split(', ');

  /* eslint-disable no-console */
  console.log(actors);

  return (

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
        <div className="card__actors">
          <p>
            <strong>
              Actors:
            </strong>
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
    </div>
  );
};

MovieCard.propTypes = {
  // id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  format: PropTypes.string.isRequired,
  actors: PropTypes.string,
};

MovieCard.defaultProps = {
  actors: '',
};
