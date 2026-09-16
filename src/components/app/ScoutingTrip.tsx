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
        title: 'Frictionless Travel Logistics',
        description: 'We take care of every travel detail so your full energy goes toward analyzing the city, not navigating it.',
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
        title: 'Expertise Through Your Priorities',
        description: 'Spend your hours with local guides who are thoroughly pre-briefed on your budget, lifestyle, and housing parameters.',
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
        title: 'Independent Daily Routines',
        description: 'Use your unguided hours to test everyday micro-social textures with total independence, but zero aimless wandering.',
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
        <section id="scouting-trip" className="px-6 sm:px-12 max-w-[1728px] mx-auto md:space-y-20 space-y-10">
            {/* Scouting Trip Header */}
            <div className="text-center space-y-4 md:space-y-8">
                <p className="font-medium text-2xl md:text-[34px] text-title">
                    The Scouting Trip
                </p>
                <h2 className="md:text-[58px] text-4xl font-medium text-title">
                    Three days, Three experts. Your priorities. Insider info.
                </h2>
                <p className="text-title text-2xl md:text-[34px] font-normal tracking-[1px]">
                    One carefully designed three-day scouting trip, giving you the real-world experience to replace guesswork before you commit to the move. Every neighborhood layout and local consultation is prepared around your priorities before you arrive, so you can decide with confidence.
                </p>
            </div>

            {/* 3 Day Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {scoutingTripsData.map((trip) => (
                    <ScoutingTripCard
                        key={trip.id}
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