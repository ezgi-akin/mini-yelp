const Restaurant = require('../models/Restaurant');
const tags = require('../models/Tags'); //named it as in the Restaurant schema
const city = require('../models/Cities'); //named it as in the Restaurant schema

const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await Restaurant.find().populate('city').populate('tags');
    res.json({ success: true, msg: 'show all restaurants', data: restaurants })
  } catch(err) {
    next(err)
  }
}

const getRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id).populate('city').populate('tags');
    res.json({ success: true, msg: 'show selected restaurant', data: restaurant })
  } catch(err) {
    next(err)
  }
};

const getRestaurantsByCityAndTag = async (req, res, next) => {
  try {
    const { city_id, tag_id } = req.params;
    const restaurants = await Restaurant.find({ city: city_id, tags: tag_id  }).populate('city').populate('tags');
    console.log(restaurants)
    res.json({ success: true, msg: 'show selected citys and tags restaurants', data: restaurants })
  } catch(err) {
    next(err)
  }
}

module.exports = {
  getRestaurants,
  getRestaurant,
  getRestaurantsByCityAndTag
}