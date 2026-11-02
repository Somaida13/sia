import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#profil', id: 'profil' },
    { label: 'About', href: '#tentang', id: 'tentang' },
    { label: 'Portfolio', href: '#proyek', id: 'proyek' },
    { label: 'Socials', href: '#sosial', id: 'sosial' },
    { label: 'Blog', href: '#blog', id: 'blog' },
    { label: 'Contact', href: '#kontak', id: 'kontak' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative z-40 bg-transparent">
      {/* Top Lavender Bar Accent matching the screenshot */}
      <div className="absolute top-0 left-12 sm:left-24 right-1/3 h-10 bg-[#cfc7f0]/75 rounded-b-sm pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Top Left: Circular Monogram / Brand Icon */}
          <a
            href="#profil"
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#5c50e6] to-[#8c82f8] flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              H
            </div>
            <div className="hidden sm:block">
              <span className="text-base font-bold text-[#1e1e2f] tracking-tight group-hover:text-[#5c50e6] transition-colors">
                Hasymi
              </span>
              <span className="text-xs text-slate-500 block -mt-1 font-medium">
                Sistem Informasi
              </span>
            </div>
          </a>

          {/* Navigation Links (placed on the right, matching screenshot) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`whitespace-nowrap transition-colors py-1 ${
                  activeSection === item.id
                    ? 'text-white md:text-[#5c50e6] font-bold border-b-2 border-[#5c50e6]'
                    : 'text-slate-200 lg:text-slate-700 hover:text-[#5c50e6]'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            <button
              onClick={onOpenContact}
              className="ml-2 px-5 py-2 text-xs font-semibold text-white bg-[#5c50e6] hover:bg-[#4f43d4] active:scale-95 rounded-full shadow-md shadow-indigo-500/25 transition-all flex items-center gap-1.5"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </nav>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#5c50e6] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-5 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-indigo-50 text-[#5c50e6] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#5c50e6] rounded-full hover:bg-[#4f43d4] transition-colors flex items-center justify-center gap-2 shadow-md shadow-indigo-500/25"
            >
              <span>Let&apos;s talk (Pesan Otomatis)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
