const Journey = () => {
    return (
        <section class="w-full px-gutter-sm lg:px-margin py-space-xl border-b border-white/10" id="journey">
            <div class="max-w-screen-2xl mx-auto flex flex-col gap-space-xl">
                {/* Section Header  */}
                <div class="flex items-center justify-between border-b border-white/10 pb-space-md">
                    <div>
                        <span class="font-mono-index text-mono-index text-outline tracking-wider uppercase block mb-space-xs">[ MILESTONES &amp; PROGRESS ]</span>
                        <h2 class="font-headline-lg text-headline-lg text-primary tracking-tighter uppercase font-bold">04 / JOURNEY</h2>
                    </div>
                    <span class="font-mono-index text-mono-index text-outline hidden md:block">CHRONOLOGY // 2025 - 2026</span>
                </div>
                {/* Timeline Key-Value Structure  */}
                <div class="border border-white/10 divide-y divide-white/10 bg-surface-container-lowest">
                    {/* Milestone 1  */}
                    <div class="p-space-md lg:p-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md items-start hover:bg-white/3 transition-colors duration-200 group">
                        <div class="md:col-span-3 font-mono-index text-mono-index text-primary flex items-center gap-space-xs">
                            <span class="w-1.5 h-1.5 bg-primary group-hover:scale-125 transition-transform duration-200"></span>
                            <span>2025 — PRESENT</span>
                        </div>
                        <div class="md:col-span-4">
                            <h3 class="font-headline-sm text-headline-sm text-primary uppercase font-bold tracking-tight group-hover:text-white transition-colors">BCA &amp; PRACTICAL WEB DEVELOPMENT</h3>
                            <span class="font-mono-meta text-mono-meta text-outline">SHOOLINI UNIVERSITY</span>
                        </div>
                        <div class="md:col-span-5 font-body-md text-body-md text-on-surface-variant">
                            Pursuing Online BCA at Shoolini University while building frontend projects, exploring modern web standards, and mastering React application architecture.
                        </div>
                    </div>
                    {/* Milestone 2  */}
                    <div class="p-space-md lg:p-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md items-start hover:bg-white/3 transition-colors duration-200 group">
                        <div class="md:col-span-3 font-mono-index text-mono-index text-outline flex items-center gap-space-xs group-hover:text-primary transition-colors">
                            <span class="w-1.5 h-1.5 bg-outline group-hover:bg-primary group-hover:scale-125 transition-all duration-200"></span>
                            <span>2025 — PRESENT</span>
                        </div>
                        <div class="md:col-span-4">
                            <h3 class="font-headline-sm text-headline-sm text-primary uppercase font-bold tracking-tight group-hover:text-white transition-colors">CORE FRONTEND DEEP DIVE</h3>
                            <span class="font-mono-meta text-mono-meta text-outline">SELF-DIRECTED PRACTICE</span>
                        </div>
                        <div class="md:col-span-5 font-body-md text-body-md text-on-surface-variant">
                            Mastering JavaScript fundamentals, responsive CSS layouts, Tailwind CSS utilities, and component-based UI design patterns with clean folder architecture.
                        </div>
                    </div>
                    {/* Milestone 3  */}
                    <div class="p-space-md lg:p-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md items-start hover:bg-white/3 transition-colors duration-200 group">
                        <div class="md:col-span-3 font-mono-index text-mono-index text-outline flex items-center gap-space-xs group-hover:text-primary transition-colors">
                            <span class="w-1.5 h-1.5 bg-outline group-hover:bg-primary group-hover:scale-125 transition-all duration-200"></span>
                            <span>2026</span>
                        </div>
                        <div class="md:col-span-4">
                            <h3 class="font-headline-sm text-headline-sm text-primary uppercase font-bold tracking-tight group-hover:text-white transition-colors">NYC CODEQUEST HACKATHON</h3>
                            <span class="font-mono-meta text-mono-meta text-outline">TEAM LEAD // PROJECT TABMARKO</span>
                        </div>
                        <div class="md:col-span-5 font-body-md text-body-md text-on-surface-variant">
                            Served as Team Lead developing TabMarko using React and Supabase. Coordinated task delegation, component design, and git synchronization across teammates.
                        </div>
                    </div>
                    {/* Milestone 4  */}
                    <div class="p-space-md lg:p-space-lg grid grid-cols-1 md:grid-cols-12 gap-space-md items-start hover:bg-white/3 transition-colors duration-200 group">
                        <div class="md:col-span-3 font-mono-index text-mono-index text-outline flex items-center gap-space-xs group-hover:text-primary transition-colors">
                            <span class="w-1.5 h-1.5 bg-outline group-hover:bg-primary group-hover:scale-125 transition-all duration-200"></span>
                            <span>2026</span>
                        </div>
                        <div class="md:col-span-4">
                            <h3 class="font-headline-sm text-headline-sm text-primary uppercase font-bold tracking-tight group-hover:text-white transition-colors">TECHNICAL COMMUNITIES &amp; PROGRAMS</h3>
                            <span class="font-mono-meta text-mono-meta text-outline">STUDENT AMBASSADOR &amp; ARCADE</span>
                        </div>
                        <div class="md:col-span-5 font-body-md text-body-md text-on-surface-variant">
                            Active participant in Microsoft Student Ambassador (Community Influencer Path), Google Cloud Arcade, and global developer communities to expand technical horizons.
                        </div>
                    </div>
                </div>
                {/* Compact Community & Verified Activities  */}
                <div class="p-space-md border border-white/10 bg-surface-container-lowest flex flex-col gap-space-sm">
                    <span class="font-mono-index text-mono-index text-outline uppercase tracking-wider">[ COMMUNITY &amp; VERIFIED INVOLVEMENT ]</span>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-space-sm pt-space-xs font-mono-meta text-mono-meta">
                        <div class="border border-white/10 hover:border-white/25 p-space-sm flex flex-col gap-1 transition-colors">
                            <span class="text-primary font-medium">MICROSOFT STUDENT AMBASSADOR</span>
                            <span class="text-outline text-[11px]">Community Influencer Path</span>
                        </div>
                        <div class="border border-white/10 hover:border-white/25 p-space-sm flex flex-col gap-1 transition-colors">
                            <span class="text-primary font-medium">GOOGLE CLOUD ARCADE</span>
                            <span class="text-outline text-[11px]">Hands-on Labs &amp; Credly Skill Badges</span>
                        </div>
                        <div class="border border-white/10 hover:border-white/25 p-space-sm flex flex-col gap-1 transition-colors">
                            <span class="text-primary font-medium">HACKATHONS &amp; MEETUPS</span>
                            <span class="text-outline text-[11px]">NYC CodeQuest 2026 &amp; Developer Forums</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey;