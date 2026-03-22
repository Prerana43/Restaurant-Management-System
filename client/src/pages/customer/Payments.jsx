import { useState } from "react";
import API from "../../api/axios";
import Navbar from "../../components/Navbar";

const Payments = () => {
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    try {
      // 🔹 Step 1: Create order
      const res = await API.post("/payments/create-order", {
        amount
      });

      const order = res.data;

      // 🔹 Step 2: Open Razorpay
      const options = {
        key: "YOUR_RAZORPAY_KEY", // replace
        amount: order.amount,
        currency: "INR",
        name: "Restaurant System",

        handler: async function (response) {
          // 🔹 Step 3: Verify & save payment
          await API.post("/payments/verify", {
            amount,
            paymentId: response.razorpay_payment_id
          });

          alert("Payment Successful!");
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.log(err);
      alert("Payment failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h2>Razorpay Payment</h2>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={handlePayment}>
          Pay with Razorpay
        </button>

      </div>
    </>
  );
};

export default Payments;