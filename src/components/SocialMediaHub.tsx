import React, { useState } from 'react';
import { Linkedin, Github, Instagram, Phone, Mail, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const SocialMediaHub: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [customWaTopic, setCustomWaTopic] = useState<string>('kolaborasi');
  const [customWaNotes, setCustomWaNotes] = useState<string>('');

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const getWaMessage = () => {
    let msg = `Halo Hasymi, perkenalkan saya pengunjung website portofoliomu. `;
    if (customWaTopic === 'kolaborasi') {
      msg += `Saya tertarik untuk mengajak kolaborasi dalam proyek pengembangan sistem informasi. `;
    } else if (customWaTopic === 'magang') {
      msg += `Saya ingin mendiskusikan peluang magang / rekrutmen talenta bidang Sistem Informasi / System Analyst. `;
    } else if (customWaTopic === 'konsultasi') {
      msg += `Saya ingin berkonsultasi mengenai perancangan proses bisnis (BPMN) / basis data. `;
    } else {
      msg += `Saya ingin berdiskusi santai mengenai topik teknologi dan perkuliahan Sistem Informasi. `;
    }
    if (customWaNotes.trim()) {
      msg += `Catatan tambahan: "${customWaNotes.trim()}".`;
    }
    return encodeURIComponent(msg);
  };

  const directWaUrl = `https://wa.me/6281234567890?text=${getWaMessage()}`;

  return (
    <section id="sosial" className="py-20 lg:py-28 bg-[#fafafc] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#5c50e6] uppercase">
            Jejaring Profesional &amp; Kanal Media Sosial
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e2f] tracking-tight">
            Terhubung Melalui Media Sosial
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Terhubung langsung dengan saya melalui berbagai kanal profesional untuk kolaborasi, diskusi akademik, 
            atau pesan otomatis cepat via WhatsApp.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. LinkedIn Card */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0a66c2]">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1e1e2f]">LinkedIn Network</h3>
                    <p className="text-xs text-slate-500">in/hasymi-ak</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-[#0a66c2] rounded-full">
                  500+ Koneksi
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Jejaring profesional untuk verifikasi sertifikasi kompetensi, rekomendasi akademis dosen, 
                serta tinjauan proyek rekayasa sistem informasi.
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 text-xs text-slate-600">
                <span className="font-semibold text-[#1e1e2f]">Top Endorsements:</span>
                <div>Enterprise Architecture · PostgreSQL · BPMN 2.0</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.socials[0].url}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-[#5c50e6] hover:bg-[#4d40d4] rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Kunjungi Profil LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.socials[0].url, 'linkedin')}
                className="p-2.5 text-slate-500 hover:text-[#5c50e6] bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                title="Salin tautan"
              >
                {copiedKey === 'linkedin' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* 2. GitHub Card */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#1e1e2f]">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1e1e2f]">GitHub Repositories</h3>
                    <p className="text-xs text-slate-500">@hasymi-is</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                  24 Repositori
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Repositori kode sumber tugas akhir, modul ETL data warehouse, sistem informasi enterprise, 
                serta skrip query database SQL.
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="font-mono font-semibold text-[#5c50e6]">unichain-erp-core</span>
                  <span>TypeScript · 84 ★</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="font-mono font-semibold text-[#5c50e6]">postgres-star-schema-etl</span>
                  <span>Python · 52 ★</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.socials[1].url}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-slate-700 hover:text-white bg-slate-100 hover:bg-[#1e1e2f] rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <span>Jelajahi GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.socials[1].url, 'github')}
                className="p-2.5 text-slate-500 hover:text-[#5c50e6] bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                title="Salin tautan"
              >
                {copiedKey === 'github' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* 3. WhatsApp Direct Generator */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1e1e2f]">WhatsApp Cepat</h3>
                    <p className="text-xs text-slate-500">+62 812-3456-7890</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                  Respon Instan
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pilih keperluan Anda untuk menghasilkan pesan terformat otomatis:
              </p>

              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => setCustomWaTopic('kolaborasi')}
                    className={`p-2 rounded-xl text-left transition-colors ${
                      customWaTopic === 'kolaborasi'
                        ? 'bg-indigo-50 border border-[#5c50e6] text-[#5c50e6] font-semibold'
                        : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#1e1e2f]'
                    }`}
                  >
                    Proyek Kolaborasi
                  </button>
                  <button
                    onClick={() => setCustomWaTopic('magang')}
                    className={`p-2 rounded-xl text-left transition-colors ${
                      customWaTopic === 'magang'
                        ? 'bg-indigo-50 border border-[#5c50e6] text-[#5c50e6] font-semibold'
                        : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#1e1e2f]'
                    }`}
                  >
                    Tawaran Magang
                  </button>
                </div>

                <input
                  type="text"
                  value={customWaNotes}
                  onChange={(e) => setCustomWaNotes(e.target.value)}
                  placeholder="Catatan tambahan (opsional)..."
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-[#1e1e2f] placeholder-slate-400 focus:outline-none focus:border-[#5c50e6] focus:bg-white"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={directWaUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim Chat WhatsApp Terformat</span>
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2.5 text-slate-500 hover:text-[#5c50e6] bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                title="Salin nomor"
              >
                {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* 4. Instagram & Email Hub */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1e1e2f]">Instagram Studygram</h3>
                    <p className="text-xs text-slate-500">@hasymi.techlife</p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-pink-50 text-pink-700 rounded-full">
                  Tech Journey
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dokumentasi kehidupan kampus, catatan belajar kuliah Sistem Informasi, 
                dan sharing seputar dunia rekayasa sistem enterprise.
              </p>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                <span className="text-slate-500 font-medium">Email Resmi:</span>
                <div className="font-semibold text-[#5c50e6] truncate">{PERSONAL_INFO.email}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.socials[2].url}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 rounded-full transition-opacity flex items-center justify-center gap-2 shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Buka Instagram</span>
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-[#5c50e6] bg-slate-100 hover:bg-slate-200 rounded-full transition-colors flex items-center gap-1.5"
              >
                {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>Salin Email</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
