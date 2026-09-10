'use client'

import React, { useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { X } from 'lucide-react'
import mapImg from '@/assets/map.png'

export interface ModalData {
    title: string
    location?: string
    image: StaticImageData | string
    description: string
    metrics?: { rank: string; title: string; subtitle: string }[]
    mapImage?: StaticImageData | string
    neighborhoodsText?: string
}

interface DetailsModalProps {
    isOpen: boolean
    onClose: () => void
    data: ModalData | null
    onSelectAndContinue?: (cityTitle: string) => void
}

const DetailsModal: React.FC<DetailsModalProps> = ({
    isOpen,
    onClose,
    data,
    onSelectAndContinue
}) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            window.addEventListener('keydown', handleKeyDown)
        }
        return () => {
            document.body.style.overflow = 'auto'
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, onClose])

    if (!isOpen || !data) return null

    const handleContinue = () => {
        if (onSelectAndContinue) {
            onSelectAndContinue(data.title)
        } else {
            onClose()
            const el = document.getElementById('talk-with-us')
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    const currentMapImage = data.mapImage || mapImg

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
            {/* Modal Container (Matching Exact Image Layout) */}
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative p-6 sm:p-10 space-y-10 animate-scaleUp">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-title flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* 1. Hero Header Image & Title Block */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Top Left Image */}
                    <div className="md:col-span-6 relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm">
                        <Image
                            src={data.image}
                            alt={data.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Top Right Content */}
                    <div className="md:col-span-6 space-y-3 pt-1">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-title uppercase font-sans">
                            {data.title}
                        </h2>
                        {data.location && (
                            <p className="text-xs sm:text-sm text-gray-500 font-normal">
                                {data.location}
                            </p>
                        )}
                        <p className="text-base sm:text-lg text-title leading-relaxed font-normal pt-1">
                            {data.description}
                        </p>
                    </div>
                </div>

                {/* 2. Three Metric Cards Grid (Matching User Image) */}
                {data.metrics && data.metrics.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {data.metrics.map((m, idx) => (
                            <div
                                key={idx}
                                className="border border-gray-800 rounded-2xl p-6 text-center bg-white shadow-xs"
                            >
                                <span className="text-xl sm:text-2xl font-medium text-title block mb-1">
                                    {m.rank}
                                </span>
                                <h4 className="text-base sm:text-lg font-semibold text-title leading-snug mb-1">
                                    {m.title}
                                </h4>
                                <p className="text-xs text-gray-500 font-normal">
                                    {m.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* 3. Map & Neighborhoods Section (Always showing map.png from assets) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
                    <div className="md:col-span-6 relative h-52 sm:h-60 rounded-2xl overflow-hidden border border-gray-200 shadow-xs">
                        <Image
                            src={currentMapImage}
                            alt="Map View"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="md:col-span-6 space-y-2">
                        {data.neighborhoodsText && (
                            <p className="text-lg sm:text-xl text-title font-normal leading-relaxed">
                                {data.neighborhoodsText}
                            </p>
                        )}
                    </div>
                </div>

                {/* 4. Bottom CTA Block (Matching User Image Exact Design) */}
                <div className="pt-6 text-center space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-medium text-title">
                        Ready to see how {data.title} fits your life?
                    </h3>
                    <button
                        onClick={handleContinue}
                        className="text-xs sm:text-sm font-medium text-title hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-1 mt-1"
                    >
                        Choose {data.title} and Continue →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailsModal