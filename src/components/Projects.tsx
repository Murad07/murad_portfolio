"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectsData } from '@/lib/data';

const Projects = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 py-24 relative" id="projects">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-24"
            >
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-glow bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <div className="w-24 h-1 bg-primary/30 mx-auto mt-6 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-primary rounded-full animate-pulse"></div>
                </div>
            </motion.div>

            <div className="space-y-32">
                {projectsData.map((project, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                            className={`flex flex-col lg:flex-row gap-8 lg:gap-0 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Showcase */}
                            <div className="w-full lg:w-7/12 relative group z-10">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                <Link href={`/projects/${project.id}`} className="block relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-outline-variant/30 shadow-2xl glass-panel cursor-pointer">
                                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </Link>
                            </div>

                            {/* Content Description */}
                            <div className={`w-full lg:w-6/12 relative z-20 flex flex-col ${isEven ? 'lg:items-end lg:text-right lg:-ml-12' : 'lg:items-start lg:text-left lg:-mr-12'}`}>
                                <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Featured Project</p>
                                <h3 className="text-3xl font-headline font-bold text-on-surface mb-6 hover:text-primary transition-colors cursor-pointer">
                                    <Link href={`/projects/${project.id}`}>
                                        {project.title}
                                    </Link>
                                </h3>

                                <div className="p-6 md:p-8 rounded-xl bg-surface-container-high/90 backdrop-blur border border-outline-variant/10 shadow-2xl mb-6 relative">
                                    <p className="text-on-surface-variant leading-relaxed text-left">
                                        {project.description}
                                    </p>
                                </div>

                                <ul className={`flex flex-wrap gap-3 font-mono text-xs text-secondary/90 mb-8 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                    {project.tags.map(tag => (
                                        <li key={tag} className="px-3 py-1 rounded bg-surface border border-outline-variant/20">{tag}</li>
                                    ))}
                                </ul>

                                <div className={`flex items-center gap-5 text-on-surface-variant flex-wrap ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary-container text-on-primary-container font-bold hover:scale-95 transition-transform mr-2"
                                    >
                                        View More / Details
                                    </Link>

                                    {project.links.githubFront !== "#" && (
                                        <a href={project.links.githubFront} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1.5 group" title="Frontend Source">
                                            <span className="material-symbols-outlined text-[20px]">code</span>
                                        </a>
                                    )}
                                    {project.links.githubBack !== "#" && (
                                        <a href={project.links.githubBack} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1.5 group" title="Backend Source">
                                            <span className="material-symbols-outlined text-[20px]">dns</span>
                                        </a>
                                    )}
                                    <a href={project.links.live !== "#" ? project.links.live : undefined} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-1 group ml-1" title="Live Site">
                                        <span className="material-symbols-outlined text-[24px]">open_in_new</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
