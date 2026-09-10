'use client'

import React, { use } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { libraryArticles } from '../page'

interface PageProps {
    params: Promise<{ id: string }>
}

export default function ArticleDetailPage({ params }: PageProps) {
    const resolvedParams = use(params)
    const articleId = resolvedParams.id

    const article =
        libraryArticles.find((a) => a.id === articleId) || libraryArticles[0]

    return (
        <main className="py-16 px-6 sm:px-12 max-w-4xl mx-auto text-title font-sans">
            {/* Back Button */}
            <div className="mb-10">
                <Link
                    href="/substack-library"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Substack Library</span>
                </Link>
            </div>

            {/* Article Header */}
            <div className="mb-12 border-b border-gray-100 pb-8">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-3">
                    Livable Substack Essay
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-title mb-4 leading-tight">
                    {article.title}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 font-normal">
                    {article.subtitle}
                </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-title font-light leading-relaxed space-y-6">
                <p className="text-lg sm:text-xl font-normal text-title leading-relaxed">
                    {article.description}
                </p>

                {article.fullContent ? (
                    <div className="space-y-6 text-base sm:text-lg text-gray-700 font-light leading-relaxed pt-4 border-t border-gray-100">
                        {article.fullContent
                            .trim()
                            .split('\n\n')
                            .map((paragraph, idx) => (
                                <p key={idx}>{paragraph.trim()}</p>
                            ))}
                    </div>
                ) : null}
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-16 pt-10 border-t border-gray-200/80 text-center bg-[#F8F8F8] rounded-3xl p-8 sm:p-12">
                <h3 className="text-2xl sm:text-3xl font-medium text-title mb-3">
                    Ready to turn research into reality?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-8 font-light">
                    Our 3-day guided scouting trip turns theoretical plans into real-world clarity. Connect with our local expat advisors today.
                </p>
                <Link
                    href="/#talk-with-us"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                    <span>Talk With Us</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </main>
    )
}