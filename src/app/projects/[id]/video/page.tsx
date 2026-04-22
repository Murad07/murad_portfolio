import React from 'react';
import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/data';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default async function ProjectVideoDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projectsData.find(p => p.id === id);

    if (!project || !('video' in project.links)) {
        return notFound();
    }

    // Convert view link to embeddable preview link securely
    const embedUrl = (project.links as any).video.replace('/view?usp=drive_link', '/preview');

    return (
        <main className="relative min-h-screen grid-pattern pt-32 overflow-x-clip bg-surface flex flex-col">
            <Navbar />

            {/* Atmospheric Bleeds */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-secondary/5 rounded-full blur-[120px]"></div>
            </div>

            <section className="max-w-6xl mx-auto px-6 md:px-8 relative z-10 w-full mb-20 flex-1">
                <Link href={`/projects/${id}`} className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8 font-mono text-sm self-start bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/20 shadow-md">
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                    Return to {project.title}
                </Link>

                <div className="rounded-2xl overflow-hidden glass-panel border border-outline-variant/20 shadow-2xl bg-surface-container-low w-full flex flex-col">
                    <div className="p-6 md:p-8 border-b border-outline-variant/10 flex justify-between items-center bg-surface/50">
                        <h1 className="text-2xl md:text-3xl font-headline font-bold text-on-surface flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-[32px]">play_circle</span>
                            Project Demonstration
                        </h1>
                    </div>

                    <div className="w-full relative aspect-video bg-black/80">
                        <iframe
                            src={embedUrl}
                            className="absolute top-0 left-0 w-full h-full border-0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
