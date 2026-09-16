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
        <main className='space-y-24 md:space-y-37.5'>
            <Pricing />
            <Step />
            <FAQ />
        </main>
    )
}
