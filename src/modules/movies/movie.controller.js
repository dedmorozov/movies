const Movie = require('./movie.schema');

class MovieController {
  static async getAll(req, res) {
    const movies = await Movie.find();

    return res.send(movies);
  }

  static async addOne(req, res) {
    const movie = await Movie.create({
      title: req.body.title,
      year: req.body.year,
      format: req.body.format,
      stars: req.body.stars,
    });

    return res.send(movie);
  }

  static async delete(req, res) {
    if (!req.params.id) {
      return res.sendStatus(400);
    }

    await Movie.deleteOne({
      _id: req.params.id,
    });

    return res.sendStatus(200);
  }
}

module.exports = MovieController;
