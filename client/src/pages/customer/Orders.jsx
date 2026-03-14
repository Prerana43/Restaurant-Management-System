import { useEffect, useState } from "react";
import API from "../../api/axios";
import Navbar from "../../components/Navbar";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await API.get("/orders/my");
      setOrders(res.data);
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>My Orders</h1>

        <div className="card-container">
          {orders.map((order) => (
            <div className="card" key={order._id}>
              <p>Order ID: {order._id}</p>
              <p>Status: {order.status}</p>
              <p>Total: ₹ {order.total}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;