const generateInvoice = (order) => {
  return {
    invoiceId: "INV-" + Date.now(),
    orderId: order._id,
    amount: order.totalAmount,
    paymentStatus: order.paymentStatus,
    orderStatus: order.orderStatus,
    generatedAt: new Date(),
  };
};

module.exports = generateInvoice;