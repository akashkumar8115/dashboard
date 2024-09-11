import React, { useState } from 'react';
import '../css/Signup.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        let formErrors = {};

        if (!formData.name.trim()) {
            formErrors.name = 'Name is required';
        }

        if (!formData.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email address is invalid';
        }

        if (!formData.password) {
            formErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            formErrors.password = 'Password needs to be 6 characters or more';
        }

        if (!formData.confirmPassword) {
            formErrors.confirmPassword = 'Confirm password is required';
        } else if (formData.confirmPassword !== formData.password) {
            formErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert('Form submitted successfully');
            // Here you can add API request to submit the form data
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Create an Account</h2>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error-text">{errors.password}</p>}
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                        <p className="error-text">{errors.confirmPassword}</p>
                    )}
                </div>

                <button type="submit" className="signup-btn">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
