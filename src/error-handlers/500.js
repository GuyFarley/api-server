'use strict';

function serverErrorHandler(err, req, res, next) {
  const error = err.message;
  res.status(500).send(error);
}

module.exports = serverErrorHandler;