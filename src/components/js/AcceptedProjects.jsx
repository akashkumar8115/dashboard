import React from "react";
import '../css/AcceptedProjects.css';

const AcceptedProjects = () => {
    return (
        <div className="accepted-projects-container">
            <h2>Accepted Projects</h2>
            <div className="projects-list">
                {/* Example of a project */}
                <div className="project-card">
                    <h3>Project Title 1</h3>
                    <p>Project details and description here.</p>
                </div>
                <div className="project-card">
                    <h3>Project Title 2</h3>
                    <p>Project details and description here.</p>
                </div>
                {/* Add more projects here */}
            </div>
        </div>
    );
};

export default AcceptedProjects;
