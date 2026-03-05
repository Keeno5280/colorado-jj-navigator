import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="home-dashboard">
            <section className="hero">
                <h2>Welcome to the Navigator</h2>
                <p>
                    This is an informational tool for justice-involved youth and nonprofit providers in Colorado.
                    Select a topic below to understand the legal process and protect your rights.
                </p>
            </section>

            <div className="dashboard-grid">
                <Link to="/timeline" className="dash-card">
                    <div className="dash-icon">⏱️</div>
                    <h3>Case Timeline</h3>
                    <p>Understand the strict deadlines from detention (48-hours) to trial (60-days).</p>
                </Link>

                <Link to="/rights" className="dash-card">
                    <div className="dash-icon">🛡️</div>
                    <h3>Know Your Rights</h3>
                    <p>Explore Street Rights, Interrogation Rules, and the Facility Bill of Rights.</p>
                </Link>

                <Link to="/education" className="dash-card">
                    <div className="dash-icon">🎓</div>
                    <h3>Educational Rights</h3>
                    <p>Learn about the 10-Day Re-Enrollment mandate and graduation protections (HB24-1216).</p>
                </Link>

                <Link to="/cleaning" className="dash-card">
                    <div className="dash-icon">🧹</div>
                    <h3>Record Cleaning</h3>
                    <p>Interactive quiz to determine Expungement vs Sealing eligibility.</p>
                </Link>

                <Link to="/charges" className="dash-card">
                    <div className="dash-icon">⚠️</div>
                    <h3>Charge Types</h3>
                    <p>Colorado offense classifications: Felony Classes 1–6, Misdemeanors, and Status Offenses.</p>
                </Link>

                <Link to="/glossary" className="dash-card">
                    <div className="dash-icon">📖</div>
                    <h3>Legal Glossary</h3>
                    <p>Searchable plain-language definitions of 22+ key juvenile justice terms for staff.</p>
                </Link>
            </div>
        </div>
    );
};

export default Home;
