import React, { useState } from "react";

import "./Auth.css";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";

import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      toast.success("Login successful");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      toast.error(
        error.response?.data?.detail ||
          "Login failed"
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
              <h2>Welcome Back</h2>

              <p>
                Login to continue your study journey.
              </p>

              <form onSubmit={handleSubmit}>
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
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Password"
                    name="password"
                    required
                    onChange={handleChange}
                  />

                  <div
                    className="eye-icon"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </div>
                </div>

                <div className="forgot-password">
                  <Link to="/signup">
                    Forgot Password?
                  </Link>
                </div>

                <button className="auth-btn">
                  Login
                </button>
              </form>

              <div className="auth-footer">
                Don’t have an account?
                <Link to="/signup"> Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;