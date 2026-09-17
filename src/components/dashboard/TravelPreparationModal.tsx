'use client'

import React, { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '../ui/button'

interface TravelPreparationModalProps {
    isOpen: boolean
    onClose: () => void
    isInline?: boolean
}

const TravelPreparationModal: React.FC<TravelPreparationModalProps> = ({ isOpen, onClose, isInline = true }) => {
    const [selected, setSelected] = useState<number[]>([])

    if (!isOpen) return null

    const toggleCheck = (idx: number) => {
        if (selected.includes(idx)) {
            setSelected(selected.filter(i => i !== idx))
        } else {
            setSelected([...selected, idx])
        }
    }

    const items = [
        {
            title: 'Isolate Your Top 5 Questions:',
            desc: "What are the five absolute non-negotiable answers you need to leave this trip with? They don't have to be overly analytical—think about the ordinary, everyday realities you are most curious or anxious about. Write them down so you can easily reference them during your expert sessions."
        },
        {
            title: 'Trust the Route:',
            desc: "Your neighborhood guide will lead the entire physical route through our three selected districts. You don't need to stress about navigating or mapping out street corners. Your only job during the walk is to relax, absorb the environment, and notice how the spaces actually make you feel."
        },
        {
            title: 'The Notebook Habit:',
            desc: "Pack a physical notebook or open a clean page on your phone. Real-world impressions hit you fast when you are out walking. If you don't write down your immediate feelings, questions, and reactions in the moment, they easily blur together by the time you sit down for dinner."
        },
        {
            title: 'The Shoe Rule:',
            desc: "Ensure you pack high-comfort walking shoes. You will be moving across dense, historic cobblestones and neighborhood hills throughout your itinerary—prioritize physical comfort so your body can stay fully present in the environment."
        }
    ]

    const content = (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs font-sans text-title space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200/80">
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-title">
                    Travel Preparation
                </h2>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-black transition-colors p-2 cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Intro paragraph */}
            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Let's get the practical side of your move into one place. Some questions are about money, while others focus on your personal priorities. Together, they'll help shape your scouting trip and give us a clear picture of what you’re building.
            </p>

            {/* Section Subheading */}
            <div>
                <h3 className="text-base font-semibold text-title mb-1">Motivation</h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light">
                    What is motivating the financial side of your move? (Select all that apply)
                </p>
            </div>

            {/* Checkbox List */}
            <div className="space-y-5">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => toggleCheck(idx)}
                        className="flex items-start gap-4 cursor-pointer group"
                    >
                        <input
                            type="checkbox"
                            checked={selected.includes(idx)}
                            onChange={() => {}}
                            className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary shrink-0 cursor-pointer"
                        />
                        <div>
                            <h4 className="text-sm font-medium text-title mb-1 group-hover:text-primary transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Border Divider & Bottom Action */}
            <div className="pt-6 border-t border-gray-200/80 flex items-center justify-start">
                <Button
                    onClick={onClose}
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

export default TravelPreparationModal