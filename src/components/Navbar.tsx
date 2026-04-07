import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0d1322]/80 backdrop-blur-xl shadow-[0_0_20px_rgba(45,212,191,0.1)]">
            <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
                <div className="text-xl font-bold tracking-tighter text-[#2dd4bf] font-headline">MURAD.OS</div>
                <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">

                    <a className="text-[#2dd4bf] border-b-2 border-[#2dd4bf] pb-1" href="#">Home</a>
                    <a className="text-slate-400 hover:text-white transition-colors" href="#">Skills</a>
                    <a className="text-slate-400 hover:text-white transition-colors" href="#">Experience</a>
                    <a className="text-slate-400 hover:text-white transition-colors" href="#">Education</a>
                    <a className="text-slate-400 hover:text-white transition-colors" href="#">Projects</a>
                    <a className="text-slate-400 hover:text-white transition-colors" href="#">Contact</a>
                </div>
                <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold hover:scale-95 active:scale-90 transition-transform">
                    Hire Me
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
