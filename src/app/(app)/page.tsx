import Hero from '@/components/app/Hero'
import OurStory from '@/components/app/OurStory'
import Places from '@/components/app/Places'
import ScoutingTrip from '@/components/app/ScoutingTrip'
import System from '@/components/app/System'
import TalkWithUs from '@/components/app/TalkWithUs'
import React from 'react'

const page = () => {
    return (
        <div>
            <Hero />
            <ScoutingTrip/>
            <Places/>
            <System/>
            <OurStory/>
            <TalkWithUs/>
        </div>
    )
}

export default page