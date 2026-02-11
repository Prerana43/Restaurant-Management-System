const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

// Create reservation
router.post("/", reservationController.createReservation);

// Get all reservations
router.get("/", reservationController.getAllReservations);

// Get user reservations
router.get("/user/:userId", reservationController.getUserReservations);

// Update reservation status
router.put("/:id/status", reservationController.updateReservation);

// Cancel reservation
router.delete("/:id", reservationController.deleteReservation);

module.exports = router;
