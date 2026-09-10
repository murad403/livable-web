'use client'

import React from 'react'
import { X } from 'lucide-react'

interface GuidedDiscoveryModalProps {
    isOpen: boolean
    onClose: () => void
}

const GuidedDiscoveryModal: React.FC<GuidedDiscoveryModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-8 md:p-12 relative shadow-xl border border-gray-100 max-h-[90vh] overflow-y-auto font-sans text-title">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-title">
                        Guided Discovery
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-black transition-colors p-2 cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Paragraphs */}
                <div className="space-y-5 text-sm sm:text-base text-gray-600 font-light leading-relaxed mb-8">
                    <p>
                        We have created a mobile companion app to co-guide you during your 72 hours in Lisbon. This companion app is your engine for structured, independent discovery.
                    </p>
                    <p>
                        We have mapped out three categories of discovery that we believe are essential to a deeper understanding of a place: food, free time, and practical basics. They are divided into 9 city tests that you can choose from during your open blocks of time between your sessions with the Livable team members.
                    </p>
                    <p>
                        These 9 tests are designed to get you out into the streets to gather real information, test local systems, and feel how each space would fit your life. By physically testing public transit, walking local grocery aisles, and checking out local spaces, you are actively feeling out what your day-to-day life would look like.
                    </p>
                    <p>
                        It is also a perfect opportunity to capture fast answers to the immediate questions that pop up along the way—things you might not have thought of until you were actually there. Whether it's navigating a transit loop, exploring the waterfront, or walking into a local pharmacy, you can bring those real-world questions straight to your next team meeting for instant information.
                    </p>
                    <p>
                        We recommend completing at least 6 of the 9 core tests. For those staying on in town after our official itinerary wraps up, we have also included a collection of 16 additional—and super fun—mini-tests to play around with as you venture out on your own.
                    </p>
                    <div className="pt-5 border-t border-gray-100 mt-6">
                        <p className="text-gray-700 font-normal">
                            Use the link below to save the web-app straight to your phone's home screen. The entire system is engineered to run completely offline, ensuring your notes are saved locally even if you lose cellular coverage in a deep stone alleyway or a subway tunnel.
                        </p>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); alert('Downloading Companion App...') }}
                        className="text-sm sm:text-base font-medium text-title underline underline-offset-4 hover:text-primary transition-colors cursor-pointer"
                    >
                        Download Companion App →
                    </a>
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

export default GuidedDiscoveryModal