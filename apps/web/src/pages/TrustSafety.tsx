import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TrustSafety: React.FC = () => {
    return (
        <>
            <Header />

            <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
                {/* Hero Section */}
                <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            System Status: Active
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                            Our Protocol for <span className="text-primary italic">Absolute</span> Security
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-lg leading-relaxed">
                            Protecting high-value game accounts through multi-layered verification, military-grade encryption, and the industry-first Wipe Protocol.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="h-12 px-8 rounded-lg bg-primary text-background-dark font-bold hover:scale-105 transition-transform">
                                Verify My Identity
                            </button>
                            <button className="h-12 px-8 rounded-lg border border-border-dark font-bold hover:bg-slate-100 dark:hover:bg-panel-dark transition-colors">
                                Read Whitepaper
                            </button>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-xl blur-xl opacity-50"></div>
                        <div className="relative bg-panel-dark border border-border-dark rounded-xl p-8 overflow-hidden">
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <p className="text-slate-500 text-xs font-bold uppercase tracking-tighter">Encryption Standard</p>
                                    <p className="text-2xl font-bold">AES-256 GCM</p>
                                </div>
                                <span className="material-symbols-outlined text-primary text-4xl">fingerprint</span>
                            </div>
                            <div className="space-y-4">
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[85%]"></div>
                                </div>
                                <div className="flex justify-between text-xs font-mono text-slate-500">
                                    <span>0x8A...F29</span>
                                    <span>VERIFICATION IN PROGRESS</span>
                                </div>
                            </div>
                            {/* Decorative abstract element */}
                            <div className="mt-8 flex gap-2">
                                <div className="h-12 w-1 bg-primary/20 rounded-full"></div>
                                <div className="h-16 w-1 bg-primary/40 rounded-full"></div>
                                <div className="h-20 w-1 bg-primary rounded-full"></div>
                                <div className="h-16 w-1 bg-primary/40 rounded-full"></div>
                                <div className="h-12 w-1 bg-primary/20 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl border border-border-dark bg-panel-dark/50 flex flex-col gap-2">
                        <p className="text-slate-400 text-sm font-medium">Successful Transfers</p>
                        <div className="flex items-end gap-3">
                            <p className="text-3xl font-bold">12,504</p>
                            <span className="text-primary text-sm font-bold pb-1 flex items-center">
                                <span className="material-symbols-outlined text-sm">trending_up</span> 12%
                            </span>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-border-dark bg-panel-dark/50 flex flex-col gap-2">
                        <p className="text-slate-400 text-sm font-medium">Avg. Verification Time</p>
                        <div className="flex items-end gap-3">
                            <p className="text-3xl font-bold">14.2m</p>
                            <span className="text-red-400 text-sm font-bold pb-1 flex items-center">
                                <span className="material-symbols-outlined text-sm">timer</span> -2m
                            </span>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-border-dark bg-panel-dark/50 flex flex-col gap-2">
                        <p className="text-slate-400 text-sm font-medium">Security Nodes Active</p>
                        <div className="flex items-end gap-3">
                            <p className="text-3xl font-bold">1,204</p>
                            <span className="text-primary text-sm font-bold pb-1 flex items-center">
                                <span className="material-symbols-outlined text-sm">check_circle</span> 100%
                            </span>
                        </div>
                    </div>
                </section>

                {/* Security Bento Grid */}
                <section className="space-y-8">
                    <div className="flex items-end justify-between">
                        <div>
                            <h3 className="text-3xl font-bold">Our Security Bento</h3>
                            <p className="text-slate-400">The pillars of our zero-trust escrow environment.</p>
                        </div>
                        <div className="hidden md:block h-px flex-1 mx-8 bg-border-dark"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Ownership Card */}
                        <div className="bento-card md:col-span-2 p-8 rounded-xl border border-border-dark bg-panel-dark flex flex-col justify-between min-h-[300px] relative overflow-hidden group">
                            <div className="relative z-10 space-y-4 max-w-md">
                                <span className="material-symbols-outlined text-primary text-4xl">verified_user</span>
                                <h4 className="text-2xl font-bold">Ownership Verification</h4>
                                <p className="text-slate-400 leading-relaxed">
                                    Our proprietary API handshake confirms account contents, rank, and history directly with game servers. We eliminate "reclaim" risk through mandatory 2FA binding to our secure temporary vault.
                                </p>
                            </div>
                            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
                            <div className="mt-8 flex gap-4 overflow-hidden opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                                <div className="h-10 w-24 rounded border border-border-dark flex items-center justify-center font-bold text-xs">VALORANT</div>
                                <div className="h-10 w-24 rounded border border-border-dark flex items-center justify-center font-bold text-xs">CS2</div>
                                <div className="h-10 w-24 rounded border border-border-dark flex items-center justify-center font-bold text-xs">WOW</div>
                                <div className="h-10 w-24 rounded border border-border-dark flex items-center justify-center font-bold text-xs">LOL</div>
                            </div>
                        </div>
                        {/* Encryption Card */}
                        <div className="bento-card p-8 rounded-xl border border-border-dark bg-panel-dark flex flex-col gap-6">
                            <span className="material-symbols-outlined text-primary text-4xl">enhanced_encryption</span>
                            <h4 className="text-2xl font-bold">Data Encryption</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Military-grade AES-256-GCM standards for all credential storage. Keys are rotated every 4 hours and never stored on the same physical server as the data.
                            </p>
                            <div className="mt-auto pt-6 border-t border-border-dark flex items-center justify-between">
                                <span className="text-xs font-mono text-slate-500 tracking-widest">TLS 1.3 ENABLED</span>
                                <span className="material-symbols-outlined text-slate-500 text-xl">lock</span>
                            </div>
                        </div>
                        {/* Finality Card */}
                        <div className="bento-card p-8 rounded-xl border border-border-dark bg-panel-dark flex flex-col gap-6">
                            <div className="flex justify-between items-start">
                                <span className="material-symbols-outlined text-primary text-4xl">auto_delete</span>
                                <div className="px-2 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold">AUTO-WIPE</div>
                            </div>
                            <h4 className="text-2xl font-bold">24-Hour Finality</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                The Wipe Protocol: All trade data, temporary credentials, and session logs are permanently purged from our infrastructure exactly 24 hours post-transaction.
                            </p>
                            <div className="relative h-2 w-full bg-slate-800 rounded-full mt-4">
                                <div className="absolute left-0 top-0 bottom-0 bg-primary w-2/3 rounded-full"></div>
                            </div>
                            <p className="text-[10px] text-slate-500 text-center uppercase font-bold">T-Minus 08:24:12 to Data Purge</p>
                        </div>
                        {/* Support Card */}
                        <div className="bento-card md:col-span-2 p-8 rounded-xl border border-border-dark bg-panel-dark flex items-center gap-8 group">
                            <div className="shrink-0 h-24 w-24 rounded-full border border-border-dark flex items-center justify-center bg-slate-800/50">
                                <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform">support_agent</span>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-bold">Human-in-the-Loop Oversight</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    While our protocols are automated, our expert security team monitors every high-value exchange in real-time. Disputes are resolved in under 60 minutes.
                                </p>
                                <a className="inline-flex items-center text-primary text-xs font-bold uppercase tracking-widest gap-2 mt-2 hover:underline" href="#">
                                    Contact Security Team <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-3xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h3 className="text-3xl font-bold">Common Inquiries</h3>
                        <p className="text-slate-400">Everything you need to know about our safety measures.</p>
                    </div>
                    <div className="space-y-4">
                        {/* FAQ Item 1 */}
                        <div className="border border-border-dark rounded-xl bg-panel-dark/30 overflow-hidden">
                            <button className="w-full px-6 py-5 flex items-center justify-between text-left group">
                                <span className="font-bold">What if the seller tries to reclaim the account?</span>
                                <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">add</span>
                            </button>
                            <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-border-dark pt-4 bg-panel-dark/50">
                                Our protocol requires the original account owner to bind the account to a new, secure email provided by us during the escrow period. We also verify that all "recovery links" and secondary security methods are removed before the exchange is finalized.
                            </div>
                        </div>
                        {/* FAQ Item 2 */}
                        <div className="border border-border-dark rounded-xl bg-panel-dark/30">
                            <button className="w-full px-6 py-5 flex items-center justify-between text-left group">
                                <span className="font-bold">How is my payment protected during verification?</span>
                                <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">add</span>
                            </button>
                        </div>
                        {/* FAQ Item 3 */}
                        <div className="border border-border-dark rounded-xl bg-panel-dark/30">
                            <button className="w-full px-6 py-5 flex items-center justify-between text-left group">
                                <span className="font-bold">What data is stored after the 24-hour window?</span>
                                <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">add</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="relative rounded-3xl overflow-hidden bg-primary p-12 lg:p-20 text-center">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-4xl lg:text-5xl font-bold text-background-dark max-w-2xl mx-auto tracking-tight">
                            Ready for a secure, professional exchange?
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="px-10 py-4 bg-background-dark text-white rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
                                <span className="material-symbols-outlined">rocket_launch</span>
                                Launch Escrow
                            </button>
                            <button className="px-10 py-4 border-2 border-background-dark/20 text-background-dark rounded-xl font-bold hover:bg-background-dark/5 transition-colors">
                                View Marketplace
                            </button>
                        </div>
                        <p className="text-background-dark/60 text-sm font-medium">Join 50,000+ traders globally</p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default TrustSafety;
