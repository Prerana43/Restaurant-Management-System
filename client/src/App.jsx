import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Dashboard from "./pages/customer/Dashboard";
import Menu from "./pages/customer/Menu";
import Orders from "./pages/customer/Orders";
import Reservations from "./pages/customer/Reservation";
import Payments from "./pages/customer/Payments";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AddMenu from "./pages/admin/AddMenu";
import ManageReservations from "./pages/admin/ManageReservations";
import ManagePayments from "./pages/admin/ManagePayments";
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

      <Route
        path="/orders"
        element={
          <PrivateRoute roles={["customer"]}>
            <Orders />
          </PrivateRoute>
        }
      />

      <Route
        path="/reservations"
        element={
          <PrivateRoute roles={["customer"]}>
            <Reservations />
          </PrivateRoute>
        }
      />

      <Route
        path="/payments"
        element={
          <PrivateRoute roles={["customer"]}>
            <Payments />
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

      <Route
        path="/admin/add-menu"
        element={
          <PrivateRoute roles={["admin"]}>
            <AddMenu />
          </PrivateRoute>
        }
      />

      <Route
 path="/admin/reservations"
 element={
  <PrivateRoute roles={["admin"]}>
   <ManageReservations />
  </PrivateRoute>
 }
/>

<Route
  path="/admin/payments"
  element={
    <PrivateRoute roles={["admin"]}>
      <ManagePayments />
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
