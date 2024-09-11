import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Dashboard.css';
import Folder from "../imges/folder.jpg"
const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <div className="status-cards">
                <div className="card pending-cards" onClick={() => navigate('/pending')}>
                    <img src={Folder} alt="" />
                    <h3>Pending Acceptance</h3>
                </div>
                <div className="card accepted-cards" onClick={() => navigate('/accepted')}>
                    <img src={Folder} alt="" />

                    <h3>Accepted Projects</h3>
                </div>
            </div>

            <div className="actions">
                <div className="action-link" onClick={() => navigate('/profile')}>

                    <h3>Profile</h3>
                </div>
                <div className="action-link" onClick={() => navigate('/crew-availability')}>
                    <h3>Crew Availability</h3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
