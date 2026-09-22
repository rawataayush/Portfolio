const Contact = () => {
    return (
        <section class="w-full px-gutter-sm lg:px-margin py-space-xl mb-space-xl" id="contact">
            <div class="max-w-screen-2xl mx-auto flex flex-col gap-space-xl">
                {/* Section Header  */}
                <div class="flex items-center justify-between border-b border-white/10 pb-space-md">
                    <div>
                        <span class="font-mono-index text-mono-index text-outline tracking-wider uppercase block mb-space-xs">[ DIRECT INQUIRY ]</span>
                        <h2 class="font-headline-lg text-headline-lg text-primary tracking-tighter uppercase font-bold">05 / CONTACT</h2>
                    </div>
                    <span class="font-mono-index text-mono-index text-outline hidden md:block">GET IN TOUCH</span>
                </div>
                {/* Monumental Headline  */}
                <div class="max-w-4xl">
                    <h3 class="font-headline-lg lg:font-display-xl text-headline-lg lg:text-display-xl text-primary font-bold tracking-tighter uppercase leading-[0.95]">
                        LET’S BUILD SOMETHING.
                    </h3>
                </div>
                {/* 2-Column Contact Layout  */}
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl pt-space-md">
                    {/* Left: Direct Coordinates & Social Connectors  */}
                    <div class="lg:col-span-5 flex flex-col justify-between gap-space-xl">
                        <div class="flex flex-col gap-space-md">
                            <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                                Open to collaboration, freelance projects, and web development opportunities. Feel free to reach out directly or connect across developer platforms.
                            </p>
                            <div class="flex flex-col gap-space-xs pt-space-sm">
                                <span class="font-mono-index text-mono-index text-outline uppercase tracking-wider">DIRECT EMAIL</span>
                                <div class="flex items-center gap-space-sm">
                                    <span class="font-headline-sm text-headline-sm text-primary tracking-tight font-medium" id="email-address">aayushrawat.dev@gmail.com</span>
                                    <button class="px-space-xs py-0.5 border border-white/20 font-mono-index text-mono-index text-outline hover:text-black hover:bg-white hover:border-white transition-all duration-200 active:scale-95" id="copy-email-btn" onclick="navigator.clipboard.writeText('aayushrawat.dev@gmail.com'); const btn = this; btn.textContent='COPIED ✓'; btn.classList.add('bg-white', 'text-black'); setTimeout(() =&gt; { btn.textContent='COPY'; btn.classList.remove('bg-white', 'text-black'); }, 2000);">
                                        COPY
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Social Matrix  */}
                        <div class="border-t border-white/10 pt-space-md flex flex-col gap-space-sm font-mono-meta text-mono-meta">
                            <span class="font-mono-index text-mono-index text-outline uppercase tracking-wider">ONLINE PROFILES</span>
                            <div class="grid grid-cols-2 gap-space-sm">
                                <a class="p-space-sm border border-white/15 hover:border-primary text-primary transition-colors flex items-center justify-between group" href="https://github.com/rawataayush" rel="noreferrer" target="_blank">
                                    <span>GITHUB</span><span class="font-mono-index group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
                                </a>
                                <a class="p-space-sm border border-white/15 hover:border-primary text-primary transition-colors flex items-center justify-between group" href="https://linkedin.com/in/rawataayush" rel="noreferrer" target="_blank">
                                    <span>LINKEDIN</span><span class="font-mono-index group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Right: Minimalist Stark Dispatch Form  */}
                    <div class="lg:col-span-7 bg-surface-container-lowest border border-white/15 p-space-md lg:p-space-lg">
                        <form class="flex flex-col gap-space-lg" id="contact-form" onsubmit="event.preventDefault(); const status = document.getElementById('form-status'); status.classList.remove('hidden');">
                            <div class="flex items-center justify-between border-b border-white/10 pb-space-xs font-mono-index text-mono-index">
                                <span class="text-primary">[ CONTACT FORM ]</span>
                                <span class="text-outline">FRONTEND READY</span>
                            </div>
                            <div class="flex flex-col gap-space-xs">
                                <label class="font-mono-index text-mono-index text-outline uppercase tracking-wider" for="name">01 // NAME</label>
                                <input class="w-full bg-[#121212] border border-white/20 focus:border-white focus:ring-0 focus:outline-none p-space-sm text-primary font-body-md text-body-md placeholder-outline/50 transition-colors duration-200" id="name" placeholder="Your name or company" required="" type="text" />
                            </div>
                            <div class="flex flex-col gap-space-xs">
                                <label class="font-mono-index text-mono-index text-outline uppercase tracking-wider" for="email">02 // EMAIL</label>
                                <input class="w-full bg-[#121212] border border-white/20 focus:border-white focus:ring-0 focus:outline-none p-space-sm text-primary font-body-md text-body-md placeholder-outline/50 transition-colors duration-200" id="email" placeholder="name@example.com" required="" type="email" />
                            </div>
                            <div class="flex flex-col gap-space-xs">
                                <label class="font-mono-index text-mono-index text-outline uppercase tracking-wider" for="message">03 // MESSAGE</label>
                                <textarea class="w-full bg-[#121212] border border-white/20 focus:border-white focus:ring-0 focus:outline-none p-space-sm text-primary font-body-md text-body-md placeholder-outline/50 transition-colors duration-200 resize-none" id="message" placeholder="Describe your project, question, or opportunity..." required="" rows="4"></textarea>
                            </div>
                            <div class="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                                <div class="hidden font-mono-index text-mono-index text-primary items-center gap-space-xs" id="form-status">
                                    <span class="w-2 h-2 bg-white animate-pulse"></span>
                                    <span>MESSAGE LOGGED // [ FRONTEND FORM READY FOR BACKEND INTEGRATION ]</span>
                                </div>
                                <button class="w-full sm:w-auto ml-auto py-space-sm px-space-lg bg-primary text-black font-label-caps text-label-caps tracking-widest uppercase border border-primary hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center gap-space-sm group cursor-pointer" type="submit">
                                    <span>SEND MESSAGE</span>
                                    <span class="font-mono-index group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;