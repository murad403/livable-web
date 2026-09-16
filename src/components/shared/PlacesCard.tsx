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
            className="group relative overflow-hidden rounded-2xl h-127.5 w-full sm:w-120 shrink-0 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-gray-900 snap-start"
        >
            {/* Background Image */}
            <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />

            {/* Dark gradient overlay at bottom */}
            <div className="absolute inset-0 bg-linear-to-t from-black/59 via-black/10 to-transparent" />

            {/* Top Right Button: 135px x 66px, top: 19px, bg: #28282847 */}
            <div className="absolute top-4.75 right-4.75 z-10">
                <span className="w-33.75 h-16.5 bg-title/28 backdrop-blur-xs text-white text-xl font-normal rounded-2xl shadow-xs transition-all duration-300 inline-flex items-center justify-center gap-1 hover:bg-[#28282875]">
                    {badge}
                </span>
            </div>

            {/* Card Content at Bottom */}
            <div className="absolute bottom-6 left-6 right-6 text-white z-10 space-y-2">
                <p className="text-lg md:text-xl text-white font-normal tracking-wide truncate">
                    {locationText}
                </p>
                <h3 className="text-2xl md:text-[32px] font-medium tracking-tight uppercase text-white group-hover:text-primary transition-colors leading-none">
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default PlacesCard