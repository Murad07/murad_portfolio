import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full border-t border-white/5 bg-[#0d1322]">
            <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 gap-4">
                <div className="font-mono text-xs uppercase tracking-widest text-slate-500">
                    © 2024 MURAD ARCHITECT OS. BUILT FOR THE FUTURE.
                </div>
                <div className="flex gap-8">
                    <a className="font-mono text-xs uppercase tracking-widest text-slate-500 hover:text-[#2dd4bf] hover:translate-y-[-2px] transition-all opacity-80 hover:opacity-100" href="https://github.com/Murad07">Github</a>

                    <a className="font-mono text-xs uppercase tracking-widest text-slate-500 hover:text-[#2dd4bf] hover:translate-y-[-2px] transition-all opacity-80 hover:opacity-100" href="#">LinkedIn</a>
                    <a className="font-mono text-xs uppercase tracking-widest text-slate-500 hover:text-[#2dd4bf] hover:translate-y-[-2px] transition-all opacity-80 hover:opacity-100" href="#">Twitter</a>
                    <a className="font-mono text-xs uppercase tracking-widest text-slate-500 hover:text-[#2dd4bf] hover:translate-y-[-2px] transition-all opacity-80 hover:opacity-100" href="#">Source</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
