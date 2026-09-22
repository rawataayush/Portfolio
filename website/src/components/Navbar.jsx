const Navbar = () => {
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/10 transition-colors duration-300"
            id="navbar"
        >
            <div className="h-16 w-full px-gutter-sm lg:px-margin flex items-center justify-between gap-space-md">
                <div className="flex items-baseline gap-space-md">
                    <a
                        className="font-headline-sm text-headline-sm text-primary tracking-tighter uppercase transition-opacity duration-200 hover:opacity-80"
                        href="#top"
                    >
                        Aayush Rawat
                    </a>
                    <span className="hidden xl:inline-block font-mono-index text-mono-index text-outline tracking-wider">
                        [ONLINE BCA STUDENT // SHOOLINI UNIVERSITY]
                    </span>
                </div>
                <nav className="hidden md:flex items-center gap-space-lg">
                    <a
                        className="relative py-1 font-label-caps text-label-caps text-on-surface-variant hover:text-primary uppercase tracking-wider transition-all duration-200 group"
                        href="#about"
                    >
                        <span className="font-mono-index text-mono-index text-outline mr-space-xs group-hover:text-primary transition-colors">
                            01
                        </span>
                        About
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-200 group-hover:w-full"></span>
                    </a>
                    <a
                        className="relative py-1 font-label-caps text-label-caps text-on-surface-variant hover:text-primary uppercase tracking-wider transition-all duration-200 group"
                        href="#selected-work"
                    >
                        <span className="font-mono-index text-mono-index text-outline mr-space-xs group-hover:text-primary transition-colors">
                            02
                        </span>
                        Work
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-200 group-hover:w-full"></span>
                    </a>
                    <a
                        className="relative py-1 font-label-caps text-label-caps text-on-surface-variant hover:text-primary uppercase tracking-wider transition-all duration-200 group"
                        href="#skills"
                    >
                        <span className="font-mono-index text-mono-index text-outline mr-space-xs group-hover:text-primary transition-colors">
                            03
                        </span>
                        Skills
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-200 group-hover:w-full"></span>
                    </a>
                    <a
                        className="relative py-1 font-label-caps text-label-caps text-on-surface-variant hover:text-primary uppercase tracking-wider transition-all duration-200 group"
                        href="#journey"
                    >
                        <span className="font-mono-index text-mono-index text-outline mr-space-xs group-hover:text-primary transition-colors">
                            04
                        </span>
                        Journey
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-200 group-hover:w-full"></span>
                    </a>
                    <a
                        className="relative py-1 font-label-caps text-label-caps text-on-surface-variant hover:text-primary uppercase tracking-wider transition-all duration-200 group"
                        href="#contact"
                    >
                        <span className="font-mono-index text-mono-index text-outline mr-space-xs group-hover:text-primary transition-colors">
                            05
                        </span>
                        Contact
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-200 group-hover:w-full"></span>
                    </a>
                </nav>
                <div className="flex items-center gap-space-md">
                    <a
                        className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-space-xs border border-white/20 text-primary font-mono-meta text-mono-meta hover:border-primary hover:bg-primary hover:text-black transition-all duration-200 group"
                        href="#contact"
                    >
                        <span>GET IN TOUCH</span>
                        <span className="font-mono-index group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                            ↗
                        </span>
                    </a>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center transition-transform hover:scale-105 duration-200 cursor-default">
                        <span className="material-symbols-outlined text-on-primary text-[18px]">
                            terminal
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
