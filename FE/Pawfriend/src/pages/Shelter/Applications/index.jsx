import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import icon kính lúp
import "./Application.css";
const Applications = () =>{
    return (
        <div className="application-page">
            <h2 className="title">Application Management</h2>
            <div className="search-area">
                <div className="search-input-container">
                    <input type="text" placeholder="Search applications..." className="search-input" />
                    <FaSearch className="search-icon" />
                </div>
            </div>

            <h3 className="subtitle">User Applications</h3>
            <table className="applications-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Placeholder rows, có thể thêm dữ liệu sau */}
                    <tr>
                        <td>John Doe</td>
                        <td>john@example.com</td>
                        <td>123-456-7890</td>
                        <td>Male</td>
                        <td>
                            <button className="view-btn">View</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>jane@example.com</td>
                        <td>987-654-3210</td>
                        <td>Female</td>
                        <td>
                            <button className="view-btn">View</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="action-buttons">
                <button className="approve-btn">Approve</button>
                <button className="reject-btn">Reject</button>
            </div>
        </div>
    );
};
export default Applications;