const mongoose = require('mongoose');
module.exports = mongoose.model('FixedDeposit', new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  bankName: String,
  startDate: Date,
  endDate: Date
}));
