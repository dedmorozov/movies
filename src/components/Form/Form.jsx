import React from 'react';
import PropTypes from 'prop-types';
import { FormInput } from '../FormInput/FormInput';
import '../Modal/Modal.scss';

const NEW_MOVIE = {
  title: '',
  year: '',
  format: '',
  stars: '',
};

const MOVIE_ERRORS = Object.keys(NEW_MOVIE)
  .filter(field => field === 'title'
    || field === 'year'
    || field === 'format'
    || field === 'stars')
  .reduce((errors, movie) => ({
    ...errors,
    [movie]: null,
  }), {});

export class Form extends React.PureComponent {
  state = {
    values: NEW_MOVIE,
    errors: MOVIE_ERRORS,
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState(state => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { addMovie } = this.props;
    const { values } = this.state;

    addMovie(values);

    this.setState({
      values: NEW_MOVIE,
    });
  }

  handleBlur = (event) => {
    const { name, value } = event.target;
    const { errors } = this.state;
    const isControled = Object
      .prototype
      .hasOwnProperty
      .call(errors, name);

    if (!isControled) {
      return;
    }

    this.setState(state => ({
      errors: {
        ...state.errors,
        [name]: value ? null : `field ${name} is required`,
      },
    }));
  }

  isDisabledButton = () => {
    const {
      title,
      year,
      format,
      stars,
    } = this.state.values;
    const hasErrors = Object.values(this.state.errors).some(err => err);

    return !title
      || !year
      || !format
      || !stars
      || hasErrors;
  }

  render() {
    const {
      values,
      errors,
    } = this.state;
    const {
      handleChange,
      handleSubmit,
      handleBlur,
    } = this;

    return (
      <form
        className="modal__form form"
        onSubmit={handleSubmit}
        id="form"
      >
        <h3>Add movie</h3>

        {Object.keys(values).map(field => (
          <FormInput
            key={field}
            name={field}
            value={values[field]}
            handleChange={handleChange}
            handleBlur={handleBlur}
            textError={errors[field]}
          />
        ))}

        <div>
          <button
            type="submit"
            className="form__button"
            disabled={this.isDisabledButton()}
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  addMovie: PropTypes.func.isRequired,
};
