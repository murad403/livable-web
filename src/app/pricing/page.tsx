'use client'

import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export default function PricingPage() {
    const plans = [
        {
            name: 'Scouting Trip Package',
            price: '$2,490',
            description: 'Our flagship 3-day guided scouting experience for 1-2 people.',
            popular: true,
            features: [
                'Full 3-day customized scouting itinerary',
                'Dedicated local expat guide and advisor',
                '4-6 neighborhood tours matched to your criteria',
                'School, transit & healthcare inspections',
                '1-on-1 strategy wrap-up & partner introductions'
            ]
        },
        {
            name: 'Complete Relocation System',
            price: '$4,950',
            description: 'End-to-end relocation management from U.S. departure to home move-in.',
            popular: false,
            features: [
                'Includes Scouting Trip package',
                'Full Livable digital portal access',
                'Visa & D8 / D7 / Golden Visa advisory',
                'Real estate search & lease negotiation',
                'Bank account setup & tax fiscal representation'
            ]
        },
        {
            name: 'Custom VIP Relocation',
            price: '$8,500+',
            description: 'Tailored high-touch service for families, business owners, & investors.',
            popular: false,
            features: [
                'Private chauffeur & VIP scouting arrangements',
                'International school placement specialist',
                'Corporate tax & cross-border wealth setup',
                'Concierge utility & pet relocation assistance',
                'Dedicated 24/7 senior advisor'
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-white text-[#282828] font-sans flex flex-col justify-between">
            <div>
                <Navbar />
                <main className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs sm:text-sm font-semibold text-[#FE3F39] uppercase tracking-widest block mb-3">
                            Transparent Pricing
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#282828] mb-4">
                            Invest in a smooth move to Europe
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                            Clear, upfront pricing with zero hidden fees. Designed to save you thousands in costly relocation mistakes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`rounded-3xl p-8 border flex flex-col justify-between relative transition-all duration-300 ${
                                    plan.popular
                                        ? 'border-[#FE3F39] shadow-xl bg-gradient-to-b from-red-50/30 to-white ring-1 ring-[#FE3F39]'
                                        : 'border-gray-200 shadow-sm bg-white hover:border-gray-300'
                                }`}
                            >
                                {plan.popular && (
                                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FE3F39] text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                                        Most Popular
                                    </span>
                                )}

                                <div>
                                    <h3 className="text-xl font-semibold text-[#282828] mb-2">{plan.name}</h3>
                                    <p className="text-xs text-gray-500 mb-6">{plan.description}</p>
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-[#282828]">{plan.price}</span>
                                        <span className="text-xs text-gray-500 ml-1">/ one-time</span>
                                    </div>

                                    <div className="space-y-3 mb-8">
                                        {plan.features.map((feat, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-2 text-sm text-gray-700">
                                                <Check className="w-4 h-4 text-[#FE3F39] shrink-0 mt-0.5" />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    href="/#talk-with-us"
                                    className={`w-full py-3.5 rounded-full text-sm font-semibold transition-all text-center flex items-center justify-center gap-2 cursor-pointer ${
                                        plan.popular
                                            ? 'bg-[#FE3F39] hover:bg-[#e0322d] text-white shadow'
                                            : 'bg-gray-100 hover:bg-gray-200 text-[#282828]'
                                    }`}
                                >
                                    <span>Get Started</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}
