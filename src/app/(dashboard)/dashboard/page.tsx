'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import OrientationModal from '@/components/dashboard/OrientationModal'
import FinancialProfileModal from '@/components/dashboard/FinancialProfileModal'
import LifestyleAlignmentModal from '@/components/dashboard/LifestyleAlignmentModal'
import ItineraryModal from '@/components/dashboard/ItineraryModal'
import TravelPreparationModal from '@/components/dashboard/TravelPreparationModal'
import GuidedDiscoveryModal from '@/components/dashboard/GuidedDiscoveryModal'
import CoreInfrastructureModal from '@/components/dashboard/CoreInfrastructureModal'
import ArrivalChecklistsModal from '@/components/dashboard/ArrivalChecklistsModal'
import MicroSocialBlueprintModal from '@/components/dashboard/MicroSocialBlueprintModal'
import DetailsModal, { ModalData } from '@/components/app/DetailsModal'
import lisbonImg from '@/assets/place1.jpg'
import mapImg from '@/assets/map.png'

export default function DashboardPage() {
    const [activeModal, setActiveModal] = useState<string | null>(null)
    const [locationModalOpen, setLocationModalOpen] = useState(false)

    const lisbonData: ModalData = {
        title: 'Lisbon, Portugal',
        location: 'Lisbon, Portugal',
        image: lisbonImg,
        description: 'Portugal’s hilly, coastal capital city known for its historic charm, vibrant culture, and world-class expat amenities.',
        metrics: [
            { rank: '01', title: 'Top-tier European healthcare', subtitle: 'SNS public + private options' },
            { rank: '02', title: '300+ annual sunshine days', subtitle: 'Ideal Mediterranean climate' },
            { rank: '03', title: 'Thriving international hub', subtitle: 'Strong English proficiency & tech ecosystem' }
        ],
        mapImage: mapImg,
        neighborhoodsText: 'Príncipe Real, Chiado, Santos, Alfama, Parque das Nações'
    }

    return (
        <div className="min-h-screen bg-white text-title font-sans p-6 sm:p-10 md:p-12 max-w-375 mx-auto selection:bg-primary selection:text-white">
            {/* Top Navigation Bar inside Dashboard */}
            <div className="flex items-center justify-between pb-8 mb-8 border-b border-gray-100 text-xs sm:text-sm">
                <Link href="/" className="font-normal text-xl sm:text-2xl text-title">
                    Livable<span className="text-xs align-super font-light ml-0.5">TM</span>
                </Link>
            </div>

            {/* Sub-Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
                <h1 className="text-2xl sm:text-3xl font-semibold text-title tracking-tight">
                    Hi, Sarah
                </h1>
                <h2 className="text-3xl sm:text-4xl font-semibold text-title tracking-tight text-center md:-translate-x-12">
                    Dashboard
                </h2>
                <div className="hidden md:block w-24" />
            </div>

            {/* Main 3-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* LEFT COLUMN: Welcome & Trip Details (3 cols) */}
                <div className="lg:col-span-3 space-y-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-title mb-3 tracking-tight">
                            Welcome Back
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                            Making an intentional move is an exciting, smart decision. Use this command center to track your ongoing milestones, coordinate your core relocation data, and communicate with our team as we build your future life in Europe.
                        </p>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                        <span className="text-xs font-semibold text-title uppercase tracking-wider block mb-4">
                            Trip Details
                        </span>
                        <div className="space-y-3 text-xs sm:text-sm text-gray-600 font-light">
                            <div className="flex justify-between items-center py-1">
                                <span className="text-gray-500">Target</span>
                                <span className="font-medium text-title">Lisbon</span>
                            </div>
                            <div className="flex justify-between items-center py-1">
                                <span className="text-gray-500">Timeline</span>
                                <span className="font-medium text-title">Oct 12 – Oct 15</span>
                            </div>
                            <div className="flex justify-between items-center py-1">
                                <span className="text-gray-500">Duration</span>
                                <span className="font-medium text-title">3 Days</span>
                            </div>
                            <div className="flex justify-between items-center py-1">
                                <span className="text-gray-500">Phase</span>
                                <span className="font-medium text-title">Pre-Scouting</span>
                            </div>
                            <div className="flex justify-between items-center py-1">
                                <span className="text-gray-500">Advisor</span>
                                <span className="font-medium text-title">Livable Team</span>
                            </div>
                        </div>

                        <button
                            onClick={() => setLocationModalOpen(true)}
                            className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer mt-6 text-center"
                        >
                            View Location Details
                        </button>
                    </div>
                </div>

                {/* MIDDLE COLUMN: Step Cards (6 cols) */}
                <div className="lg:col-span-6 space-y-6">
                    {/* STEP 01 CARD */}
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-xs text-gray-400 font-normal block mb-1">
                                    Step 01
                                </span>
                                <h4 className="text-lg sm:text-xl font-medium text-title">
                                    Pre-Scouting
                                </h4>
                            </div>
                            <span className="text-xs font-semibold text-gray-400">
                                3/3
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium border-t border-b border-gray-100 py-4">
                            <button
                                onClick={() => setActiveModal('orientation')}
                                className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
                            >
                                <span>01 Orientation</span>
                                <span className="w-2 h-2 bg-title shrink-0 rounded-xs" />
                            </button>
                            <button
                                onClick={() => setActiveModal('financial')}
                                className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
                            >
                                <span>02 Financial Profile</span>
                                <span className="w-2 h-2 bg-title shrink-0 rounded-xs" />
                            </button>
                            <button
                                onClick={() => setActiveModal('lifestyle')}
                                className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
                            >
                                <span>03 Lifestyle Alignment</span>
                                <span className="w-2 h-2 bg-title shrink-0 rounded-xs" />
                            </button>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                            <button
                                onClick={() => setActiveModal('orientation')}
                                className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full text-xs font-medium transition-all cursor-pointer"
                            >
                                Done
                            </button>
                            <span className="text-xs text-gray-500 font-light">
                                Ready for you next step!
                            </span>
                        </div>
                    </div>

                    {/* STEP 02 CARD */}
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-xs text-gray-400 font-normal block mb-1">
                                    Step 02
                                </span>
                                <h4 className="text-lg sm:text-xl font-medium text-title">
                                    The Scouting Trip
                                </h4>
                            </div>
                            <span className="text-xs font-semibold text-gray-400">
                                0/3
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium border-t border-b border-gray-100 py-4">
                            <button
                                onClick={() => setActiveModal('itinerary')}
                                className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
                            >
                                <span>01 Itinerary</span>
                                <span className="w-2 h-2 bg-gray-300 shrink-0 rounded-xs" />
                            </button>
                            <button
                                onClick={() => setActiveModal('travel')}
                                className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5 text-gray-500"
                            >
                                <span>02 Travel Preparation</span>
                                <span className="w-2 h-2 bg-gray-300 shrink-0 rounded-xs" />
                            </button>
                            <button
                                onClick={() => setActiveModal('guided')}
                                className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5 text-gray-500"
                            >
                                <span>03 Guided Discovery</span>
                                <span className="w-2 h-2 bg-gray-300 shrink-0 rounded-xs" />
                            </button>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                            <button
                                onClick={() => setActiveModal('itinerary')}
                                className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full text-xs font-medium transition-all cursor-pointer"
                            >
                                Done
                            </button>
                            <span className="text-xs text-gray-500 font-light">
                                Ready for you next step!
                            </span>
                        </div>
                    </div>

                    {/* STEP 03 CARD */}
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-xs text-gray-400 font-normal block mb-1">
                                    Step 03
                                </span>
                                <h4 className="text-lg sm:text-xl font-medium text-title">
                                    Post-Trip to Move
                                </h4>
                            </div>
                            <span className="text-xs font-semibold text-gray-400">
                                0/3
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium border-t border-b border-gray-100 py-4 text-gray-500">
                            <button
                                onClick={() => setActiveModal('core')}
                                className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
                            >
                                <span>01 Core Infrastructure</span>
                                <span className="w-2 h-2 bg-gray-300 shrink-0 rounded-xs" />
                            </button>
                            <button
                                onClick={() => setActiveModal('arrival')}
                                className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
                            >
                                <span>02 Arrival Checklists</span>
                                <span className="w-2 h-2 bg-gray-300 shrink-0 rounded-xs" />
                            </button>
                            <button
                                onClick={() => setActiveModal('social')}
                                className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5"
                            >
                                <span>03 Micro-Social Blueprint</span>
                                <span className="w-2 h-2 bg-gray-300 shrink-0 rounded-xs" />
                            </button>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                            <button
                                onClick={() => setActiveModal('core')}
                                className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full text-xs font-medium transition-all cursor-pointer"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Overview Timeline (3 cols) */}
                <div className="lg:col-span-3 space-y-6">
                    <div>
                        <span className="text-xs font-normal text-gray-400 uppercase tracking-wider block mb-2">
                            Overview
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-semibold text-title tracking-tight mb-4">
                            Your Relocation Timeline
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mb-8">
                            This dashboard coordinates your three core steps from initial parameters to final arrival. Track your milestones, log active field research, and access your verified network.
                        </p>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm font-semibold text-title">
                        <div className="flex items-center gap-2">
                            <span>01 PRE-SCOUTING</span>
                            <span className="w-2 h-2 bg-title shrink-0 rounded-xs" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>02 The Scouting Trip</span>
                            <span className="w-2 h-2 bg-title shrink-0 rounded-xs" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>03 Post-Trip to Move</span>
                            <span className="w-2 h-2 bg-title shrink-0 rounded-xs" />
                        </div>
                    </div>
                </div>

            </div>

            {/* MODALS */}
            <OrientationModal
                isOpen={activeModal === 'orientation'}
                onClose={() => setActiveModal(null)}
            />
            <FinancialProfileModal
                isOpen={activeModal === 'financial'}
                onClose={() => setActiveModal(null)}
            />
            <LifestyleAlignmentModal
                isOpen={activeModal === 'lifestyle'}
                onClose={() => setActiveModal(null)}
            />
            <ItineraryModal
                isOpen={activeModal === 'itinerary'}
                onClose={() => setActiveModal(null)}
            />
            <TravelPreparationModal
                isOpen={activeModal === 'travel'}
                onClose={() => setActiveModal(null)}
            />
            <GuidedDiscoveryModal
                isOpen={activeModal === 'guided'}
                onClose={() => setActiveModal(null)}
            />
            <CoreInfrastructureModal
                isOpen={activeModal === 'core'}
                onClose={() => setActiveModal(null)}
            />
            <ArrivalChecklistsModal
                isOpen={activeModal === 'arrival'}
                onClose={() => setActiveModal(null)}
            />
            <MicroSocialBlueprintModal
                isOpen={activeModal === 'social'}
                onClose={() => setActiveModal(null)}
            />

            {/* Location Details Modal */}
            <DetailsModal
                isOpen={locationModalOpen}
                onClose={() => setLocationModalOpen(false)}
                data={lisbonData}
            />
        </div>
    )
}