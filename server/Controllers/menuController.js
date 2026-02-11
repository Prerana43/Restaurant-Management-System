const Menu = require("../models/Menu");

exports.getMenu = async (req, res) => {
  const items = await Menu.find({ availability: true });
  res.json(items);
};

exports.addItem = async (req, res) => {
  const item = await Menu.create(req.body);
  res.status(201).json(item);
};
