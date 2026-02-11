const User = require("../models/User");
const Order = require("../models/Order");

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate("user");
  res.json(orders);
};

exports.getReports = async (req, res) => {
  const totalOrders = await Order.countDocuments();
  const totalRevenue = await Order.aggregate([
    { $group: { _id: null, total: { $sum: "$totalAmount" } } },
  ]);

  res.json({
    totalOrders,
    totalRevenue: totalRevenue[0]?.total || 0,
  });
};
