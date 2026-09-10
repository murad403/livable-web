'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface PlacesCardProps {
    badge?: string
    title: string
    locationText: string
    image: StaticImageData | string
    onClick?: () => void
}

const PlacesCard: React.FC<PlacesCardProps> = ({ badge, title, locationText, image, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="group relative overflow-hidden rounded-3xl h-80 sm:h-96 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-900"
        >
            {/* Background Image */}
            <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

            {/* Badge top right */}
            {badge && (
                <div className="absolute top-4 right-4 z-10">
                    <span className="bg-[#FE3F39] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                        {badge}
                    </span>
                </div>
            )}

            {/* Card Content at Bottom */}
            <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight uppercase font-sans group-hover:text-[#FE3F39] transition-colors">
                            {title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-300 font-light mt-1">
                            {locationText}
                        </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#FE3F39] transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlacesCard