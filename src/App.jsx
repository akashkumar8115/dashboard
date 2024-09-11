import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/js/Login.jsx";
import Dashboard from "./components/js/Dashboard.jsx";
import Signup from "./components/js/Signup.jsx";
import PendingAcceptance from "./components/js/PendingAcceptance.jsx";
import AcceptedProjects from "./components/js/AcceptedProjects.jsx";
import Profile from "./components/js/Profile.jsx";
import CrewAvailability from "./components/js/CrewAvailability.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pending" element={<PendingAcceptance />} />
        <Route path="/accepted" element={<AcceptedProjects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/crew-availability" element={<CrewAvailability />} />
      </Routes>
    </Router>
  );
}

export default App;
