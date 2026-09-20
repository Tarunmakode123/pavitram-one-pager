"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SITE_CONFIG, BlogPost } from "@/config/siteConfig";
import { BookOpen, Clock, Calendar, ArrowRight, X, Sparkles } from "lucide-react";

interface BlogsSectionProps {
  onOpenEnquiry: (propertyName?: string) => void;
}

export function BlogsSection({ onOpenEnquiry }: BlogsSectionProps) {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  return (
    <section id="blogs" className="py-20 bg-pavitram-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pavitram-orange/15 border border-pavitram-orange/30 text-pavitram-orange text-xs font-bold uppercase tracking-widest mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              PROPERTY INSIGHTS
            </div>
            <h2 className="section-title font-bold text-white">
              Indore Real Estate Guides & Blogs
            </h2>
            <p className="text-gray-400 text-xs md:text-base mt-2 leading-relaxed">
              Stay informed with expert advice on location comparisons, RERA compliance, legal checklists, and investment strategies in Indore.
            </p>
          </div>
        </div>

        {/* BLOG CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_CONFIG.blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-pavitram-surface border border-gray-800 rounded-3xl overflow-hidden hover:border-pavitram-orange/50 transition-all duration-300 group shadow-luxury flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-pavitram-orange border border-white/10">
                  {blog.category}
                </span>
              </div>

              {/* CARD DETAILS */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-pavitram-orange" /> {blog.readTime}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-gray-500" /> {blog.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-pavitram-orange transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-800/80">
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-pavitram-orange hover:text-white transition-colors cursor-pointer"
                  >
                    Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* FULL BLOG READER MODAL */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setSelectedBlog(null)} aria-hidden="true" />

          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-pavitram-surface border border-gray-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6">
            <button
              onClick={() => setSelectedBlog(null)}
              aria-label="Close blog"
              className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-pavitram-orange/20 text-pavitram-orange text-xs font-bold uppercase">
                {selectedBlog.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {selectedBlog.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-gray-400 border-b border-gray-800 pb-3">
                <span>{selectedBlog.date}</span>
                <span>•</span>
                <span>{selectedBlog.readTime}</span>
              </div>
            </div>

            <div className="relative h-56 w-full rounded-2xl overflow-hidden">
              <Image src={selectedBlog.image} alt={selectedBlog.title} fill className="object-cover" />
            </div>

            <div className="text-xs sm:text-sm text-gray-300 leading-relaxed space-y-4">
              <p>{selectedBlog.excerpt}</p>
              <p>{selectedBlog.content}</p>
            </div>

            <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400">Have questions about properties mentioned in this guide?</p>
              <button
                onClick={() => {
                  const title = selectedBlog.title;
                  setSelectedBlog(null);
                  onOpenEnquiry(`Enquiry from Blog: ${title}`);
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-pavitram-orange text-white font-bold text-xs shadow-glow"
              >
                Enquire With Specialist
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
