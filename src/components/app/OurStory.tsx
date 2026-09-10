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
        <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto text-center">
            {/* Label */}
            <p className="text-xs sm:text-sm font-semibold text-title text-start uppercase tracking-widest block mb-6">
                Our Story
            </p>

            {/* Headline */}
            <div className='max-w-5xl mx-auto'>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-title tracking-tight mb-8 leading-tight">
                    We built the relocation company we wished had existed when we moved
                </h2>

                {/* Paragraphs */}
                <div className="space-y-6 text-title text-base sm:text-lg leading-relaxed font-light">
                    <p>
                         Livable began when a forensic anthropologist and a systems designer discovered they had both spent their careers solving the exact same problem: helping people make sound decisions in unfamiliar environments.
                    </p>
                    <p>
                        Between us, we have moved across five continents—navigating relocations with pets, careers, families, and changing priorities. After years of helping individuals and corporate clients manage their own transitions, we built Livable to create a clearer, more organized path for one of life’s biggest decisions.
                    </p>
                    <p className="font-normal text-title">
                        We believe that finding a better-fit life unlocks your true energy for the work, relationships, and life you care about.
                    </p>
                </div>
            </div>

            {/* Red Pill Button */}
            <div className="mt-10">
                <button
                    onClick={handleScrollToForm}
                    className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full text-base font-medium transition-all transform hover:scale-105 shadow-md cursor-pointer"
                >
                    Book your introductory call →
                </button>
            </div>
        </section>
    )
}

export default OurStory