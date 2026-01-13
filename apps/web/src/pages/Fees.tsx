import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Fees: React.FC = () => {
    const [accountValue, setAccountValue] = useState<string>('500.00');

    const calculateFee = (percentage: number): string => {
        const value = parseFloat(accountValue) || 0;
        return (value * percentage / 100).toFixed(2);
    };

    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative pt-20 pb-12 px-6 overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                            Security Protocol 2.0
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter mb-6">
                            Service <span className="text-primary italic">Pricing</span>
                        </h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Zero hidden charges. No surprise deductions. Our fee structure is designed to provide professional-grade protection at scale.
                        </p>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/30 blur-[120px] rounded-full"></div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="max-w-6xl mx-auto px-6 mb-24">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Standard Exchange */}
                        <div className="glass-panel p-10 rounded-2xl flex flex-col h-full group hover:border-primary/30 transition-all duration-300">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-2">Standard Exchange</h2>
                                <p className="text-slate-400 text-sm">Automated secure peer-to-peer transfer</p>
                                <div className="mt-6 flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-primary">3%</span>
                                    <span className="text-slate-500 text-sm">of transaction value</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                    <span className="text-sm font-medium">Automated Security Audit</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                    <span className="text-sm font-medium">Credential Encryption</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                    <span className="text-sm font-medium">Standard Fraud Protection</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-slate-600 text-sm">circle</span>
                                    <span className="text-sm text-slate-500">Email Ticketing Support</span>
                                </li>
                            </ul>
                            <button className="w-full border border-slate-700 hover:border-primary py-4 rounded-xl font-bold transition-all">
                                Select Standard
                            </button>
                        </div>

                        {/* Premium Escrow */}
                        <div className="glass-panel fee-card-highlight p-10 rounded-2xl flex flex-col h-full border-primary/40 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 bg-primary text-background-dark text-[10px] font-black px-4 py-1 uppercase tracking-widest">
                                Recommended
                            </div>
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-2">Premium Escrow</h2>
                                <p className="text-slate-400 text-sm">Full-service protection with mediator oversight</p>
                                <div className="mt-6 flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-primary">5%</span>
                                    <span className="text-slate-500 text-sm">of transaction value</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                    <span className="text-sm font-medium">Advanced Deep-Scan Audit</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                    <span className="text-sm font-medium">Full Recovery Insurance</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                    <span className="text-sm font-medium">24/7 Dedicated Mediator Support</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                    <span className="text-sm font-medium">Priority Cold-Gate Queue</span>
                                </li>
                            </ul>
                            <button className="w-full bg-primary text-background-dark py-4 rounded-xl font-bold hover:opacity-90 transition-all">
                                Go Premium
                            </button>
                        </div>
                    </div>
                </section>

                {/* Fee Calculator */}
                <section className="max-w-4xl mx-auto px-6 mb-32">
                    <div className="glass-panel p-1 rounded-2xl bg-gradient-to-b from-slate-800/50 to-transparent">
                        <div className="bg-background-dark/80 rounded-2xl p-8 md:p-12">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="max-w-xs">
                                    <h3 className="text-2xl font-bold mb-2">Fee Calculator</h3>
                                    <p className="text-sm text-slate-500 italic">Estimate your service costs</p>
                                    <p className="text-slate-400 mt-4 text-sm leading-relaxed">
                                        Input the market value of your account to see the exact service fees for each protocol.
                                    </p>
                                </div>
                                <div className="flex-grow max-w-md">
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                                                Estimated Account Value (USD)
                                            </label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                                                <input
                                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 pl-10 pr-4 text-xl font-bold focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                    placeholder="500.00"
                                                    type="number"
                                                    value={accountValue}
                                                    onChange={(e) => setAccountValue(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Standard Fee (3%)</p>
                                                <p className="text-xl font-bold text-slate-300">${calculateFee(3)}</p>
                                            </div>
                                            <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                                                <p className="text-[10px] font-bold text-primary uppercase mb-1">Premium Fee (5%)</p>
                                                <p className="text-xl font-bold text-primary">${calculateFee(5)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Security Standards */}
                <section className="bg-background-light dark:bg-[#121418] py-20 px-6 border-t border-slate-200 dark:border-slate-800">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-center text-sm font-bold tracking-widest text-slate-500 uppercase mb-12">
                            Industrial Grade Security Standards
                        </h2>
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

export default Fees;
