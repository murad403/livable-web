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
            className="bg-[#ECECEC] rounded-2xl p-4 flex flex-col justify-between hover:shadow-md transition-all duration-300 cursor-pointer group"
        >
            <div className='space-y-4'>
                {/* Title */}
                <h3 className="font-medium text-2xl md:text-[36px] text-title text-left group-hover:text-primary transition-colors">
                    {article.title}
                </h3>

                {/* Subtitle */}
                <p className="text-lg md:text-[24px] text-title text-left">
                    {article.subtitle}
                </p>

                {/* Description */}
                <p className="text-lg md:text-[24px] text-title text-left">
                    {article.description}
                </p>
            </div>

            {/* Read Full Article Link */}
            <div className="flex items-center gap-1.5 text-lg font-medium text-title group-hover:text-primary transition-colors pt-2">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
        </Link>
    )
}

export default SubstackLibraryCard