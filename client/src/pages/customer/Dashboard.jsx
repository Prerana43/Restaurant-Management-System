import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Customer Dashboard</h1>

        <div className="card-container">

          <Link to="/menu" className="card">
            View Menu
          </Link>

          <Link to="/orders" className="card">
            My Orders
          </Link>

          <Link to="/reservations" className="card">
            Reservations
          </Link>

          <Link to="/payments" className="card">
            Payments
          </Link>

        </div>
      </div>
    </>
  );
};

export default Dashboard;