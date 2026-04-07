import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/10 relative z-20">
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
                    {/* Brand */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href="/" className="text-3xl font-bold tracking-tighter text-primary font-headline mb-3 text-glow">MURAD.DEV</Link>
                        <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed">
                            Building highly scalable web architectures and robust MERN stack solutions. Open to exciting new collaborative opportunities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-headline font-bold text-on-surface mb-5 text-lg">Platform Navigation</h4>
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">
                            <Link href="/#about" className="text-secondary hover:text-primary transition-colors text-sm font-mono tracking-wide">/ABOUT</Link>
                            <Link href="/#skills" className="text-secondary hover:text-primary transition-colors text-sm font-mono tracking-wide">/SKILLS</Link>
                            <Link href="/#projects" className="text-secondary hover:text-primary transition-colors text-sm font-mono tracking-wide">/PROJECTS</Link>
                            <Link href="/#contact" className="text-secondary hover:text-primary transition-colors text-sm font-mono tracking-wide">/CONTACT</Link>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-headline font-bold text-on-surface mb-5 text-lg">Social Network</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/Murad07" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all hover:scale-110 text-on-surface-variant shadow-lg">
                                <span className="material-symbols-outlined text-[24px]">code</span>
                            </a>
                            <a href="https://www.linkedin.com/in/murad-pi22/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-all hover:scale-110 text-on-surface-variant shadow-lg">
                                <span className="font-bold font-headline text-[20px]">in</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal Bar */}
                <div className="mt-16 pt-8 border-t border-outline-variant/10 text-center">
                    <p className="font-mono text-xs uppercase tracking-widest text-secondary/60">
                        © {new Date().getFullYear()} Mohammad Murad Hossain. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
