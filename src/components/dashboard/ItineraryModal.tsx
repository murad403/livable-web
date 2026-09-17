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
            dayTag: 'Day 01 — Day 12',
            title: 'Arrival & Orientation',
            bullets: [
                'Airport pickup and hotel check-in (Chiado)',
                'Welcome briefing with Livable™ local liaison',
                'Evening walk: Príncipe Real and Santos'
            ]
        },
        {
            dayTag: 'Day 02 — Day 13',
            title: 'Neighbourhood Exploration',
            bullets: [
                'Morning: Alfama and Mouraria',
                'Afternoon: Parque das Nações and Oriente',
                'Evening: Dinner with expat community'
            ]
        },
        {
            dayTag: 'Day 03 — Day 14',
            title: 'Practical Discovery',
            bullets: [
                'Healthcare facility tours',
                'International school visit (if applicable)',
                'Legal and financial advisor introductions',
                'Evening debrief with Livable™ advisor'
            ]
        },
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
            <p className="text-xs sm:text-sm text-title font-light leading-relaxed">
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
                        <ul className="space-y-2 text-xs sm:text-sm text-title font-light">
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
                <p className="text-xs sm:text-sm text-title font-light">
                    Departure: Day 15. Return transfer arranged by Livable™.
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