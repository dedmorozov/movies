import React from 'react';
import PropTypes from 'prop-types';

export class Form extends React.PureComponent {
  state = {
    title: '',
    year: '',
    format: '',
    actors: '',
    errorMessage: '',
    error: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  onSubmit = (event) => {
    const {
      title,
      year,
      format,
      actors,
    } = this.state;
    const { addMovie, handleCLick } = this.props;

    event.preventDefault();

    if (!title.trim()) {
      this.setState({
        errorMessage: 'Enter the title',
        error: true,
      });
    }

    if (!year) {
      this.setState({
        errorMessage: 'Write release year',
        error: true,
      });
    }

    if (!format) {
      this.setState({
        errorMessage: 'Choose format',
        error: true,
      });
    }

    if (!actors) {
      this.setState({
        errorMessage: 'Add actors',
        error: true,
      });
    }

    addMovie(title, year, format, actors);

    if (title && year && format && actors) {
      this.setState({
        title: '',
        year: '',
        format: '',
        actors: '',
        errorMessage: '',
        error: false,
      });

      handleCLick();
    }
  }

  render() {
    const {
      title,
      year,
      format,
      actors,
      errorMessage,
      error,
    } = this.state;
    const { handleChange, onSubmit } = this;

    return (
      <form
        className="modal__form"
        onSubmit={onSubmit}
      >
        <h3>Add movie</h3>
        <label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="modal__input"
            autoComplete="off"
            value={title}
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="text"
            name="year"
            placeholder="Release date"
            className="modal__input"
            autoComplete="off"
            maxLength="4"
            value={year}
            onChange={handleChange}
          />
        </label>

        <label>
          <select
            name="format"
            className="modal__input modal__selection"
            value={format}
            onChange={handleChange}
          >
            <option value="" selected disabled hidden>Choose format</option>
            <option value="DVD">DVD</option>
            <option value="Blue-ray">Blue-ray</option>
          </select>
        </label>

        <label>
          <input
            type="text"
            name="actors"
            placeholder="Actors"
            className="modal__input"
            autoComplete="off"
            value={actors}
            onChange={this.handleChange}
          />
        </label>

        {error && <p className="modal__error">{errorMessage}</p>}

        <div>
          <button type="submit" className="modal__button">
            Add
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  addMovie: PropTypes.func.isRequired,
  handleCLick: PropTypes.func.isRequired,
};
