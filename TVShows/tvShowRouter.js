const express = require('express');
const TvShow = require('./TvShow');
const TvShow = require('./TvShow');

const tvShowRouter = express.Router();

const tvShows = [];

const tvShows = [new TvShow(1, 'Mr.Robot', 'Drama'),
                new TvShow(2, 'Black Mirror', 'Drama')
                new TvShow(3, 'Californication', 'Drama')];

tvShowRouter.get('/', (req, res) => {
  res.json(tvShows);
});
