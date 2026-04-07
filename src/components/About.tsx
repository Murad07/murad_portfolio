import React from 'react';
import Terminal from './Terminal';

const About = () => {
    return (
        <section className="max-w-7xl mx-auto px-8 py-20 relative" id="about">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-16 text-center text-glow bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">About Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content: Article */}
                <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                    <p className="border-l-4 border-primary/40 pl-6 py-2">
                        My programming journey began out of a pure fascination with how software can solve complex real-world problems. Over the years, I&apos;ve built a solid foundation in the MERN stack and evolved into a Full Stack Architect. I genuinely enjoy the entire lifecycle of software development—from architecting robust backends and API gateways to crafting sleek, intuitive front-end interfaces that provide exceptional user experiences.
                    </p>
                    <p className="pl-7">
                        I thrive in collaborative environments where cross-functional teams bring innovative ideas to life. I&apos;m always eager to learn, adapt to new technologies, and push the boundaries of what web applications can achieve.
                    </p>
                    <div className="pl-7 pt-4 mt-4 border-t border-outline-variant/10">
                        <h3 className="text-xl font-headline font-bold text-on-surface mb-3 flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary">sports_cricket</span>
                            Beyond the Code
                        </h3>
                        <p>
                            When I&apos;m not debugging or designing cloud deployments, you can usually find me staying active. I am an avid sports enthusiast with a particular love for <strong>playing cricket</strong> and <strong>football</strong>. I also enjoy <strong>cycling</strong> to clear my head and find fresh inspiration away from the screen!
                        </p>
                    </div>
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
