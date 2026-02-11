const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required: true
  },

  items: [
    {
      menuItemId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "MenuItem",
        required: true
      },
      name: { 
        type: String, 
        required: true 
      },
      price: { 
        type: Number, 
        required: true 
      },
      quantity: { 
        type: Number, 
        required: true,
        min: 1
      }
    }
  ],

  totalAmount: { 
    type: Number, 
    required: true,
    min: 0
  },

  status: {
    type: String,
    enum: ["pending", "accepted", "preparing", "out-for-delivery", "delivered", "cancelled"],
    default:"pending"
  },

  paymentStatus: {
    type: String,
    enum: ["pending", "paid", "failed"],
    default: "pending",
  }

}, 
{ timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
