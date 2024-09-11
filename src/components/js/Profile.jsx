import React from "react";
import '../css/Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <h2>Your Profile</h2>
            <div className="profile-card">
                <h3>John Doe</h3>
                <p>Email: johndoe@example.com</p>
                <p>Phone: +1234567890</p>
                <p>Position: Crew Manager</p>
                <button className="edit-btn">Edit Profile</button>
            </div>
        </div>
    );
};

export default Profile;
