const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  format: String,
  stars: String,
});

module.exports = mongoose.model('Movie', movieSchema);
