'use strict';

const express = require('express');
const { collectionClass } = require('../models');
const notFoundHandler = require('../error-handlers/404');
const serverErrorHandler = require('../error-handlers/500');
const logger = require('../middleware/logger');

const router = express.Router();

router.use(logger);

// post
router.post('/whiskey', async (req, res, next) => {
  let whiskey = req.body;

  let response = await collectionClass.create(whiskey);
  res.status(200).send(response);
});

// get all
router.get('/whiskey', async (req, res, next) => {
  let allWhiskeys = await collectionClass.readAll();
  // console.log(response);
  res.status(200).send(allWhiskeys);
});

// get one
router.get('/whiskey/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneWhiskey = await collectionClass.readOne(id);
  res.status(200).send(oneWhiskey);
});

// need to fix
// put
router.put('/whiskey/:id', async (req, res, next) => {
  let { id } = req.params;
  await collectionClass.update(id);
  let updatedWhiskey = await collectionClass.readOne(id);
  res.status(200).send(updatedWhiskey);
});

// delete
router.delete('/whiskey/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedWhiskey = await collectionClass.readOne(id);

  await collectionClass.delete(id);
  res.status(200).send(deletedWhiskey);
});

router.use('*', notFoundHandler);

router.use(serverErrorHandler);

module.exports = router;