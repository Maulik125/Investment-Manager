const mongoose = require('mongoose');
module.exports = mongoose.model('Property', new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  location: String,
  value: Number,
  purchaseDate: Date
}));
