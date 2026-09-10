'use client'

import { useEffect } from 'react'
import Pricing from '@/components/app/Pricing'
import Step from '@/components/app/Step'
import FAQ from '@/components/app/FAQ'

export default function PricingPage() {
    useEffect(() => {
        if (window.location.hash === '#how-it-works') {
            const timer = setTimeout(() => {
                const el = document.getElementById('how-it-works')
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [])

    return (
        <main>
            {/* Simple Pricing Section ($3,400 Flat Price Card) */}
            <Pricing />

            {/* What's Included / The 3-Step Process Section */}
            <Step />

            {/* FAQ Section */}
            <FAQ />
        </main>
    )
}
