const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Dashboard stats
router.get("/dashboard", adminController.getDashboardStats);

// Update order status
router.put("/orders/:id", adminController.updateOrder);

// Manage menu
router.post("/menu", adminController.addMenuItem);
router.put("/menu/:id", adminController.updateMenuItem);
router.delete("/menu/:id", adminController.deleteMenuItem);

// Manage users
router.get("/users", adminController.getUsers);
router.delete("/users/:id", adminController.deleteUser);

module.exports = router;
