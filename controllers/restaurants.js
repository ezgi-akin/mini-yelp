const Restaurant = require('../models/Restaurant');
const tags = require('../models/Tags');
const city = require('../models/Cities');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

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
    const restaurants = await Restaurant.findById(id).populate('city').populate('tags');
    res.json({ success: true, msg: 'show selected restaurant', data: restaurants })
  } catch(err) {
    next(err)
  }
};

module.exports = {
  getRestaurants,
  getRestaurant
}