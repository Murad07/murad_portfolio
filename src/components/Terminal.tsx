import React from 'react';

const Terminal = () => {
    return (
        <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-xl overflow-hidden border border-outline-variant/20 bg-surface-container-low glass-panel shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-surface-container-highest/50 border-b border-outline-variant/10">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="text-xs font-mono text-on-surface-variant/60 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[14px]">description</span>
                        developer.js
                    </div>
                    <div className="w-12"></div>
                </div>
                {/* Terminal Body */}
                <div className="p-8 font-mono text-sm md:text-base leading-relaxed">
                    <pre className="text-on-surface"><code><span className="text-secondary">const</span> <span className="text-primary">developer</span> = {'{'}<br />
                        {'  '}name: <span className="text-tertiary">&apos;Mohammad Murad Hossain&apos;</span>,<br />
                        {'  '}title: <span className="text-tertiary">&apos;Full Stack Architect&apos;</span>,<br />
                        {'  '}skills: [<br />
                        {'    '}<span className="text-tertiary">&apos;React&apos;</span>, <span className="text-tertiary">&apos;Next.js&apos;</span>, <span className="text-tertiary">&apos;Node.js&apos;</span>,<br />
                        {'    '}<span className="text-tertiary">&apos;TypeScript&apos;</span>, <span className="text-tertiary">&apos;Cloud&apos;</span><br />
                        {'  '}],<br />
                        {'  '}passion: <span className="text-tertiary">&apos;Technological Innovation&apos;</span>,<br />

                        {'  '}status: <span className="text-primary">true</span>,<br />
                        {'  '}location: <span className="text-tertiary">&apos;Cyber Space&apos;</span><br />
                        {'}'};<br />
                        <br />
                        <span className="text-slate-500">// Building the future, one line at a time.</span><br />
                        <span className="text-primary">developer</span>.buildNextGenSolution();</code></pre>
                </div>
            </div>
            {/* Floating Decorative Element */}
            <div className="absolute -bottom-6 -right-6 p-4 rounded-lg bg-surface-container-high border border-outline-variant/20 shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">bolt</span>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500">System Load</p>
                        <p className="font-mono text-primary font-bold">OPTIMAL</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
