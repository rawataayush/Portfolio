const Hero = () => {
    return (
        <section className="w-full px-gutter-sm lg:px-margin pt-space-xl pb-space-xl border-b border-white/10">
            <div className="max-w-screen-2xl mx-auto flex flex-col gap-space-xl">
                {/* Monospace Telemetry Row */}
                <div className="flex flex-wrap items-center justify-between gap-space-sm border-b border-white/10 pb-space-sm opacity-0 animate-fade-in-up" 
                    style={{ animationDelay: '80ms' }}>
                    <div className="flex items-center gap-space-md">
                        <span className="font-mono-index text-mono-index text-primary tracking-widest">[ PORTFOLIO &amp; ARCHIVE ]</span>
                        <span className="w-1.5 h-1.5 bg-primary"></span>
                        <span className="font-mono-meta text-mono-meta text-on-surface-variant uppercase">INDIA (REMOTE)</span>
                    </div>
                    <div className="font-mono-index text-mono-index text-outline uppercase tracking-wider">
                        WEB DEVELOPER &amp; STUDENT • 2026
                    </div>
                </div>
                 {/* Honest, Confident Typography */}
                <div className="flex flex-col gap-space-md opacity-0 animate-fade-in-up" style={{ animationDelay: '160ms' }}>
                    <h1 className="font-headline-lg lg:font-display-xl text-headline-lg lg:text-display-xl text-primary font-bold tracking-tighter uppercase leading-[0.95] max-w-6xl">
                        BUILDING FOR THE WEB. LEARNING. ITERATING.
                    </h1>
                </div>
                {/* Sub-narrative Split: Biography Copy + Action Buttons  */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start pt-space-md opacity-0 animate-fade-in-up" style={{ animationDelay: '240ms' }}>
                    <div className="lg:col-span-8 pr-0 lg:pr-space-xl">
                        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed font-light">
                            I'm Aayush, a web developer and online BCA student at Shoolini University focused on React, JavaScript, and modern frontend development. I learn by building real projects, experimenting with new technologies, and turning ideas into functional interfaces.
                        </p>
                    </div>
                    <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm">
                        <a className="w-full py-space-sm px-space-md bg-primary text-on-primary font-label-caps text-label-caps tracking-widest text-center uppercase border border-primary hover:bg-background hover:text-primary transition-all duration-200 flex items-center justify-between group cursor-pointer" href="#selected-work">
                            <span>VIEW SELECTED WORK</span>
                            <span className="font-mono-index group-hover:translate-y-1 transition-transform duration-200">↓</span>
                        </a>
                        <div className="grid grid-cols-2 gap-space-sm w-full">
                            <a className="py-space-sm px-space-md bg-surface-container text-primary font-label-caps text-label-caps tracking-widest text-center uppercase border border-white/20 hover:border-primary hover:bg-white/4 transition-all duration-200 flex items-center justify-between group" href="https://github.com/rawataayush" rel="noreferrer" target="_blank">
                                <span>GITHUB</span>
                                <span className="font-mono-index group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
                            </a>
                            <a className="py-space-sm px-space-md bg-surface-container text-primary font-label-caps text-label-caps tracking-widest text-center uppercase border border-white/20 hover:border-primary hover:bg-white/4 transition-all duration-200 flex items-center justify-between group" href="https://linkedin.com/in/rawataayush" rel="noreferrer" target="_blank">
                                <span>LINKEDIN</span>
                                <span className="font-mono-index group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
                 {/* Structural Status Bar (Honest Spec Matrix)  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 bg-surface-container divide-y sm:divide-y-0 sm:divide-x divide-white/10 mt-space-md opacity-0 animate-fade-in-up" style={{ animationDelay: '320ms' }}>
                    <div className="p-space-md flex flex-col gap-space-xs hover:bg-white/2 transition-colors duration-150">
                        <span className="font-mono-index text-mono-index text-outline uppercase tracking-wider">STATUS</span>
                        <div className="flex items-center gap-space-xs">
                            <span className="relative flex h-2 w-2 mr-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            <span className="font-body-md text-body-md text-primary font-medium">Open to Opportunities</span>
                        </div>
                    </div>
                    <div className="p-space-md flex flex-col gap-space-xs hover:bg-white/2 transition-colors duration-150">
                        <span className="font-mono-index text-mono-index text-outline uppercase tracking-wider">EDUCATION</span>
                        <span className="font-body-md text-body-md text-primary font-medium">Online BCA // Shoolini University</span>
                    </div>
                    <div className="p-space-md flex flex-col gap-space-xs hover:bg-white/2 transition-colors duration-150">
                        <span className="font-mono-index text-mono-index text-outline uppercase tracking-wider">FOCUS</span>
                        <span className="font-body-md text-body-md text-primary font-medium">React &amp; Modern Frontend</span>
                    </div>
                    <div className="p-space-md flex flex-col gap-space-xs hover:bg-white/2 transition-colors duration-150">
                        <span className="font-mono-index text-mono-index text-outline uppercase tracking-wider">PATH</span>
                        <span className="font-body-md text-body-md text-primary font-medium">Practical Projects &amp; Learning</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;