import React from "react";
import "./Donations.css";
const Donations =() => {
    return (
        <div className="donations-management">
            <h1>Donations Management</h1>
            
            {/* Donations Table */}
            <div className="donations-list">
                <h2>Donations List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Payment Method</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example row */}
                        <tr>
                            <td>John Doe</td>
                            <td>john@example.com</td>
                            <td>$100</td>
                            <td>Credit Card</td>
                            <td>2024-10-17</td>
                            <td>
                                <button className="view-btn">View</button>
                                <button className="delete-btn">Delete</button>
                            </td>
                        </tr>
                        {/* Add more rows dynamically */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Donations;