import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import StickyDisclaimer from './StickyDisclaimer';
import GlobalSearch from './GlobalSearch';

interface LayoutProps {
    children: React.ReactNode;
}

const navItems = [
    { to: '/', label: 'Dashboard', icon: '🏠', end: true },
    { to: '/timeline', label: 'Case Timeline', icon: '⏱️' },
    { to: '/rights', label: 'Know Your Rights', icon: '🛡️' },
    { to: '/education', label: 'Educational Rights', icon: '🎓' },
    { to: '/cleaning', label: 'Record Cleaning', icon: '🧹' },
    { to: '/charges', label: 'Charge Types', icon: '⚠️' },
    { to: '/glossary', label: 'Legal Glossary', icon: '📖' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();

    // Close drawer on route change
    useEffect(() => {
        setDrawerOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = drawerOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [drawerOpen]);

    return (
        <div className="layout-root">
            <header className="main-header">
                <div
                    className="container header-content"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}
                >
                    {/* Hamburger — mobile only */}
                    <button
                        className="hamburger-btn"
                        onClick={() => setDrawerOpen(o => !o)}
                        aria-label="Toggle navigation"
                        aria-expanded={drawerOpen}
                    >
                        <span className="hamburger-icon">{drawerOpen ? '✕' : '☰'}</span>
                    </button>

                    <div className="logo-area" style={{ flex: 1, minWidth: 0 }}>
                        <h1>Colorado Juvenile Justice Navigator</h1>
                    </div>

                    <div className="header-search-wrapper">
                        <GlobalSearch />
                    </div>
                </div>
            </header>

            {/* Mobile drawer overlay */}
            {drawerOpen && (
                <div
                    className="drawer-overlay"
                    onClick={() => setDrawerOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile slide-in drawer */}
            <nav className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} aria-label="Mobile navigation">
                <div className="drawer-header">
                    <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-primary-dark)' }}>
                        Navigation
                    </span>
                    <button
                        className="drawer-close-btn"
                        onClick={() => setDrawerOpen(false)}
                        aria-label="Close navigation"
                    >✕</button>
                </div>
                <ul className="drawer-nav">
                    {navItems.map(item => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                end={item.end}
                                className={({ isActive }) => `drawer-nav-link${isActive ? ' active' : ''}`}
                            >
                                <span className="drawer-nav-icon">{item.icon}</span>
                                <span>{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="app-container">
                {/* Desktop sidebar */}
                <nav className="desktop-sidebar" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <ul style={{ flexGrow: 1 }}>
                        {navItems.map(item => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    end={item.end}
                                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <main className="main-content">
                    <div className="container">
                        {children}
                    </div>
                </main>
            </div>

            <StickyDisclaimer />
        </div>
    );
};

export default Layout;
