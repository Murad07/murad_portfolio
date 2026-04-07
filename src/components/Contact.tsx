"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="max-w-5xl mx-auto px-8 py-24 relative" id="contact">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-glow bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                <div className="w-24 h-1 bg-primary/30 mx-auto mt-6 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-primary rounded-full animate-pulse"></div>
                </div>
                <p className="mt-6 text-on-surface-variant max-w-lg mx-auto">
                    I&apos;m currently actively seeking new challenges and opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12 rounded-2xl bg-surface-container-low border border-outline-variant/20 glass-panel shadow-2xl relative overflow-hidden text-center"
            >
                {/* Decor elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-3xl rounded-full pointer-events-none"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 w-full mb-12">
                    {/* Email Block */}
                    <a href="mailto:murad.pi22@gmail.com" className="flex flex-col items-center p-6 rounded-xl bg-surface/50 border border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container hover:-translate-y-1 transition-all group">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[24px]">mail</span>
                        </div>
                        <h3 className="text-xl font-headline font-bold mb-2">Email Me</h3>
                        <p className="text-on-surface-variant font-mono text-sm">murad.pi22@gmail.com</p>
                    </a>

                    {/* Phone/WhatsApp Block */}
                    <a href="tel:+8801927574610" className="flex flex-col items-center p-6 rounded-xl bg-surface/50 border border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container hover:-translate-y-1 transition-all group">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[24px]">call</span>
                        </div>
                        <h3 className="text-xl font-headline font-bold mb-2">Call / WhatsApp</h3>
                        <p className="text-on-surface-variant font-mono text-sm">+880 1927-574610</p>
                    </a>
                </div>

                <div className="relative z-10">
                    <p className="font-mono text-sm text-secondary mb-6 tracking-widest uppercase">Connect on Socials</p>
                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/Murad07" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-surface-container-high border border-outline-variant/20 flex flex-col items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-colors hover:scale-110 group">
                            {/* We use GitHub's standard icon mappings or text */}
                            <span className="material-symbols-outlined text-[28px]">code</span>
                            <span className="text-[10px] uppercase font-mono tracking-widest absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/murad-pi22/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-surface-container-high border border-outline-variant/20 flex flex-col items-center justify-center hover:bg-primary hover:text-on-primary hover:border-primary transition-colors hover:scale-110 group">
                            {/* We use specific text marking or icon */}
                            <span className="font-bold text-xl font-headline">in</span>
                            <span className="text-[10px] uppercase font-mono tracking-widest absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
