const router = require("express").Router();

const reservationController = require("../controllers/reservationController");

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");


// Customer creates reservation
router.post("/", auth, reservationController.createReservation);


// Admin views reservations
router.get("/", auth, role("admin"), reservationController.getReservations);

module.exports = router;
