const Payment = require("../models/payment");
const Order = require("../models/Order");

const generateInvoice = require("../utils/generateInvoice");
const paymentRetry = require("../utils/paymentRetry");

// Create payment (customer)
const razorpay = require("../utils/razorpay");

exports.createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // in paise
      currency: "INR"
    };

    const order = await razorpay.orders.create(options);

    res.json(order);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePaymentStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(payment);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Save Payment after success
exports.verifyPayment = async (req, res) => {
  try {
    const { amount, paymentId } = req.body;

    const payment = new Payment({
      user: req.user.id,
      amount,
      method: "razorpay",
      status: "completed",
      transactionId: paymentId
    });

    await payment.save();

    res.json({ message: "Payment saved successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Admin: view all payments
exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate("user", "name email");

    res.json(payments);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
