'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface ScoutingTripCardProps {
    title: string
    description: string
    image: StaticImageData | string
    onClick?: () => void
}

const ScoutingTripCard: React.FC<ScoutingTripCardProps> = ({ title, description, image, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="bg-[#ECECEC] rounded-2xl p-4 flex flex-col justify-between hover:shadow-md transition-all duration-300 cursor-pointer group"
        >
            <div className='space-y-4 md:space-y-6'>
                {/* Image Container */}
                <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Title */}
                <h3 className="tracking-tight text-title group-hover:text-primary transition-colors text-3xl md:text-[46px] font-normal">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-2xl md:text-[36px] text-title tracking-tighter">
                    {description}
                </p>
            </div>

            {/* Footer action link */}
            <div className="flex items-center gap-1 mt-4 md:mt-6 font-medium text-lg md:text-2xl text-title group-hover:text-primary transition-colors">
                <span>Hover to learn more →</span>
            </div>
        </div>
    )
}

export default ScoutingTripCard