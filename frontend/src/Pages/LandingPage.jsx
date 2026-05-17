import "./LandingPage.css";

import {
    FaBookOpen,
    FaChartLine,
    FaClipboardCheck,
    FaFacebookF,
    FaInstagram,
    FaLayerGroup,
    FaLinkedinIn,
} from "react-icons/fa";

import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* NAVBAR */}

      <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
        <div className="container">
          <a className="navbar-brand logo-text" href="/">
            Study<span>AI</span>
          </a>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#hero">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item ms-3">
                <button className="btn login-btn nav-action-btn">
                  Login
                </button>
              </li>

              <li className="nav-item ms-2">
                <button className="btn signup-btn nav-action-btn">
                  Signup
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section className="hero-section" id="hero">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="hero-title">
                  AI-Powered <br />
                  Study Assistant
                </h1>

                <p className="hero-text">
                  Transform your study routine with smart
                  summaries, flashcards, quizzes, and
                  personalized progress tracking.
                </p>

                <div className="hero-buttons">
                  <button className="btn hero-btn-primary">
                    Get Started
                  </button>

                  <button className="btn hero-btn-secondary">
                    Login
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="floating-card card-1">
                  📘 Smart Notes
                </div>

                <div className="floating-card card-2">
                  🧠 AI Flashcards
                </div>

                <div className="floating-card card-3">
                  📊 Progress Insights
                </div>

                <div className="main-circle"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="features-section" id="features">
        <div className="container">
          <div className="section-header text-center">
            <h2>Powerful Learning Features</h2>

            <p>
              Designed to help students learn faster and
              smarter.
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card">
                <FaBookOpen className="feature-icon" />

                <h4>Summarization</h4>

                <p>
                  Instantly turn long study notes into
                  concise summaries.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card">
                <FaLayerGroup className="feature-icon" />

                <h4>Flashcards</h4>

                <p>
                  AI-generated flashcards for quick and
                  effective revision.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card">
                <FaClipboardCheck className="feature-icon" />

                <h4>Quizzes</h4>

                <p>
                  Practice quizzes tailored to your uploaded
                  study material.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="feature-card">
                <FaChartLine className="feature-icon" />

                <h4>Progress Tracking</h4>

                <p>
                  Monitor your study growth with analytics
                  and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className="how-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>How It Works</h2>
          </div>

          <div className="row mt-5">
            <div className="col-md-3 text-center">
              <div className="step-card">
                <div className="step-number">1</div>

                <h5>Upload Notes</h5>

                <p>Add PDFs or study materials.</p>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="step-card">
                <div className="step-number">2</div>

                <h5>AI Processing</h5>

                <p>
                  AI generates summaries & flashcards.
                </p>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="step-card">
                <div className="step-number">3</div>

                <h5>Practice</h5>

                <p>
                  Take quizzes and improve learning.
                </p>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="step-card">
                <div className="step-number">4</div>

                <h5>Track Progress</h5>

                <p>
                  Analyze performance and consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section className="about-section" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span className="about-tag">
                  ABOUT STUDYAI
                </span>

                <h2>
                  Revolutionizing Student Learning with AI
                </h2>

                <p>
                  StudyAI is an intelligent learning
                  platform built to help students learn
                  faster, revise smarter, and stay productive
                  throughout their academic journey.
                </p>

                <p>
                  Instead of spending hours creating notes,
                  flashcards, and revision plans manually,
                  students can upload their study materials
                  and instantly receive AI-generated
                  summaries, quizzes, and learning insights.
                </p>

                <p>
                  Our platform combines modern AI technology
                  with an intuitive student-friendly
                  interface to make studying more engaging,
                  organized, and efficient.
                </p>

                <div className="about-highlights">
                  <div className="highlight-box">
                    <h3>10K+</h3>
                    <span>Students Supported</span>
                  </div>

                  <div className="highlight-box">
                    <h3>95%</h3>
                    <span>Improved Productivity</span>
                  </div>

                  <div className="highlight-box">
                    <h3>24/7</h3>
                    <span>AI Assistance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-visual">
                <div className="visual-card visual-1">
                  📘 AI Summaries
                </div>

                <div className="visual-card visual-2">
                  🧠 Smart Revision
                </div>

                <div className="visual-card visual-3">
                  📊 Learning Analytics
                </div>

                <div className="about-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to boost your learning?</h2>

          <p>
            Join thousands of students improving their study
            habits.
          </p>

          <button className="btn cta-btn">
            Sign Up Free
          </button>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer-section" id="contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <h3 className="footer-logo">
                Study<span>AI</span>
              </h3>
            </div>

            <div className="col-lg-4 text-center">
              <div className="footer-links">
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Privacy Policy</a>
              </div>
            </div>

            <div className="col-lg-4 text-end">
              <div className="social-icons">
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          <hr />

          <p className="copyright text-center">
            © 2026 StudyAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;