const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    method: {
      type: String,
      enum: ["online", "cod"],
      required: true,
    },

    status: {
      type: String,
      enum: ["success", "failed", "retry"],
      default: "retry",
    },

    transactionId: {
      type: String,
    },

    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
