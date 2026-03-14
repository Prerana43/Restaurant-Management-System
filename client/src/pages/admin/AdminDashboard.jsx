import Navbar from "../../components/Navbar";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Admin Panel</h1>

        <div className="card-container">
          <div className="card">Manage Users</div>
          <div className="card">Manage Menu</div>
          <div className="card">Manage Orders</div>
          <div className="card">Reservations</div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;