import React from 'react';
import { ArrowRight, ArrowUpRight, Linkedin, Github, Instagram, Phone, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenContact }) => {
  return (
    <section id="profil" className="relative min-h-[640px] lg:min-h-[720px] overflow-hidden bg-white">
      
      {/* Signature Large Organic Purple Wave on the Right (matching screenshot) */}
      <div 
        className="absolute top-0 right-0 w-[55%] lg:w-[48%] h-full pointer-events-none hidden md:block z-0"
        style={{
          background: 'linear-gradient(145deg, #5c50e6 0%, #4b3fd0 100%)',
          clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 18% 75%, 28% 50%, 15% 25%)',
          borderRadius: '0 0 0 160px'
        }}
      />

      {/* Decorative Organic Secondary Wave Curve for soft edge */}
      <div 
        className="absolute top-0 right-0 w-[58%] lg:w-[50%] h-full pointer-events-none hidden md:block -z-10 opacity-30"
        style={{
          background: '#8c82f8',
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 5% 100%, 25% 70%, 35% 45%, 20% 20%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 pt-8 sm:pt-14 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Far Left Vertical Social Rail (Iconic element from screenshot) */}
          <div className="hidden lg:flex md:col-span-1 flex-col items-center justify-center gap-6 py-8 text-xs text-slate-400 select-none">
            <div 
              className="flex items-center gap-4 tracking-wider text-slate-500 font-medium"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.socials[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#5c50e6] transition-colors"
                >
                  LinkedIn
                </a>
                <span>·</span>
                <a
                  href={PERSONAL_INFO.socials[1].url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#5c50e6] transition-colors"
                >
                  GitHub
                </a>
                <span>·</span>
                <a
                  href={PERSONAL_INFO.socials[2].url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#5c50e6] transition-colors"
                >
                  Instagram
                </a>
              </div>
              <span className="flex items-center gap-1 text-slate-400">
                <span>Follow me</span>
                <span className="text-slate-400">──&gt;</span>
              </span>
            </div>
          </div>

          {/* Left Hero Typographic Content (matching screenshot text layout) */}
          <div className="md:col-span-7 lg:col-span-6 space-y-6 pt-4 lg:pt-8">
            
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-600 block">
                Hello,
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1e1e2f] tracking-tight leading-tight">
                I Am <span className="font-bold text-[#1e1e2f]">{PERSONAL_INFO.fullName}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-600 pt-1">
                Mahasiswa Sistem Informasi &amp; System Analyst
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg">
              Berfokus pada perancangan arsitektur enterprise (ERP), rekayasa basis data relasional (PostgreSQL), 
              serta pemodelan proses bisnis (BPMN 2.0) untuk menghasilkan solusi teknologi yang efisien dan berdampak bagi organisasi.
            </p>

            {/* Action Buttons matching screenshot pill style */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="px-7 py-3 text-sm font-semibold text-white bg-[#5c50e6] hover:bg-[#4d40d4] active:scale-95 rounded-full shadow-xl shadow-indigo-500/25 transition-all flex items-center gap-2 group"
              >
                <span>Let&apos;s talk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-6 py-3 text-sm font-semibold text-slate-700 hover:text-[#5c50e6] bg-white border border-slate-300 hover:border-[#5c50e6] active:scale-95 rounded-full transition-all flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#5c50e6]" />
                <span>Lihat CV Lengkap</span>
              </button>
            </div>

            {/* Key stats row in hero */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100 max-w-md">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#5c50e6]">3.89</div>
                <div className="text-xs text-slate-500">IPK Kumulatif</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#1e1e2f]">16+</div>
                <div className="text-xs text-slate-500">Proyek Akademik</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#1e1e2f]">5</div>
                <div className="text-xs text-slate-500">Sertifikasi BNSP</div>
              </div>
            </div>

          </div>

          {/* Right Hero Image (Inside the purple wave) */}
          <div className="md:col-span-5 lg:col-span-5 relative flex justify-center items-center">
            
            {/* Mobile background blob for small screens */}
            <div className="md:hidden absolute inset-0 bg-[#5c50e6] rounded-3xl -z-10 opacity-95 transform -rotate-1" />

            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Organic Frame for portrait */}
              <div 
                className="relative overflow-hidden rounded-2xl md:rounded-[48px] shadow-2xl"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(92, 80, 230, 0.25)'
                }}
              >
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-top filter brightness-[1.02] contrast-[1.03]"
                />

                {/* Subtle caption badge at bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/50 text-xs shadow-md">
                  <div className="font-bold text-[#1e1e2f] flex items-center justify-between">
                    <span>{PERSONAL_INFO.fullName}</span>
                    <span className="text-[#5c50e6] font-mono">Sem. 7</span>
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Prodi Sistem Informasi · {PERSONAL_INFO.university}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
