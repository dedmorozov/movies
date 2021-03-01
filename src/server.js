const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
require('dotenv').config();

const initMovieRoutes = require('./modules/movies/movie.routes');
const initDatabase = require('./modules/database/database.entity');

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  app.use(cors('*'));
  app.use(express.json());
  app.use('/', express.static(path.join(__dirname, '../client/build')));

  await initDatabase();
  initMovieRoutes(app);

  app.listen(PORT, () => {
    console.log(`Server available on: http://localhost:${PORT}`);
  });
};

startServer().then();
