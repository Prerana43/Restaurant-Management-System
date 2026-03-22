const router = require("express").Router();

const {
  createOrder,
  verifyPayment,
  updatePaymentStatus,
  getPayments
} = require("../controllers/paymentController");

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

// Customer
router.post("/create-order", auth, createOrder);
router.post("/verify", auth, verifyPayment);

// Admin
router.get("/", auth, role("admin"), getPayments);
router.put("/:id", auth, role("admin"), updatePaymentStatus);

module.exports = router;