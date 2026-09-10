'use client'

import React from 'react'
import { X } from 'lucide-react'

interface OrientationModalProps {
    isOpen: boolean
    onClose: () => void
}

const OrientationModal: React.FC<OrientationModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-8 md:p-12 relative shadow-xl border border-gray-100 max-h-[90vh] overflow-y-auto font-sans text-title">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-title">
                        Welcome to Livable<span className="text-sm align-super ml-0.5 font-normal">™</span>
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
                    From this point forward, your move lives in one place. We'll show you how Livable™ works, what to expect, and where each part of the move lives, so you can stop holding the whole transition in your head.
                </p>

                {/* Section 1: A few things to know */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-title mb-4">
                        A few things to know
                    </h3>
                    <ul className="space-y-3 text-sm sm:text-base text-gray-700 font-light">
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-title shrink-0 mt-2 rounded-xs" />
                            <span>Every step builds naturally on the one before it.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-title shrink-0 mt-2 rounded-xs" />
                            <span>Some parts are quick to complete; others you'll come back to as things evolve.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-title shrink-0 mt-2 rounded-xs" />
                            <span>If you ever have a question, just send us a message right here from your dashboard.</span>
                        </li>
                    </ul>
                </div>

                {/* Section 2: How the dashboard is organized */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-title mb-6">
                        How the dashboard is organized
                    </h3>
                    <div className="space-y-6">
                        <div className="border-l-2 border-gray-200 pl-4 py-0.5">
                            <h4 className="text-base font-semibold text-title mb-1">
                                Step 01: Pre-Scouting
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                                Introduces the system, aligns your financial profile, and coordinates your lifestyle parameters to build your customized on-site brief.
                            </p>
                        </div>

                        <div className="border-l-2 border-gray-200 pl-4 py-0.5">
                            <h4 className="text-base font-semibold text-title mb-1">
                                Step 02: The Scouting Trip
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                                Prepares your travel logistics, maps your 3-day itinerary, and guides your independent fieldwork through the mobile discovery app.
                            </p>
                        </div>

                        <div className="border-l-2 border-gray-200 pl-4 py-0.5">
                            <h4 className="text-base font-semibold text-title mb-1">
                                Step 03: Post-Trip to Move
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                                Connects you with core relocation infrastructure, organizes your practical checklists, and unlocks your localized micro-social blueprint.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 3: As you move through your workspace */}
                <div className="mb-10">
                    <h3 className="text-lg font-semibold text-title mb-3">
                        As you move through your workspace
                    </h3>
                    <div className="space-y-3 text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                        <p>
                            When a step is complete, click Done or Submit at the bottom of the page. Your progress will update automatically, and the next step will open when it's time.
                        </p>
                        <p>
                            The goal isn't to finish everything quickly. It's to complete each part when it becomes truly useful, so your move stays organized and calm from beginning to end.
                        </p>
                    </div>
                </div>

                {/* Border Divider & Bottom Action */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-start">
                    <button
                        onClick={onClose}
                        className="bg-primary hover:bg-primary-hover text-white px-10 py-3 rounded-xl text-base font-semibold transition-all shadow-sm cursor-pointer"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrientationModal