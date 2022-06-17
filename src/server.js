'use strict';

const express = require('express');
const whiskeyRouter = require('./routes/whiskey');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(whiskeyRouter);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};