'use strict';

const express = require('express');
const whiskeyRouter = require('./routes/whiskey-route');
const beerRouter = require('./routes/beer-route');
const notFoundHandler = require('./error-handlers/404');
const serverErrorHandler = require('./error-handlers/500');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(whiskeyRouter);
app.use(beerRouter);
app.use('*', notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};