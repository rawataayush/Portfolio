const Projects = () => {
    return (
        <section class="w-full px-gutter-sm lg:px-margin py-space-xl border-b border-white/10" id="selected-work">
            <div class="max-w-screen-2xl mx-auto flex flex-col gap-space-xl">
                 {/* Section Header */}
                <div class="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-space-md gap-space-sm">
                    <div>
                        <span class="font-mono-index text-mono-index text-outline tracking-wider uppercase block mb-space-xs">[ WORK REPOSITORY ]</span>
                        <h2 class="font-headline-lg text-headline-lg text-primary tracking-tighter uppercase font-bold">02 / SELECTED WORK</h2>
                    </div>
                    <p class="font-mono-meta text-mono-meta text-on-surface-variant max-w-md uppercase">
                        Real web projects, hackathon initiatives, and interface explorations developed with modern frontend tools.
                    </p>
                </div>
                 {/* PROJECT 1: Featured Showcase - TabMarko */}
                <article class="w-full border border-white/15 hover:border-white/40 bg-surface-container-lowest p-space-md lg:p-space-lg flex flex-col gap-space-lg transition-colors duration-300">
                     {/* Top Meta Roster */}
                    <div class="flex flex-wrap items-center justify-between border-b border-white/10 pb-space-sm gap-space-sm">
                        <div class="flex items-center gap-space-md">
                            <span class="font-mono-index text-mono-index text-primary">[ FEATURED // HACKATHON PROJECT ]</span>
                            <span class="text-outline">/</span>
                            <span class="font-mono-meta text-mono-meta text-on-surface-variant">REACT · TAILWIND CSS · SUPABASE · REACT ROUTER · AXIOS</span>
                        </div>
                        <span class="font-mono-index text-mono-index text-outline">NYC CODEQUEST 2026 // TEAM LEAD</span>
                    </div>
                     {/* Project Title + Description */}
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
                        <div class="lg:col-span-5 flex flex-col gap-space-sm">
                            <h3 class="font-headline-md text-headline-md text-primary uppercase font-bold tracking-tight">
                                TABMARKO — BROWSER TAB MANAGER
                            </h3>
                            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                A web application for organizing and managing browser tabs efficiently, built during NYC CodeQuest 2026 where Aayush served as team lead. Designed to combat context switching and browser memory bloat by grouping, saving, and syncing sessions to Supabase storage.
                            </p>
                            <div class="flex flex-wrap gap-space-xs pt-space-xs">
                                <span class="px-space-xs py-0.5 border border-white/20 hover:border-white/50 font-mono-index text-mono-index text-on-surface-variant transition-colors">SUPABASE CLOUD</span>
                                <span class="px-space-xs py-0.5 border border-white/20 hover:border-white/50 font-mono-index text-mono-index text-on-surface-variant transition-colors">REACT ROUTER</span>
                                <span class="px-space-xs py-0.5 border border-white/20 hover:border-white/50 font-mono-index text-mono-index text-on-surface-variant transition-colors">STATE MANAGEMENT</span>
                            </div>
                            <div class="flex flex-wrap items-center gap-space-md pt-space-sm">
                                <a class="font-mono-meta text-mono-meta text-primary hover:underline flex items-center gap-space-xs group" href="https://github.com" rel="noreferrer" target="_blank">
                                    <span>[ VIEW SOURCE CODE ]</span><span class="font-mono-index group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
                                </a>
                                <span class="font-mono-meta text-mono-meta text-outline">
                                    [ DEPLOYMENT UNAVAILABLE ]
                                </span>
                            </div>
                        </div>
                         {/* Monochrome UI Workspace Preview */}
                        <div class="lg:col-span-7 bg-[#111111] border border-white/15 p-space-md flex flex-col gap-space-sm select-none hover:border-white/30 transition-colors duration-200">
                             {/* Simulated Tab Header */}
                            <div class="flex items-center justify-between border-b border-white/10 pb-space-xs font-mono-index text-mono-index text-outline">
                                <div class="flex items-center gap-2">
                                    <span class="w-2.5 h-2.5 rounded-full border border-primary/40 bg-primary"></span>
                                    <span class="text-primary font-bold">TABMARKO // DASHBOARD</span>
                                    <span class="inline-block w-1.5 h-3 bg-white animate-cursor-blink ml-0.5"></span>
                                </div>
                                <span>NYC CODEQUEST 2026</span>
                            </div>
                             {/* Application View Mockup */}
                            <div class="relative w-full bg-surface-container-lowest border border-white/10 p-space-md flex flex-col gap-space-md overflow-hidden">
                                 {/* Simulated App Top Bar */}
                                <div class="flex items-center justify-between border-b border-white/10 pb-space-xs">
                                    <div class="flex items-center gap-2">
                                        <span class="px-2 py-0.5 bg-primary text-on-primary font-mono-index text-mono-index font-medium">WORKSPACE: RESEARCH</span>
                                        <span class="text-outline font-mono-index text-mono-index">14 SAVED TABS</span>
                                    </div>
                                    <span class="px-2 py-0.5 border border-white/20 hover:border-white/50 font-mono-index text-mono-index text-primary transition-colors cursor-default">+ NEW SESSION</span>
                                </div>
                                 {/* Tab Groups Grid */}
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                                    <div class="border border-white/10 hover:border-white/25 p-space-xs bg-[#121212] flex flex-col gap-1 transition-colors">
                                        <div class="flex justify-between font-mono-index text-mono-index text-primary">
                                            <span>SESSION: FRONTEND DOCS</span>
                                            <span>6 TABS</span>
                                        </div>
                                        <p class="font-mono-index text-[11px] text-outline">React 19 Docs · Tailwind Reference · MDN</p>
                                        <div class="w-full bg-white/10 h-1 mt-1"><div class="bg-primary h-1 w-full"></div></div>
                                    </div>
                                    <div class="border border-white/10 hover:border-white/25 p-space-xs bg-[#121212] flex flex-col gap-1 transition-colors">
                                        <div class="flex justify-between font-mono-index text-mono-index text-primary">
                                            <span>SESSION: COMPUTER NETWORKS</span>
                                            <span>8 TABS</span>
                                        </div>
                                        <p class="font-mono-index text-[11px] text-outline">OSI Model · TCP Handshake · HTTP/3 RFC</p>
                                        <div class="w-full bg-white/10 h-1 mt-1"><div class="bg-primary h-1 w-3/4"></div></div>
                                    </div>
                                </div>
                                 {/* Data Sync Status */}
                                <div class="flex justify-between items-center border-t border-white/10 pt-space-xs font-mono-index text-mono-index text-outline">
                                    <span class="flex items-center gap-1.5">
                                        <span class="relative flex h-1.5 w-1.5">
                                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                            <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                                        </span>
                                        SUPABASE SYNC: OK
                                    </span>
                                    <span>AUTHENTICATED // JWT</span>
                                    <span>LATENCY: 42MS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                 {/* PROJECTS 2 & 3: Asymmetric Split Grid */}
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                     {/* Project 2: Student Management System */}
                    <article class="lg:col-span-6 border border-white/15 hover:border-white/40 hover:bg-white/2 bg-surface-container-lowest p-space-md lg:p-space-lg flex flex-col justify-between gap-space-md transition-all duration-300 group">
                        <div class="flex flex-col gap-space-sm">
                            <div class="flex items-center justify-between border-b border-white/10 pb-space-xs font-mono-index text-mono-index">
                                <span class="text-primary">[ 02 // WEB APPLICATION ]</span>
                                <span class="text-outline">REACT / CSS MODULES</span>
                            </div>
                            <h3 class="font-headline-sm text-headline-sm text-primary uppercase font-bold tracking-tight pt-space-xs group-hover:text-white transition-colors">
                                STUDENT MANAGEMENT SYSTEM
                            </h3>
                            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                A clean, mobile-first administrative interface designed for managing student profiles, course tracking, and record operations with accessible UX and responsive forms.
                            </p>
                             {/* Technical Mock UI Strip */}
                            <div class="border border-white/10 bg-[#121212] p-space-sm font-mono-index text-mono-index flex flex-col gap-2 my-space-xs group-hover:border-white/20 transition-colors">
                                <div class="flex justify-between text-outline">
                                    <span>RECORDS VIEW</span>
                                    <span class="text-primary">BATCH 2025 // ENROLLED: 120</span>
                                </div>
                                <div class="divide-y divide-white/10 text-[11px]">
                                    <div class="py-1 flex justify-between text-primary"><span>#1042 — RAWAT, A.</span><span>BCA // SEM III</span></div>
                                    <div class="py-1 flex justify-between text-outline"><span>#1043 — SHARMA, P.</span><span>BCA // SEM III</span></div>
                                    <div class="py-1 flex justify-between text-outline"><span>#1044 — VERMA, S.</span><span>BCA // SEM I</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between pt-space-xs border-t border-white/10">
                            <span class="font-mono-index text-mono-index text-outline">RESPONSIVE LAYOUT</span>
                            <a class="font-mono-meta text-mono-meta text-primary hover:underline flex items-center gap-space-xs group/link" href="https://github.com" rel="noreferrer" target="_blank">
                                <span>[ VIEW SOURCE CODE ]</span><span class="font-mono-index group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200">↗</span>
                            </a>
                        </div>
                    </article>
                     {/* Project 3: React Profile Card UI */}
                    <article class="lg:col-span-6 border border-white/15 hover:border-white/40 hover:bg-white/2 bg-surface-container-lowest p-space-md lg:p-space-lg flex flex-col justify-between gap-space-md transition-all duration-300 group">
                        <div class="flex flex-col gap-space-sm">
                            <div class="flex items-center justify-between border-b border-white/10 pb-space-xs font-mono-index text-mono-index">
                                <span class="text-primary">[ 03 // UI COMPONENT ]</span>
                                <span class="text-outline">REACT / TAILWIND</span>
                            </div>
                            <h3 class="font-headline-sm text-headline-sm text-primary uppercase font-bold tracking-tight pt-space-xs group-hover:text-white transition-colors">
                                REACT PROFILE CARD UI
                            </h3>
                            <p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                Interactive modular component exploration focusing on micro-interactions, responsive states, and clean CSS architecture with high-contrast aesthetics.
                            </p>
                             {/* Preview Frame */}
                            <div class="border border-white/10 bg-[#121212] p-space-md font-mono-index text-mono-index flex flex-col justify-between h-32 my-space-xs group-hover:border-white/20 transition-colors">
                                <div class="flex justify-between border-b border-white/10 pb-1 text-outline">
                                    <span>COMPONENT: PROFILE_CARD</span>
                                    <span class="text-primary">ACTIVE STATE</span>
                                </div>
                                <div class="flex items-center gap-space-md">
                                    <div class="w-10 h-10 border border-primary flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-200">AR</div>
                                    <div class="flex flex-col">
                                        <span class="text-primary font-bold">AAYUSH RAWAT</span>
                                        <span class="text-outline text-[11px]">DEVELOPER &amp; DESIGN SYSTEM ENTHUSIAST</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between pt-space-xs border-t border-white/10">
                            <span class="font-mono-index text-mono-index text-outline">COMPONENT ARCHITECTURE</span>
                            <a class="font-mono-meta text-mono-meta text-primary hover:underline flex items-center gap-space-xs group/link" href="https://github.com" rel="noreferrer" target="_blank">
                                <span>[ VIEW SOURCE CODE ]</span><span class="font-mono-index group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200">↗</span>
                            </a>
                        </div>
                    </article>
                </div>
                 {/* PROJECT 4: Clean Index Bar */}
                <div class="w-full border border-white/15 hover:border-white/40 bg-surface-container-lowest hover:bg-white/2 p-space-md transition-all duration-300 group">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                        <div class="flex items-center gap-space-md">
                            <span class="font-mono-index text-mono-index text-outline group-hover:text-primary transition-colors">04</span>
                            <div>
                                <h4 class="font-headline-sm text-headline-sm text-primary tracking-tight uppercase font-medium">DOM DESIGN EDITOR &amp; GITHUB PROFILE EXPLORATION</h4>
                                <p class="font-mono-meta text-mono-meta text-on-surface-variant">INTERACTIVE DOM MANIPULATION EXPERIMENTS AND API INTEGRATION PRACTICE // JAVASCRIPT · DOM APIS · FETCH</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-space-lg">
                            <a class="font-mono-meta text-mono-meta text-primary border border-white/20 px-space-md py-space-xs hover:border-primary hover:bg-primary hover:text-black transition-all duration-200 flex items-center gap-space-xs group/link" href="https://github.com" rel="noreferrer" target="_blank">
                                <span>VIEW SOURCE CODE</span>
                                <span class="font-mono-index group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;