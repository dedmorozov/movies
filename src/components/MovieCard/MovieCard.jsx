import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

const deleteCardImg = (
  'https://icon-library.com/images/delete-icon-16x16/delete-icon-16x16-6.jpg'
);

export const MovieCard = ({
  // id,
  title,
  year,
  format,
  actors,
  removeMovie,
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
      <button
        className="card__delete"
        type="button"
        onClick={() => removeMovie()}
      >
        <img
          src={deleteCardImg}
          alt="delete"
        />
      </button>
    </div>
  </div>
);

MovieCard.propTypes = {
  // id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  format: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string),
  removeMovie: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  actors: [],
};
