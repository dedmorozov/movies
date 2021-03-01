import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

const deleteCardImg = (
  'https://www.freeiconspng.com/thumbs/remove-icon-png/remove-icon-png-3.png'
);

export const MovieCard = ({
  _id,
  title,
  year,
  format,
  stars,
  removeMovie,
}) => (
  <div className="movies__card card">
    <div className="card__title">
      <h3 className="card__name">{title}</h3>
      <p className="card__year">{year}</p>
      <p className="card__id">
        #
        {_id}
      </p>
    </div>
    <div className="card__hidden">
      <p className="card__format">
        <strong>Format:</strong>
        {' '}
        {format}
      </p>
      <div className="card__actors">
        <p>
          <strong>Actors:</strong>
          {' '}
          {stars}
        </p>
      </div>
      <button
        className="card__delete"
        type="button"
        title="delete film"
        onClick={() => {
          removeMovie(_id);
        }}
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
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  format: PropTypes.string.isRequired,
  stars: PropTypes.string,
  removeMovie: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  stars: '',
};
