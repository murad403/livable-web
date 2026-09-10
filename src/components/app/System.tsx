'use client'
import Image from 'next/image'
import systemImg from '@/assets/system.png'

const System = () => {
    return (
        <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
            {/* Top Label */}
            <span className="text-xs sm:text-sm font-semibold text-title uppercase tracking-widest block mb-6">
                The System
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-title tracking-tight mb-12">
                The Livable<span className="text-xl align-super ml-0.5 font-normal">™</span> Relocation System
            </h2>

            {/* Content 2 columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left side text blocks */}
                <div className="lg:col-span-5 space-y-10 md:space-y-12">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-title mb-2">
                            Pre-Scouting
                        </h3>
                        <p className="text-base md:text-lg text-title leading-relaxed">
                            We coordinate your parameters and goals in a single workspace. This data briefs your on-site experts to custom-build your walking routes before you fly.
                        </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <h3 className="text-xl md:text-2xl font-semibold text-title mb-2">
                            The Scouting Trip
                        </h3>
                        <p className="text-base md:text-lg text-title leading-relaxed">
                            Most importantly, it hands you your localized micro-social blueprint: the neighborhood routines, community networks, and informal spaces you need to integrate and feel at home from week one.
                        </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <h3 className="text-xl md:text-2xl font-semibold text-title mb-2">
                            Post-Trip to Arrival
                        </h3>
                        <p className="text-base md:text-lg text-title leading-relaxed">
                            The dashboard instantly unlocks your physical relocation blueprint, delivering your comprehensive moving checklist, a detailed setup guide, and a downselected list of essential local partners. Most importantly, it hands you your localized micro-social blueprint: the neighborhood routines, community networks, and informal spaces you need to integrate and feel at home from week one.
                        </p>
                    </div>
                </div>

                {/* Right side Dashboard Image */}
                <div className="lg:col-span-7">
                    <Image
                        src={systemImg}
                        alt="The Livable Relocation System Portal"
                        className="w-full h-auto rounded-2xl object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default System