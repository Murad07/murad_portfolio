"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section className="max-w-4xl mx-auto px-8 py-20 relative" id="education">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-glow bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
                    Education
                </h2>
                <div className="w-24 h-1 bg-primary/30 mx-auto mt-6 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-primary rounded-full animate-pulse"></div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 glass-panel hover:border-primary/40 transition-all relative overflow-hidden group hover:shadow-[0_0_30px_rgba(45,212,191,0.1)]"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors"></div>
                <div className="absolute -top-6 -right-6 text-[120px] text-surface-container opacity-30 group-hover:opacity-50 group-hover:text-primary/10 transition-all material-symbols-outlined pointer-events-none select-none">
                    school
                </div>

                <div className="relative z-10">
                    <div className="flex flex-col gap-2 mb-6 border-b border-outline-variant/10 pb-6">
                        <h3 className="text-2xl md:text-3xl font-headline font-bold text-on-surface">
                            B.Sc in Computer Science And Engineering
                        </h3>
                        <div className="text-xl text-secondary font-medium flex items-center gap-2">
                            <span className="material-symbols-outlined pb-1">account_balance</span>
                            University of Development Alternative
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-on-surface-variant flex-wrap">
                        <div className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-lg border border-outline-variant/20">
                            <span className="material-symbols-outlined text-primary text-[20px]">grade</span>
                            <span className="font-mono font-bold text-on-surface">CGPA: 3.5</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                            <span className="font-mono">Class of 01/2015</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]">location_on</span>
                            <span className="font-mono">Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
