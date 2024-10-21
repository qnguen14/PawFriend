import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/About us";
import Admin from "./pages/Admin";
import Donate from "./pages/Donate";
import Home from "./pages/Home";
import Pet from "./pages/Pets";
import PetDetails from "./pages/Pets/Details";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/pets" element={<Pet />} />
        <Route path="/pet/:id" element={<PetDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}
