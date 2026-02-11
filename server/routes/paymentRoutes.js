const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

// Create payment
router.post("/", paymentController.createPayment);

// Get all payments (Admin)
router.get("/", paymentController.getAllPayments);

// Get payment by order
router.get("/order/:orderId", paymentController.getPaymentByOrder);

// Update payment status
router.put("/:id/status", paymentController.updatePaymentStatus);

module.exports = router;
