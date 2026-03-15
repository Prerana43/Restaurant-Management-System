const Menu = require("../models/Menu");


// GET all menu items
exports.getMenu = async (req, res) => {
  try {

    const menu = await Menu.find({ availability: true });

    res.json(menu);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }
};


// ADMIN: Add menu item
exports.addItem = async (req, res) => {

  try {

    const { name, description, price, category } = req.body;

    const newItem = new Menu({
      name,
      description,
      price,
      category
    });

    await newItem.save();

    res.status(201).json({
      message: "Menu item added successfully",
      item: newItem
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

};