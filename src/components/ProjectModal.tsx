import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers } from 'lucide-react';
import { AcademicProject } from '../types/portfolio';

interface ProjectModalProps {
  project: AcademicProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="font-bold text-[#5c50e6]">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.semester} ({project.year})</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-600 font-semibold">{project.gradeBadge}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-200 rounded-full transition-colors"
            aria-label="Tutup jendela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 relative aspect-video bg-slate-100">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-700 shadow-sm">
                Peran: <span className="font-bold text-[#5c50e6]">{project.role}</span>
              </div>
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1e1e2f] tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5c50e6] font-semibold">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Metrics Highlight Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#5c50e6]">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-600">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-sm font-bold text-[#1e1e2f] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Tantangan &amp; Masalah Bisnis
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-sm font-bold text-[#1e1e2f] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Solusi &amp; Pendekatan Sistem
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture */}
          <div className="space-y-2.5 p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 text-sm font-bold text-[#1e1e2f]">
              <Cpu className="w-4 h-4 text-[#5c50e6]" />
              <span>Arsitektur Sistem &amp; Spesifikasi Teknis</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-mono">
              {project.systemArchitecture}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="text-slate-500 mr-1 font-medium">Teknologi Terpakai:</span>
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="text-[#5c50e6] font-mono font-medium">
                  {tech}{idx < project.techStack.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#1e1e2f] flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-500" />
              <span>Artefak &amp; Luaran Proyek (Deliverables)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-slate-200 bg-slate-50">
          <div className="text-xs text-slate-500">
            Program Studi Sistem Informasi
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:border-slate-400 rounded-full transition-colors flex items-center gap-2 shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>Repositori GitHub</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-xs font-semibold text-white bg-[#5c50e6] hover:bg-[#4d40d4] rounded-full transition-colors flex items-center gap-2 shadow-md shadow-indigo-500/25"
            >
              <span>Demo / Dokumentasi</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
