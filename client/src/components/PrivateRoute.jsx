import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children, roles }) => {
  const { user } = useContext(AuthContext);
  console.log("User in PrivateRoute:", user);
  if (!user) return <Navigate to="/" />;
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default PrivateRoute;