import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from "../../../components/shelter components/sidebar/Sidebar";
import Navbar from "../../../components/shelter components/navbar/Navbar";
import Shelterpet from "../Shelterpet";
import Donations from "../Donations";
import Applications from "../Applications";
import Events from "../Events";
import Overview from "../Overview";
import "./Dashboard.css";
const ShelterLayout = () => {
    return (
      <div className="shelter-dashboard">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content-area">
            {/* Bạn có thể thêm nội dung cụ thể của dashboard ở đây */}
            <Routes>
              <Route path="pets" element={<Shelterpet />} />
              <Route path="donations" element={<Donations />} />
              <Route path="applications" element={<Applications />} />
              <Route path="events" element={<Events/>} />
              <Route path="overview" element={<Overview/>} />
            </Routes>
          </div>
        </div>
      </div>
    );
};
export default ShelterLayout;