const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a string']
  }
});

module.exports = mongoose.model('tags', TagSchema);
