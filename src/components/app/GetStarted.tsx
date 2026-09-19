"use client"
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const GetStarted = () => {
    const router = useRouter();
    return (
        <section id="get-started" className="scroll-mt-24 px-4 sm:px-8 md:px-12 max-w-[1728px] mx-auto text-center md:space-y-20 space-y-8 sm:space-y-12">
            {/* Label */}
            <p className="font-medium text-lg sm:text-2xl md:text-[34px] text-title text-left">
                Get Started
            </p>

            {/* Headline */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12.5 items-center">
                <div className="space-y-6 sm:space-y-10 md:space-y-16 text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] xl:text-[58px] font-medium text-title tracking-tight leading-tight">
                        Build your future life in Europe.
                    </h2>
                    <div className="flex items-center justify-start">
                        <Button onClick={() => router.push("/talk-with-us")}>
                            Book your introductory call →
                        </Button>
                    </div>
                </div>
                {/* Paragraphs */}
                <div className="text-base sm:text-xl md:text-2xl lg:text-[28px] xl:text-[32px] text-title text-left leading-relaxed">
                    <p>
                        Before you book a scouting trip, we connect for a 20-minute introductory call to review your target dates and clear relocation priorities. We answer your exact questions, map your initial timeline, and get your dashboard configuration started right away. Making an intentional move is an exciting, smart decision—we're looking forward to working with you.
                    </p>
                </div>
            </div>
        </section >
    )
}

export default GetStarted