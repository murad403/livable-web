'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface HeroCardProps {
    image: StaticImageData | string
    title: string
    subtitle?: string
    onClick?: () => void
}

const HeroCard: React.FC<HeroCardProps> = ({ image, title, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="group relative overflow-hidden rounded-2xl cursor-pointer w-full transition-all duration-300 ease-out h-48 sm:h-56 md:h-60 hover:h-64 sm:hover:h-76 md:hover:h-84 shadow-sm hover:shadow-2xl"
        >
            {/* Image */}
            <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Dark glassmorphic backdrop-blur overlay with title (Matching User Image) */}
            <div className="absolute inset-x-0 bottom-0 py-4 px-3 bg-black/50 backdrop-blur-md border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center text-center rounded-b-2xl">
                <span className="text-white text-base sm:text-lg font-medium tracking-normal drop-shadow-sm truncate font-sans">
                    {title}
                </span>
            </div>
        </div>
    )
}

export default HeroCard