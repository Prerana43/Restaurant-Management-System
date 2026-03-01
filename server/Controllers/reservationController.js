const Reservation = require("../models/reservation");

exports.createReservation = async (req, res) => {
  try {
    const reservation = await Reservation.create({
      user: req.user._id,
      date: req.body.date,
      time: req.body.time
    });

    res.status(201).json(reservation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMyReservations = async (req, res) => {
  const reservations = await Reservation.find({ user: req.user._id });
  res.json(reservations);
};
