import React from 'react';
import PropTypes from 'prop-types';

export const FormInput = React.memo(({
  name,
  value,
  handleChange,
  handleBlur,
  textError,
}) => (
  <label>
    <h5>
      {name[0].toUpperCase() + name.slice(1)}
    </h5>
    <input
      name={name}
      placeholder={`Enter ${name}`}
      className={textError
        ? 'form__input form__input--error'
        : 'form__input'}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      autoComplete="off"
    />
    <div className="form__error">
      {textError}
    </div>
  </label>
));

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  textError: PropTypes.string,
};

FormInput.defaultProps = {
  value: '',
  textError: null,
};
