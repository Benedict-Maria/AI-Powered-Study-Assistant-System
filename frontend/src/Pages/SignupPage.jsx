import React, { useState } from "react";
import "./Auth.css";

import {
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordStrength, setPasswordStrength] =
    useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "password") {
      if (e.target.value.length < 8) {
        setPasswordStrength("Weak");
      } else {
        setPasswordStrength("Strong");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      toast.error(
        "Password must be at least 8 characters"
      );
      return;
    }

    if (
      formData.password !== formData.confirmPassword
    ) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await API.post("/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success(response.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(
        error.response?.data?.detail ||
          "Signup failed"
      );
    }
  };

  return (
    <div className="auth-page">
      <ToastContainer />

      <div className="auth-background"></div>

      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-lg-5 col-md-8">
            <div className="auth-card">
              <h2>Create Your Account</h2>

              <p>
                Join the AI Study Assistant today.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="input-group-custom">
                  <FaUser className="input-icon" />

                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group-custom">
                  <FaEnvelope className="input-icon" />

                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group-custom">
                  <FaLock className="input-icon" />

                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    onChange={handleChange}
                  />
                </div>

                <small className="password-strength">
                  Password Strength :
                  {passwordStrength}
                </small>

                <div className="input-group-custom">
                  <FaLock className="input-icon" />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    required
                    onChange={handleChange}
                  />
                </div>

                <button className="auth-btn">
                  Sign Up
                </button>
              </form>

              <div className="auth-footer">
                Already have an account?
                <Link to="/login"> Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;