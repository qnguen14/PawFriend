import React, { useState, useEffect } from "react";
import "./Overview.css"; // Import file CSS
import { useActiveLink } from "../../../hooks/useActiveLink";
import Navbar from "../../../components/admin/AdminComponents/navbar/Navbar";
import Sidebar from "../../../components/admin/AdminComponents/sidebar/Sidebar";
import { fetchData } from "../../../config/api";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const Overview = () => {
  const { activeLink, setActiveLink } = useActiveLink("overview");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchData("/test");
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  // Count users by role
  const roleCounts = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {});

  const userCounts = users.length;

  const userCountData = {
    labels: ["Total Users"],
    datasets: [
      {
        label: "Total Users",
        data: [userCounts],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const roleData = {
    labels: Object.keys(roleCounts),
    datasets: [
      {
        label: "Number of Users by Role",
        data: Object.values(roleCounts),
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="admin-container">
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <div className="d-flex">
        <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} />
        <div className="content">
          <div className="main-content container-fluid">
            <div className="row">
              <h2>Overview</h2>
              <div className="col-md-12 row">
                <div className="col-md-6 mb-4">
                  <h5 className="text-muted mb-2">User Distribution by Role</h5>
                  <div className="user-count-chart">
                    <Bar data={roleData} />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <h5 className="text-muted mb-2">Total Number of Users</h5>
                  <div className="user-count-chart">
                    <Bar data={userCountData} />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <h2>Pending Applications</h2>
              </div>
              <div className="col-md-6 mb-4">
                <h2>Recent Donations</h2>
                {/* Add donation details here */}
              </div>
              <div className="col-md-6 mb-4">
                <h2>Finance Analytics</h2>
                {/* Add financial data here */}
              </div>
              <div className="col-md-6 mb-4">
                <h2>Coming Event</h2>
                {/* Add event details here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
