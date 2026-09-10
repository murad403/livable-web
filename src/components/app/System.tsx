'use client'

import React from 'react'
import Image from 'next/image'
import systemImg from '@/assets/system.png'

const System = () => {
    return (
        <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
            {/* Top Label */}
            <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest block mb-3">
                The System
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#282828] tracking-tight mb-12">
                The Livable<span className="text-xl align-super ml-0.5 font-normal">™</span> Relocation System
            </h2>

            {/* Content 2 columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left side text blocks */}
                <div className="lg:col-span-5 space-y-8">
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#282828] mb-2">
                            Intelligent strategy
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            We eliminate guesswork by combining data, local market intelligence, and hands-on guidance into a clear, stress-free path forward. Every step is structured for clarity and confidence.
                        </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <h3 className="text-lg sm:text-xl font-semibold text-[#282828] mb-2">
                            Personalized portal
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            Access your relocation map, neighborhood rankings, visa checklists, real estate directory, budget templates, and partner networks—all in one intuitive digital dashboard.
                        </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <h3 className="text-lg sm:text-xl font-semibold text-[#282828] mb-2">
                            Expert-guided relocation
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            Combine software with local insights from our experienced team of relocation advisors and partners on the ground. From school searches and healthcare to neighborhood matches, community networks, and visa pathways—everything is curated for your journey.
                        </p>
                    </div>
                </div>

                {/* Right side Dashboard Image */}
                <div className="lg:col-span-7">
                    <div className="relative rounded-3xl overflow-hidden border border-gray-200/80 shadow-2xl bg-white p-2 sm:p-4">
                        <Image
                            src={systemImg}
                            alt="The Livable Relocation System Portal"
                            className="w-full h-auto rounded-2xl object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default System