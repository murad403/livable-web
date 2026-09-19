'use client'
import { useState } from 'react'

const Pricing = () => {
    const [selectedOption, setSelectedOption] = useState<'single' | 'another'>('single')

    return (
        <section className="px-4 sm:px-8 md:px-12 max-w-[1728px] mx-auto md:space-y-20 space-y-8 sm:space-y-12">
            {/* Main Header */}
            <div className="text-center space-y-4 sm:space-y-6 md:space-y-9">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[86px] font-medium text-title">
                    Simple Pricing
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[58px] font-medium text-title leading-tight">
                    One flat price for the complete Livable™ Relocation System.
                </h2>
                <p className="text-base sm:text-xl md:text-2xl lg:text-[30px] xl:text-[36px] tracking-[0.5px] sm:tracking-[1px] leading-relaxed max-w-5xl mx-auto">
                    Whether you're moving on your own or together, one price includes your guided scouting trip, full platform access, and the complete 3-step process.
                </p>
                <p className="text-base sm:text-xl md:text-2xl lg:text-[30px] xl:text-[36px] tracking-[0.5px] sm:tracking-[1px] leading-relaxed max-w-5xl mx-auto">
                    The Livable™ system is priced to cover the full scope of the guided experience—expert sessions, logistical coordination, and full platform access. The flat fee is designed to be straightforward, with no hidden add-ons beyond the optional secondary location.
                </p>
            </div>

            {/* Flat Price Card Container */}
            <div className="max-w-3xl mx-auto rounded-2xl p-4 sm:p-6 md:p-8 border border-primary shadow-sm bg-white text-center relative space-y-4 md:space-y-6">
                {/* Price */}
                <div className="text-4xl sm:text-5xl md:text-[58px] font-medium text-title">
                    $3,400
                </div>

                {/* Subtitle */}
                <div className="font-medium text-xl sm:text-2xl md:text-[34px] text-title">
                    For one or two people
                </div>

                {/* Subtext */}
                <p className="font-medium text-base sm:text-xl md:text-2xl text-title tracking-[0.5px] sm:tracking-[1px] leading-relaxed">
                    The flat price covers up to two people sharing a room, so couples and two-person households go together under a single fee.
                </p>

                {/* Features Header & Bullet list */}
                <div className="text-left space-y-3 sm:space-y-4 md:space-y-6 pt-2">
                    <h3 className="text-lg sm:text-2xl md:text-[34px] text-title font-medium">
                        Included with every Livable™ Relocation System:
                    </h3>

                    <ul className="space-y-3 sm:space-y-4 md:space-y-6 text-title text-base sm:text-xl md:text-2xl">
                        <li className="flex items-start gap-2.5">
                            <span className="size-2.5 sm:size-3 rounded-xs bg-title shrink-0 mt-2 sm:mt-3" />
                            <p>3-Step Relocation Track: Full system access from planning to arrival checklists</p>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="size-2.5 sm:size-3 rounded-xs bg-title shrink-0 mt-2 sm:mt-3" />
                            <p>Guided Scouting Trip: Personalized itinerary with hotels, transport, and expert sessions.</p>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="size-2.5 sm:size-3 rounded-xs bg-title shrink-0 mt-2 sm:mt-3" />
                            <p>Relocation Dashboard: Single workspace for notes, partner referrals, and next steps.</p>
                        </li>
                    </ul>
                </div>

                {/* Location Switcher toggle at bottom */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-base sm:text-xl md:text-2xl font-medium text-title pt-2">
                    <button
                        onClick={() => setSelectedOption('single')}
                        className={`font-medium cursor-pointer transition-colors ${
                            selectedOption === 'single' ? 'text-primary' : 'text-title hover:text-primary'
                        }`}
                    >
                        Single location
                    </button>

                    {/* Red Pill Toggle Switch */}
                    <button
                        onClick={() => setSelectedOption(selectedOption === 'single' ? 'another' : 'single')}
                        className="w-10 h-5.5 rounded-full border-2 border-primary flex items-center p-0.5 cursor-pointer transition-colors shrink-0"
                        aria-label="Toggle location option"
                    >
                        <span
                            className={`w-3.5 h-3.5 rounded-full bg-primary transition-transform duration-300 transform ${
                                selectedOption === 'single' ? 'translate-x-0' : 'translate-x-4.5'
                            }`}
                        />
                    </button>

                    <button
                        onClick={() => setSelectedOption('another')}
                        className={`font-medium cursor-pointer transition-colors ${
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