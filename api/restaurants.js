const express = require("express");
const {
  getRestaurants,
  getRestaurant
} = require('../controllers/restaurants');

const api = express.Router();

api
  .route("/")
  .get(getRestaurants)

api
  .route('/:id')
  .get(getRestaurant)



module.exports = api;