/* eslint-disable no-console */
const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admitteddoor@cluster0.5bgxw.mongodb.net/movies?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
    );

    console.log('Successfully connected to database');
  } catch (error) {
    console.log(error);
  }
};
