'use client'

import React from 'react'
import { X } from 'lucide-react'
import { Button } from '../ui/button'

interface ItineraryModalProps {
    isOpen: boolean
    onClose: () => void
    onDone?: () => void
    isInline?: boolean
}

const ItineraryModal: React.FC<ItineraryModalProps> = ({ isOpen, onClose, onDone, isInline = true }) => {
    if (!isOpen) return null

    const schedule = [
        {
            dayTag: 'Day 00',
            title: 'Arrival & App Activation',
            bullets: [
                'Basecamp: Private airport transfer to your hotel in Belém.',
                'Onboarding: Open the Livable™ app to unlock your Guided Independent Discovery.',
                'Early Birds: Landed early? Complete 1-2 Mini-Tests to log initial questions.',
                'Tonight: Run The Evening Paseo test — curated dinner recommendations.'
            ]
        },
        {
            dayTag: 'Day 01',
            title: 'Neighborhood Immersion',
            bullets: [
                '09:00 - 12:00: Tour 3 distinct profiles (Cascais, Campo de Ourique, Príncipe Real) with your debriefed local guide.',
                'Lunch & Synthesis: Drop-off at a profile-matched spot to digest info.',
                'Afternoon: Independent Personal Infrastructure Test (grocery, transit, daily living).',
                'Evening: Social Infrastructure Test to feel the local neighborhood heartbeat.'
            ]
        },
        {
            dayTag: 'Day 02',
            title: 'Bespoke Housing & Culture',
            bullets: [
                '10:00 - 12:00: Custom market overview with our Real Estate Partner (tailored to your exact specs).',
                'Lunch: Run a quick app-mini-test to source your own meal.',
                'Afternoon: Protected Rest Block to avoid cognitive relocation burnout.',
                'Evening: 3 hour Culture Host Dinner (one paired prix fixe) for raw Q&A with a local.'
            ]
        },
        {
            dayTag: 'Day 03',
            title: 'Independent Autonomy',
            bullets: [
                'Morning: Hotel checkout at noon. No human guides today.',
                'The Transition: Step completely into the shoes of a self-sufficient local.',
                'Final Sprint: Complete your remaining Mini-Tests to stress-test assumptions and build autonomous confidence before departure.'
            ]
        }
    ]

    const content = (
        <div className="bg-white p-6 sm:p-8 border border-gray-200/80 shadow-xs font-sans text-title space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200/80">
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-title">
                    Your Scouting Itinerary
                </h2>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-black transition-colors p-2 cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Your itinerary is ready. Below is your three-day scouting schedule for Lisbon, coordinated by the Livable™ team to maximize your time on the ground.
            </p>

            {/* Days Schedule */}
            <div className="space-y-6">
                {schedule.map((day, idx) => (
                    <div key={idx} className="border-t border-gray-100 pt-5">
                        <span className="text-xs font-normal text-gray-400 block mb-1">
                            {day.dayTag}
                        </span>
                        <h3 className="text-lg sm:text-xl font-medium text-title mb-3">
                            {day.title}
                        </h3>
                        <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-light">
                            {day.bullets.map((b, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2.5">
                                    <span className="w-1.5 h-1.5 bg-title shrink-0 mt-1.5 rounded-none" />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Departure Note */}
            <div className="border-t border-gray-100 pt-5">
                <p className="text-xs sm:text-sm text-gray-500 font-light">
                    Departure: Oct 15. Return transfer arranged by Livable™.
                </p>
            </div>

            {/* Modal Footer */}
            <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                <Button
                    onClick={onDone || onClose}
                >
                    Done
                </Button>
            </div>
        </div>
    )

    if (isInline) return content

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            {content}
        </div>
    )
}

export default ItineraryModal