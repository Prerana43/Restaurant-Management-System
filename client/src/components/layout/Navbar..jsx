import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={navStyle}>
      <h2>RMS</h2>

      {user?.role === "customer" && (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/menu">Menu</Link>
        </>
      )}

      {user?.role === "admin" && (
        <Link to="/admin">Admin</Link>
      )}

      {user?.role === "staff" && (
        <Link to="/staff">Staff</Link>
      )}

      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
};

const navStyle = {
  display: "flex",
  gap: "15px",
  padding: "15px",
  background: "#222",
  color: "white"
};

export default Navbar;