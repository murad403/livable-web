'use client'

import React from 'react'
import ScoutingTripCard from '@/components/shared/ScoutingTripCard'

import trip1 from '@/assets/trip1.jpg'
import trip2 from '@/assets/trip2.jpg'
import trip3 from '@/assets/trip3.jpg'

interface ScoutingTripProps {
    onSelectCard?: (data: any) => void
}

const scoutingTripsData = [
    {
        id: 'day-1',
        day: 'Day 1',
        title: 'Preparation & Time To Reality',
        description: 'We front-load the setup so you can land in Spain or Portugal with a clear plan and direct guidance.',
        image: trip1,
        location: 'Spain & Portugal • Orientation',
        metrics: [
            { rank: '3 Hours', title: 'Strategy Workshop', subtitle: 'Expat Advisor' },
            { rank: '100%', title: 'Legal & Tax Overview', subtitle: 'Visa Experts' },
            { rank: '#1', title: 'Neighborhood Prep', subtitle: 'Custom Profile' }
        ],
        neighborhoodsText: 'City orientation, lifestyle mapping, healthcare overview, housing market breakdown.'
    },
    {
        id: 'day-2',
        day: 'Day 2',
        title: 'Pacing Through Your Priorities',
        description: 'Explore key neighborhoods that match your lifestyle, budget, and daily commute or family preferences.',
        image: trip2,
        location: 'Neighborhood Scouting Tour',
        metrics: [
            { rank: '4-6', title: 'Curated Neighborhoods', subtitle: 'Guided Visits' },
            { rank: '2', title: 'School & Transport Visits', subtitle: 'On-site Inspection' },
            { rank: 'Local', title: 'Expat Q&A Lunch', subtitle: 'Community Connection' }
        ],
        neighborhoodsText: 'In-depth neighborhood walk-throughs, school tours, public transit checks, local market visits.'
    },
    {
        id: 'day-3',
        day: 'Day 3',
        title: 'Actionable Plan & Wrap-up',
        description: 'Wrap up your scouting trip with clear next steps, trusted partners, and expert advice for relocation.',
        image: trip3,
        location: 'Final Action Roadmap',
        metrics: [
            { rank: '1:1', title: 'Relocation Roadmap', subtitle: 'Step-by-step Plan' },
            { rank: 'Top 5', title: 'Trusted Partner List', subtitle: 'Lawyers & Brokers' },
            { rank: '100%', title: 'Confidence Rating', subtitle: 'Expat Guarantee' }
        ],
        neighborhoodsText: 'Detailed budget breakdown, real estate selection strategy, lawyer introduction, timeline locking.'
    }
]

const ScoutingTrip: React.FC<ScoutingTripProps> = ({ onSelectCard }) => {
    return (
        <section id="scouting-trip" className="py-16 px-6 sm:px-12 max-w-7xl mx-auto scroll-mt-24">
            {/* Transition row from Hero (Image 1 style) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-24 pb-16 border-b border-gray-200/80">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#282828] leading-snug tracking-tight">
                    Moving abroad can turn into years of fragmented research, expensive mistakes, and second-guessing.
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Every detail of our scouting trip program is designed to shortcut years of guesswork into a focused three-day experience that helps you clarify your priorities and move with confidence.
                </p>
            </div>

            {/* Scouting Trip Header */}
            <div className="text-center mb-16">
                <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest block mb-3">
                    The Scouting Trip
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#282828] tracking-tight mb-4 max-w-4xl mx-auto">
                    Three days. Three experts. Your priorities. Insider info.
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                    Our customized three-day scouting trip pairs you with local experts to give you an insider look into living in Spain or Portugal so you can make decisions based on real experience, not secondhand info.
                </p>
            </div>

            {/* 3 Day Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {scoutingTripsData.map((trip) => (
                    <ScoutingTripCard
                        key={trip.id}
                        day={trip.day}
                        title={trip.title}
                        description={trip.description}
                        image={trip.image}
                        onClick={() => onSelectCard && onSelectCard(trip)}
                    />
                ))}
            </div>
        </section>
    )
}

export default ScoutingTrip