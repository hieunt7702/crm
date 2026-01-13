import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HowItWorks: React.FC = () => {
    return (
        <>
            <Header />

            <main className="relative">
                {/* Hero Section */}
                <section className="relative pt-20 pb-16 px-6 overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">Security Protocol 2.0</span>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter mb-6">
                            The Blueprint of <br /><span className="text-primary italic">Secure Exchanges</span>
                        </h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Trading high-value game accounts shouldn't feel like a gamble. Our automated escrow infrastructure ensures every byte and every cent is accounted for.
                        </p>
                    </div>
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/30 blur-[120px] rounded-full"></div>
                    </div>
                </section>

                {/* Process Timeline Section */}
                <section className="max-w-[960px] mx-auto px-6 pb-32">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 md:-translate-x-px overflow-hidden">
                            <div className="w-full h-1/2 timeline-gradient"></div>
                        </div>

                        {/* Step 1: Request */}
                        <div className="relative flex flex-col md:flex-row items-center gap-8 mb-24 group">
                            <div className="flex-1 w-full order-2 md:order-1 text-right hidden md:block">
                                <span className="step-number text-6xl font-black">01</span>
                            </div>
                            <div className="z-10 flex-shrink-0 size-12 rounded-full bg-background-dark border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,204,170,0.4)] order-1 md:order-2">
                                <span className="material-symbols-outlined text-primary">handshake</span>
                            </div>
                            <div className="flex-1 w-full order-3 md:order-3">
                                <div className="glass-panel p-8 rounded-xl hover:bg-white/5 transition-all duration-300">
                                    <h3 className="text-2xl font-bold mb-3">Initiate Request</h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Buyer or seller creates a trade proposal. Define item specifics, delivery timeframe, and price. Both parties must cryptographically sign the terms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Transfer */}
                        <div className="relative flex flex-col md:flex-row items-center gap-8 mb-24 group">
                            <div className="flex-1 w-full order-3 md:order-1">
                                <div className="glass-panel p-8 rounded-xl hover:bg-white/5 transition-all duration-300 md:text-right">
                                    <h3 className="text-2xl font-bold mb-3">Escrow Deposit</h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Funds are held in a secure vault while account credentials are encrypted and stored in our temporary "Cold Gate" server. No human access is allowed.
                                    </p>
                                </div>
                            </div>
                            <div className="z-10 flex-shrink-0 size-12 rounded-full bg-background-dark border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,204,170,0.4)] order-1 md:order-2">
                                <span className="material-symbols-outlined text-primary">lock</span>
                            </div>
                            <div className="flex-1 w-full order-2 md:order-3 hidden md:block">
                                <span className="step-number text-6xl font-black">02</span>
                            </div>
                        </div>

                        {/* Step 3: Security Audit */}
                        <div className="relative flex flex-col md:flex-row items-center gap-8 mb-24 group">
                            <div className="flex-1 w-full order-2 md:order-1 text-right hidden md:block">
                                <span className="step-number text-6xl font-black">03</span>
                            </div>
                            <div className="z-10 flex-shrink-0 size-12 rounded-full bg-background-dark border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,204,170,0.4)] order-1 md:order-2">
                                <span className="material-symbols-outlined text-primary">security</span>
                            </div>
                            <div className="flex-1 w-full order-3 md:order-3">
                                <div className="glass-panel p-8 rounded-xl hover:bg-white/5 transition-all duration-300">
                                    <h3 className="text-2xl font-bold mb-3">Integrity Audit</h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Our bot scans for shadow bans, recovery email history, and linked social accounts. We ensure the account is exactly as described and hasn't been flagged.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4: Verification */}
                        <div className="relative flex flex-col md:flex-row items-center gap-8 mb-24 group">
                            <div className="flex-1 w-full order-3 md:order-1">
                                <div className="glass-panel p-8 rounded-xl hover:bg-white/5 transition-all duration-300 md:text-right">
                                    <h3 className="text-2xl font-bold mb-3">Live Verification</h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                        The buyer receives a secure, limited-access view to confirm assets. Once the buyer clicks 'Verify', the irreversible transfer sequence begins.
                                    </p>
                                </div>
                            </div>
                            <div className="z-10 flex-shrink-0 size-12 rounded-full bg-background-dark border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,204,170,0.4)] order-1 md:order-2">
                                <span className="material-symbols-outlined text-primary">fact_check</span>
                            </div>
                            <div className="flex-1 w-full order-2 md:order-3 hidden md:block">
                                <span className="step-number text-6xl font-black">04</span>
                            </div>
                        </div>

                        {/* Step 5: Completion */}
                        <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                            <div className="flex-1 w-full order-2 md:order-1 text-right hidden md:block">
                                <span className="step-number text-6xl font-black">05</span>
                            </div>
                            <div className="z-10 flex-shrink-0 size-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_25px_rgba(0,204,170,0.6)] order-1 md:order-2">
                                <span className="material-symbols-outlined text-background-dark font-bold">celebration</span>
                            </div>
                            <div className="flex-1 w-full order-3 md:order-3">
                                <div className="glass-panel p-8 rounded-xl border-primary/20 bg-primary/5 transition-all duration-300">
                                    <h3 className="text-2xl font-bold mb-3 text-primary">Final Settlement</h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Funds are instantly released to the seller. Full account ownership credentials are delivered to the buyer. The trade is finalized and logged on the ledger.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust & Security Partners */}
                <section className="bg-background-light dark:bg-[#121418] py-20 px-6 border-t border-slate-200 dark:border-slate-800">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-center text-sm font-bold tracking-widest text-slate-500 uppercase mb-12">Industrial Grade Security Standards</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 hover:opacity-100 transition-opacity">
                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-full h-12 bg-slate-400/20 rounded flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl">verified_user</span>
                                </div>
                                <span className="text-[10px] font-bold tracking-tighter uppercase">SSL 256-Bit</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-full h-12 bg-slate-400/20 rounded flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
                                </div>
                                <span className="text-[10px] font-bold tracking-tighter uppercase">Anti-Fraud AI</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-full h-12 bg-slate-400/20 rounded flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl">encrypted</span>
                                </div>
                                <span className="text-[10px] font-bold tracking-tighter uppercase">Vault-Ready</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 group">
                                <div className="w-full h-12 bg-slate-400/20 rounded flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl">token</span>
                                </div>
                                <span className="text-[10px] font-bold tracking-tighter uppercase">Blockchain Ledger</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default HowItWorks;
