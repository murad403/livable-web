'use client'

import React, { useState } from 'react'

const Pricing = () => {
    const [selectedOption, setSelectedOption] = useState<'single' | 'another'>('single')

    return (
        <section className="pt-12 pb-20 px-6 sm:px-12 max-w-7xl mx-auto text-title font-sans">
            {/* Main Header */}
            <div className="text-center max-w-4xl mx-auto mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-title mb-4">
                    Simple Pricing
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-title mb-6">
                    One flat price for the complete Livable<span className="text-xl align-super ml-0.5 font-normal">™</span> Relocation System.
                </h2>
                <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
                    Whether you're moving on your own or together, one price includes your guided scouting trip, full platform access, and the complete 3-step process.
                </p>
                <p className="text-sm sm:text-base leading-relaxed max-w-4xl mx-auto font-light">
                    The Livable<span className="text-xs align-super ml-0.5 font-normal">™</span> system is priced to cover the full scope of the guided experience—expert sessions, logistical coordination, and full platform access. The flat fee is designed to be straightforward, with no hidden add-ons beyond the optional secondary location.
                </p>
            </div>

            {/* Flat Price Card Container ($3,400 matching exact image design) */}
            <div className="max-w-2xl mx-auto rounded-3xl p-8 sm:p-12 border border-red-200/90 shadow-sm bg-white text-center relative">
                {/* Price */}
                <div className="text-5xl sm:text-6xl font-bold text-title mb-2">
                    $3,400
                </div>

                {/* Subtitle */}
                <div className="text-lg font-semibold text-title mb-2">
                    For one or two people
                </div>

                {/* Subtext */}
                <p className="text-xs sm:text-sm max-w-md mx-auto mb-8 font-light leading-relaxed">
                    The flat price covers up to two people sharing a room, so couples and two-person households go together under a single fee.
                </p>

                {/* Features Header & Bullet list */}
                <div className="text-left max-w-lg mx-auto mb-8 border-t border-gray-100 pt-6">
                    <h3 className="text-sm font-semibold text-title mb-4">
                        Included with every Livable<span className="text-xs align-super ml-0.5 font-normal">™</span> Relocation System:
                    </h3>

                    <ul className="space-y-3.5 text-xs sm:text-sm text-gray-700 font-light">
                        <li className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-xs bg-title shrink-0 mt-1.5" />
                            <span>
                                <strong className="font-semibold text-title">3-Step Relocation Track:</strong> Full system access from planning to arrival checklists.
                            </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-xs bg-title shrink-0 mt-1.5" />
                            <span>
                                <strong className="font-semibold text-title">Guided Scouting Trip:</strong> Personalized itinerary with hotels, transport, and expert sessions.
                            </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-xs bg-title shrink-0 mt-1.5" />
                            <span>
                                <strong className="font-semibold text-title">Relocation Dashboard:</strong> Single workspace for notes, partner referrals, and next steps.
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Location Switcher toggle at bottom */}
                <div className="flex items-center justify-center gap-3 text-xs sm:text-sm pt-4 border-t border-gray-100">
                    <button
                        onClick={() => setSelectedOption('single')}
                        className={`font-semibold cursor-pointer transition-colors ${
                            selectedOption === 'single' ? 'text-primary' : 'text-gray-400 hover:text-title'
                        }`}
                    >
                        Single location
                    </button>
                    <span className="text-gray-300">or</span>
                    <button
                        onClick={() => setSelectedOption('another')}
                        className={`font-semibold cursor-pointer transition-colors ${
                            selectedOption === 'another' ? 'text-primary' : 'text-title hover:text-primary'
                        }`}
                    >
                        Add another location
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Pricing;