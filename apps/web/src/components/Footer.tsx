import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-border-dark py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
                    <div className="col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-1.5 bg-primary/10 rounded">
                                <span className="material-symbols-outlined text-primary text-2xl">shield_lock</span>
                            </div>
                            <h2 className="text-lg font-bold tracking-tight uppercase">Escrow<span className="text-primary">Secure</span></h2>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                            The world's most advanced peer-to-peer asset escrow utility. Focused on technical excellence and user privacy.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Platform</h5>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link className="hover:text-primary transition-colors" to="/how-it-works">How it Works</Link></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Fees</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Integrations</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Safety</h5>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link className="hover:text-primary transition-colors" to="/trust-safety">Trust Center</Link></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Security Audit</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Fraud Report</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Company</h5>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Legal</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Social</h5>
                        <div className="flex gap-4">
                            <a href="#" className="h-10 w-10 rounded-lg bg-slate-100 dark:bg-surface-dark flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-xl">share</span>
                            </a>
                            <a href="#" className="h-10 w-10 rounded-lg bg-slate-100 dark:bg-surface-dark flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-xl">terminal</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-slate-200 dark:border-border-dark text-slate-500 text-xs">
                    <p>© 2024 EscrowSecure Protocol. All rights reserved. Not affiliated with any game publisher.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                        <a href="#" className="hover:text-primary">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
