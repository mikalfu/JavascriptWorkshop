const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const tvShowRouter = require('./tvShow/tvShowRouter');

app.use('/tvshow', tvShowRouter);
app.use(bodyParser.json());
app.use(morgan('dev'));
app.get('/', (request, response) => response.send('Hello Machine'));
app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
