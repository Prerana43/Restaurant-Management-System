const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required: true 
  },
  table: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Table",
    required: true 
  },

  date: { 
    type: String,
    required: true 
  },

  time: { 
    type: String,
    required: true 
  },

  status: {
    type: String,
    enum: ["booked", "cancelled", "completed"],
    default: "booked"
  }

}, { timestamps: true });

module.exports = mongoose.model("Reservation", reservationSchema);
