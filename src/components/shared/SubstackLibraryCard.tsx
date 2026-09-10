'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export interface ArticleItem {
    id: string
    title: string
    subtitle: string
    description: string
    fullContent?: string
}

interface SubstackLibraryCardProps {
    article: ArticleItem
}

const SubstackLibraryCard: React.FC<SubstackLibraryCardProps> = ({ article }) => {
    return (
        <Link
            href={`/substack-library/${article.id}`}
            className="bg-[#ECECEC] rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300 group border border-gray-200/50"
        >
            <div>
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-medium text-title mb-1.5 leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-title font-normal mb-4">
                    {article.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-title/80 font-light leading-relaxed mb-6">
                    {article.description}
                </p>
            </div>

            {/* Read Full Article Link */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-title group-hover:text-primary transition-colors pt-2">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
        </Link>
    )
}

export default SubstackLibraryCard