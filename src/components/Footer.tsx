import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenResume }) => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#5c50e6] to-[#8c82f8] flex items-center justify-center text-white font-bold text-base shadow-sm">
              H
            </div>
            <div>
              <span className="text-base font-bold text-[#1e1e2f] tracking-tight block">
                {PERSONAL_INFO.fullName}
              </span>
              <p className="text-xs text-slate-500">
                {PERSONAL_INFO.program} · {PERSONAL_INFO.university}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
            <a href="#profil" className="hover:text-[#5c50e6] transition-colors">Home</a>
            <a href="#tentang" className="hover:text-[#5c50e6] transition-colors">About</a>
            <a href="#proyek" className="hover:text-[#5c50e6] transition-colors">Portfolio</a>
            <a href="#sosial" className="hover:text-[#5c50e6] transition-colors">Socials</a>
            <a href="#blog" className="hover:text-[#5c50e6] transition-colors">Blog</a>
            <button onClick={onOpenResume} className="hover:text-[#5c50e6] transition-colors">CV</button>
            <button onClick={onOpenContact} className="hover:text-[#5c50e6] font-bold transition-colors">Contact</button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Jakarta &amp; Bandung</span>
            <span aria-hidden="true">·</span>
            <span>{PERSONAL_INFO.email}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
