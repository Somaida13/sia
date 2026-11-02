/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectGallery } from './components/ProjectGallery';
import { SocialMediaHub } from './components/SocialMediaHub';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profil');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profil', 'tentang', 'proyek', 'sosial', 'blog', 'kontak'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('kontak');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1e1e2f] flex flex-col selection:bg-[#5c50e6] selection:text-white font-sans">
      {/* Top Navigation */}
      <Navbar
        onOpenContact={scrollToContact}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with 2-Column Split & KPI Strip */}
        <HeroSection
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenContact={scrollToContact}
        />

        {/* 2. Profil Akademik & Keahlian (BPMN, Data, Systems) */}
        <AboutSection
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* 3. Galeri Proyek Akademik Responsif */}
        <ProjectGallery />

        {/* 4. Integrasi Media Sosial & Kontak Cepat */}
        <SocialMediaHub />

        {/* 5. Blog Pengalaman Belajar & Wawasan Teknologi */}
        <BlogSection />

        {/* 6. Halaman Kontak dengan Fitur Pesan Otomatis */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={scrollToContact}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
