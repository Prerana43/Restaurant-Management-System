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

          <Link to="/admin/reservations" className="card">
Manage Reservations
</Link>


<Link to="/admin/payments" className="card">
Manage Payments
</Link>
        </div>

      </div>
    </>
  );

};

export default AdminDashboard;