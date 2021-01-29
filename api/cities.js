const express = require("express");
const {
  getCities,
  getCity  
} = require('../controllers/cities');

const api = express.Router();

api
  .route("/")
  .get(getCities)

api
  .route('/:id')
  .get(getCity)


module.exports = api;