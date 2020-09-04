const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: {
    type: String,
    required: [true, 'Please add a userId']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  }
});

module.exports = mongoose.model('Order', OrderSchema);