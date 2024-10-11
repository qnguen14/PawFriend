import React from 'react';
import Navbar from '../../components/admin/AdminComponents/navbar/Navbar';
import Sidebar from '../../components/admin/AdminComponents/sidebar/Sidebar';
import './index.css'; // Import file CSS

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <h1>Admin Page</h1>
          <p>Welcome to the admin page.</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;

