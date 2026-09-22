const Footer = () => {
    return (
        <footer class="w-full bg-surface-container-lowest border-t border-white/10 py-space-xl">
            <div class="w-full px-gutter-sm lg:px-margin flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
                <div class="flex flex-col gap-space-xs">
                    <span class="font-headline-sm text-headline-sm text-primary tracking-tighter uppercase">
                        AAYUSH RAWAT
                    </span>
                    <span class="font-mono-index text-mono-index text-outline uppercase tracking-wider">
                        © 2026 AAYUSH RAWAT — ONLINE BCA STUDENT &amp; FRONTEND DEVELOPER
                    </span>
                </div>
                <div class="flex flex-wrap items-center gap-space-lg">
                    <a
                        class="font-mono-meta text-mono-meta text-on-surface-variant hover:text-primary transition-colors flex items-center gap-space-xs group"
                        href="https://github.com/rawataayush"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <span>GITHUB</span>
                        <span class="font-mono-index group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                            ↗
                        </span>
                    </a>
                    <a
                        class="font-mono-meta text-mono-meta text-on-surface-variant hover:text-primary transition-colors flex items-center gap-space-xs group"
                        href="https://linkedin.com/in/rawataayush"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <span>LINKEDIN</span>
                        <span class="font-mono-index group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                            ↗
                        </span>
                    </a>
                    <a
                        class="font-mono-meta text-mono-meta text-on-surface-variant hover:text-primary transition-colors flex items-center gap-space-xs group"
                        href="#contact"
                    >
                        <span>CONTACT</span>
                        <span class="font-mono-index group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                            ↗
                        </span>
                    </a>
                    <a
                        class="font-mono-meta text-mono-meta text-outline hover:text-primary transition-colors flex items-center gap-space-xs"
                        href="#top"
                    >
                        <span>[ TOP ↑ ]</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
