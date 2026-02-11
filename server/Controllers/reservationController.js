const Reservation = require("../models/Reservation");

exports.reserveTable = async (req, res) => {
  try {
    const reservation = await Reservation.create({
      user: req.user.id,
      date: req.body.date,
      time: req.body.time,
      tableNumber: req.body.tableNumber,
    });
    res.status(201).json(reservation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserReservations = async (req, res) => {
  const reservations = await Reservation.find({ user: req.user.id });
  res.json(reservations);
};

exports.updateReservationStatus = async (req, res) => {
  const reservation = await Reservation.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(reservation);
};
