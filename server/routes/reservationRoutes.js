const router = require("express").Router();
const reservationController = require("../controllers/reservationController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, reservationController.createReservation);
router.get("/my", auth, reservationController.getMyReservations);

module.exports = router;
