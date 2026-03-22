const Reservation = require("../models/reservations");


// CUSTOMER: create reservation
exports.createReservation = async (req, res) => {

  try {

    const { name, date, time, guests } = req.body;

    const reservation = new Reservation({
      user: req.user.id,
      name,
      date,
      time,
      guests
    });

    await reservation.save();

    res.status(201).json({
      message: "Reservation created",
      reservation
    });

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

};


// ADMIN: get all reservations
exports.getReservations = async (req, res) => {
  try {

    console.log("REQ.USER 👉", req.user);   // 👈 ADD THIS

    const reservations = await Reservation.find()
      .populate("user", "name email");

    res.json(reservations);

  } catch (err) {

    console.log("ERROR 👉", err.message);   // 👈 ADD THIS

    res.status(500).json({ error: err.message });
  }
};