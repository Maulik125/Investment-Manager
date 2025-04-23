const FD = require('../models/FixedDeposit');
const Property = require('../models/Property');
const Stock = require('../models/Stock');

exports.getDashboard = async (req, res) => {
  const [fds, props, stocks] = await Promise.all([
    FD.find({ userId: req.user.id }),
    Property.find({ userId: req.user.id }),
    Stock.find({ userId: req.user.id })
  ]);

  const totalFD = fds.reduce((acc, fd) => acc + fd.amount, 0);
  const totalProp = props.reduce((acc, p) => acc + p.value, 0);
  const totalStock = stocks.reduce((acc, s) => acc + (s.shares * s.pricePerShare), 0);

  res.json({
    total: totalFD + totalProp + totalStock,
    totals: {
      fixedDeposits: totalFD,
      properties: totalProp,
      stocks: totalStock
    }
  });
};
