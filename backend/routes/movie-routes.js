const express = require('express');
const { addMovie } = require('../contollers/movie-controller');
const movieRouter = express.Router();

movieRouter.post("/", addMovie);

module.exports= movieRouter;