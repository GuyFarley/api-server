'use strict';

const express = require('express');
const { beerInterface } = require('../models');
const notFoundHandler = require('../error-handlers/404');
const serverErrorHandler = require('../error-handlers/500');
const logger = require('../middleware/logger');

const router = express.Router();

router.use(logger);

// post
router.post('/beer', async (req, res, next) => {
  let beer = req.body;
  let response = await beerInterface.create(beer);
  res.status(200).send(response);
});

// get all
router.get('/beer', async (req, res, next) => {
  let allBeers = await beerInterface.readAll();
  res.status(200).send(allBeers);
});

// get one
router.get('/beer/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneBeer = await beerInterface.readOne(id);
  res.status(200).send(oneBeer);
});

// put
router.put('/beer/:id', async (req, res, next) => {
  let { id } = req.params;
  let updatedBeer = await beerInterface.update(req.body, id); res.status(200).send(updatedBeer);
});

// delete
router.delete('/beer/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedBeer = await beerInterface.readOne(id);
  await beerInterface.delete(id);
  res.status(200).send(deletedBeer);
});

router.use('*', notFoundHandler);

router.use(serverErrorHandler);

module.exports = router;