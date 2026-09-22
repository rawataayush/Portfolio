const About = () => {
    return (
        <section className="w-full px-gutter-sm lg:px-margin py-space-xl border-b border-white/10" id="about">
            <div className="max-w-screen-2xl mx-auto flex flex-col gap-space-xl">
                {/* Section Header  */}
                <div className="flex items-center justify-between border-b border-white/10 pb-space-md">
                    <div>
                        <span className="font-mono-index text-mono-index text-outline tracking-wider uppercase block mb-space-xs">[ PROFILE ]</span>
                        <h2 className="font-headline-lg text-headline-lg text-primary tracking-tighter uppercase font-bold">01 / ABOUT</h2>
                    </div>
                    <span className="font-mono-index text-mono-index text-outline hidden md:block">BACKGROUND &amp; PRACTICE</span>
                </div>
                {/* 2-Column Asymmetric Editorial Layout  */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
                    {/* Left Column: Core Statement  */}
                    <div className="lg:col-span-5 flex flex-col gap-space-md">
                        <blockquote className="font-headline-md text-headline-md text-primary font-semibold tracking-tight uppercase leading-snug border-l-2 border-primary pl-space-md">
                            “DEVELOPING PRACTICAL WEB EXPERIENCES THROUGH CONTINUOUS LEARNING AND INTENTIONAL DESIGN.”
                        </blockquote>
                        <p className="font-mono-meta text-mono-meta text-outline leading-relaxed">
                            Prioritizing usable code, clean layouts, and systematic problem solving while building a strong software engineering foundation.
                        </p>
                    </div>
                    {/* Right Column: Narrative Biography & Metadata Grid  */}
                    <div className="lg:col-span-7 flex flex-col gap-space-lg">
                        <div className="flex flex-col gap-space-md text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
                            <p>
                                I am pursuing my Online Bachelor of Computer Applications (BCA) at Shoolini University, pairing formal computer science coursework with hands-on web engineering. My focus centers on building clean, accessible, and responsive user interfaces using React, JavaScript (ES6+), and modern CSS frameworks.
                            </p>
                            <p>
                                Rather than theoretical concepts alone, I prioritize building practical projects—from browser productivity tools to modular interface components. I am actively expanding my capabilities toward full-stack development, backend databases, and production-ready applications.
                            </p>
                        </div>
                        {/* Supporting Metadata Grid  */}
                        <div className="border border-white/10 divide-y divide-white/10 bg-surface-container-lower">
                            <div className="p-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono-meta text-mono-meta hover:bg-white/2 transition-colors">
                                <span className="text-outline">ACADEMIC</span>
                                <span className="text-primary font-medium">Online BCA, Shoolini University</span>
                            </div>
                            <div className="p-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono-meta text-mono-meta hover:bg-white/2 transition-colors">
                                <span className="text-outline">LOCATION</span>
                                <span className="text-primary font-medium">India (Remote)</span>
                            </div>
                            <div className="p-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono-meta text-mono-meta hover:bg-white/2 transition-colors">
                                <span className="text-outline">CORE FOCUS</span>
                                <span className="text-primary font-medium">React · JavaScript · Tailwind CSS · Vite</span>
                            </div>
                            <div className="p-space-sm flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono-meta text-mono-meta hover:bg-white/2 transition-colors">
                                <span className="text-outline">GOAL</span>
                                <span className="text-primary font-medium">Production Web Interfaces &amp; Expanding to Full-Stack</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;