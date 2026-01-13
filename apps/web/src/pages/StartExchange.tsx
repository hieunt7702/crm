import React from 'react';
import { Link } from 'react-router-dom';

const StartExchange: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col">
            {/* Top Navigation */}
            <header className="border-b border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark px-6 py-3 sticky top-0 z-50">
                <div className="max-w-[1440px] mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="bg-primary p-1.5 rounded-lg text-background-dark">
                            <span className="material-symbols-outlined block !text-2xl font-bold">shield_lock</span>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">EscrowSafe</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Exchanges</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Marketplace</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Support</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <div className="h-8 w-px bg-slate-200 dark:bg-border-dark mx-2"></div>
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-xs font-bold">Vault_Master_88</p>
                                <p className="text-[10px] text-primary">Pro Member</p>
                            </div>
                            <div className="size-10 rounded-full border-2 border-primary/30 p-0.5">
                                <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOWmZNdDognixzG2xrfzIzlgKQCRCVI2RfxGBbQaECyu5ZoBS3xY0k00GBdHeRcOSK2-qTTjb9k8mZgAAGPwDhuq_WKfktJwczCOSCZgBktfyo-6hRItURiT-5h-g0ZadM-Og89vF21tgorbe1XBl5vm5dRdeOqIWlhIDq2Kp_BKmy20t_8wNR0lKDLb9o2V9IF3NoZUVIq8bky6ZbhedOPPpNqkz5Jv4QRoE9LOU43gEJAmJKr39yHwmUS5HcBttmbsmgwZiC7ru9')" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex max-w-[1440px] mx-auto w-full">
                {/* Sidebar Navigation */}
                <aside className="w-64 border-r border-slate-200 dark:border-border-dark p-6 hidden lg:flex flex-col gap-8">
                    <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold px-3 mb-4">Main Menu</p>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary group" href="#">
                            <span className="material-symbols-outlined !text-xl">add_box</span>
                            <span className="text-sm font-medium">New Ticket</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-card-dark text-slate-500 dark:text-slate-400 hover:text-primary transition-all" href="#">
                            <span className="material-symbols-outlined !text-xl">history</span>
                            <span className="text-sm font-medium">Trade History</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-card-dark text-slate-500 dark:text-slate-400 hover:text-primary transition-all" href="#">
                            <span className="material-symbols-outlined !text-xl">verified_user</span>
                            <span className="text-sm font-medium">Trust Center</span>
                        </a>
                        <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-card-dark text-slate-500 dark:text-slate-400 hover:text-primary transition-all" href="#">
                            <span className="material-symbols-outlined !text-xl">settings</span>
                            <span className="text-sm font-medium">Settings</span>
                        </a>
                    </div>
                    {/* Trust Checklist Sidebar Component */}
                    <div className="mt-auto bg-primary/5 border border-primary/20 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-primary !text-xl">rule</span>
                            <h3 className="text-xs font-bold uppercase tracking-wider">Safety Checklist</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="material-symbols-outlined text-primary !text-sm mt-0.5">check_circle</span>
                                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">Verify original registration email access.</p>
                            </li>
                            <li className="flex gap-3">
                                <span className="material-symbols-outlined text-primary !text-sm mt-0.5">check_circle</span>
                                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">Request current screenshot of ban history.</p>
                            </li>
                            <li className="flex gap-3">
                                <span className="material-symbols-outlined text-primary !text-sm mt-0.5">check_circle</span>
                                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">Confirm 2FA removal from seller.</p>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Page Content */}
                <section className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-12">
                    <div className="max-w-3xl mx-auto">
                        {/* Page Heading */}
                        <div className="mb-10">
                            <div className="flex items-center gap-2 text-primary mb-2">
                                <span className="material-symbols-outlined !text-sm">bolt</span>
                                <span className="text-xs font-bold uppercase tracking-[0.2em]">Escrow Protocol v2.4</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4">Initialize Exchange Ticket</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">Create a secure, encrypted bridge for your account trade. Our system holds the credentials in stasis until both parties confirm.</p>
                        </div>

                        {/* Form Card */}
                        <div className="bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark rounded-xl p-8 shadow-xl shadow-black/5">
                            <form className="space-y-8">
                                {/* Two Column Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Game Selection */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold flex items-center gap-2">
                                            <span className="material-symbols-outlined text-slate-400 !text-lg">sports_esports</span>
                                            Game Title
                                        </label>
                                        <div className="relative">
                                            <select className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg py-3.5 px-4 text-sm appearance-none focus:border-primary focus:ring-0 transition-all cursor-pointer">
                                                <option value="" disabled selected>Select active title...</option>
                                                <option value="valorant">Valorant</option>
                                                <option value="genshin">Genshin Impact</option>
                                                <option value="league">League of Legends</option>
                                                <option value="wow">World of Warcraft</option>
                                                <option value="cs2">Counter-Strike 2</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
                                        </div>
                                    </div>
                                    {/* Exchange Type (Fixed) */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold flex items-center gap-2">
                                            <span className="material-symbols-outlined text-slate-400 !text-lg">swap_horiz</span>
                                            Protocol Mode
                                        </label>
                                        <div className="w-full bg-slate-100 dark:bg-border-dark/30 border border-slate-200 dark:border-border-dark rounded-lg py-3.5 px-4 text-sm flex items-center justify-between">
                                            <span className="font-medium text-slate-500 dark:text-slate-300">Account ↔ Account</span>
                                            <span className="bg-primary/20 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Locked</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Notes / Agreement Details */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-400 !text-lg">description</span>
                                        Agreement Particulars
                                    </label>
                                    <textarea className="w-full bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg p-4 text-sm focus:border-primary focus:ring-0 placeholder:text-slate-400 dark:placeholder:text-slate-600 transition-all resize-none" placeholder="Describe specific skins (e.g., Reaver Vandal), ranks, level, or currency included in this exchange. These terms are legally binding within the escrow protocol." rows={5}></textarea>
                                </div>

                                {/* Security Toggles */}
                                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-border-dark">
                                    <label className="relative flex items-start gap-4 cursor-pointer group">
                                        <div className="flex items-center h-5 mt-1">
                                            <input className="size-5 rounded border-slate-300 dark:border-border-dark bg-white dark:bg-background-dark text-primary focus:ring-primary/20" type="checkbox" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold group-hover:text-primary transition-colors">I consent to the Secure Stasis Protocol</span>
                                            <span className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">I understand that credentials will be verified by automated scripts and manual oversight. Accounts found with hidden bans will void this ticket.</span>
                                        </div>
                                    </label>
                                    <label className="relative flex items-start gap-4 cursor-pointer group">
                                        <div className="flex items-center h-5 mt-1">
                                            <input className="size-5 rounded border-slate-300 dark:border-border-dark bg-white dark:bg-background-dark text-primary focus:ring-primary/20" type="checkbox" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold group-hover:text-primary transition-colors">Privacy &amp; Data Encryption Agreement</span>
                                            <span className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Exchange data is end-to-end encrypted and purged 48 hours after successful ticket closure.</span>
                                        </div>
                                    </label>
                                </div>

                                {/* CTA Button */}
                                <div className="pt-6">
                                    <button className="w-full bg-primary hover:bg-primary/90 text-background-dark font-black py-4 px-6 rounded-lg text-lg flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all" type="submit">
                                        <span className="material-symbols-outlined">lock_open</span>
                                        INITIALIZE SECURE EXCHANGE
                                    </button>
                                    <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-[0.2em] font-bold">Encrypted via RSA-4096 Multi-Signature</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer Security Banner */}
            <footer className="bg-slate-100 dark:bg-card-dark/50 border-t border-slate-200 dark:border-border-dark py-4 px-6">
                <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="size-2 bg-primary rounded-full animate-pulse"></div>
                            <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">System Online</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined !text-xs opacity-60">cloud_done</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Database Synced</span>
                        </div>
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        © 2024 ESCROW SAFE PROTOCOLS. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default StartExchange;
