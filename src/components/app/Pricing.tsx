'use client'
import { useState } from 'react'

const Pricing = () => {
    const [selectedOption, setSelectedOption] = useState<'single' | 'another'>('single')

    return (
        <section className="px-6 sm:px-12 max-w-[1728px] mx-auto md:space-y-20 space-y-10">
            {/* Main Header */}
            <div className="text-center space-y-5 md:space-y-9">
                <h1 className="md:text-[86px] text-6xl font-medium text-title">
                    Simple Pricing
                </h1>
                <h2 className="md:text-[58px] text-4xl font-medium text-title">
                    One flat price for the complete Livable™ Relocation System.
                </h2>
                <p className="text-2xl md:text-[36px] tracking-[1px] leading-[150%]">
                    Whether you're moving on your own or together, one price includes your guided scouting trip, full platform access, and the complete 3-step process.
                </p>
                <p className="text-2xl md:text-[36px] tracking-[1px] leading-[150%]">
                    The Livable™ system is priced to cover the full scope of the guided experience—expert sessions, logistical coordination, and full platform access. The flat fee is designed to be straightforward, with no hidden add-ons beyond the optional secondary location.
                </p>
            </div>

            {/* Flat Price Card Container ($3,400 matching exact image design) */}
            <div className="max-w-3xl mx-auto rounded-2xl p-5 md:p-8 border border-primary shadow-sm bg-white text-center relative space-y-4 md:space-y-6">
                {/* Price */}
                <div className="md:text-[58px] text-4xl font-medium text-title">
                    $3,400
                </div>

                {/* Subtitle */}
                <div className="font-medium text-2xl md:text-[34px] text-title">
                    For one or two people
                </div>

                {/* Subtext */}
                <p className="font-medium text-xl md:text-2xl text-title tracking-[1px]">
                    The flat price covers up to two people sharing a room, so couples and two-person households go together under a single fee.
                </p>

                {/* Features Header & Bullet list */}
                <div className="text-left space-y-4 md:space-y-6">
                    <h3 className="text-2xl md:text-[34px] text-title">
                        Included with every Livable™ Relocation System:
                    </h3>

                    <ul className="space-y-4 md:space-y-6 text-title text-xl md:text-2xl">
                        <li className="flex items-start gap-2.5">
                            <span className="size-3 rounded-xs bg-title shrink-0 mt-3" />
                            <p>3-Step Relocation Track: Full system access from planning to arrival checklists</p>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="size-3 rounded-xs bg-title shrink-0 mt-3" />
                            <p>Guided Scouting Trip: Personalized itinerary with hotels, transport, and expert sessions.</p>
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="size-3 rounded-xs bg-title shrink-0 mt-3" />
                            <p>Relocation Dashboard: Single workspace for notes, partner referrals, and next steps.</p>
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