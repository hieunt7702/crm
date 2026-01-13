import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <span className="material-symbols-outlined text-primary text-3xl">shield_lock</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight uppercase">Escrow<span className="text-primary">Secure</span></h2>
                </Link>
                <nav className="hidden md:flex items-center gap-10">
                    <Link
                        className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/how-it-works') ? 'text-primary' : ''}`}
                        to="/how-it-works"
                    >
                        How It Works
                    </Link>
                    <Link
                        className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/trust-safety') ? 'text-primary' : ''}`}
                        to="/trust-safety"
                    >
                        Trust &amp; Safety
                    </Link>
                    <Link
                        className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/fees') ? 'text-primary' : ''}`}
                        to="/fees"
                    >
                        Fees
                    </Link>
                    <Link
                        className={`text-sm font-medium hover:text-primary transition-colors ${isActive('/support') ? 'text-primary' : ''}`}
                        to="/support"
                    >
                        Support
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium px-4 py-2 hover:text-primary transition-colors">Login</button>
                    <button className="bg-primary hover:bg-primary/90 text-background-dark text-sm font-bold px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-primary/10">
                        Get Started
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
