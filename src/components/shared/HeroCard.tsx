'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface HeroCardProps {
    image: StaticImageData | string
    title: string
    subtitle?: string
    onClick?: () => void
}

const HeroCard: React.FC<HeroCardProps> = ({ image, title, subtitle, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="group relative overflow-hidden rounded-2xl h-44 sm:h-52 md:h-60 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
            <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-xs sm:text-sm font-medium drop-shadow-sm truncate">{title}</p>
                {subtitle && <p className="text-[10px] sm:text-xs text-gray-200 truncate">{subtitle}</p>}
            </div>
        </div>
    )
}

export default HeroCard