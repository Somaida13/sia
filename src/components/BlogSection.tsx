import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, Heart, MessageSquare } from 'lucide-react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types/portfolio';
import { BlogModal } from './BlogModal';

export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = [
    'Semua',
    'Teknologi & Basis Data',
    'Studi Kasus',
    'Tips Kuliah SI',
    'Magang & Karier'
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchCat = selectedCategory === 'Semua' || post.category === selectedCategory;
      const matchQuery =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-wider text-[#5c50e6] uppercase">
              Wawasan &amp; Catatan Belajar
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e2f] tracking-tight">
              Blog &amp; Tech Insights
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Kumpulan tulisan seputar perancangan arsitektur enterprise, tips normalisasi basis data, 
              pengalaman proyek sistem informasi, dan persiapan karier di ranah teknologi.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari artikel, BPMN, SQL..."
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-xs sm:text-sm text-[#1e1e2f] placeholder-slate-400 focus:outline-none focus:border-[#5c50e6] focus:bg-white transition-all shadow-sm"
            />
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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group cursor-pointer p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="space-y-4">
                
                {/* Clean Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-bold text-[#5c50e6]">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-[#1e1e2f] group-hover:text-[#5c50e6] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  {post.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="font-mono text-slate-600">
                      #{tag}
                      {tIdx < 2 && tIdx < post.tags.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom metadata strip */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#5c50e6]" />
                    <span>{post.commentsCount} Diskusi</span>
                  </span>
                </div>

                <span className="text-xs font-bold text-[#5c50e6] group-hover:text-[#453ac0] flex items-center gap-1">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      <BlogModal
        post={activePost}
        onClose={() => setActivePost(null)}
      />
    </section>
  );
};
