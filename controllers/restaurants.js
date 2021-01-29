const User = require('../models/Restaurant');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const getRestaurants = async (req, res, next) => {
  try {
    const restaurants = await User.find();
    res.json({ success: true, msg: 'show all restaurants', data: restaurants })
  } catch(err) {
    next(err)
  }
}

const getRestaurant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const restaurants = await User.findById(id);
    res.json({ success: true, msg: 'show selected restaurant', data: restaurants })
  } catch(err) {
    next(err)
  }
};

module.exports = {
  getRestaurants,
  getRestaurant
}