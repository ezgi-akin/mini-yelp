const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a string']
  }
});

module.exports = mongoose.model('cities', CitySchema);
