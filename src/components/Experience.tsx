"use client";

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Software Developer",
        company: "Taj Tech Ltd",
        date: "08/2021 - Current",
        location: "Dhaka, Bangladesh",
        points: [
            "Developed applications using React.js, Next.js, Laravel, and Node.js",
            "Collaborated with cross-functional teams for requirements and solution design",
            "Implemented automated testing to enhance software reliability",
            "Maintained applications through troubleshooting and bug resolution"
        ]
    },
    {
        role: "MERN Stack Developer",
        company: "SX Web",
        date: "08/2020 - 07/2021",
        location: "Dhaka, Bangladesh",
        points: [
            "Developed responsive web applications using React.js, Node.js, MongoDB, and Express",
            "Integrated RESTful APIs for seamless front-end and back-end data exchange",
            "Implemented JWT authentication and authorization mechanisms"
        ]
    },
    {
        role: "ActionScript Mobile Game Developer",
        company: "Hamza Games",
        date: "01/2016 - 06/2020",
        location: "Dhaka, Bangladesh",
        points: [
            "Developed and published mobile games using ActionScript 3.0 and Adobe AIR across multiple platforms",
            "Optimized game logic, memory management, and physics for smooth user experiences",
            "Handled end-to-end development life cycle from concept art integration to final release"
        ]
    }
];

const Experience = () => {
    return (
        <section className="max-w-5xl mx-auto px-8 py-20 relative" id="experience">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-glow bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
                    Experience
                </h2>
                <div className="w-24 h-1 bg-primary/30 mx-auto mt-6 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-primary rounded-full animate-pulse"></div>
                </div>
            </motion.div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* Timeline Dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 bg-surface-container-high text-primary group-hover:bg-primary group-hover:bg-opacity-20 transition-colors z-10">
                            <span className="material-symbols-outlined text-[18px]">work</span>
                        </div>

                        {/* Card Content */}
                        <motion.div
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                            className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 glass-panel hover:border-primary/40 transition-all relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(45,212,191,0.1)]"
                        >
                            <div className="flex flex-col gap-1 mb-4 mb-6">
                                <h3 className="text-2xl font-headline font-bold text-on-surface">
                                    {exp.role}
                                </h3>
                                <div className="text-lg text-secondary font-medium flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[20px]">domain</span>
                                    {exp.company}
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {exp.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-3 text-on-surface-variant text-sm md:text-base leading-relaxed">
                                        <span className="text-primary/70 mt-1 text-[10px]">●</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-4 pt-4 border-t border-outline-variant/10">
                                <span className="inline-block px-3 py-1 rounded bg-surface-container text-xs font-mono text-primary/80 border border-primary/10">
                                    {exp.date}
                                </span>
                                <div className="text-xs font-mono text-on-surface-variant/60 flex items-center gap-1 border border-outline-variant/10 rounded px-3 py-1 bg-surface-container-lowest">
                                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                                    {exp.location}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
