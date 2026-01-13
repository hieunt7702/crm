import React from 'react';

const MediatorPanel: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200 antialiased h-screen overflow-hidden">
            <div className="flex h-full w-full">
                {/* Sidebar Navigation */}
                <aside className="w-64 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-white dark:bg-background-dark">
                    <div className="p-6 flex items-center gap-3">
                        <div className="size-8 bg-primary rounded flex items-center justify-center text-background-dark">
                            <span className="material-symbols-outlined font-bold">shield_with_heart</span>
                        </div>
                        <div>
                            <h1 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white uppercase">Mediator Panel</h1>
                            <p className="text-[10px] text-primary font-medium tracking-widest uppercase opacity-80">Secure Escrow</p>
                        </div>
                    </div>
                    <nav className="flex-1 px-4 py-4 space-y-2">
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-surface-dark rounded-lg cursor-pointer transition-colors">
                            <span className="material-symbols-outlined !text-[20px]">dashboard</span>
                            <p className="text-sm font-medium">Dashboard</p>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 cursor-pointer">
                            <span className="material-symbols-outlined !text-[20px]">confirmation_number</span>
                            <p className="text-sm font-medium">Active Tickets</p>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-surface-dark rounded-lg cursor-pointer transition-colors">
                            <span className="material-symbols-outlined !text-[20px]">check_circle</span>
                            <p className="text-sm font-medium">Resolved</p>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-surface-dark rounded-lg cursor-pointer transition-colors">
                            <span className="material-symbols-outlined !text-[20px]">leaderboard</span>
                            <p className="text-sm font-medium">Reports</p>
                        </div>
                        <div className="pt-6 pb-2 px-3">
                            <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Admin Tools</p>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-surface-dark rounded-lg cursor-pointer transition-colors">
                            <span className="material-symbols-outlined !text-[20px]">security</span>
                            <p className="text-sm font-medium">Logs</p>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-surface-dark rounded-lg cursor-pointer transition-colors">
                            <span className="material-symbols-outlined !text-[20px]">settings</span>
                            <p className="text-sm font-medium">Settings</p>
                        </div>
                    </nav>
                    <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full bg-cover bg-center border border-primary/30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADC63r9bMUYMokk5MB0ey9N3wqJEj9GU78hnUOQE24Mibi9wKBRoQeIfkDDixr9XxP4mlDLRx2lq-CeO2DKo58fOsC3EO7SfiIMRq2-EZXjnAOftst5Xse49dfGcfsSUdJtQwJlkoXC3RA7HJtXZUIYQADtE03XBC8qz5tUX0sTdVX9C2Eb8BeN4zpGLOQc6IuuEu37rkQSSaFFTjfN1A9YD-lzkkyIb364sEE2FaP8QgzaYMTyCxO4Xn_wdotxQnAV9bVg1DYX4SM')" }}></div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-sm font-bold truncate">Alex Vance</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Senior Mediator</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark">
                    {/* Top Navbar */}
                    <header className="h-16 flex items-center justify-between px-8 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-10">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <span className="hover:text-primary cursor-pointer transition-colors">Escrow</span>
                                <span className="material-symbols-outlined !text-xs">chevron_right</span>
                                <span className="text-slate-900 dark:text-white font-medium">Active Tickets</span>
                            </div>
                            <div className="h-8 w-[1px] bg-slate-200 dark:border-slate-800"></div>
                            <label className="relative flex items-center">
                                <span className="material-symbols-outlined absolute left-3 text-slate-400 !text-lg">search</span>
                                <input className="bg-slate-100 dark:bg-surface-dark border-none rounded-lg pl-10 pr-4 py-1.5 text-sm focus:ring-1 focus:ring-primary w-64 transition-all" placeholder="Search Ticket ID, Game, User..." type="text" />
                            </label>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-[11px] font-bold text-primary uppercase tracking-tighter">Encrypted Session</span>
                            </div>
                            <button className="size-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-surface-dark text-slate-500 transition-colors">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                        </div>
                    </header>

                    <div className="flex-1 flex overflow-hidden">
                        {/* Ticket List Section */}
                        <section className="flex-1 overflow-y-auto custom-scrollbar p-8">
                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Active Tickets</h2>
                                    <p className="text-slate-500 dark:text-slate-400 mt-1">Reviewing 24 pending account exchanges.</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex h-9 items-center gap-2 px-4 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-sm font-medium">
                                        <span className="material-symbols-outlined !text-lg">filter_list</span>
                                        <span>Filter</span>
                                    </button>
                                    <button className="flex h-9 items-center gap-2 px-4 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-sm font-medium">
                                        <span className="material-symbols-outlined !text-lg">sort</span>
                                        <span>Elapsed Time</span>
                                    </button>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden halo-glow">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Ticket ID</th>
                                            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Game / Account</th>
                                            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Elapsed</th>
                                            <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        {/* Row 1: Selected */}
                                        <tr className="bg-primary/5 dark:bg-primary/10 border-l-4 border-l-primary cursor-pointer hover:bg-primary/10 transition-colors">
                                            <td className="px-6 py-5 font-mono text-sm font-bold text-primary">#ESC-9921</td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 rounded bg-slate-200 dark:bg-slate-700 bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoshrc9n2gfm3aLkfUgZbxQnYG9E1Gigrqn50xL117V__aK47bks3Kwp90y8-xlaMoprG-7buHLiQNvUCr6CxTWSu_HbMFTeplCVbAo0ukQ37nB7BdBFuR6wxcDuPzOtcBQNnI3KhBLljZBVCrTh-Nbg13RwAJ6sL1yQQ8L4xtMDF7cgiD7bbVIGtmf8E09yeUMWg-zJ4Ow9wY9lstlYz-4eDTeiYlCMwhlwNTCeEykwHYEeV6MgiekRDp6FWdKMmIWYCW_q6cBOj9')" }}></div>
                                                    <div>
                                                        <p className="text-sm font-bold">Valorant - Immortal Rank</p>
                                                        <p className="text-xs text-slate-500">NA Region • Skins Pack</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-tighter border border-primary/30">
                                                    Verification Pending
                                                </span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <p className="text-sm font-medium">02:14:55</p>
                                            </td>
                                            <td className="px-6 py-5">
                                                <p className="text-sm font-bold">$450.00</p>
                                            </td>
                                        </tr>
                                        {/* Row 2 */}
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                                            <td className="px-6 py-5 font-mono text-sm font-bold text-slate-500">#ESC-9918</td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 rounded bg-slate-200 dark:bg-slate-700 bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDf2nVV6f2K7DbppQeMU7Q1ksBJpa8317jUisu3CVYaaE7xViiXoFSS74YT7Qt9yfyt0NNjZC7W7s8FcHR8IHEaDGWpz2tckaDtePxTTQ5D2MO_0KS50MgMDkelDmdAD8f9jXamTGgDxWqYmkzFojHut1qkdDCNME7xrBVnk0Mr89BqG6gy4gwVZv12y2ej4GCCFwJaQqBzz5JFqo6ExMTlhMOUEFuGgNvVP7pwqrk9Xqa-lSVkNoDGvCgovJPTLYdodKawyYfPWaZl')" }}></div>
                                                    <div>
                                                        <p className="text-sm font-bold">LoL - Diamond IV</p>
                                                        <p className="text-xs text-slate-500">EUW • All Champs</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-tighter border border-amber-500/30">
                                                    Awaiting Credentials
                                                </span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <p className="text-sm font-medium">08:32:10</p>
                                            </td>
                                            <td className="px-6 py-5">
                                                <p className="text-sm font-bold text-slate-500">$1,200.00</p>
                                            </td>
                                        </tr>
                                        {/* Row 3 */}
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                                            <td className="px-6 py-5 font-mono text-sm font-bold text-slate-500">#ESC-9899</td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-8 rounded bg-slate-200 dark:bg-slate-700 bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCf2SnnNdB2i7z23FtWji69Yh5SxWm8cx13ZI6Yy06pCOu9prhetyRXNl79fxA6Dbkhgf5jRwJ0WfmnE98w5ftR2twxGBJods7416Y-g4TMuY-Dc1E9Nry7HpAxA1a0EtH0IKjfsCdAUfbbG0OPjb1Dfsnrg3vgEYz1UsQrJ7jHJ7vI-rr_UkYGaU9X0w0BXHZNkxW8j85dBuOGuXHm1qhl4cfsWjJRJvwMwr1hmbpdi7qowZGevzOonhUQlJ3SgKi_91-eg3gRyMuN')" }}></div>
                                                    <div>
                                                        <p className="text-sm font-bold">Genshin - AR 58</p>
                                                        <p className="text-xs text-slate-500">Global • C6 Raiden</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-red/20 text-accent-red text-[10px] font-bold uppercase tracking-tighter border border-accent-red/30">
                                                    Disputed
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 text-accent-red">
                                                <p className="text-sm font-medium">23:05:12</p>
                                            </td>
                                            <td className="px-6 py-5">
                                                <p className="text-sm font-bold text-slate-500">$85.00</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Side Detail Inspector Panel */}
                        <aside className="w-[450px] bg-white dark:bg-surface-dark border-l border-slate-200 dark:border-slate-800 flex flex-col shadow-2xl z-20 overflow-hidden">
                            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                                <div>
                                    <h3 className="font-bold text-lg">Ticket Detail</h3>
                                    <p className="text-xs font-mono text-primary font-bold">#ESC-9921</p>
                                </div>
                                <button className="size-8 rounded-full flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                    <span className="material-symbols-outlined !text-xl">close</span>
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
                                {/* Summary Info */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-slate-800">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Buyer</p>
                                        <p className="text-sm font-bold">User_99214</p>
                                        <p className="text-[10px] text-primary">ID Verified</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-slate-800">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Seller</p>
                                        <p className="text-sm font-bold">ShadowLord_X</p>
                                        <p className="text-[10px] text-amber-500">Unverified</p>
                                    </div>
                                </div>
                                {/* Chat Logs */}
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Chat History</h4>
                                        <span className="text-[10px] bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400">12 Messages</span>
                                    </div>
                                    <div className="space-y-4 font-display">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[10px] font-bold text-primary">Seller</span>
                                                <span className="text-[9px] text-slate-500 uppercase tracking-tight">10:42 AM</span>
                                            </div>
                                            <div className="p-3 rounded-lg bg-slate-100 dark:bg-background-dark text-xs leading-relaxed border-l-2 border-slate-300 dark:border-slate-700">
                                                I've sent the email change request. Please check your inbox and confirm the link.
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[10px] font-bold text-slate-500">Buyer</span>
                                                <span className="text-[9px] text-slate-500 uppercase tracking-tight">10:44 AM</span>
                                            </div>
                                            <div className="p-3 rounded-lg bg-slate-100 dark:bg-background-dark text-xs leading-relaxed border-l-2 border-slate-300 dark:border-slate-700">
                                                Received. Clicking now. Can you also screenshot the skin inventory one last time?
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[10px] font-bold text-primary">Seller</span>
                                                <span className="text-[9px] text-slate-500 uppercase tracking-tight">10:45 AM</span>
                                            </div>
                                            <div className="p-3 rounded-lg bg-slate-100 dark:bg-background-dark text-xs leading-relaxed border-l-2 border-slate-300 dark:border-slate-700 italic text-slate-500">
                                                [Attachment: skin_inventory_proof.png]
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Evidence Gallery */}
                                <div>
                                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Exchange Evidence</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="aspect-video rounded-lg bg-slate-200 dark:bg-slate-800 bg-cover border border-slate-300 dark:border-slate-700 relative group overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQoVR4SLZZseG--5rjnssgUor8cQ27Ul4MWx76dFZCEJ2djorCE0mgVFDZwMTE8Md0dl-F393azLCrONVNMBQzYU7AMdQ_5Ewzk7FglJAt50nW51fF-tg04iNM90Hk1taUDesyRdnwQCLPMl50h5oZXp_js_hfLoDFqmieXStlj528prmKl-7hzXEz0y1gIBy47pzQIomydtyvYdY2anmX2sLeA0J6itJKR3_1L1lMbGjPNvIpuIcNS1GkRuxP2ZR3NlPkMpbR84U9')" }}>
                                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-zoom-in">
                                                <span className="material-symbols-outlined text-white">zoom_in</span>
                                            </div>
                                        </div>
                                        <div className="aspect-video rounded-lg bg-slate-200 dark:bg-slate-800 bg-cover border border-slate-300 dark:border-slate-700 relative group overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARbwZVW3pqvXJj4hQSr7Ydvq3eOcofRJkt8Y6Dv5wEVMRCt1p5vIP00_sI0SNCwFnfzFYQjBiyk1EJdDP4J_R_FbFtOXkde1-r2TJrnfNs9sB31eveI6AapZ1Iv6RMU1zzjTrkQKiTR0cq5tVOlRWjhq_LkNzRW7ZVRXtnxxpiRP4jI8JmeYCtVGyO3YQbLh-XkI6SGpc43dAJ1k-eVRkCmaKVOY0wMw2oCHEgjOe2x4toMvManToL24YhwYKWEXL_PiuCBEtMf95n')" }}>
                                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-zoom-in">
                                                <span className="material-symbols-outlined text-white">zoom_in</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Action Bar Footer */}
                            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 space-y-3">
                                <button className="w-full h-12 bg-primary text-background-dark font-bold rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined">verified_user</span>
                                    <span>Approve Transfer</span>
                                </button>
                                <div className="flex gap-3">
                                    <button className="flex-1 h-10 border border-accent-red text-accent-red font-bold rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-accent-red/10 transition-all">
                                        <span className="material-symbols-outlined !text-lg">gavel</span>
                                        <span>Escalate to Dispute</span>
                                    </button>
                                    <button className="size-10 border border-slate-300 dark:border-slate-700 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                                        <span className="material-symbols-outlined">more_horiz</span>
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MediatorPanel;
