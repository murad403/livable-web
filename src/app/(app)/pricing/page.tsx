'use client'
import Pricing from '@/components/app/Pricing'
import Step from '@/components/app/Step'
import FAQ from '@/components/app/FAQ'

export default function PricingPage() {
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
