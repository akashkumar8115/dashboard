import React from "react";
import '../css/CrewAvailability.css';

const CrewAvailability = () => {
    return (
        <div className="crew-availability-container">
            <h2>Crew Availability</h2>
            <div className="crew-list">
                <div className="crew-card">
                    <h3>Crew Member 1</h3>
                    <p>Available</p>
                </div>
                <div className="crew-card">
                    <h3>Crew Member 2</h3>
                    <p>Unavailable</p>
                </div>
                {/* Add more crew members */}
            </div>
        </div>
    );
};

export default CrewAvailability;
