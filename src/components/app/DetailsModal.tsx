'use client'

import React, { useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { X, ArrowRight } from 'lucide-react'

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

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
            {/* Modal Container (Matching Image 4 layout) */}
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative animate-scaleUp">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-md backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Hero Header Image & Title Block */}
                <div className="p-6 sm:p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
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
                        <div className="md:col-span-6 space-y-3">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#282828] uppercase font-sans">
                                {data.title}
                            </h2>
                            {data.location && (
                                <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
                                    {data.location}
                                </p>
                            )}
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                                {data.description}
                            </p>
                        </div>
                    </div>

                    {/* 3 Metric Cards Grid (Matching Image 4 middle cards) */}
                    {data.metrics && data.metrics.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                            {data.metrics.map((m, idx) => (
                                <div
                                    key={idx}
                                    className="border border-gray-200 rounded-2xl p-4 sm:p-5 text-center bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all"
                                >
                                    <span className="text-2xl sm:text-3xl font-bold text-[#282828] block mb-1">
                                        {m.rank}
                                    </span>
                                    <h4 className="text-sm font-semibold text-[#282828] mb-1">
                                        {m.title}
                                    </h4>
                                    <p className="text-[11px] text-gray-500 font-light">
                                        {m.subtitle}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Map & Neighborhoods Section (Matching Image 4 map row) */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4 border-t border-gray-100">
                        {data.mapImage && (
                            <div className="md:col-span-6 relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                                <Image
                                    src={data.mapImage}
                                    alt="Map View"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <div className={`space-y-2 ${data.mapImage ? 'md:col-span-6' : 'md:col-span-12'}`}>
                            {data.neighborhoodsText && (
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                    {data.neighborhoodsText}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Bottom CTA Block (Matching Image 4 bottom CTA) */}
                    <div className="pt-6 border-t border-gray-100 text-center space-y-3">
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#282828]">
                            Ready to see how {data.title} fits your life?
                        </h3>
                        <button
                            onClick={handleContinue}
                            className="inline-flex items-center gap-2 bg-[#FE3F39] hover:bg-[#e0322d] text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:scale-105"
                        >
                            <span>Choose {data.title} and Continue</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsModal