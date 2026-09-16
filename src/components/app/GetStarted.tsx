"use client"
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const GetStarted = () => {
    const router = useRouter();
    return (
        <section id="get-started" className="scroll-mt-24 px-6 sm:px-12 max-w-[1728px] mx-auto text-center md:space-y-20 space-y-10">
            {/* Label */}
            <p className="font-medium text-2xl md:text-[34px] text-title text-left">
                Get Started
            </p>

            {/* Headline */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12.5'>
                <div className='md:space-y-20 space-y-10'>
                    <h2 className="md:text-[58px] text-left text-4xl font-medium text-title tracking-tighter">
                        Build your future life in Europe.
                    </h2>
                    <div className='flex items-center justify-center'>
                        <Button onClick={() => router.push("/talk-with-us")}>
                            Book your introductory call →
                        </Button>
                    </div>
                </div>
                {/* Paragraphs */}
                <div className="text-2xl md:text-[32px] text-title text-left">
                    <p>
                        Before you book a scouting trip, we connect for a 20-minute introductory call to review your target dates and clear relocation priorities. We answer your exact questions, map your initial timeline, and get your dashboard configuration started right away. Making an intentional move is an exciting, smart decision—we're looking forward to working with you.
                    </p>
                </div>
            </div>
        </section >
    )
}

export default GetStarted