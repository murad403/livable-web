'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface ScoutingTripCardProps {
    day: string
    title: string
    description: string
    image: StaticImageData | string
    onClick?: () => void
}

const ScoutingTripCard: React.FC<ScoutingTripCardProps> = ({ day, title, description, image, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="bg-[#ECECEC] rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:shadow-md transition-all duration-300 cursor-pointer group border border-gray-100"
        >
            <div>
                {/* Day Badge */}
                <span className="text-xs font-semibold text-title uppercase tracking-wider block mb-3">
                    {day}
                </span>

                {/* Image Container */}
                <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-5">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-title mb-2 leading-snug group-hover:text-primary transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-title leading-relaxed mb-6">
                    {description}
                </p>
            </div>

            {/* Footer action link */}
            <div className="flex items-center gap-1 text-xs font-medium text-title group-hover:text-primary transition-colors pt-2 border-t border-gray-200/60">
                <span>View Day Agenda</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
        </div>
    )
}

export default ScoutingTripCard