import React, { useState, useEffect } from "react";
import './Overview.css';

const Overview = () => {
    const [totalPets, setTotalPets] = useState(0);
    const [totalApprovedPets, setTotalApprovedPets] = useState(0);
    const [totalApplications, setTotalApplications] = useState(0);
    const [totalApprovedApplications, setTotalApprovedApplications] = useState(0);
    const [totalDonations, setTotalDonations] = useState(0);
    const [totalEvents, setTotalEvents] = useState(0);
    const [totalApprovedEvents, setTotalApprovedEvents] = useState(0);

    useEffect(() => {
        // Giả lập dữ liệu ngẫu nhiên khi component mount
        setTotalPets(Math.floor(Math.random() * 100)); // Random từ 0 đến 99
        setTotalApprovedPets(Math.floor(Math.random() * 50)); // Random số thú cưng được duyệt

        setTotalApplications(Math.floor(Math.random() * 50)); // Random từ 0 đến 49
        setTotalApprovedApplications(Math.floor(Math.random() * 30)); // Random số đơn nhận nuôi được duyệt

        setTotalDonations(Math.floor(Math.random() * 10000)); // Random từ 0 đến 9999
       
        setTotalEvents(Math.floor(Math.random() * 10)); // Random từ 0 đến 9
        setTotalApprovedEvents(Math.floor(Math.random() * 8)); // Random số event được duyệt
    }, []);

    return (
        <div className="overview-dashboard">
            <h1>Shelter Overview</h1>

            <div className="overview-cards">
                <div className="card">
                    <h3>Total Pets</h3>
                    <p>{totalPets}</p>
                </div>
                <div className="card">
                    <h3>Approved Pets</h3>
                    <p>{totalApprovedPets}</p>
                </div>
                <div className="card">
                    <h3>Total Applications</h3>
                    <p>{totalApplications}</p>
                </div>
                <div className="card">
                    <h3>Approved Applications</h3>
                    <p>{totalApprovedApplications}</p>
                </div>
                <div className="card">
                    <h3>Total Donations</h3>
                    <p>${totalDonations}</p>
                </div>
               
                <div className="card">
                    <h3>Total Events</h3>
                    <p>{totalEvents}</p>
                </div>
                <div className="card">
                    <h3>Approved Events</h3>
                    <p>{totalApprovedEvents}</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;