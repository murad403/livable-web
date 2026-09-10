'use client'
import React, { useState } from 'react'
import Hero from '@/components/app/Hero'
import ScoutingTrip from '@/components/app/ScoutingTrip'
import Places from '@/components/app/Places'
import System from '@/components/app/System'
import OurStory from '@/components/app/OurStory'
import TalkWithUs from '@/components/app/TalkWithUs'
import DetailsModal, { ModalData } from '@/components/app/DetailsModal'

export default function Page() {
    const [modalData, setModalData] = useState<ModalData | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [preselectedCity, setPreselectedCity] = useState<string | undefined>()

    const handleOpenModal = (data: ModalData) => {
        setModalData(data)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleSelectAndContinue = (cityTitle: string) => {
        setPreselectedCity(cityTitle)
        setIsModalOpen(false)
        setTimeout(() => {
            const el = document.getElementById('talk-with-us')
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100)
    }

    const handleScrollToForm = () => {
        const el = document.getElementById('talk-with-us')
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <main className="min-h-screen bg-white text-title font-sans selection:bg-primary selection:text-white">
            {/* Hero Section */}
            <Hero onSelectCard={handleOpenModal} />

            {/* Scouting Trip Section */}
            <ScoutingTrip onSelectCard={handleOpenModal} />

            {/* Locations Section */}
            <Places onSelectLocation={handleOpenModal} />

            {/* System Section */}
            <System />

            {/* Our Story Section */}
            <OurStory onTalkClick={handleScrollToForm} />

            {/* Talk With Us Form Section */}
            <TalkWithUs preselectedCity={preselectedCity} />

            {/* Interactive Details Modal */}
            <DetailsModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                data={modalData}
                onSelectAndContinue={handleSelectAndContinue}
            />
        </main>
    )
}