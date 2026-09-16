'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface HeroCardProps {
    image: StaticImageData | string
    title: string
    subtitle?: string
}

const HeroCard: React.FC<HeroCardProps> = ({ image, title }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl w-full h-48 sm:h-56 md:h-60 hover:h-78 transition-all duration-300 ease-out shadow-sm hover:shadow-xl">
            {/* Image */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Figma Glassmorphic Overlay: #FFFFFF 10%, backdrop blur 20.7px */}
            <div className="absolute inset-x-0 bottom-0 py-4 px-3 bg-white/10 backdrop-blur-[20.7px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center rounded-b-2xl">
                <span className="text-white text-xl sm:text-2xl font-medium tracking-tight font-sans drop-shadow-md truncate">
                    {title}
                </span>
            </div>
        </div>
    )
}

export default HeroCard