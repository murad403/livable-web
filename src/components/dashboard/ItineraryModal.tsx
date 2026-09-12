'use client'

import React from 'react'
import { X } from 'lucide-react'

interface ItineraryModalProps {
    isOpen: boolean
    onClose: () => void
}

const ItineraryModal: React.FC<ItineraryModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    const schedule = [
        {
            dayTag: 'Day 01 — Oct 12',
            title: 'Arrival & Orientation',
            bullets: [
                'Airport pickup and hotel check-in (Chiado)',
                'Welcome briefing with Livable™ local liaison',
                'Evening walk: Príncipe Real and Santos'
            ]
        },
        {
            dayTag: 'Day 02 — Oct 13',
            title: 'Neighbourhood Exploration',
            bullets: [
                'Morning: Alfama and Mouraria',
                'Afternoon: Parque das Nações and Oriente',
                'Evening: Dinner with expat community'
            ]
        },
        {
            dayTag: 'Day 03 — Oct 14',
            title: 'Practical Discovery',
            bullets: [
                'Healthcare facility tours',
                'International school visit (if applicable)',
                'Legal and financial advisor introductions',
                'Evening debrief with Livable™ advisor'
            ]
        }
    ]

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-8 md:p-12 relative shadow-xl border border-gray-100 max-h-[90vh] overflow-y-auto font-sans text-title">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-title">
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
                <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed mb-8">
                    Your itinerary is ready. Below is your three-day scouting schedule for Lisbon, coordinated by the Livable™ team to maximize your time on the ground.
                </p>

                {/* Days Schedule */}
                <div className="space-y-8 mb-8">
                    {schedule.map((day, idx) => (
                        <div key={idx} className="border-t border-gray-100 pt-6">
                            <span className="text-xs sm:text-sm font-normal text-gray-500 block mb-1">
                                {day.dayTag}
                            </span>
                            <h3 className="text-lg md:text-xl font-medium text-title mb-4">
                                {day.title}
                            </h3>
                            <ul className="space-y-2.5 text-sm sm:text-base text-gray-700 font-light">
                                {day.bullets.map((b, bIdx) => (
                                    <li key={bIdx} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-gray-400 shrink-0 mt-2 rounded-none" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Departure Note */}
                <div className="border-t border-gray-100 pt-6 mb-10">
                    <p className="text-sm sm:text-base text-gray-700 font-light">
                        Departure: Oct 15. Return transfer arranged by Livable™.
                    </p>
                </div>

                {/* Modal Footer */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); alert('Downloading itinerary PDF...') }}
                        className="text-sm sm:text-base font-medium text-title underline underline-offset-4 hover:text-primary transition-colors cursor-pointer"
                    >
                        Download Scouting Itinerary →
                    </a> */}
                    <button
                        onClick={onClose}
                        className="bg-primary hover:bg-primary-hover text-white px-10 py-3 rounded-xl text-base font-semibold transition-all shadow-sm cursor-pointer self-end sm:self-auto"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItineraryModal