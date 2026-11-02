import React, { useState } from 'react';
import { X, Printer, Check, Copy, BookOpen, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO, ACADEMIC_PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50 print:hidden">
          <div className="text-xs font-bold text-[#1e1e2f]">
            Curriculum Vitae Akademik &amp; Spesifikasi Teknis
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#5c50e6] hover:bg-[#4d40d4] rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-full transition-colors"
              title="Salin tautan CV"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-full transition-colors ml-1"
              aria-label="Tutup jendela"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-8 sm:p-12 space-y-8 max-h-[82vh] overflow-y-auto bg-white text-slate-800 font-sans">
          
          {/* Header CV */}
          <div className="border-b border-slate-200 pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1e1e2f] tracking-tight">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="text-base text-[#5c50e6] font-semibold">
              {PERSONAL_INFO.role} · {PERSONAL_INFO.program}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-1 font-medium">
              <span>{PERSONAL_INFO.email}</span>
              <span aria-hidden="true">·</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span aria-hidden="true">·</span>
              <span>{PERSONAL_INFO.location}</span>
              <span aria-hidden="true">·</span>
              <span>linkedin.com/in/hasymi-ak</span>
            </div>
          </div>

          {/* Ringkasan Profil */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e1e2f] border-b border-slate-200 pb-1 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#5c50e6]" />
              <span>Ringkasan Profesional</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {PERSONAL_INFO.bio} Berpengalaman dalam perancangan spesifikasi kebutuhan perangkat lunak (SRS/SKPL), 
              pemodelan proses bisnis BPMN 2.0, serta pengujian perangkat lunak sistem informasi.
            </p>
          </div>

          {/* Pendidikan */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e1e2f] border-b border-slate-200 pb-1 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span>Pendidikan</span>
            </h2>
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-[#1e1e2f]">
                <span>{PERSONAL_INFO.university}</span>
                <span className="text-xs text-slate-500 font-normal">2023 – 2027 (Estimasi)</span>
              </div>
              <div className="text-[#5c50e6] font-medium text-xs">
                {PERSONAL_INFO.program} (Konsentrasi Arsitektur Enterprise &amp; Rekayasa Data)
              </div>
              <div className="text-slate-500 text-xs">
                IPK: <strong className="text-[#1e1e2f] font-mono">{PERSONAL_INFO.gpa}</strong> (Skala 4.00) · 120 SKS Selesai
              </div>
            </div>
          </div>

          {/* Pengalaman & Proyek Akademik Unggulan */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e1e2f] border-b border-slate-200 pb-1 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-amber-500" />
              <span>Proyek Sistem Informasi Unggulan</span>
            </h2>

            {ACADEMIC_PROJECTS.slice(0, 3).map((proj) => (
              <div key={proj.id} className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-[#1e1e2f]">
                  <span>{proj.title}</span>
                  <span className="text-xs text-slate-500 font-normal">{proj.semester} · {proj.year}</span>
                </div>
                <div className="text-xs text-[#5c50e6] font-mono">
                  Peran: {proj.role} · Tech: {proj.techStack.join(', ')}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {proj.description}
                </p>
                <div className="text-[11px] text-slate-500">
                  Deliverables: {proj.deliverables.join(' · ')}
                </div>
              </div>
            ))}
          </div>

          {/* Keahlian Teknis & Tools */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e1e2f] border-b border-slate-200 pb-1 flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-500" />
              <span>Kompetensi Teknis &amp; Alat Bantu</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-[#1e1e2f]">Sistem &amp; Proses Bisnis:</div>
                <div className="text-slate-600 pt-1">BPMN 2.0 (Camunda), UML Diagram, IEEE SRS, Odoo ERP, Design Thinking, Usability Testing (SUS).</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-[#1e1e2f]">Basis Data &amp; Analisis:</div>
                <div className="text-slate-600 pt-1">PostgreSQL, MySQL, Database Normalization (3NF), Star Schema OLAP, Python Pandas, Metabase.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
