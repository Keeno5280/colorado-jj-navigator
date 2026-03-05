import React from 'react';
import { NavLink } from 'react-router-dom';
import StickyDisclaimer from './StickyDisclaimer';
import GlobalSearch from './GlobalSearch';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout-root">
            <header className="main-header">
                <div className="container header-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
                    <div className="logo-area" style={{ flexShrink: 0 }}>
                        <h1>Colorado Juvenile Justice Navigator</h1>
                    </div>
                    <GlobalSearch />
                </div>
            </header>


            <div className="app-container">
                <nav className="desktop-sidebar" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <ul style={{ flexGrow: 1 }}>
                        <li><NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Dashboard</NavLink></li>
                        <li><NavLink to="/timeline" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Case Timeline</NavLink></li>
                        <li><NavLink to="/rights" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Know Your Rights</NavLink></li>
                        <li><NavLink to="/education" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Educational Rights</NavLink></li>
                        <li><NavLink to="/cleaning" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Record Cleaning</NavLink></li>
                        <li><NavLink to="/charges" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Charge Types</NavLink></li>
                        <li><NavLink to="/glossary" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Legal Glossary</NavLink></li>
                    </ul>
                </nav>


                <main className="main-content">
                    <div className="container">
                        {children}
                    </div>
                </main>
            </div>

            <nav className="mobile-bottom-bar">
                <ul>
                    <li><NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>🏠</NavLink></li>
                    <li><NavLink to="/timeline" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>⏱️</NavLink></li>
                    <li><NavLink to="/rights" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>🛡️</NavLink></li>
                    <li><NavLink to="/education" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>🎓</NavLink></li>
                    <li><NavLink to="/charges" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>⚠️</NavLink></li>
                    <li><NavLink to="/glossary" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>📖</NavLink></li>
                </ul>
            </nav>

            <StickyDisclaimer />
        </div>
    );
};

export default Layout;
