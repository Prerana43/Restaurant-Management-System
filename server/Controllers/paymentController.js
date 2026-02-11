const Payment = require("../models/Payment");
const Order = require("../models/Order");

exports.makePayment = async (req, res) => {
  try {
    const payment = await Payment.create({
      order: req.body.orderId,
      method: req.body.method,
      amount: req.body.amount,
      status: "success",
    });

    await Order.findByIdAndUpdate(req.body.orderId, {
      paymentStatus: "paid",
    });

    res.json({ message: "Payment successful", payment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
