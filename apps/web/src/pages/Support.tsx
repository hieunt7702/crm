import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Support: React.FC = () => {
    return (
        <>
            <Header />

            <main>
                {/* Hero Section with Search */}
                <section className="relative pt-20 pb-16 px-6 overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">How can we help you?</h1>
                        <p className="text-lg text-slate-400 mb-8">Knowledge Base: Find solutions for your secure game account trades</p>
                        <div className="relative max-w-2xl mx-auto">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
                            <input
                                className="w-full bg-card-dark border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-4 pl-12 pr-4 text-slate-200 placeholder:text-slate-500 transition-all"
                                placeholder="How can we help you?"
                                type="text"
                            />
                        </div>
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                            <span className="text-xs text-slate-500 uppercase font-bold tracking-widest mr-2">Popular:</span>
                            <a className="text-xs text-primary hover:underline" href="#">Change Email</a>
                            <span className="text-slate-700">•</span>
                            <a className="text-xs text-primary hover:underline" href="#">Dispute Process</a>
                            <span className="text-slate-700">•</span>
                            <a className="text-xs text-primary hover:underline" href="#">Withdrawal Times</a>
                        </div>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/40 blur-[100px] rounded-full"></div>
                    </div>
                </section>

                {/* Help Categories */}
                <section className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass-panel p-8 rounded-2xl glow-border transition-all group cursor-pointer">
                            <div className="size-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                <span className="material-symbols-outlined text-3xl">verified_user</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Security &amp; Privacy</h3>
                            <p className="text-sm text-slate-400 mb-4">Protect your assets and learn about our advanced account vault technology.</p>
                            <div className="space-y-2">
                                <a className="text-sm text-slate-300 hover:text-primary flex items-center gap-2" href="#">
                                    <span className="material-symbols-outlined text-xs">arrow_forward</span> 2FA Setup Guide
                                </a>
                                <a className="text-sm text-slate-300 hover:text-primary flex items-center gap-2" href="#">
                                    <span className="material-symbols-outlined text-xs">arrow_forward</span> Avoiding Scams
                                </a>
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-2xl glow-border transition-all group cursor-pointer">
                            <div className="size-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Exchange Process</h3>
                            <p className="text-sm text-slate-400 mb-4">Detailed guide on how our peer-to-peer escrow handles funds and assets.</p>
                            <div className="space-y-2">
                                <a className="text-sm text-slate-300 hover:text-primary flex items-center gap-2" href="#">
                                    <span className="material-symbols-outlined text-xs">arrow_forward</span> Payment Methods
                                </a>
                                <a className="text-sm text-slate-300 hover:text-primary flex items-center gap-2" href="#">
                                    <span className="material-symbols-outlined text-xs">arrow_forward</span> Refund Policy
                                </a>
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-2xl glow-border transition-all group cursor-pointer">
                            <div className="size-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                <span className="material-symbols-outlined text-3xl">badge</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Account Verification</h3>
                            <p className="text-sm text-slate-400 mb-4">Everything you need to know about KYC compliance and account limits.</p>
                            <div className="space-y-2">
                                <a className="text-sm text-slate-300 hover:text-primary flex items-center gap-2" href="#">
                                    <span className="material-symbols-outlined text-xs">arrow_forward</span> Verification Levels
                                </a>
                                <a className="text-sm text-slate-300 hover:text-primary flex items-center gap-2" href="#">
                                    <span className="material-symbols-outlined text-xs">arrow_forward</span> ID Submission Tips
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Live Support CTA */}
                <section className="max-w-7xl mx-auto px-6 py-12">
                    <div className="bg-gradient-to-r from-primary/20 to-transparent border border-primary/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">Need a Live Mediator?</h2>
                            <p className="text-slate-400">Speak directly with our trade coordinators. Experts are available 24/7 to resolve disputes.</p>
                        </div>
                        <button className="whitespace-nowrap bg-primary text-background-dark font-bold px-8 py-4 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined">forum</span>
                            Open Live Support
                        </button>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-3xl mx-auto px-6 py-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="group glass-panel rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                                <span className="font-medium">How long does the escrow process take?</span>
                                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
                                Typically, an automated trade takes 10-20 minutes. If manual verification or security audits are required for high-value accounts, it may take up to 24 hours to ensure full compliance and asset security.
                            </div>
                        </details>

                        <details className="group glass-panel rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                                <span className="font-medium">What happens if a seller tries to recover the account?</span>
                                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
                                Our platform uses a multi-stage email binding process and proprietary recovery prevention protocols. If a recovery attempt is detected during the warranty period, the payment is fully refunded to the buyer and the seller's profile is permanently terminated.
                            </div>
                        </details>

                        <details className="group glass-panel rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                                <span className="font-medium">Are there any hidden service fees?</span>
                                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
                                No. Our fee structure is fully transparent: we charge a 5% service fee plus standard network processing fees. You will see a complete cost breakdown before confirming any trade initiation.
                            </div>
                        </details>

                        <details className="group glass-panel rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                                <span className="font-medium">Can I cancel a trade after depositing funds?</span>
                                <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                            </summary>
                            <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
                                Yes, you can cancel a trade as long as the account credentials have not been released to you. Once you initiate the 'Handover Verification' step, the process becomes restricted to protect the data integrity of the seller's account.
                            </div>
                        </details>
                    </div>
                </section>

                {/* Security Badges */}
                <section className="py-12 px-6 border-t border-slate-800 opacity-50">
                    <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-12 grayscale">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined">security</span>
                            <span className="text-xs font-bold tracking-widest uppercase">SSL SECURE</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined">gpp_good</span>
                            <span className="text-xs font-bold tracking-widest uppercase">FRAUD PROTECTION</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined">lock</span>
                            <span className="text-xs font-bold tracking-widest uppercase">AES-256 ENCRYPTION</span>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Support;
