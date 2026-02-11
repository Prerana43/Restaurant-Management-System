const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

// Get all menu items
router.get("/", menuController.getMenu);

// Get single item
router.get("/:id", menuController.getMenuItem);

// Add item (Admin)
router.post("/", menuController.createMenuItem);

// Update item
router.put("/:id", menuController.updateMenuItem);

// Delete item
router.delete("/:id", menuController.deleteMenuItem);

module.exports = router;
