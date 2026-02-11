const router = require("express").Router();
const menuController = require("../controllers/menuController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.get("/", menuController.getMenu);

router.post("/", auth, role("admin"), menuController.addItem);

module.exports = router;
