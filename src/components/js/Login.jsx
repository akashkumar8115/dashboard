import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const validateForm = () => {
        if (!email || !password) {
            setError("Both fields are required");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Enter a valid email");
            return false;
        }
        return true;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await axios.post("http://localhost:5000/api/login", {
                email,
                password,
            });
            if (response.data.success) {
                navigate("/dashboard");
            } else {
                setError("Invalid credentials");
            }
        } catch (error) {
            setError("An error occurred during login");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Welcome back</h2>
                <p>Enter your details below</p>
                {error && <p id="error-message">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <label className="remember-me">
                        <input type="checkbox" /> Remember me
                    </label>
                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>
                <div className="signup-link">
                    Don't have an account? <a href="/signup">Signup</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
