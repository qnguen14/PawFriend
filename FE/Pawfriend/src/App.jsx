import React from "react";
import Home from "./pages/Home";
import Pet from "./pages/Pets";
import Overview from "./pages/Admin/Admin-Dashboard/Overview";
import Users from "./pages/Admin/Admin-UserManagement/Users";
import Applications from "./pages/Admin/Admin-Applications/Applications";
import Donations from "./pages/Admin/Admin-Donations/Donations";
// import Shelters from "./pages/Admin/Admin-Shelters/Shelters";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Collaborators from "./pages/Admin/Admin-Collaborators/Collaborators";

const isAdmin = () => {
  return true; // Replace with actual admin check logic
};

// Custom route component for admin routes
const AdminRoute = ({ element }) => {
  return isAdmin() ? element : <Navigate to="/home" />;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/pet" element={<Pet />} />
        <Route
          path="/admin"
          element={<AdminRoute element={<Navigate to="/admin/overview" />} />}
        />
        <Route
          path="/admin/overview"
          element={<AdminRoute element={<Overview />} />}
        />
        <Route
          path="/admin/users"
          element={<AdminRoute element={<Users />} />}
        />
        <Route
          path="/admin/applications"
          element={<AdminRoute element={<Applications />} />}
        />
        <Route
          path="/admin/donations"
          element={<AdminRoute element={<Donations />} />}
        />
        <Route
          path="/admin/collaborators"
          element={<AdminRoute element={<Collaborators />} />}
        />
      </Routes>
    </Router>
  );
}
