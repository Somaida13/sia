import React, { useState } from 'react';
import { X, Heart, MessageSquare, Bookmark, Share2, Clock, Calendar, Check, Send } from 'lucide-react';
import { BlogPost, BlogComment } from '../types/portfolio';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  const [likes, setLikes] = useState(post.likes);
  const [hasLiked, setHasLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const [comments, setComments] = useState<BlogComment[]>([
    {
      id: 'c-1',
      postId: post.id,
      authorName: 'Rian Pratama',
      authorAffiliation: 'Mahasiswa SI Angkatan 2024',
      comment: 'Penjelasannya sangat jelas Kak! Terutama di bagian anomali dan beda 2NF dengan 3NF. Sangat membantu persiapan praktikum besok.',
      date: 'Kemarin, 14:20'
    },
    {
      id: 'c-2',
      postId: post.id,
      authorName: 'Dr. Hendra Wijaya',
      authorAffiliation: 'Dosen Pembina Basis Data',
      comment: 'Ulasan yang komprehensif untuk mahasiswa. Bagus bahwa kamu menekankan integritas relasional sebelum optimasi index query.',
      date: '2 hari lalu'
    }
  ]);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;

    const newComment: BlogComment = {
      id: `c-${Date.now()}`,
      postId: post.id,
      authorName: newCommentName.trim(),
      authorAffiliation: 'Pembaca Blog',
      comment: newCommentText.trim(),
      date: 'Baru saja'
    };

    setComments([newComment, ...comments]);
    setNewCommentName('');
    setNewCommentText('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="font-bold text-[#5c50e6]">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-1.5 rounded-full transition-colors ${
                isBookmarked ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:text-slate-800 hover:bg-slate-200'
              }`}
              title="Simpan artikel"
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <button
              onClick={handleShare}
              className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-200 rounded-full transition-colors"
              title="Salin tautan"
            >
              {copiedShare ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-200 rounded-full transition-colors ml-1"
              aria-label="Tutup jendela"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#5c50e6]" />
                <span>{post.date}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{post.readTime}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#1e1e2f] tracking-tight leading-snug">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-indigo-50/50 border border-indigo-100">
              <div className="w-9 h-9 rounded-full bg-[#5c50e6] flex items-center justify-center text-white font-bold text-xs">
                MH
              </div>
              <div className="text-xs">
                <div className="font-bold text-[#1e1e2f]">{post.author.name}</div>
                <div className="text-slate-500">{post.author.role}</div>
              </div>
            </div>
          </div>

          {post.image && (
            <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-video">
              <img
                src={post.image}
                alt={post.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          {/* Formatted Content */}
          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            {post.content.split('\n\n').map((paragraph, idx) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg font-bold text-[#1e1e2f] pt-3 border-t border-slate-100">
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }
              if (trimmed.startsWith('- ')) {
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
                    {trimmed.split('\n').map((li, lIdx) => (
                      <li key={lIdx}>{li.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ')) {
                return (
                  <ol key={idx} className="list-decimal pl-5 space-y-1 text-slate-600 text-sm">
                    {trimmed.split('\n').map((ol, oIdx) => (
                      <li key={oIdx}>{ol.replace(/^\d+\.\s*/, '')}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={idx} className="text-slate-600">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400">Topik Terkait:</span>
            {post.tags.map((tag, idx) => (
              <span key={idx} className="text-[#5c50e6] font-medium font-mono">
                #{tag}{idx < post.tags.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </div>

          {/* Reaction Bar */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                hasLiked ? 'bg-rose-50 text-rose-600 border border-rose-200 shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              <Heart className={`w-4 h-4 ${hasLiked ? 'fill-rose-500' : ''}`} />
              <span>{likes} Apresiasi</span>
            </button>

            <span className="text-xs text-slate-500 flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-[#5c50e6]" />
              <span>{comments.length} Diskusi</span>
            </span>
          </div>

          {/* Comments Section */}
          <div className="space-y-4 pt-2">
            <h4 className="text-sm font-bold text-[#1e1e2f] flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#5c50e6]" />
              <span>Tanggapan &amp; Komentar ({comments.length})</span>
            </h4>

            <form onSubmit={handleAddComment} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <input
                type="text"
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                placeholder="Nama Anda..."
                required
                className="w-full sm:w-64 px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs text-[#1e1e2f] placeholder-slate-400 focus:outline-none focus:border-[#5c50e6]"
              />
              <textarea
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder="Tuliskan masukan atau tanggapan..."
                rows={2}
                required
                className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs text-[#1e1e2f] placeholder-slate-400 focus:outline-none focus:border-[#5c50e6]"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#5c50e6] hover:bg-[#4d40d4] rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Komentar</span>
                </button>
              </div>
            </form>

            <div className="space-y-3">
              {comments.map((c) => (
                <div key={c.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#1e1e2f]">{c.authorName}</span>
                    <span className="text-slate-400">{c.date}</span>
                  </div>
                  <div className="text-[11px] text-[#5c50e6] font-medium">{c.authorAffiliation}</div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{c.comment}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
