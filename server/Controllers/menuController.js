const Menu = require("../models/Menu");

exports.getMenu = async (req, res) => {
  const menu = await Menu.find({ availability: true });
  res.json(menu);
};

exports.addMenuItem = async (req, res) => {
  const item = await Menu.create(req.body);
  res.status(201).json(item);
};

exports.updateMenuItem = async (req, res) => {
  const item = await Menu.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(item);
};

exports.deleteMenuItem = async (req, res) => {
  await Menu.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
};
