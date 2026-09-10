'use client'

import React, { useState } from 'react'
import { X } from 'lucide-react'

interface FinancialProfileModalProps {
    isOpen: boolean
    onClose: () => void
}

const FinancialProfileModal: React.FC<FinancialProfileModalProps> = ({ isOpen, onClose }) => {
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

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-8 md:p-12 relative shadow-xl border border-gray-100 max-h-[90vh] overflow-y-auto font-sans text-title">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 mb-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-title">
                        Financial Profile
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-black transition-colors p-2 cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Intro paragraph */}
                <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed mb-8">
                    Let's get the practical side of your move into one place. Some questions are about money, while others focus on your personal priorities. Together, they'll help shape your scouting trip and give us a clear picture of what you’re building. There are no right answers here—the goal is simply to understand the realities your move needs to work within.
                </p>

                {/* Section Subheading */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium text-title mb-2">Motivation</h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-light">
                        What is motivating the financial side of your move? (Select all that apply)
                    </p>
                </div>

                {/* Checkbox List */}
                <div className="space-y-6 mb-10">
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
                                <h4 className="text-sm font-semibold text-title mb-1 group-hover:text-primary transition-colors">
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
                <div className="pt-6 border-t border-gray-100 flex items-center justify-start">
                    <button
                        onClick={onClose}
                        className="bg-primary hover:bg-primary-hover text-white px-10 py-3.5 rounded-2xl text-lg font-semibold transition-all shadow-sm cursor-pointer"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FinancialProfileModal