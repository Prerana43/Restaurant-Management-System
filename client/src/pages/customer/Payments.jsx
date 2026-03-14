import { useEffect, useState } from "react";
import API from "../../api/axios";
import Navbar from "../../components/Navbar";

const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      const res = await API.get("/payments/my");
      setPayments(res.data);
    };

    fetchPayments();
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Payment History</h1>

        <div className="card-container">
          {payments.map((pay) => (
            <div className="card" key={pay._id}>
              <p>Payment ID: {pay._id}</p>
              <p>Amount: ₹ {pay.amount}</p>
              <p>Status: {pay.status}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Payments;