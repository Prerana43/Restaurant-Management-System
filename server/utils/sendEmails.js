

const sendEmail = async (to, subject, message) => {
  try {
    console.log("📧 EMAIL SENT");
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Message:", message);
  } catch (error) {
    console.error("Email sending failed:", error.message);
  }
};

module.exports = sendEmail;