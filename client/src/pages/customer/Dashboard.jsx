import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Menu from "../../assets/Menu.png"
import Order from "../../assets/order.png"
import Reservation from "../../assets/reservation.png"
import Payment from "../../assets/payment.png"
import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Customer Dashboard</h1>

        <div className="card-container">

          <Link to="/menu" className="card">
            View Menu
            <div className="img">
              <img src={Menu} alt="" />
            </div>
          </Link>

          <Link to="/orders" className="card">
            My Orders
            <div className="img">
              <img src={Order} alt="" />
            </div>
          </Link>

          <Link to="/reservations" className="card">
            Reservations
            <div className="img">
              <img src={Reservation} alt="" />
            </div>
          </Link>

          <Link to="/payments" className="card">
            Payments
            <div className="img">
              <img src={Payment} alt="" />
            </div>
          </Link>

        </div>
      </div>
    </>
  );
};

export default Dashboard;