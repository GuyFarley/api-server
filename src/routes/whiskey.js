'use strict';

const express = require('express');
const { WhiskeyModel } = require('../models');
const notFoundHandler = require('../error-handlers/404');
const serverErrorHandler = require('../error-handlers/500');
const logger = require('../middleware/logger');

const router = express.Router();

router.use(logger);

// post
router.post('/whiskey', async (req, res, next) => {
  let whiskey = req.body;
  // console.log(req.body);
  let response = await WhiskeyModel.create(whiskey);
  res.status(200).send(response);
});

// get all
router.get('/whiskey', async (req, res, next) => {
  let allWhiskeys = await WhiskeyModel.findAll();
  // console.log(response);
  res.status(200).send(allWhiskeys);
});

// get one
router.get('/whiskey/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneWhiskey = await WhiskeyModel.findOne({ where: { id } });
  console.log(oneWhiskey);
  res.status(200).send(oneWhiskey);
});

// put
router.put('/whiskey/:id', async (req, res, next) => {
  let { id } = req.params;

  let updatedWhiskey = await WhiskeyModel.findOne({ where: { id } });
  console.log(updatedWhiskey);
  res.status(200).send(updatedWhiskey);
});

// delete
router.delete('/whiskey/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedWhiskey = await WhiskeyModel.findOne({ where: { id } });

  await WhiskeyModel.destroy({ where: { id } });
  console.log(deletedWhiskey);
  res.status(200).send(deletedWhiskey);
});

router.use('*', notFoundHandler);

router.use(serverErrorHandler);

module.exports = router;