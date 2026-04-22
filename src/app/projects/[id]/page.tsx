import React from 'react';
import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return notFound();
    }

    return (
        <main className="relative min-h-screen grid-pattern pt-32 overflow-x-clip bg-surface">
            <Navbar />

            {/* Atmospheric Bleeds */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-secondary/5 rounded-full blur-[120px]"></div>
            </div>

            <section className="max-w-5xl mx-auto px-8 relative z-10">
                <Link href="/#projects" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8 font-mono text-sm">
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Back to Projects
                </Link>

                <div className="rounded-2xl overflow-hidden glass-panel border border-outline-variant/20 shadow-2xl bg-surface-container-low mb-12">
                    <div className="relative w-full aspect-video">
                        <Image src={project.image} alt={project.title} fill className="object-cover" />
                    </div>
                    <div className="p-8 md:p-12">
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6">{project.title}</h1>

                        <div className="flex flex-wrap gap-3 mb-10">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-4 py-1.5 rounded-full bg-surface border border-outline-variant/10 text-sm font-mono text-primary/80">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="md:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-headline font-bold mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-secondary">info</span>
                                        About the Project
                                    </h2>
                                    <p className="text-on-surface-variant leading-relaxed text-lg">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-surface/50 border border-outline-variant/10">
                                    <h2 className="text-xl font-headline font-bold mb-3 flex items-center gap-2 text-error">
                                        <span className="material-symbols-outlined text-[20px]">warning</span>
                                        Challenges Faced
                                    </h2>
                                    <p className="text-on-surface-variant leading-relaxed">
                                        {project.challenges}
                                    </p>
                                </div>

                                <div className="p-6 rounded-xl bg-surface/50 border border-outline-variant/10 mb-8">
                                    <h2 className="text-xl font-headline font-bold mb-3 flex items-center gap-2 text-primary">
                                        <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                                        Future Plans
                                    </h2>
                                    <p className="text-on-surface-variant leading-relaxed">
                                        {project.futurePlans}
                                    </p>
                                </div>
                            </div>

                            <div className="md:col-span-1 space-y-6">
                                <div className="p-6 rounded-xl bg-surface-container border border-outline-variant/20">
                                    <h3 className="text-lg font-headline font-bold mb-4">Project Links</h3>
                                    <div className="space-y-4">
                                        <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-3 w-full p-3 rounded-lg bg-primary-container text-on-primary font-bold hover:brightness-110 transition-all justify-center">
                                            <span className="material-symbols-outlined">open_in_new</span>
                                            Live Demo
                                        </a>
                                        {'video' in project.links && (
                                            <Link href={`/projects/${id}/video`} className="flex items-center gap-3 w-full p-3 rounded-lg border border-primary/50 bg-primary/10 hover:bg-primary/20 text-primary font-bold transition-all justify-center">
                                                <span className="material-symbols-outlined text-[20px]">play_circle</span>
                                                Watch Video Explanation
                                            </Link>
                                        )}
                                        {project.links.githubFront !== "#" && (
                                            <a href={project.links.githubFront} target="_blank" rel="noreferrer" className="flex items-center gap-3 w-full p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5 transition-all justify-center font-mono text-sm">
                                                <span className="material-symbols-outlined">code</span>
                                                Frontend Source
                                            </a>
                                        )}
                                        {project.links.githubBack !== "#" && (
                                            <a href={project.links.githubBack} target="_blank" rel="noreferrer" className="flex items-center gap-3 w-full p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5 transition-all justify-center font-mono text-sm">
                                                <span className="material-symbols-outlined">dns</span>
                                                Backend Source
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
