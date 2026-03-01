import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Dashboard from "./pages/customer/Dashboard";
import Menu from "./pages/customer/Menu";

import AdminDashboard from "./pages/admin/AdminDashboard";
import StaffDashboard from "./pages/staff/StaffDashboard";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Customer */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute roles={["customer"]}>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/menu"
        element={
          <PrivateRoute roles={["customer"]}>
            <Menu />
          </PrivateRoute>
        }
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={
          <PrivateRoute roles={["admin"]}>
            <AdminDashboard />
          </PrivateRoute>
        }
      />

      {/* Staff */}
      <Route
        path="/staff"
        element={
          <PrivateRoute roles={["staff"]}>
            <StaffDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;