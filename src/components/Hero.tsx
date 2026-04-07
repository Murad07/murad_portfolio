import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content: Hero Copy */}
            <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-outline-variant/20">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-xs font-mono uppercase tracking-widest text-primary">Front-End & Back-End Developer</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-headline font-bold leading-none tracking-tighter">
                    Hello I&apos;m <br />
                    <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent text-glow">Mohammad Murad Hossain</span>
                </h1>
                <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed border-l-2 border-primary/20 pl-6">
                    <span className="text-secondary">Full Stack Software Developer</span> | <span className="text-primary">MERN Stack</span> Specialist | UI/UX Architect
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <a href="#about" className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg shadow-[0_0_30px_rgba(45,212,191,0.2)] hover:translate-y-[-4px] transition-transform text-center flex items-center justify-center">
                        Learn More
                    </a>
                    <a href="https://drive.google.com/file/d/1uSAfdddsSuqX-y7xtvGB-XBdoIcqZsZx/view?usp=sharing" target="_blank" rel="noreferrer" className="px-8 py-4 border border-primary/30 text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors group text-center flex items-center justify-center">
                        View Resume
                        <span className="material-symbols-outlined align-middle ml-2 group-hover:translate-x-1 transition-transform">description</span>
                    </a>
                </div>
            </div>

            {/* Right Content: Profile Image */}
            <div className="relative group flex justify-center">
                <div className="absolute -inset-0.5 from-primary/20 to-secondary/20 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-surface-container-highest shadow-2xl w-80 h-80 md:w-96 md:h-96">
                    <Image
                        src="/murad_protfolio_image.jpeg"
                        alt="Mohammad Murad Hossain"
                        fill
                        className="object-cover scale-[1]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

