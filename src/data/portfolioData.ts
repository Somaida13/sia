import { AcademicProject, BlogPost, SkillItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: 'Muhammad Hasymi',
  preferredName: 'Hasymi',
  role: 'Mahasiswa Sistem Informasi',
  university: 'Universitas Indonesia / Telkom University',
  department: 'Fakultas Ilmu Komputer / Rekayasa Industri',
  program: 'Program Studi Sistem Informasi (S1)',
  semester: 'Semester 7',
  gpa: '3.89 / 4.00',
  email: 'hasymi.ak@gmail.com',
  phone: '+62 812-3456-7890',
  whatsappUrl: 'https://wa.me/6281234567890',
  location: 'Jakarta & Bandung, Indonesia',
  bio: 'Mahasiswa Sistem Informasi dengan ketertarikan kuat dalam Arsitektur Enterprise (ERP), Rekayasa Basis Data (RDBMS & Data Warehouse), serta Analisis Proses Bisnis (BPMN 2.0). Terbiasa menjembatani kebutuhan bisnis manajemen dengan implementasi teknis perangkat lunak modern.',
  avatar: '/src/assets/images/hero_student_profile_1791883832836.jpg',
  stats: [
    { label: 'Indeks Prestasi Kumulatif', value: '3.89' },
    { label: 'Proyek Akademik & Mandiri', value: '16+' },
    { label: 'Sertifikasi Kompetensi', value: '5 Bidang' },
    { label: 'Pengalaman Asisten Lab & Riset', value: '3 Semester' },
  ],
  socials: [
    {
      platform: 'LinkedIn',
      username: 'linkedin.com/in/hasymi-ak',
      url: 'https://www.linkedin.com/in/hasymi-ak',
      description: 'Jaringan profesional, sertifikasi, rekomendasi dosen & rekan proyek riset sistem informasi.',
      badgeText: '500+ Koneksi'
    },
    {
      platform: 'GitHub',
      username: 'github.com/hasymi-is',
      url: 'https://github.com',
      description: 'Kumpulan repositori kode kuliah, tugas akhir, skrip SQL query, dan proyek fullstack modern.',
      badgeText: '24 Repositori'
    },
    {
      platform: 'Instagram',
      username: '@hasymi.techlife',
      url: 'https://instagram.com',
      description: 'Dokumentasi kehidupan kampus, catatan belajar studi sistem informasi, dan sharing seputar tech.',
      badgeText: 'Daily Updates'
    },
    {
      platform: 'Email',
      username: 'hasymi.ak@gmail.com',
      url: 'mailto:hasymi.ak@gmail.com',
      description: 'Kanal komunikasi resmi untuk tawaran magang, kolaborasi riset, dan diskusi akademik.',
      badgeText: 'Respon Cepat'
    }
  ]
};

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    id: 'proj-1',
    title: 'UniChain ERP: Sistem Manajemen Rantai Pasok Laboratorium Kampus',
    subtitle: 'Perancangan Enterprise Resource Planning Terintegrasi Pengadaan & Inventaris',
    category: 'Enterprise ERP',
    semester: 'Semester 6',
    year: '2026',
    gradeBadge: 'Nilai A (Proyek Unggulan)',
    description: 'Sistem ERP modular berbasis web untuk mengotomatisasi siklus pengadaan alat laboratorium fakultas, mulai dari Purchase Requisition, Approval Dekanat, hingga Stock Card tracking.',
    longDescription: 'Proyek capstone mata kuliah Perancangan Sistem Enterprise (PSE). Bertujuan memecahkan bottleneck pengadaan barang laboratorium yang sebelumnya memakan waktu 14 hari kerja akibat birokrasi manual berbasis formulir kertas. Sistem dirancang dengan arsitektur role-based access control (RBAC), audit trail lengkap, dan dashboard analitik pengeluaran belanja modal.',
    challenge: 'Menstandarisasi alur pengadaan antar-6 laboratorium spesifik dengan format data heterogen serta mengamankan persetujuan berjenjang sesuai SOP anggaran institusi.',
    solution: 'Membangun workflow otomasi BPMN terintegrasi dengan validasi stok real-time, notification trigger ke pejabat dekanat, serta pencatatan jurnal mutasi inventaris otomatis.',
    systemArchitecture: 'React SPA Frontend · Node.js REST API Backend · PostgreSQL dengan 28 Entitas Relasional (3NF) · JWT Multi-Role Authentication · Docker Containerized.',
    image: '/src/assets/images/project_erp_system_1791883834318.jpg',
    techStack: ['PostgreSQL', 'Node.js Express', 'React 19', 'Prisma ORM', 'Tailwind CSS', 'Docker'],
    role: 'Lead System Analyst & Backend Engineer',
    metrics: [
      { label: 'Pemangkasan Waktu Siklus Approval', value: '72%' },
      { label: 'Akurasi Pencatatan Aset', value: '99.4%' },
      { label: 'Volume Uji Data Transaksi', value: '12,500+' }
    ],
    deliverables: [
      'Dokumen Spesifikasi Kebutuhan Perangkat Lunak (SKPL / SRS)',
      'Diagram BPMN 2.0 Alur Pengadaan Barang & Jasa',
      'Entity Relationship Diagram (ERD) 28 Entitas',
      'Dokumentasi API Swagger & Manual Pengujian Black-Box'
    ],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com/demo-erp'
  },
  {
    id: 'proj-2',
    title: 'InsightBI: Data Warehouse & Business Intelligence Penjualan Retail FMCG',
    subtitle: 'Pemodelan Star Schema, Pipa ETL, dan Dashboard Forecasting Kinerja Penjualan',
    category: 'Basis Data & BI',
    semester: 'Semester 5',
    year: '2025',
    gradeBadge: 'Nilai A (Best Data Architecture)',
    description: 'Arsitektur data warehouse analitik multi-dimensi untuk menganalisis 150,000+ catatan transaksi retail. Dilengkapi dashboard analitik prediktif untuk strategi bundling produk.',
    longDescription: 'Dikembangkan pada mata kuliah Data Warehouse & Business Intelligence. Fokus pada perancangan basis data analitik (OLAP) menggunakan Star Schema dengan tabel fakta penjualan serta dimensi produk, pelanggan, waktu, dan wilayah. Mampu mengeksekusi aggregasi query analitik berkecepatan tinggi tanpa membebani basis data transaksi operasional (OLTP).',
    challenge: 'Mengolah data transaksi berukuran besar dengan data kotor, duplikasi kode SKU, serta inkonsistensi penamaan cabang daerah.',
    solution: 'Membangun pipeline ETL otomatis dengan Python Pandas untuk pembersihan data, pengisian missing values, serta load terstruktur ke database analitik PostgreSQL.',
    systemArchitecture: 'PostgreSQL DW (Star Schema) · Python Pandas ETL Pipeline · Metabase & Chart Engine UI · Query Optimizer dengan Indexing GIN & B-Tree.',
    image: '/src/assets/images/project_bi_analytics_1791883834121.jpg',
    techStack: ['PostgreSQL', 'Python (Pandas & NumPy)', 'Metabase', 'Star Schema', 'SQL Tuning', 'Chart.js'],
    role: 'Database Architect & Data Pipeline Engineer',
    metrics: [
      { label: 'Efisiensi Waktu Eksekusi Query', value: '4.8x Lebih Cepat' },
      { label: 'Total Rekor Terolah di Data Warehouse', value: '150,000+' },
      { label: 'Dimensi Analisis Terintegrasi', value: '5 Dimensi' }
    ],
    deliverables: [
      'Dokumen Desain Konseptual, Logikal, dan Fisikal Basis Data',
      'Skrip ETL Pembersihan & Transformasi Data Python',
      'Interactive Dashboard Executive KPI Penjualan',
      'Laporan Rekomendasi Bisnis Berbasis Analisis Keranjang Belanja'
    ],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com/demo-bi'
  },
  {
    id: 'proj-3',
    title: 'SIMTA: Sistem Informasi Manajemen Skripsi & Tugas Akhir Terintegrasi',
    subtitle: 'Platform Workflow Bimbingan, Pengajuan Sidang, & Repositori Naskah Ilmiah',
    category: 'Web & Mobile App',
    semester: 'Semester 6',
    year: '2026',
    gradeBadge: 'Implementasi Prodi Sistem Informasi',
    description: 'Platform digitalisasi alur bimbingan skripsi mahasiswa, penjadwalan sidang sempro & sidang akhir, serta integrasi tanda tangan digital persetujuan dosen pembimbing.',
    longDescription: 'Proyek pengembangan sistem aplikasi berbasis web responsif untuk mengatasi kendala koordinasi jadwal antara mahasiswa tingkat akhir dan dosen pembimbing. Menyediakan fitur logbook bimbingan real-time, pelacakan revisi naskah berbasis bab, serta sistem antrean jadwal sidang yang terhubung dengan kalender akademik prodi.',
    challenge: 'Menyinkronkan status verifikasi dokumen berkas yudisium dengan aturan syarat SKS tempuh dan sertifikat TOEFL yang sering berubah.',
    solution: 'Membuat rule-engine dinamis untuk pengecekan prasyarat otomatis sebelum mahasiswa diizinkan submit form pendaftaran sidang.',
    systemArchitecture: 'React 19 + TypeScript Frontend · Express.js REST API · Supabase PostgreSQL · Cloud Object Storage untuk PDF Naskah · Webhook Notifikasi.',
    image: '/src/assets/images/blog_study_setup_1791883835242.jpg',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'PDF Engine'],
    role: 'Fullstack Web Developer & System Analyst',
    metrics: [
      { label: 'Dosen & Mahasiswa Pengguna Aktif', value: '320+ Users' },
      { label: 'Pengurangan Keterlambatan Administrasi', value: '64%' },
      { label: 'Waktu Rata-rata Verifikasi Berkas', value: '< 2 Jam' }
    ],
    deliverables: [
      'Source Code Lengkap Frontend & Backend',
      'Diagram Usecase, Activity, dan Sequence Diagram',
      'Buku Panduan Pengguna (User Manual Guide) Dosen & Mahasiswa',
      'Hasil Uji User Acceptance Testing (UAT)'
    ],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com/demo-simta'
  },
  {
    id: 'proj-4',
    title: 'Redesain UX Portal Akademik & Pemodelan Proses Pengisian KRS (BPMN 2.0)',
    subtitle: 'Riset Pengalaman Pengguna Berbasis Design Thinking & Optimasi Beban Server Saat War KRS',
    category: 'UI/UX & BPMN',
    semester: 'Semester 4',
    year: '2025',
    gradeBadge: 'Nilai A (Skor SUS 84.5)',
    description: 'Riset evaluasi kegunaan sistem portal akademik eksisting dan perancangan purwarupa interaktif baru dengan penyederhanaan alur registrasi matakuliah dari 9 langkah menjadi 3 langkah.',
    longDescription: 'Mata kuliah Interaksi Manusia dan Komputer (IMK) & Analisis Proses Bisnis. Melakukan wawancara mendalam terhadap 40 mahasiswa lintas angkatan untuk memetakan pain point saat periode registrasi rencana studi (KRS). Menghasilkan model proses bisnis target (To-Be) menggunakan standar notasi BPMN 2.0 serta prototipe high-fidelity Figma.',
    challenge: 'Tingkat stres tinggi mahasiswa saat server down pada detik-detik pembukaan kelas favorit dan interface yang rumit dipahami pada perangkat mobile.',
    solution: 'Desain alur registrasi modular "Pre-Cart Selection" (memilih jadwal sebelum periode dibuka) dan integrasi antrean tunggu interaktif yang transparan.',
    systemArchitecture: 'Figma UI/UX Design System · Camunda Modeler (BPMN 2.0) · Usability Testing Maze · System Usability Scale (SUS) Metric Framework.',
    image: '/src/assets/images/project_erp_system_1791883834318.jpg',
    techStack: ['Figma', 'Camunda BPMN 2.0', 'Design Thinking', 'Usability Testing', 'Wireframing'],
    role: 'UI/UX Researcher & Process Modeling Analyst',
    metrics: [
      { label: 'Peningkatan Skor SUS Pengguna', value: '48.0 → 84.5' },
      { label: 'Pengurangan Langkah Klik KRS', value: '66%' },
      { label: 'Waktu Rata-rata Penyelesaian Tugas', value: '1.8 Menit' }
    ],
    deliverables: [
      'Interactive High-Fidelity Prototype Figma (Mobile & Desktop)',
      'Dokumen Model As-Is dan To-Be BPMN 2.0',
      'Laporan Usability Testing & Analisis System Usability Scale (SUS)',
      'Design System Kit Komponen Komprehensif'
    ],
    githubUrl: 'https://github.com',
    demoUrl: 'https://figma.com'
  },
  {
    id: 'proj-5',
    title: 'Studi Empiris Penerimaan Pengguna Layanan Mobile Banking Menggunakan Model UTAUT 2',
    subtitle: 'Riset Kuantitatif SEM-PLS Terhadap Faktor Adopsi Teknologi Generasi Z di Wilayah Jabodetabek',
    category: 'Riset & Publikasi',
    semester: 'Semester 7',
    year: '2026',
    gradeBadge: 'Paper Siap Submit Seminar Nasional',
    description: 'Penelitian akademis kuantitatif menganalisis pengaruh Performance Expectancy, Effort Expectancy, Hedonic Motivation, dan Price Value terhadap Behavioral Intention pada 260 responden.',
    longDescription: 'Riset kolaborasi bersama dosen pembimbing dalam mata kuliah Metode Penelitian Sistem Informasi. Melakukan pengumpulan data kuesioner skala Likert, uji validitas konvergen, validitas diskriminan (Fornell-Larcker), uji reliabilitas Composite Reliability, dan bootstrapping path coefficient menggunakan SmartPLS 4.',
    challenge: 'Memastikan sampel data representatif tanpa bias serta membuktikan signifikansi variabel moderasi umur dan kebiasaan digital.',
    solution: 'Menggunakan teknik purposive sampling terstruktur dan pengujian multicollinearity (VIF) menyeluruh sehingga menghasilkan model prediksi dengan R-Square 0.684.',
    systemArchitecture: 'SmartPLS 4 Structural Equation Modeling · SPSS 28 Data Screening · Google Forms Automated Pipeline · APA 7th Edition Paper Manuscript.',
    image: '/src/assets/images/blog_study_setup_1791883835242.jpg',
    techStack: ['SmartPLS 4', 'SPSS Statistics', 'SEM-PLS', 'Metodologi Penelitian', 'Riset Kuantitatif'],
    role: 'Lead Student Researcher & Data Analyst',
    metrics: [
      { label: 'Jumlah Responden Valid', value: '260 Sampel' },
      { label: 'Koefisien Determinasi (R²)', value: '68.4%' },
      { label: 'Composite Reliability Score', value: '> 0.88' }
    ],
    deliverables: [
      'Manuskrip Naskah Publikasi Ilmiah 14 Halaman',
      'Output Lengkap Uji Hipotesis & Bootstrapping SmartPLS',
      'Instrumen Kuesioner Terkalibrasi',
      'Slide Presentasi Sidang Kolokium Riset'
    ],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com/research-paper'
  },
  {
    id: 'proj-6',
    title: 'SmartInventory: Aplikasi Pemantauan Aset Logistik Berbasis Barcode & Multi-Gudang',
    subtitle: 'Sistem Informasi Pengelolaan Persediaan Barang dengan Notifikasi Reorder Point Otomatis',
    category: 'Web & Mobile App',
    semester: 'Semester 5',
    year: '2025',
    gradeBadge: 'Nilai A (UAS Proyek Pemrograman Web)',
    description: 'Aplikasi manajemen stok gudang responsif yang mendeteksi penurunan stok di bawah batas aman (Safety Stock) dan memicu pesanan pembelian ulang secara otomatis.',
    longDescription: 'Dibangun untuk memodelkan proses pergudangan industri retail skala menengah. Menyertakan modul pemindaian barcode kamera hp, kartu persediaan metode FIFO (First-In, First-Out), dan kalkulasi otomatis Economic Order Quantity (EOQ).',
    challenge: 'Mencegah terjadinya selisih stok (stock discrepancy) antara pencatatan fisik gudang dengan sistem pada saat penerimaan serentak.',
    solution: 'Menerapkan database transaction isolation level (ACID) dan fitur double-check scanning sebelum status barang dikonfirmasi masuk.',
    systemArchitecture: 'Vite React · Tailwind CSS · RESTful Express API · MySQL Transaction Engine · HTML5 Barcode/QR Scanner API.',
    image: '/src/assets/images/project_bi_analytics_1791883834121.jpg',
    techStack: ['React', 'JavaScript', 'MySQL', 'Express.js', 'Tailwind CSS', 'QR/Barcode Scanner'],
    role: 'Fullstack Developer',
    metrics: [
      { label: 'Kecepatan Input Barang', value: '3x Lebih Cepat' },
      { label: 'Tingkat Deteksi Stok Kritis', value: '100% Real-time' },
      { label: 'Uji Transaksi Konkuren', value: '50 req/sec' }
    ],
    deliverables: [
      'Source Code GitHub Terbuka',
      'Skema Basis Data Relasional 3NF',
      'Manual Instalasi & Deployment Localhost',
      'Demo Video Simulasi Penggunaan'
    ],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com/demo-inventory'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Panduan Memahami Normalisasi Basis Data (1NF sampai 3NF) dengan Contoh Nyata',
    slug: 'panduan-memahami-normalisasi-basis-data-1nf-3nf',
    category: 'Teknologi & Basis Data',
    date: '10 Oktober 2026',
    readTime: '6 menit baca',
    excerpt: 'Mengapa tabel Excel biasa bisa jadi bencana jika langsung dijadikan basis data relasional? Mari bedah anomali insert, update, dan delete serta cara dekomposisi tabel yang elegan.',
    image: '/src/assets/images/blog_study_setup_1791883835242.jpg',
    tags: ['Basis Data', 'SQL', 'Normalisasi', 'PostgreSQL', 'Sistem Informasi'],
    likes: 42,
    commentsCount: 8,
    author: {
      name: 'Muhammad Hasymi',
      role: 'Mahasiswa Sistem Informasi'
    },
    content: `
Banyak teman-teman yang baru mulai belajar basis data mengira bahwa menumpuk semua informasi dalam satu tabel besar adalah hal yang praktis. Namun, begitu sistem mulai menangani ribuan transaksi, anomali data akan mulai bermunculan: data pelanggan ganda, inkonsistensi harga barang, hingga data hilang saat satu baris dihapus.

### Apa itu Anomali Basis Data?
1. **Insert Anomaly**: Kita tidak bisa memasukkan data vendor baru sebelum ada transaksi pembelian barang pertama.
2. **Update Anomaly**: Ketika seorang pelanggan pindah alamat, kita harus memperbarui puluhan baris data. Jika terlewat satu saja, data menjadi ambigu.
3. **Delete Anomaly**: Jika kita menghapus satu-satunya transaksi yang ada, kita tanpa sengaja juga menghapus profil pelanggan atau data produk terkait.

### Tahapan Normalisasi:
- **First Normal Form (1NF)**: Hilangkan repeating groups. Setiap sel hanya boleh memuat satu nilai atomik (atomic value), dan setiap baris harus memiliki primary key yang unik.
- **Second Normal Form (2NF)**: Pastikan tabel sudah 1NF, dan hilangkan Partial Dependency. Setiap kolom non-key harus bergantung penuh pada seluruh Primary Key (relevan untuk Composite Key).
- **Third Normal Form (3NF)**: Sudah 2NF, dan hilangkan Transitive Dependency. Kolom non-key tidak boleh bergantung pada kolom non-key lainnya (misalnya, total_harga = kuantitas × harga_satuan sebaiknya dihitung melalui query, bukan disimpan statis jika rentan inkonsisten).

Dengan menerapkan 3NF, kita memecah tabel menjadi entitas-entitas yang kohesif: \`Pelanggan\`, \`Pesanan\`, \`Item_Pesanan\`, dan \`Produk\`. Hasilnya: integritas data terjamin dan pemeliharaan skema menjadi jauh lebih mudah.
    `
  },
  {
    id: 'blog-2',
    title: 'Menjadi System Analyst di Proyek Capstone: Cara Menerjemahkan Bahasa Bisnis ke Spesifikasi Teknis',
    slug: 'menjadi-system-analyst-di-proyek-capstone-kampus',
    category: 'Studi Kasus',
    date: '28 September 2026',
    readTime: '8 menit baca',
    excerpt: 'Perbedaan persepsi antara stakeholder pengguna dan tim programmer sering membuat proyek software terlambat. Inilah strategi requirement engineering yang saya gunakan di kampus.',
    image: '/src/assets/images/project_erp_system_1791883834318.jpg',
    tags: ['System Analysis', 'SRS', 'BPMN', 'Agile', 'Software Engineering'],
    likes: 38,
    commentsCount: 5,
    author: {
      name: 'Muhammad Hasymi',
      role: 'Mahasiswa Sistem Informasi'
    },
    content: `
Sebagai mahasiswa Sistem Informasi, posisi kita sangat unik: kita bukan sekadar programmer yang menulis sintaks, melainkan pemecah masalah yang menghubungkan kebutuhan dunia bisnis dengan solusi rekayasa teknologi informasi.

Saat mengerjakan proyek ERP kampus semester lalu, tantangan terbesar kami bukanlah coding Express atau PostgreSQL, melainkan memahami apa yang sebenarnya diinginkan oleh staf pengadaan barang.

### 3 Langkah Kunci Requirement Engineering:
1. **User Interview Berbasis Alur Nyata**: Jangan tanyakan "Anda ingin fitur apa?", melainkan "Bisa ceritakan apa langkah pertama yang Anda lakukan saat ada formulir pengadaan masuk? Di titik mana proses paling sering tertahan?"
2. **Visualisasi Cepat Menggunakan BPMN 2.0**: Membuat diagram swimlane sebelum menulis kode membuat para pejabat fakultas langsung paham di mana peran mereka dan di mana proses otomatisasi sistem bekerja.
3. **Penyusunan User Stories & Acceptance Criteria**: Setiap fitur dijabarkan dengan format:
   \`Sebagai [Peran], Saya ingin [Kemampuan], Sehingga [Tujuan/Nilai Bisnis]\`.

Dengan cara ini, tim pengembang memiliki acuan pengujian yang presisi, dan klien merasa didengar karena sistem dibangun sesuai alur kerja nyata mereka.
    `
  },
  {
    id: 'blog-3',
    title: 'BPMN 2.0 vs Flowchart Biasa: Kapan Harus Menggunakan Swimlane, Exclusive Gateway, & Event?',
    slug: 'bpmn-20-vs-flowchart-biasa-panduan-mahasiswa-si',
    category: 'Tips Kuliah SI',
    date: '15 September 2026',
    readTime: '5 menit baca',
    excerpt: 'Masih banyak mahasiswa yang bingung membedakan flowchart standar dengan notasi BPMN 2.0. Berikut ringkasan praktis dan kesalahan umum yang harus dihindari saat ujian APSI.',
    tags: ['BPMN 2.0', 'Proses Bisnis', 'APSI', 'Kuliah SI', 'Diagram'],
    likes: 29,
    commentsCount: 3,
    author: {
      name: 'Muhammad Hasymi',
      role: 'Mahasiswa Sistem Informasi'
    },
    content: `
Dalam mata kuliah Analisis dan Perancangan Sistem Informasi (APSI), pembuatan model proses bisnis seringkali menggunakan BPMN 2.0 (Business Process Model and Notation). Kenapa bukan flowchart biasa? Karena BPMN memiliki semantik yang jauh lebih kaya dan telah menjadi standar industri global (OMG).

### 4 Komponen Fundamental BPMN 2.0:
- **Pools & Swimlanes**: Menunjukkan siapa yang bertanggung jawab atas aktivitas tersebut (misalnya: Mahasiswa, Dosen Pembimbing, Bagian Akademik).
- **Activities (Tasks)**: Kotak persegi bersudut tumpul yang menggambarkan pekerjaan yang dilakukan (misal: "Verifikasi Berkas Yudisium").
- **Gateways**: Simbol belah ketupat untuk percabangan logika. Gunakan \`Exclusive Gateway (XOR)\` jika hanya satu jalur yang bisa diambil (misal: Lulus atau Tidak Lulus), dan gunakan \`Parallel Gateway (AND)\` jika dua aktivitas berlangsung bersamaan tanpa syarat.
- **Events**: Lingkaran yang menandai awal, tengah, atau akhir suatu proses (Start Event, Intermediate Event seperti timer/pesan, End Event).

Tips penting: Jangan pernah menghubungkan Sequence Flow melintasi garis Pool yang berbeda! Gunakan Message Flow (garis putus-putus dengan lingkaran terbuka) untuk komunikasi antar-organisasi.
    `
  },
  {
    id: 'blog-4',
    title: 'Mengapa Mahasiswa Sistem Informasi Wajib Memahami Arsitektur Cloud & Sistem ERP Modern?',
    slug: 'mengapa-mahasiswa-si-wajib-paham-cloud-erp',
    category: 'Magang & Karier',
    date: '02 September 2026',
    readTime: '7 menit baca',
    excerpt: 'Perusahaan modern tidak lagi membangun sistem enterprise dari nol secara monolitik. Pelajari bagaimana integrasi Cloud, API Gateway, dan ERP seperti Odoo/SAP membentuk karier masa depan.',
    tags: ['Karier', 'Cloud Computing', 'ERP', 'Digital Transformation', 'Enterprise'],
    likes: 51,
    commentsCount: 11,
    author: {
      name: 'Muhammad Hasymi',
      role: 'Mahasiswa Sistem Informasi'
    },
    content: `
Dunia industri sedang mengalami percepatan transformasi digital yang masif. Perusahaan perbankan, retail, dan manufaktur kini mengandalkan arsitektur hybrid cloud dan solusi enterprise seperti SAP S/4HANA, Odoo, atau Microsoft Dynamics.

### Keterampilan yang Paling Dicari Industri untuk Lulusan SI:
1. **Enterprise Architecture Understanding**: Memahami kerangka kerja seperti TOGAF dan bagaimana komponen sistem informasi selaras dengan strategi bisnis perusahaan.
2. **API & System Integration**: Kemampuan menghubungkan sistem warisan (legacy systems) dengan aplikasi modern berbasis RESTful API dan webhook.
3. **Data Literacy & Governance**: Memahami regulasi privasi data, kepatuhan audit sistem (IT Audit), dan keamanan informasi (ISO 27001).

Jika Anda mahasiswa SI, jangan hanya terpaku pada tutorial framework frontend terbaru. Pelajari juga bagaimana proses transaksi akuntansi bekerja, bagaimana rantai pasok logistik diatur, dan bagaimana data mengalir antar-divisi. Di situlah letak keunggulan kompetitif lulusan Sistem Informasi!
    `
  }
];

export const SKILL_CATEGORIES: { category: string; description: string; skills: SkillItem[] }[] = [
  {
    category: 'Analisis & Perancangan Sistem',
    description: 'Menjembatani kebutuhan operasional bisnis ke dalam arsitektur sistem informasi yang kokoh.',
    skills: [
      { name: 'BPMN 2.0 (Camunda)', level: 'Mahir', description: 'Pemodelan alur proses bisnis to-be & as-is dengan swimlanes dan gateways.', tags: ['Proses Bisnis', 'Workflow'] },
      { name: 'UML & Rekayasa Kebutuhan (SRS)', level: 'Mahir', description: 'Use Case, Activity, Sequence Diagram, dan penyusunan dokumen SKPL standar IEEE.', tags: ['Dokumentasi', 'SRS'] },
      { name: 'Design Thinking & UI/UX (Figma)', level: 'Menengah-Mahir', description: 'User persona, wireframing, interactive prototyping, dan usability testing.', tags: ['Figma', 'UX Research'] },
      { name: 'Agile Scrum & SDLC', level: 'Mahir', description: 'Sprint planning, backlog prioritization, kanban board, dan evaluasi berkala.', tags: ['Manajemen Proyek'] }
    ]
  },
  {
    category: 'Rekayasa Basis Data & Analitik',
    description: 'Merancang arsitektur data transaksi terstandar dan analitik cerdas.',
    skills: [
      { name: 'PostgreSQL & MySQL', level: 'Mahir', description: 'Desain ERD, relasi 3NF, query join kompleks, stored procedure, dan indexing.', tags: ['RDBMS', 'SQL Tuning'] },
      { name: 'Data Warehouse & OLAP', level: 'Menengah-Mahir', description: 'Star Schema, Snowflake Schema, perancangan tabel fakta dan tabel dimensi.', tags: ['Data Warehouse', 'BI'] },
      { name: 'Python ETL & Analisis Data', level: 'Menengah', description: 'Pembersihan data dengan Pandas, transformasi format, dan validasi data terstruktur.', tags: ['Python', 'ETL'] },
      { name: 'Metabase & Power BI Dasar', level: 'Menengah', description: 'Penyusunan dashboard eksekutif KPI dan agregasi visual metrik transaksi.', tags: ['Dashboard', 'Visualisasi'] }
    ]
  },
  {
    category: 'Pengembangan Perangkat Lunak Web',
    description: 'Membangun aplikasi web sistem informasi yang responsif, terstruktur, dan handal.',
    skills: [
      { name: 'React 19 & TypeScript', level: 'Mahir', description: 'Pengembangan Single Page Application modern, modular, type-safe, dan responsive.', tags: ['Frontend', 'Type-Safety'] },
      { name: 'Node.js & Express REST API', level: 'Mahir', description: 'Pembuatan RESTful endpoint, JWT autentikasi, middleware validasi, dan Prisma ORM.', tags: ['Backend', 'REST API'] },
      { name: 'Tailwind CSS', level: 'Mahir', description: 'Styling responsif bersih mengikuti prinsip desain modern tanpa dependensi berat.', tags: ['Modern UI'] },
      { name: 'Git & Version Control', level: 'Mahir', description: 'Branching workflow, collaborative pull request, commit hygiene, dan GitHub Actions.', tags: ['DevOps Dasar'] }
    ]
  }
];

export const ACADEMIC_MILESTONES = [
  {
    period: '2023 - Sekarang',
    title: 'Mahasiswa Program Studi Sistem Informasi',
    institution: 'Universitas Indonesia / Telkom University',
    description: 'Fokus konsentrasi pada Enterprise Systems & Data Analytics. Mempertahankan IPK 3.89 / 4.00, menyelesaikan 16+ proyek akademik berbasis studi kasus riil.'
  },
  {
    period: '2025 - 2026',
    title: 'Asisten Laboratorium Basis Data & Analisis Sistem',
    institution: 'Laboratorium Rekayasa Perangkat Lunak & Sistem Enterprise',
    description: 'Membimbing 120+ mahasiswa praktikum dalam materi normalisasi basis data SQL (PostgreSQL), pemodelan proses bisnis BPMN, dan pengujian API.'
  },
  {
    period: '2025',
    title: 'Juara 2 - Business Plan & IT Case Competition',
    institution: 'National Information Systems Festival',
    description: 'Merancang inovasi platform supply chain terdesentralisasi untuk UMKM pangan lokal dengan analisis kelayakan ekonomi (ROI & NPV).'
  },
  {
    period: '2024 - 2025',
    title: 'Ketua Divisi Riset & Pengembangan Teknologi',
    institution: 'Himpunan Mahasiswa Sistem Informasi (HMSI)',
    description: 'Memimpin inisiatif digitalisasi inventaris sekretariat himpunan dan menyelenggarakan workshop pengembangan web & basis data.'
  }
];
