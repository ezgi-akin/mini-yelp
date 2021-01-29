const express = require("express");
const {
  getTags,
  getTag
} = require('../controllers/tags');

const api = express.Router();

api
  .route("/")
  .get(getTags)

api
  .route('/:id')
  .get(getTag)



module.exports = api;