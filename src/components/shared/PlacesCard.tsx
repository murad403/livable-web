'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface PlacesCardProps {
    badge?: string
    title: string
    locationText: string
    image: StaticImageData | string
    onClick?: () => void
}

const PlacesCard: React.FC<PlacesCardProps> = ({ badge = 'More →', title, locationText, image, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="group relative overflow-hidden rounded-3xl h-105 sm:h-115 w-70 sm:w-82.5 shrink-0 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-gray-900 snap-start"
        >
            {/* Background Image */}
            <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 280px, 330px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />

            {/* Dark gradient overlay at bottom (Matching User Image) */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

            {/* Red Badge top right (Matching User Image "More →") */}
            <div className="absolute top-4 right-4 z-10">
                <span className="bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-normal px-4 py-2 rounded-2xl shadow-sm transition-all duration-300 inline-flex items-center gap-1">
                    {badge}
                </span>
            </div>

            {/* Card Content at Bottom: Subtitle on top, Title below (Matching User Image) */}
            <div className="absolute bottom-5 left-5 right-5 text-white z-10 space-y-1">
                <p className="text-xs sm:text-sm text-gray-200 font-light tracking-wide truncate">
                    {locationText}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase font-sans text-white group-hover:text-primary transition-colors">
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default PlacesCard