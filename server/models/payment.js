const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  order: {   // ✅ LINK TO ORDER
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  method: {
    type: String,
    enum: ["card", "upi", "cash"],
    default: "card"
  },

  status: {
    type: String,
    enum: ["pending", "completed", "failed"],
    default: "pending"
  }

}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);