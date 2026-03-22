import { useEffect, useState } from "react";
import API from "../../api/axios";
import Navbar from "../../components/Navbar";

const ManagePayments = () => {

  const [payments, setPayments] = useState([]);

  const fetchPayments = async () => {
    const res = await API.get("/payments");
    setPayments(res.data);
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const updateStatus = async (id, status) => {
  try {
    await API.put(`/payments/${id}`, { status });

    alert("Updated!");

    // refresh
    const res = await API.get("/payments");
    setPayments(res.data);

  } catch (err) {
    console.log(err);
  }
};
  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h2>Manage Payments</h2>

        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.map(p => (
              <tr key={p._id}>
                <td>{p.user?.email}</td>
                <td>₹{p.amount}</td>
                <td>{p.method}</td>
                <td>{p.status}</td>

                <td>
                  <button onClick={() => updateStatus(p._id, "completed")}>
                    Approve
                  </button>

                  <button onClick={() => updateStatus(p._id, "failed")}>
                    Reject
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManagePayments;