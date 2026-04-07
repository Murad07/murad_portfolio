import React from 'react';

const Experience = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 py-20 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Grid Item 1 */}
                <div className="md:col-span-2 p-8 rounded-xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-8xl">hub</span>
                    </div>
                    <h3 className="text-2xl font-headline font-bold mb-4">IoT Integration</h3>
                    <p className="text-on-surface-variant mb-6 max-w-md">Bridging the gap between hardware and software through advanced Cisco networking and custom device protocols.</p>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 rounded bg-surface-container-high text-xs text-secondary font-mono border border-outline-variant/10">Packet Tracer</span>
                        <span className="px-3 py-1 rounded bg-surface-container-high text-xs text-secondary font-mono border border-outline-variant/10">ESP32</span>
                    </div>
                </div>
                {/* Grid Item 2 */}
                <div className="p-8 rounded-xl bg-gradient-to-br from-surface-container to-surface-container-low border border-outline-variant/10 flex flex-col justify-between">
                    <span className="material-symbols-outlined text-primary text-4xl mb-6">javascript</span>
                    <div>
                        <h3 className="text-xl font-headline font-bold mb-2">Modern JS</h3>
                        <p className="text-sm text-on-surface-variant">Clean, scalable architectures built for high-performance enterprise applications.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
