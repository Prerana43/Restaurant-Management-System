

const sendSMS = async (phone, message) => {
  try {
    console.log("📱 SMS SENT");
    console.log("Phone:", phone);
    console.log("Message:", message);
  } catch (error) {
    console.error("SMS sending failed:", error.message);
  }
};

module.exports = sendSMS;