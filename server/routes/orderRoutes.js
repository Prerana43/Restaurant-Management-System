const router = require("express").Router();
const orderController = require("../controllers/orderController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, orderController.placeOrder);
router.get("/my", auth, orderController.getMyOrders);

module.exports = router;
