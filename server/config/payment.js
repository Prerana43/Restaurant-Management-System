module.exports = {
  PAYMENT_METHODS: {
    ONLINE: "online",
    COD: "cod",
  },

  PAYMENT_STATUS: {
    SUCCESS: "success",
    FAILED: "failed",
    RETRY: "retry",
  },

  CURRENCY: "INR",

  // Dummy gateway config (future use)
  GATEWAY: {
    NAME: "DemoPaymentGateway",
    TIMEOUT: 30000, // 30 seconds
  },
};