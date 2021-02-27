import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import { Form } from '../Form/Form';

export const Modal = ({ active, setActive }) => {
  const handleCLick = () => setActive(!active);
  const addMovie = () => {};

  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={handleCLick}
      aria-hidden="true"
    >
      <div
        className="modal__content"
        onClick={e => e.stopPropagation()}
        aria-hidden="true"
      >
        <Form addMovie={addMovie} handleCLick={handleCLick} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};
