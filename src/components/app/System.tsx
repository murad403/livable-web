import Image from 'next/image'
import systemImg from '@/assets/system.png'

const systems = [
    {
        title: "Pre-Scouting",
        description: "We map your lifestyle, budget, and motivations to pick the right neighborhoods and brief your real estate and culture experts."
    },
    {
        title: "The Scouting Trip",
        description: "Spend three structured days with local experts experiencing the neighborhoods, real estate options, and local culture firsthand."
    },
    {
        title: "Post-Trip to Arrival",
        description: "Your dashboard unlocks a custom relocation blueprint, providing a complete moving checklist, setup guide, and vetted local partners."
    }
]

const System = () => {
    return (
        <section className="px-6 sm:px-12 max-w-[1728px] mx-auto md:space-y-20 space-y-10">
            {/* Top Label */}
            <div className='space-y-4 md:space-y-8'>
                <p className="font-medium text-2xl md:text-[34px] text-title text-left">
                    The System
                </p>
                {/* Headline */}
                <h2 className="md:text-[58px] text-4xl font-medium text-title tracking-tighter">
                    The Livable™ Relocation System
                </h2>
            </div>

            {/* Content 2 columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12.5 items-center">
                {/* Left side text blocks */}
                <div className="lg:col-span-1 space-y-10 md:space-y-16">
                    {
                        systems.map((system, idx) => (
                            <div key={idx} className="text-title space-y-4">
                                <h3 className="text-3xl md:text-[36px] font-medium tracking-[1px] ">
                                    {system.title}
                                </h3>
                                <p className="text-2xl md:text-3xl tracking-[1px] leading-[150%]">
                                    {system.description}
                                </p>
                            </div>
                        ))
                    }
                </div>

                {/* Right side Dashboard Image */}
                <div className="lg:col-span-1">
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