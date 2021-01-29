const express = require("express");
const {
  getRestaurants,
  getRestaurant,
  getRestaurantsByCity
} = require('../controllers/restaurants');

const api = express.Router();

api
  .route("/")
  .get(getRestaurants)

api
  .route('/:id')
  .get(getRestaurant)

  api
  .route('/:city_id/:tag_id')
  .get(getRestaurantsByCity)




module.exports = api;