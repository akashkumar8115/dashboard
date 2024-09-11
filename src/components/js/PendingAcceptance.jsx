import React from "react";
import '../css/PendingAcceptance.css';

const PendingAcceptance = () => {
    return (
        <div className="pending-acceptance-container">
            <h2>Pending Projects</h2>
            <div className="pending-list">
                <div className="pending-card">
                    <h3>Project Pending 1</h3>
                    <p>Awaiting acceptance...</p>
                </div>
                <div className="pending-card">
                    <h3>Project Pending 2</h3>
                    <p>Awaiting acceptance...</p>
                </div>
                {/* Add more pending projects */}
            </div>
        </div>
    );
};

export default PendingAcceptance;
