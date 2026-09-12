'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface ScoutingTripCardProps {
    day?: string
    title: string
    description: string
    image: StaticImageData | string
    onClick?: () => void
}

const ScoutingTripCard: React.FC<ScoutingTripCardProps> = ({ day, title, description, image, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="bg-[#F2F2F2] rounded-3xl p-4 sm:p-5 flex flex-col justify-between hover:shadow-md transition-all duration-300 cursor-pointer group"
        >
            <div>
                {/* Day Badge */}
                <span className="text-xs font-semibold text-title uppercase tracking-wider block mb-3">
                    {day}
                </span>

                {/* Image Container */}
                <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-5">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-title mb-3 leading-snug group-hover:text-primary transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-title font-light leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            {/* Footer action link */}
            <div className="flex items-center gap-1 text-xs sm:text-sm font-light text-title group-hover:text-primary transition-colors">
                <span>Hover to learn more →</span>
            </div>
        </div>
    )
}

export default ScoutingTripCard