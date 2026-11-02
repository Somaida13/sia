export interface AcademicProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'Enterprise ERP' | 'Basis Data & BI' | 'Web & Mobile App' | 'UI/UX & BPMN' | 'Riset & Publikasi';
  semester: string;
  year: string;
  gradeBadge: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  systemArchitecture: string;
  image: string;
  techStack: string[];
  role: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Teknologi & Basis Data' | 'Studi Kasus' | 'Tips Kuliah SI' | 'Magang & Karier';
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image?: string;
  tags: string[];
  author: {
    name: string;
    role: string;
  };
  likes: number;
  commentsCount: number;
}

export interface BlogComment {
  id: string;
  postId: string;
  authorName: string;
  authorAffiliation: string;
  comment: string;
  date: string;
}

export interface ContactSubmission {
  id: string;
  ticketNumber: string;
  fullName: string;
  email: string;
  phone: string;
  inquiryType: 'Proyek Kolaborasi' | 'Konsultasi Sistem' | 'Tanya Kuliah SI' | 'Tawaran Magang/Kerja' | 'Lainnya';
  subject: string;
  message: string;
  timestamp: string;
  autoReplyStatus: 'Terkirim Otomatis' | 'Diproses';
  simulatedResponse: string;
}

export interface SkillItem {
  name: string;
  level: string;
  description: string;
  tags: string[];
}
