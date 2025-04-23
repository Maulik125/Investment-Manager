const mongoose = require('mongoose');
module.exports = mongoose.model('Stock', new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  companyName: String,
  shares: Number,
  pricePerShare: Number,
  purchaseDate: Date
}));
