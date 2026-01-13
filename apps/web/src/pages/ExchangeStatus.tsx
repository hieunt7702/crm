import React from 'react';
import { Link } from 'react-router-dom';

const ExchangeStatus: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
            {/* Top Navigation Bar */}
            <header className="border-b border-border-dark bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="size-8 text-primary">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight text-white">EscrowSafe</h2>
                    </Link>
                    <div className="flex items-center gap-8">
                        <nav className="hidden md:flex items-center gap-8">
                            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
                            <a className="text-sm font-medium hover:text-primary transition-colors text-primary border-b-2 border-primary pb-1" href="#">Exchanges</a>
                            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Support</a>
                        </nav>
                        <div className="flex items-center gap-3">
                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                <span className="material-symbols-outlined text-white">notifications</span>
                            </button>
                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                <span className="material-symbols-outlined text-white">settings</span>
                            </button>
                            <div className="size-9 rounded-full bg-cover bg-center border border-border-dark" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIl7TesyTCk5mhYrGR2rbgjRof236QC0r3I67OIXS6_5w8TdkEeTtcTa0uAWwlX-QUBMTkKSEuvdNLwXuvOS31ocRmEb7SSWG2aQmsTptiX6Tmpz2Z1N-76mLFhznVmi_ECHVxqLLvDHSh4lv54qS_vzIBMr4e_sx0FYt_SW03lXatkaIrv9ZNmOJwCJcCVemQ1dvFuAAHeGgbJGx3X4sk1_TUFjxlD24NkZr93bGvaVgNfTTPas_oOuttNg1Mww845pBO2LCJ6704")' }}></div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-[1400px] mx-auto w-full p-6 space-y-6">
                {/* Header & Top Stepper */}
                <div className="bg-surface-dark rounded-xl border border-border-dark p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                Exchange ID: #AX-7702
                                <span className="px-2 py-0.5 text-xs font-semibold bg-primary/20 text-primary rounded uppercase tracking-wider">Secure Channel</span>
                            </h1>
                            <p className="text-slate-400 text-sm mt-1">Status: Verification Phase (Waiting for Buyer/Seller Confirmation)</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-slate-500 uppercase font-bold">Estimated Completion</p>
                            <p className="text-lg font-mono text-white">02:45:12</p>
                        </div>
                    </div>
                    {/* Horizontal Stepper */}
                    <div className="relative flex items-center justify-between px-4">
                        <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-border-dark z-0"></div>
                        {/* Step 1 */}
                        <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-background-dark">
                                <span className="material-symbols-outlined font-bold">check</span>
                            </div>
                            <span className="text-xs font-medium text-slate-300">Agreement</span>
                        </div>
                        {/* Step 2 (Active) */}
                        <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="size-10 rounded-full bg-primary border-4 border-background-dark flex items-center justify-center text-background-dark glow-active">
                                <span className="material-symbols-outlined font-bold animate-pulse">verified_user</span>
                            </div>
                            <span className="text-xs font-bold text-primary">Verification</span>
                        </div>
                        {/* Step 3 */}
                        <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="size-10 rounded-full bg-surface-dark border-2 border-border-dark flex items-center justify-center text-slate-500">
                                <span className="material-symbols-outlined">payments</span>
                            </div>
                            <span className="text-xs font-medium text-slate-500">Escrow</span>
                        </div>
                        {/* Step 4 */}
                        <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="size-10 rounded-full bg-surface-dark border-2 border-border-dark flex items-center justify-center text-slate-500">
                                <span className="material-symbols-outlined">key</span>
                            </div>
                            <span className="text-xs font-medium text-slate-500">Transfer</span>
                        </div>
                        {/* Step 5 */}
                        <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="size-10 rounded-full bg-surface-dark border-2 border-border-dark flex items-center justify-center text-slate-500">
                                <span className="material-symbols-outlined">flag</span>
                            </div>
                            <span className="text-xs font-medium text-slate-500">Finalized</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Column: Secure Chat */}
                    <div className="lg:col-span-8 flex flex-col h-[650px] bg-surface-dark rounded-xl border border-border-dark overflow-hidden">
                        <div className="p-4 border-b border-border-dark flex items-center justify-between bg-white/5">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">forum</span>
                                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Secure Communication Log</h3>
                            </div>
                            <div className="flex items-center gap-4 text-xs">
                                <div className="flex items-center gap-1">
                                    <span className="size-2 bg-primary rounded-full"></span>
                                    <span className="text-slate-400">Buyer</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="size-2 bg-blue-500 rounded-full"></span>
                                    <span className="text-slate-400">Seller</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                            {/* Mediator Message */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="size-8 rounded bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined !text-sm">security</span>
                                    </div>
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest">System Mediator</span>
                                    <span className="text-[10px] text-slate-500">14:20 PM</span>
                                </div>
                                <div className="max-w-[80%] bg-primary/5 border-l-2 border-primary p-4 rounded-r-lg">
                                    <p className="text-sm leading-relaxed text-slate-200">
                                        Welcome to the secure escrow room. I am your automated mediator. Both parties have signed the agreement. We are now in the <span className="text-primary font-bold underline">Verification Phase</span>. Seller, please provide the ownership screenshots.
                                    </p>
                                </div>
                            </div>
                            {/* Seller Message */}
                            <div className="flex flex-col gap-2 items-end">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-slate-500">14:22 PM</span>
                                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Seller (You)</span>
                                    <div className="size-8 rounded bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                                        <span className="material-symbols-outlined !text-sm">person</span>
                                    </div>
                                </div>
                                <div className="max-w-[80%] bg-blue-500/10 border-r-2 border-blue-500 p-4 rounded-l-lg">
                                    <p className="text-sm leading-relaxed text-slate-200">
                                        I've just uploaded the screenshots of the inventory and character level. Please verify the linked accounts list as well.
                                    </p>
                                </div>
                            </div>
                            {/* Buyer Message */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="size-8 rounded bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-300">
                                        <span className="material-symbols-outlined !text-sm">person</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Buyer</span>
                                    <span className="text-[10px] text-slate-500">14:25 PM</span>
                                </div>
                                <div className="max-w-[80%] bg-slate-800 border-l-2 border-slate-600 p-4 rounded-r-lg">
                                    <p className="text-sm leading-relaxed text-slate-200">
                                        Looking through them now. Can you confirm if the Season 4 battle pass rewards are included in this bundle?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-background-dark/50 border-t border-border-dark">
                            <div className="flex gap-4">
                                <div className="flex-1 relative">
                                    <input className="w-full bg-surface-dark border-border-dark rounded-lg text-sm text-white focus:ring-primary focus:border-primary px-4 py-3" placeholder="Type a message..." type="text" />
                                </div>
                                <button className="bg-primary text-background-dark px-6 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                                    SEND <span className="material-symbols-outlined !text-sm">send</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details & Actions */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Details Card */}
                        <div className="bg-surface-dark rounded-xl border border-border-dark p-6 overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="material-symbols-outlined !text-6xl">info</span>
                            </div>
                            <h3 className="font-bold text-white uppercase tracking-wider text-sm mb-4">Exchange Details</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-border-dark/50 pb-2">
                                    <span className="text-xs text-slate-400">Account Type</span>
                                    <span className="text-sm font-semibold text-white">MMORPG High-End</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-border-dark/50 pb-2">
                                    <span className="text-xs text-slate-400">Username</span>
                                    <span className="text-sm font-mono text-white blur-[4px] hover:blur-none transition-all cursor-help">dark_kni******</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-border-dark/50 pb-2">
                                    <span className="text-xs text-slate-400">Recovery Email</span>
                                    <span className="text-sm font-mono text-white blur-[4px] hover:blur-none transition-all cursor-help">m*****@gmail.com</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-border-dark/50 pb-2">
                                    <span className="text-xs text-slate-400">Exchange Value</span>
                                    <span className="text-sm font-bold text-primary">$1,250.00</span>
                                </div>
                            </div>
                        </div>
                        {/* Evidence Upload */}
                        <div className="bg-surface-dark rounded-xl border border-dashed border-border-dark p-6 group hover:border-primary/50 transition-colors">
                            <h3 className="font-bold text-white uppercase tracking-wider text-sm mb-4">Evidence Upload</h3>
                            <div className="flex flex-col items-center justify-center py-6 gap-3">
                                <div className="size-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">cloud_upload</span>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-medium text-slate-300">Drop screenshots here</p>
                                    <p className="text-[10px] text-slate-500 mt-1 uppercase">PNG, JPG up to 10MB</p>
                                </div>
                                <button className="mt-2 px-4 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-[11px] font-bold text-white transition-colors">
                                    BROWSE FILES
                                </button>
                            </div>
                        </div>
                        {/* Action Sidebar */}
                        <div className="flex flex-col gap-3">
                            <button className="w-full bg-primary/10 border border-primary/20 text-primary p-4 rounded-xl font-bold flex items-center justify-between group hover:bg-primary/20 transition-all">
                                <span className="text-sm">MARK AS VERIFIED</span>
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">verified</span>
                            </button>
                            <button className="w-full bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl font-bold flex items-center justify-between group hover:bg-red-500/20 transition-all">
                                <span className="text-sm">REPORT AN ISSUE</span>
                                <span className="material-symbols-outlined">report</span>
                            </button>
                            <div className="mt-2 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
                                <div className="flex gap-3">
                                    <span className="material-symbols-outlined text-yellow-500 !text-sm">warning</span>
                                    <p className="text-[10px] text-yellow-500/80 leading-tight">
                                        Reminder: Never share passwords directly in chat. Use the Secure Transfer tool in Phase 4.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="mt-auto border-t border-border-dark py-8 bg-surface-dark/30">
                <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 opacity-50">
                        <div className="size-6 text-white">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <span className="text-xs font-bold text-white">EscrowSafe © 2024</span>
                    </div>
                    <div className="flex gap-8">
                        <a className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-white transition-colors" href="#">Security Audit</a>
                        <a className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-white transition-colors" href="#">Terms of Service</a>
                        <a className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-white transition-colors" href="#">Privacy Policy</a>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                        <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                        Network Status: Operational
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ExchangeStatus;
