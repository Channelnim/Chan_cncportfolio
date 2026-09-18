import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#16140d] text-[#fcf9f5] text-xs font-normal py-2.5 sm:py-3 text-center tracking-[0.2em] uppercase px-4 flex items-center justify-center">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff7a30] mr-2.5 animate-pulse"></span>
        <span>Available for Full-Time CNC Machinist Opportunities</span>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-40 w-full px-6 md:px-10 h-20 flex justify-between items-center bg-[#fcf9f5]/90 backdrop-blur-xl border-b border-[#16140d]/10 transition-all duration-300">
        <a
          href="#"
          className="font-serif text-lg md:text-xl font-normal tracking-[0.12em] text-[#16140d] uppercase group"
        >
          HYUNGCHAN OH <span className="italic font-light normal-case text-base text-[#16140d]/50 group-hover:text-[#ff7a30] transition-colors">/ CNC</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[0.65rem] font-normal tracking-[0.2em] text-[#16140d] uppercase">
          <a href="#capabilities" className="hover:text-[#ff7a30] transition-colors">
            Capabilities
          </a>
          <a href="#work" className="hover:text-[#ff7a30] transition-colors">
            Projects
          </a>
          <a href="#journey" className="hover:text-[#ff7a30] transition-colors">
            Background
          </a>
          <a href="#contact" className="hover:text-[#ff7a30] transition-colors">
            Contact
          </a>

          <div className="flex items-center gap-2 pl-2">
            <a
              href="/portfolio.pdf"
              download="Hyungchan_Oh_CNC_Machinist_Portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 bg-[#ff7a30] text-[#fcf9f5] border border-[#ff7a30] hover:bg-[#16140d] hover:border-[#16140d] transition-all duration-300 flex items-center gap-1.5 text-[0.62rem] font-medium tracking-[0.15em]"
              title="Download Portfolio"
            >
              <FileDown size={13} /> PORTFOLIO
            </a>
            <a
              href="/resume.pdf"
              download="Hyungchan_Oh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 bg-transparent text-[#16140d] border border-[#16140d] hover:bg-[#16140d] hover:text-[#fcf9f5] transition-all duration-300 flex items-center gap-1.5 text-[0.62rem] tracking-[0.15em]"
              title="Download Resume"
            >
              <FileDown size={13} /> RESUME
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          id="mobile-menu-toggle-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#16140d] p-2 focus:outline-none hover:text-[#ff7a30] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-dropdown"
          className="md:hidden sticky top-20 z-30 w-full bg-[#fcf9f5] border-b border-[#16140d]/10 px-6 py-8 flex flex-col space-y-5 text-xs uppercase tracking-[0.2em] shadow-lg animate-fadeIn"
        >
          <a
            href="#capabilities"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[#16140d] hover:text-[#ff7a30] py-2 border-b border-[#16140d]/10 transition-colors"
          >
            Capabilities
          </a>
          <a
            href="#work"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[#16140d] hover:text-[#ff7a30] py-2 border-b border-[#16140d]/10 transition-colors"
          >
            Projects
          </a>
          <a
            href="#journey"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[#16140d] hover:text-[#ff7a30] py-2 border-b border-[#16140d]/10 transition-colors"
          >
            Background
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[#16140d] hover:text-[#ff7a30] py-2 border-b border-[#16140d]/10 transition-colors"
          >
            Contact
          </a>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href="/portfolio.pdf"
              download="Hyungchan_Oh_CNC_Machinist_Portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3.5 text-center bg-[#ff7a30] text-[#fcf9f5] hover:bg-[#16140d] transition-colors flex items-center justify-center gap-2 text-xs font-medium"
            >
              <FileDown size={15} /> DOWNLOAD PORTFOLIO
            </a>
            <a
              href="/resume.pdf"
              download="Hyungchan_Oh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3.5 text-center bg-transparent border border-[#16140d] text-[#16140d] hover:bg-[#16140d] hover:text-[#fcf9f5] transition-colors flex items-center justify-center gap-2 text-xs"
            >
              <FileDown size={15} /> DOWNLOAD RESUME
            </a>
            <a
              href="mailto:chanoh0926@gmail.com"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-2.5 text-center text-[#16140d]/70 hover:text-[#ff7a30] transition-colors flex items-center justify-center gap-2 text-[0.7rem]"
            >
              GET IN TOUCH <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
