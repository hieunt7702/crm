import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden pt-20 pb-32">
                    <div className="absolute inset-0 hero-gradient pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">Live Security Monitoring Active</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                                Secure Account Exchange – <br />
                                <span className="text-primary italic">Trusted Middleman</span> Service
                            </h1>
                            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed">
                                The definitive escrow platform for high-value gaming assets.
                                Precision-engineered for absolute security and cryptographic verification.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-background-dark text-lg font-bold px-10 py-4 rounded-xl transition-all glow-effect">
                                    Start Secure Exchange
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                                <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-200 dark:border-border-dark bg-white/5 hover:bg-white/10 px-10 py-4 rounded-xl transition-all">
                                    View Security Audit
                                </button>
                            </div>
                            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold">$240M+</span>
                                    <span className="text-xs uppercase tracking-widest">Volume Protected</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold">12k+</span>
                                    <span className="text-xs uppercase tracking-widest">Active Users</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold">0%</span>
                                    <span className="text-xs uppercase tracking-widest">Funds Lost</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold">2.4s</span>
                                    <span className="text-xs uppercase tracking-widest">Avg Response</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Bento Grid */}
                <section className="py-24 bg-slate-50 dark:bg-surface-dark/30 border-y border-slate-200 dark:border-border-dark">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                            <div className="max-w-xl">
                                <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">Core Infrastructure</h2>
                                <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Built for Absolute Trust</h3>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-2">
                                We provide a premium utility for private, secure peer-to-peer asset transfers without the friction of a public marketplace.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            {/* Security Card */}
                            <div className="md:col-span-8 group relative overflow-hidden bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-2xl p-8 hover:border-primary/50 transition-all">
                                <div className="flex flex-col h-full justify-between">
                                    <div>
                                        <span className="material-symbols-outlined text-primary !text-4xl mb-6">verified_user</span>
                                        <h4 className="text-2xl font-bold mb-4">Security Infrastructure</h4>
                                        <p className="text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
                                            Our platform utilizes multi-signature wallet verification and redundant 2FA protection for every transaction layer. Each credential transfer is sandboxed and audited in real-time.
                                        </p>
                                    </div>
                                    <div className="mt-8 flex gap-3">
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded">256-BIT AES</span>
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded">SOC2 TYPE II</span>
                                    </div>
                                </div>
                                <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
                                    <span className="material-symbols-outlined !text-[200px]">security</span>
                                </div>
                            </div>
                            {/* Transparency Card */}
                            <div className="md:col-span-4 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-2xl p-8 hover:border-primary/50 transition-all">
                                <span className="material-symbols-outlined text-primary !text-4xl mb-6">visibility</span>
                                <h4 className="text-xl font-bold mb-4">Transparency</h4>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Full audit logs and real-time tracking of account credentials and transfer status for both parties.
                                </p>
                            </div>
                            {/* Privacy Card */}
                            <div className="md:col-span-4 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-2xl p-8 hover:border-primary/50 transition-all">
                                <span className="material-symbols-outlined text-primary !text-4xl mb-6">lock</span>
                                <h4 className="text-xl font-bold mb-4">Privacy First</h4>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                    No public listings. All exchanges are strictly private and direct between verified parties.
                                </p>
                            </div>
                            {/* No Listings Card */}
                            <div className="md:col-span-8 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-2xl p-8 hover:border-primary/50 transition-all">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex-1">
                                        <span className="material-symbols-outlined text-primary !text-4xl mb-6">list</span>
                                        <h4 className="text-xl font-bold mb-4">Zero Marketplace Friction</h4>
                                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                            We are a pure escrow utility. By removing the marketplace element, we eliminate buyer-seller friction and focus entirely on the safety of the asset transfer.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-48 h-32 bg-slate-100 dark:bg-background-dark/50 rounded-xl flex items-center justify-center border border-dashed border-slate-300 dark:border-border-dark">
                                        <div className="text-center">
                                            <div className="text-xs font-bold uppercase opacity-50">Utility Model</div>
                                            <div className="text-primary font-bold">Active</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline / Process */}
                <section className="py-24 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">The Protocol</h2>
                            <h3 className="!text-4xl font-bold tracking-tight mb-8">How the Secure Exchange Works</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 leading-relaxed">
                                Our workflow is designed to minimize risk at every stage. We act as the neutral technical layer that holds assets and funds until all criteria are met.
                            </p>
                            <div className="space-y-4">
                                <div className="p-6 bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark flex items-center gap-6">
                                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                                    <div>
                                        <h5 className="font-bold">Encryption Verified</h5>
                                        <p className="text-sm text-slate-500">All data packets are end-to-end encrypted.</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark flex items-center gap-6">
                                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                                    <div>
                                        <h5 className="font-bold">Identity Handshake</h5>
                                        <p className="text-sm text-slate-500">Verification of both parties through secure APIs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-1 bg-slate-200 dark:bg-border-dark rounded-3xl">
                            <div className="bg-background-light dark:bg-background-dark rounded-[calc(1.5rem-4px)] p-8">
                                <div className="grid grid-cols-[48px_1fr] gap-x-6">
                                    {/* Step 1 */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-xl bg-primary text-background-dark flex items-center justify-center">
                                            <span className="material-symbols-outlined font-bold">add_circle</span>
                                        </div>
                                        <div className="w-0.5 bg-primary/20 grow my-2"></div>
                                    </div>
                                    <div className="pb-10">
                                        <h4 className="text-xl font-bold mb-1">Initiate</h4>
                                        <p className="text-slate-500 dark:text-slate-400">Start a private escrow request by generating a unique encrypted link for your counterparty.</p>
                                    </div>
                                    {/* Step 2 */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-xl bg-surface-dark dark:bg-border-dark border border-primary/50 text-primary flex items-center justify-center">
                                            <span className="material-symbols-outlined">fingerprint</span>
                                        </div>
                                        <div className="w-0.5 bg-primary/20 grow my-2"></div>
                                    </div>
                                    <div className="pb-10">
                                        <h4 className="text-xl font-bold mb-1">Verify</h4>
                                        <p className="text-slate-500 dark:text-slate-400">Automated identity checks and digital asset validation ensure the account matches the description.</p>
                                    </div>
                                    {/* Step 3 */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-xl bg-surface-dark dark:bg-border-dark border border-primary/50 text-primary flex items-center justify-center">
                                            <span className="material-symbols-outlined">account_balance_wallet</span>
                                        </div>
                                        <div className="w-0.5 bg-primary/20 grow my-2"></div>
                                    </div>
                                    <div className="pb-10">
                                        <h4 className="text-xl font-bold mb-1">Secure Hold</h4>
                                        <p className="text-slate-500 dark:text-slate-400">Funds are held in high-security cold storage. Credentials are locked in a temporary vault.</p>
                                    </div>
                                    {/* Step 4 */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-xl bg-surface-dark dark:bg-border-dark border border-primary/50 text-primary flex items-center justify-center">
                                            <span className="material-symbols-outlined">handshake</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">Transfer &amp; Release</h4>
                                        <p className="text-slate-500 dark:text-slate-400">Once both parties confirm the handoff, funds and account ownership are released simultaneously.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-6">
                    <div className="max-w-5xl mx-auto rounded-3xl bg-primary p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                        <h2 className="text-3xl md:text-5xl font-black text-background-dark mb-6 tracking-tight">Ready for a Secure Exchange?</h2>
                        <p className="text-lg text-background-dark/80 mb-10 max-w-xl mx-auto font-medium">
                            Join thousands of high-value asset traders who prioritize security over convenience.
                            No public listings, no noise, just pure security.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="bg-background-dark text-white font-bold px-10 py-4 rounded-xl hover:scale-105 transition-all">
                                Create Your First Request
                            </button>
                            <button className="bg-transparent border-2 border-background-dark text-background-dark font-bold px-10 py-4 rounded-xl hover:bg-background-dark/5 transition-all">
                                Learn About Safety
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default LandingPage;
