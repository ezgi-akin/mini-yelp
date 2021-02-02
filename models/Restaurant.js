const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    maxlength: [50, 'Only max 50 chars are allowed for the name']
  },
  img: [{}],
  address: {
    type: String,
    max: 120
  },
  description: {
    type: String,
    max: 120
  },
  tags: [{ type: Schema.Types.ObjectId, ref: 'tags' }],
  city: { type: Schema.Types.ObjectId, ref: 'cities' }
});

module.exports = mongoose.model('restaurants', RestaurantSchema);
