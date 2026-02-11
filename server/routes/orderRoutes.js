const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Place order
router.post("/", orderController.createOrder);

// Get all orders (Admin)
router.get("/", orderController.getAllOrders);

// Get user orders
router.get("/user/:userId", orderController.getUserOrders);

// Get single order
router.get("/:id", orderController.getOrderById);

// Update order status
router.put("/:id/status", orderController.updateOrderStatus);

// Delete order
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
