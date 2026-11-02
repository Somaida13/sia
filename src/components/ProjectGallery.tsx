import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, ExternalLink, Github, Database } from 'lucide-react';
import { ACADEMIC_PROJECTS } from '../data/portfolioData';
import { AcademicProject } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const ProjectGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<AcademicProject | null>(null);

  const categories = [
    'Semua',
    'Enterprise ERP',
    'Basis Data & BI',
    'Web & Mobile App',
    'UI/UX & BPMN',
    'Riset & Publikasi'
  ];

  const filteredProjects = useMemo(() => {
    return ACADEMIC_PROJECTS.filter((proj) => {
      const matchCategory = selectedCategory === 'Semua' || proj.category === selectedCategory;
      const matchSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="proyek" className="py-20 lg:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#5c50e6] uppercase">
              Portfolio &amp; Showcase Akademik
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e2f] tracking-tight">
              Galeri Proyek Sistem Informasi
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Kompilasi proyek sistem informasi berbasis studi kasus nyata, mencakup spesifikasi kebutuhan (SRS), 
              pemodelan proses bisnis BPMN 2.0, serta normalisasi basis data relasional.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari ERP, SQL, BPMN..."
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-xs sm:text-sm text-[#1e1e2f] placeholder-slate-400 focus:outline-none focus:border-[#5c50e6] focus:bg-white transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#5c50e6] text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-[#5c50e6] hover:border-indigo-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 px-4 rounded-3xl border border-slate-200 bg-slate-50 space-y-3">
            <Database className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-[#1e1e2f]">Tidak ada proyek yang sesuai pencarian</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Silakan ganti kata kunci atau pilih kategori &quot;Semua&quot; untuk melihat seluruh proyek.
            </p>
            <button
              onClick={() => { setSelectedCategory('Semua'); setSearchQuery(''); }}
              className="mt-2 px-5 py-2 text-xs font-semibold text-white bg-[#5c50e6] rounded-full hover:bg-[#4d40d4] transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Responsive Bento Grid with Clean White Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0 && selectedCategory === 'Semua';

            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`group cursor-pointer rounded-3xl bg-white border border-slate-200 hover:border-indigo-200 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/10 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Project Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient overlay for soft text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                      <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[#5c50e6] font-bold shadow-sm">
                        {project.category}
                      </span>
                      <span className="bg-[#1e1e2f]/85 backdrop-blur-md px-3 py-1 rounded-full text-amber-300 font-medium">
                        {project.gradeBadge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 text-xs text-white font-mono">
                      {project.role}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{project.semester}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1e1e2f] group-hover:text-[#5c50e6] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="text-slate-500">
                          <span className="text-[#5c50e6] font-mono font-bold">{m.value}</span>{' '}
                          <span>{m.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-2 text-xs text-slate-500 font-mono flex flex-wrap gap-1.5 items-center">
                      {project.techStack.slice(0, 4).map((tech, tIdx) => (
                        <span key={tIdx} className="text-slate-700">
                          {tech}
                          {tIdx < Math.min(project.techStack.length, 4) - 1 ? ' ·' : ''}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="text-[#5c50e6] font-semibold">+{project.techStack.length - 4}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#5c50e6] group-hover:text-[#463bc0] flex items-center gap-1.5 transition-colors">
                    <span>Lihat Detail Arsitektur</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-400 hover:text-slate-800 hover:bg-white rounded-full transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-400 hover:text-[#5c50e6] hover:bg-white rounded-full transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
