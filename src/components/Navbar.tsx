import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0d1322]/80 backdrop-blur-xl shadow-[0_0_20px_rgba(45,212,191,0.1)]">
            <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
                <Link href="/" className="text-xl font-bold tracking-tighter text-[#2dd4bf] font-headline">MURAD.DEV</Link>
                <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
                    <Link className="text-[#2dd4bf] border-b-2 border-[#2dd4bf] pb-1" href="/">Home</Link>
                    <Link className="text-slate-400 hover:text-[#2dd4bf] transition-colors" href="/#about">About</Link>
                    <Link className="text-slate-400 hover:text-[#2dd4bf] transition-colors" href="/#skills">Skills</Link>
                    <Link className="text-slate-400 hover:text-[#2dd4bf] transition-colors" href="/#education">Education</Link>
                    <Link className="text-slate-400 hover:text-[#2dd4bf] transition-colors" href="/#experience">Experience</Link>
                    <Link className="text-slate-400 hover:text-[#2dd4bf] transition-colors" href="/#projects">Projects</Link>
                    <Link className="text-slate-400 hover:text-[#2dd4bf] transition-colors" href="/#contact">Contact</Link>
                </div>
                <Link href="/#contact" className="bg-[#2dd4bf]/10 border border-[#2dd4bf] text-[#2dd4bf] px-6 py-2 rounded-lg font-bold hover:bg-[#2dd4bf] hover:text-[#042f2e] active:scale-95 transition-all">
                    Hire Me
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
