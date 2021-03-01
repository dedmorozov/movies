const express = require('express');
const MovieContoller = require('./movie.controller');

module.exports = (app) => {
  const movieRouter = express.Router();

  movieRouter.get('/', MovieContoller.getAll);
  movieRouter.post('/', MovieContoller.addOne);
  movieRouter.delete('/:id', MovieContoller.delete);

  app.use('/movies', movieRouter);
};
