const Tags = require('../models/Tags');
const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const getTags = async (req, res, next) => {
  try {
    const tags = await Tags.find();
    res.json({ success: true, msg: 'show all tags', data: tags })
  } catch(err) {
    next(err)
  }
}

const getTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tag = await Tags.findById(id);
    res.json({ success: true, msg: 'show selected tag', data: tag })
  } catch(err) {
    next(err)
  }
};

module.exports = {
    getTags,
    getTag
}