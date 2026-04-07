"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

const skillCategories = [
    {
        title: "Frontend",
        icon: "language",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
    },
    {
        title: "Backend",
        icon: "dns",
        skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
    },
    {
        title: "Cloud",
        icon: "cloud",
        skills: ["AWS", "Docker", "Vercel", "Firebase", "DigitalOcean"]
    },
    {
        title: "Tools & Technics",
        icon: "build",
        skills: ["Git & GitHub", "Linux", "CI/CD", "Postman", "Agile", "Webpack"]
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
    }
};

const Skills = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 py-20 relative" id="skills">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-glow bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
                    Technical Arsenal
                </h2>
                <div className="w-24 h-1 bg-primary/30 mx-auto mt-6 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-primary rounded-full animate-pulse"></div>
                </div>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 glass-panel hover:border-primary/30 transition-all group relative overflow-hidden"
                    >
                        {/* Background decor */}
                        <div className="absolute -top-4 -right-4 text-[150px] text-surface-container opacity-20 group-hover:opacity-40 group-hover:text-primary/10 transition-all material-symbols-outlined pointer-events-none select-none">
                            {category.icon}
                        </div>

                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-surface-container border border-outline-variant/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">{category.icon}</span>
                            </div>
                            <h3 className="text-2xl font-headline font-bold">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-3 relative z-10">
                            {category.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="px-4 py-2 rounded-full bg-surface-container shadow-inner text-sm font-mono text-on-surface-variant border border-outline-variant/10 group-hover:border-primary/20 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
