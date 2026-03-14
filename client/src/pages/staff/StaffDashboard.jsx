import Navbar from "../../components/Navbar";

const StaffDashboard = () => {
  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Staff Panel</h1>

        <div className="card-container">
          <div className="card">Active Orders</div>
          <div className="card">Update Order Status</div>
          <div className="card">Reservations</div>
        </div>
      </div>
    </>
  );
};

export default StaffDashboard;