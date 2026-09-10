'use client'

import React from 'react'

interface OurStoryProps {
    onTalkClick?: () => void
}

const OurStory: React.FC<OurStoryProps> = ({ onTalkClick }) => {
    const handleScrollToForm = () => {
        if (onTalkClick) {
            onTalkClick()
        } else {
            const el = document.getElementById('talk-with-us')
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto text-center">
            {/* Label */}
            <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest block mb-4">
                Our Story
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#282828] tracking-tight mb-8 leading-tight">
                We built the relocation company we wished had existed when we moved
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-light">
                <p>
                    Founded by expats who navigated the maze of moving abroad themselves, we built Livable to provide the structure, clarity, and hands-on guidance we needed when making our own relocation decisions.
                </p>
                <p>
                    Our team combines local market knowledge with deep personal experience moving across borders. We're here to make your move to Spain or Portugal seamless, enjoyable, and free of costly mistakes.
                </p>
                <p className="font-normal text-[#282828]">
                    We believe moving abroad should be a joyful transformation, not a stressful ordeal.
                </p>
            </div>

            {/* Red Pill Button */}
            <div className="mt-10">
                <button
                    onClick={handleScrollToForm}
                    className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full text-base font-medium transition-all transform hover:scale-105 shadow-md cursor-pointer"
                >
                    Get started
                </button>
            </div>
        </section>
    )
}

export default OurStory