const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    type: {
      type: String,
      enum: ["email", "sms"],
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["sent", "failed"],
      default: "sent",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
