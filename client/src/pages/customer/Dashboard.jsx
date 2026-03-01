import Navbar from "../../components/layout/Navbar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Dashboard</h1>

      <div className="card-container">
        <div className="card">Manage Orders</div>
        <div className="card">Manage Menu</div>
        <div className="card">Reservations</div>
        <div className="card">Payments</div>
      </div>
    </div>
  );
};

export default Dashboard;