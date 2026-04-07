"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0d1322]/80 backdrop-blur-xl shadow-[0_0_20px_rgba(45,212,191,0.1)]">
            <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-full mx-auto relative z-20">
                <Link href="/" onClick={closeMenu} className="text-xl font-bold tracking-tighter text-[#2dd4bf] font-headline">MURAD.DEV</Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
                    <Link className="text-[#2dd4bf] border-b-2 border-[#2dd4bf] pb-1" href="/">Home</Link>
                    <Link className="text-slate-400 hover:text-[#2dd4bf] transition-colors" href="/#about">About</Link>
                    <Link className="text-slate-400 hover:text-[#2dd4bf] transition-colors" href="/#skills">Skills</Link>
                    <Link className="text-slate-400 hover:text-[#2dd4bf] transition-colors" href="/#education">Education</Link>
                    <Link className="text-slate-400 hover:text-[#2dd4bf] transition-colors" href="/#experience">Experience</Link>
                    <Link className="text-slate-400 hover:text-[#2dd4bf] transition-colors" href="/#projects">Projects</Link>
                    <Link className="text-slate-400 hover:text-[#2dd4bf] transition-colors" href="/#contact">Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/#contact" onClick={closeMenu} className="hidden sm:inline-flex bg-[#2dd4bf]/10 border border-[#2dd4bf] text-[#2dd4bf] px-6 py-2 rounded-lg font-bold hover:bg-[#2dd4bf] hover:text-[#042f2e] active:scale-95 transition-all">
                        Hire Me
                    </Link>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex items-center justify-center p-2 rounded-md border border-slate-700 text-slate-300 hover:text-[#2dd4bf] hover:border-[#2dd4bf] transition-colors"
                        aria-label="Toggle Mobile Menu"
                    >
                        <span className="material-symbols-outlined">
                            {isMobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-[#0d1322]/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl md:hidden z-10"
                    >
                        <div className="flex flex-col px-6 py-6 gap-4 font-headline tracking-tight">
                            <Link onClick={closeMenu} className="text-lg text-[#2dd4bf]" href="/">Home</Link>
                            <Link onClick={closeMenu} className="text-lg text-slate-300 hover:text-[#2dd4bf] transition-colors" href="/#about">About</Link>
                            <Link onClick={closeMenu} className="text-lg text-slate-300 hover:text-[#2dd4bf] transition-colors" href="/#skills">Skills</Link>
                            <Link onClick={closeMenu} className="text-lg text-slate-300 hover:text-[#2dd4bf] transition-colors" href="/#education">Education</Link>
                            <Link onClick={closeMenu} className="text-lg text-slate-300 hover:text-[#2dd4bf] transition-colors" href="/#experience">Experience</Link>
                            <Link onClick={closeMenu} className="text-lg text-slate-300 hover:text-[#2dd4bf] transition-colors" href="/#projects">Projects</Link>
                            <Link onClick={closeMenu} className="text-lg text-slate-300 hover:text-[#2dd4bf] transition-colors" href="/#contact">Contact</Link>

                            <hr className="border-slate-800 my-2" />

                            <Link href="/#contact" onClick={closeMenu} className="inline-flex justify-center w-full bg-[#2dd4bf]/10 border border-[#2dd4bf] text-[#2dd4bf] px-6 py-3 rounded-lg font-bold">
                                Hire Me
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
