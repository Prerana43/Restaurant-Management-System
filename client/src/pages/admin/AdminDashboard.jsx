import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AdminDashboard = () => {

  return (

    <>
      <Navbar />

      <div className="dashboard">

        <h1>Admin Dashboard</h1>

        <div className="card-container">

          <Link to="/admin/add-menu" className="card">
            Add Menu Item
          </Link>

          <div className="card">
            Manage Orders
          </div>

          <div className="card">
            Manage Reservations
          </div>

        </div>

      </div>
    </>
  );

};

export default AdminDashboard;