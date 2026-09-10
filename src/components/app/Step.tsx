'use client'

import React from 'react'

const Step = () => {
    const stepsData = [
        {
            stepNumber: 'Step 1',
            title: 'The Scouting Trip',
            bullets: [
                'Personal client dashboard access',
                'Guided pre-trip planning module',
                'Initial parameters and goals tracker',
                'Pre-briefed expert consultations setup'
            ]
        },
        {
            stepNumber: 'Step 2',
            title: 'The Guided Scouting Trip',
            bullets: [
                'Personalized 3-day itinerary',
                'Vetted 3-star hotel with breakfast',
                'Airport pickup and in-country transport',
                'One-on-one neighborhood guide session',
                'Real estate partner consultation',
                'Culture host everyday-life guidance',
                'Curated local dinner on evening two',
                'Companion mobile app for city tests',
                'Live team text support while on-site'
            ]
        },
        {
            stepNumber: 'Step 3',
            title: 'Post-Trip to Move',
            bullets: [
                'Shared workspace for notes and reflections',
                'Trusted local partner directory',
                'Practical infrastructure guidance',
                'Post-scouting operational action items',
                'Essential arrival setup checklists',
                'Ongoing referrals as you move forward'
            ]
        }
    ]

    return (
        <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto text-title font-sans">
            {/* Top Left Label */}
            <span className="text-xs sm:text-sm font-semibold text-title uppercase tracking-widest block mb-4">
                What's Included
            </span>

            {/* Main Header */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-title tracking-tight mb-16 text-center">
                The 3-Step Process
            </h2>

            {/* 3 Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                {stepsData.map((col, idx) => (
                    <div key={idx} className="space-y-3">
                        <span className="text-lg md:text-xl font-semibold text-title block text-center sm:text-left">
                            {col.stepNumber}
                        </span>
                        <h3 className="text-lg md:text-xl font-medium text-title mb-6 text-center sm:text-left">
                            {col.title}
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-700 font-light">
                            {col.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2.5">
                                    <span className="w-1.5 h-1.5 bg-title shrink-0 mt-1.5" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Step