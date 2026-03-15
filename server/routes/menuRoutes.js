const router = require("express").Router();

const menuController = require("../controllers/menuController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

// Get all menu items (public)
router.get("/", menuController.getMenu);

// Admin adds new menu item
router.post("/", auth, role("admin"), menuController.addItem);

module.exports = router;