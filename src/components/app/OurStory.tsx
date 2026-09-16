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
        <section className="px-6 sm:px-12 max-w-[1728px] mx-auto text-center md:space-y-20 space-y-10">
            {/* Label */}
            <p className="font-medium text-2xl md:text-[34px] text-title text-left">
                Our Story
            </p>

            {/* Headline */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12.5'>
                <h2 className="md:text-[58px] text-left text-4xl font-medium text-title tracking-tighter">
                    We built the relocation company we wished had existed when we moved.
                </h2>

                {/* Paragraphs */}
                <div className="text-2xl md:text-[32px] text-title md:space-y-12.5 space-y-8 text-left">
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
        </section>
    )
}

export default OurStory