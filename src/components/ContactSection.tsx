import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, Clock, ShieldCheck, ExternalLink, RefreshCw, FileText } from 'lucide-react';
import { ContactSubmission } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryType, setInquiryType] = useState<ContactSubmission['inquiryType']>('Proyek Kolaborasi');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recentSubmission, setRecentSubmission] = useState<ContactSubmission | null>(null);
  const [submissionsList, setSubmissionsList] = useState<ContactSubmission[]>([]);
  const [viewMode, setViewMode] = useState<'form' | 'history'>('form');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const ticketNumber = `SI-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const submissionTime = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
      
      const simulatedResponseText = `Halo ${fullName}! Terima kasih telah menghubungi saya melalui website portofolio Sistem Informasi. Pesan Anda mengenai "${subject || inquiryType}" telah berhasil tercatat dengan Nomor Tiket ${ticketNumber}. Sistem otomatis telah meneruskan notifikasi ini ke perangkat utama saya. Saya (Hasymi) berkomitmen meninjau dan membalas pertanyaan Anda ke alamat email ${email} dalam waktu maksimal 1-2 jam kerja. Jika membutuhkan respons mendesak, silakan klik tautan WhatsApp otomatis di bawah. Salam hangat!`;

      const newSubmission: ContactSubmission = {
        id: `sub-${Date.now()}`,
        ticketNumber,
        fullName,
        email,
        phone: phone || '-',
        inquiryType,
        subject: subject || `Pertanyaan Seputar ${inquiryType}`,
        message,
        timestamp: `${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })} pukul ${submissionTime}`,
        autoReplyStatus: 'Terkirim Otomatis',
        simulatedResponse: simulatedResponseText,
      };

      setRecentSubmission(newSubmission);
      setSubmissionsList([newSubmission, ...submissionsList]);
      setIsSubmitting(false);

      setFullName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, 700);
  };

  const getWaFormattedUrl = (sub: ContactSubmission) => {
    const text = encodeURIComponent(
      `Halo Hasymi, saya ${sub.fullName}. Saya baru saja mengirimkan pesan otomatis melalui website portofoliomu (Tiket: ${sub.ticketNumber}) terkait "${sub.subject}".\n\nIsi pesan: "${sub.message}"\n\nEmail saya: ${sub.email}. Mohon dapat ditindaklanjuti. Terima kasih!`
    );
    return `https://wa.me/6281234567890?text=${text}`;
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-[#fafafc] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#5c50e6] uppercase">
            Hubungi Saya &amp; Pesan Otomatis
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e2f] tracking-tight">
            Kirim Pesan Langsung
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Punya tawaran proyek perancangan sistem, kesempatan magang, atau ingin berdiskusi mengenai studi Sistem Informasi? 
            Kirimkan pesan melalui formulir di bawah untuk mendapatkan konfirmasi nomor tiket dan pesan otomatis seketika.
          </p>
        </div>

        {/* 2-Column Split: Form Left, Info & Auto-Reply Status Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & History Mode */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* View Mode Toggle */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2 p-1 bg-white border border-slate-200 rounded-full shadow-sm">
                <button
                  type="button"
                  onClick={() => setViewMode('form')}
                  className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${
                    viewMode === 'form' ? 'bg-[#5c50e6] text-white shadow-sm' : 'text-slate-600 hover:text-[#5c50e6]'
                  }`}
                >
                  Formulir Kirim Pesan
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('history')}
                  className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${
                    viewMode === 'history' ? 'bg-[#5c50e6] text-white shadow-sm' : 'text-slate-600 hover:text-[#5c50e6]'
                  }`}
                >
                  Riwayat ({submissionsList.length})
                </button>
              </div>

              <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#5c50e6]" />
                <span>Balasan Otomatis: Aktif</span>
              </div>
            </div>

            {viewMode === 'form' ? (
              <form onSubmit={handleSubmit} className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Nama Lengkap <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#1e1e2f] placeholder-slate-400 focus:outline-none focus:border-[#5c50e6] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Alamat Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@perusahaan.com / gmail.com"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#1e1e2f] placeholder-slate-400 focus:outline-none focus:border-[#5c50e6] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Nomor WhatsApp / HP (Opsional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+62 812-xxxx-xxxx"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#1e1e2f] placeholder-slate-400 focus:outline-none focus:border-[#5c50e6] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Kategori Keperluan
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value as ContactSubmission['inquiryType'])}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#1e1e2f] focus:outline-none focus:border-[#5c50e6] focus:bg-white transition-all"
                    >
                      <option value="Proyek Kolaborasi">Proyek Kolaborasi Rekayasa Sistem</option>
                      <option value="Tawaran Magang/Kerja">Tawaran Magang / Posisi System Analyst</option>
                      <option value="Konsultasi Sistem">Konsultasi BPMN &amp; Basis Data</option>
                      <option value="Tanya Kuliah SI">Tanya Jawab Kuliah Sistem Informasi</option>
                      <option value="Lainnya">Keperluan Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Subjek Pesan
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Contoh: Diskusi Perancangan ERP / Peluang Magang"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#1e1e2f] placeholder-slate-400 focus:outline-none focus:border-[#5c50e6] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Isi Pesan Detail <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan deskripsi proyek, timeline, atau hal yang ingin didiskusikan..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#1e1e2f] placeholder-slate-400 focus:outline-none focus:border-[#5c50e6] focus:bg-white transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-[#5c50e6] hover:bg-[#4d40d4] active:scale-[0.99] rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Memproses &amp; Menerbitkan Balasan Otomatis...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Pesan &amp; Dapatkan Respon Otomatis</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            ) : (
              <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#1e1e2f]">Riwayat Pengiriman Pesan</h3>
                  <span className="text-xs text-slate-500">{submissionsList.length} Tiket</span>
                </div>

                {submissionsList.length === 0 ? (
                  <div className="py-12 text-center text-xs text-slate-500 space-y-2">
                    <p>Belum ada pesan yang dikirimkan pada sesi ini.</p>
                    <button
                      type="button"
                      onClick={() => setViewMode('form')}
                      className="text-[#5c50e6] font-semibold hover:underline"
                    >
                      Kirim Pesan Pertama
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {submissionsList.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono font-bold text-[#5c50e6]">{item.ticketNumber}</span>
                          <span className="text-slate-500">{item.timestamp}</span>
                        </div>
                        <div className="text-sm font-bold text-[#1e1e2f]">{item.subject}</div>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{item.message}</p>
                        
                        <div className="pt-2 flex items-center justify-between border-t border-slate-200 text-xs">
                          <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5" /> {item.autoReplyStatus}
                          </span>
                          <a
                            href={getWaFormattedUrl(item)}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#5c50e6] hover:underline flex items-center gap-1 font-medium"
                          >
                            <span>Lanjut ke WhatsApp</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Right Column: Live Feedback & Info Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {recentSubmission ? (
              <div className="p-7 rounded-3xl bg-indigo-50/70 border border-indigo-200 space-y-4 shadow-xl shadow-indigo-500/10 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Pesan Berhasil Diterima</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#5c50e6]">
                    #{recentSubmission.ticketNumber}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-base font-bold text-[#1e1e2f]">
                    Pesan Balasan Otomatis dari Hasymi:
                  </h4>
                  <div className="p-4 rounded-2xl bg-white border border-indigo-100 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2 shadow-sm">
                    <p>{recentSubmission.simulatedResponse}</p>
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold text-[#1e1e2f]">Tindakan Cepat:</div>
                  <a
                    href={getWaFormattedUrl(recentSubmission)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Lanjutkan Obrolan ke WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Tindak%20Lanjut%20Tiket%20${recentSubmission.ticketNumber}&body=${encodeURIComponent(recentSubmission.message)}`}
                    className="w-full py-3 px-4 text-xs font-semibold text-slate-700 hover:text-black bg-white border border-slate-300 rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#5c50e6]" />
                    <span>Kirim Salinan ke Email Resmi</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#5c50e6]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1e1e2f]">Sistem Notifikasi Cerdas</h3>
                    <p className="text-xs text-slate-500">Respon langsung terverifikasi</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Formulir ini terhubung dengan mesin respon otomatis yang langsung membuat nomor tiket kontak resmi untuk memastikan pesan Anda ditindaklanjuti.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1.5">
                  <div className="font-bold text-[#1e1e2f] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#5c50e6]" />
                    <span>Estimasi Balasan Personal:</span>
                  </div>
                  <div>
                    Hari Kerja: <strong>&lt; 2 Jam</strong> · Akhir Pekan: <strong>&lt; 4 Jam</strong>
                  </div>
                </div>
              </div>
            )}

            {/* Direct Official Contact Info Card */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-[#1e1e2f]">Kontak Langsung</h3>
              
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#5c50e6] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400">Email:</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#1e1e2f] font-semibold hover:text-[#5c50e6]">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400">WhatsApp:</div>
                    <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="text-[#1e1e2f] font-semibold hover:text-emerald-600">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400">Domisili:</div>
                    <span className="text-[#1e1e2f] font-semibold">{PERSONAL_INFO.location}</span>
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
