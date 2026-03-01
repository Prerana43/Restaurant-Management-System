// Handles failed payment retry logic

const paymentRetry = async (payment) => {
  console.log("🔁 Retrying payment...");
  console.log("Payment ID:", payment._id);
  console.log("Amount:", payment.amount);

  // Dummy retry success
  return {
    status: "success",
    transactionId: "TXN-" + Date.now(),
  };
};

module.exports = paymentRetry;