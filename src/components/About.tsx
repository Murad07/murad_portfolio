import React from 'react';
import Terminal from './Terminal';

const About = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 py-20 relative">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-16 text-center text-glow bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">About Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content: Article */}
                <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                    <p className="border-l-4 border-primary/40 pl-6 py-2">
                        I&apos;m a passionate and results-driven Software Developer with a solid foundation in the MERN stack and a strong interest in building scalable web applications. My expertise lies in crafting clean, efficient, and maintainable code to solve complex problems and deliver exceptional user experiences.
                    </p>
                    <p className="pl-7">
                        I enjoy collaborating with cross-functional teams to bring ideas to life and am always eager to learn and adapt to new technologies. I&apos;m actively seeking new challenges and opportunities to contribute to innovative projects.
                    </p>
                </div>

                {/* Right Content: Terminal Window */}
                <div>
                    <Terminal />
                </div>
            </div>
        </section>
    );
};

export default About;
