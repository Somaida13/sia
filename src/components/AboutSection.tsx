import React, { useState } from 'react';
import { ArrowRight, Workflow, Database, Code2, Award, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, ACADEMIC_MILESTONES } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'skills' | 'milestones'>('skills');

  const scrollToContact = () => {
    const el = document.getElementById('kontak');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const el = document.getElementById('proyek');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tentang" className="py-20 lg:py-28 bg-[#fafafc] border-y border-slate-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* Top Split matching the "About me" layout from the screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Organic Blob Frame with Thick Purple Border (Exact match to screenshot!) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Organic Fluid Blob Container with Purple Border */}
              <div 
                className="relative overflow-hidden p-2 sm:p-3 bg-white shadow-2xl transition-all duration-300"
                style={{
                  border: '5px solid #5c50e6',
                  borderRadius: '62% 38% 46% 54% / 58% 42% 58% 42%',
                  boxShadow: '0 20px 40px -15px rgba(92, 80, 230, 0.22)'
                }}
              >
                <div 
                  className="w-full h-[320px] sm:h-[400px] overflow-hidden bg-slate-100"
                  style={{
                    borderRadius: '60% 40% 44% 56% / 56% 40% 60% 44%'
                  }}
                >
                  <img
                    src="/images/blog_study_setup_1791883835242.jpg"
                    alt="Hasymi - Analisis Sistem dan Perancangan Basis Data"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.02] hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Mini Highlight Card */}
              <div className="absolute -bottom-4 right-2 sm:right-6 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#5c50e6]">
                  <Workflow className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#1e1e2f]">System Analyst</div>
                  <div className="text-slate-500">BPMN 2.0 &amp; Database Designer</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: "About me" Typography & Two Pill CTA Buttons */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-wider text-[#5c50e6] uppercase">
                Profil Mahasiswa Sistem Informasi
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e1e2f] tracking-tight">
                About me
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Halo, saya seorang mahasiswa Program Studi <span className="font-semibold text-[#1e1e2f]">Sistem Informasi</span> &amp; <span className="font-semibold text-[#1e1e2f]">System Analyst</span> dari Indonesia. 
              Saya berdedikasi menciptakan arsitektur sistem informasi yang efisien, inovatif, dan mampu menyeimbangkan kebutuhan pengguna operasional dengan strategi bisnis manajemen.
            </p>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Terbiasa menerjemahkan proses manual yang rumit menjadi alur bisnis terstandarisasi (BPMN), merancang skema basis data relasional (3NF), serta mengembangkan antarmuka sistem enterprise modern yang mudah digunakan.
            </p>

            {/* Two Action Buttons matching screenshot pill buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToContact}
                className="px-7 py-3 text-sm font-semibold text-white bg-[#5c50e6] hover:bg-[#4d40d4] active:scale-95 rounded-full shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToProjects}
                className="px-6 py-3 text-sm font-semibold text-slate-700 hover:text-[#5c50e6] bg-white border border-slate-300 hover:border-[#5c50e6] active:scale-95 rounded-full transition-all shadow-sm"
              >
                View Portfolio
              </button>
            </div>

            {/* Quick Badges */}
            <div className="pt-4 flex flex-wrap gap-2 text-xs text-slate-500 font-medium">
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200">
                🎓 IPK 3.89 / 4.00
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200">
                📊 Data Warehouse &amp; BI
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200">
                ⚙️ Enterprise ERP &amp; BPMN
              </span>
            </div>

          </div>

        </div>

        {/* Detailed Competency & Journey Tabs */}
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${
                  activeTab === 'skills'
                    ? 'bg-[#5c50e6] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#5c50e6]'
                }`}
              >
                Matriks Keahlian &amp; Teknologi
              </button>
              <button
                onClick={() => setActiveTab('milestones')}
                className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${
                  activeTab === 'milestones'
                    ? 'bg-[#5c50e6] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#5c50e6]'
                }`}
              >
                Rekam Jejak &amp; Asistensi Lab
              </button>
            </div>

            <button
              onClick={onOpenResume}
              className="text-xs font-semibold text-[#5c50e6] hover:text-[#493ec4] flex items-center gap-1.5 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Buka Curriculum Vitae Resmi</span>
            </button>
          </div>

          {/* Tab 1: Skills */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-[#1e1e2f]">{cat.category}</h4>
                    <p className="text-xs text-slate-500 leading-snug">{cat.description}</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#1e1e2f]">{skill.name}</span>
                          <span className="text-[11px] font-semibold text-[#5c50e6]">{skill.level}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Milestones */}
          {activeTab === 'milestones' && (
            <div className="space-y-4">
              {ACADEMIC_MILESTONES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
                >
                  <div className="sm:w-48 shrink-0 space-y-1">
                    <span className="text-xs font-mono font-semibold text-[#5c50e6]">{item.period}</span>
                    <div className="text-xs font-medium text-slate-600">{item.institution}</div>
                  </div>
                  <div className="space-y-1 flex-1">
                    <h4 className="text-base font-bold text-[#1e1e2f]">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
