const FD = require('../models/FixedDeposit');
const Property = require('../models/Property');
const Stock = require('../models/Stock');

// Similar handlers for Property and Stock
exports.createFD = async (req, res) => {
  const fd = new FD({ ...req.body, userId: req.user.id });
  await fd.save();
  res.json(fd);
};

exports.getFDs = async (req, res) => {
  const fds = await FD.find({ userId: req.user.id });
  res.json(fds);
};

// Add updateFD, deleteFD similarly
