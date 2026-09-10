'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqItems = [
    {
        id: 'faq-1',
        question: "What if I don't feel ready for this?",
        answer:
            "Wherever you are in the process is perfect. Some clients come to us after years of independent research, while others have only recently started thinking about moving. What matters isn't how much you've already read—it's having a clear, structured system from this point forward."
    },
    {
        id: 'faq-2',
        question: 'Why is the scouting trip only 3 days?',
        answer:
            'Three days is the optimal window to immerse yourself without fatigue. We front-load the preparation so every hour of your 3 days is focused, high-value, and tailored to your priorities.'
    },
    {
        id: 'faq-3',
        question: 'Can I get the dashboard and tools without booking a scouting trip?',
        answer:
            'The dashboard and tools are integrated into the full Livable Relocation System to ensure you get the maximum value from both software and hands-on guidance.'
    },
    {
        id: 'faq-4',
        question: 'Are visa, housing, or tax processing services included?',
        answer:
            'While direct legal filing fees are paid to local authorities or lawyers, our system provides direct consultations, vetting, and step-by-step guidance with our trusted legal, real estate, and tax partners.'
    },
    {
        id: 'faq-5',
        question: 'Can I stay longer after my scouting trip concludes?',
        answer:
            'Yes! Many clients choose to extend their stay in Spain or Portugal to explore on their own using the custom neighborhood maps and recommendations provided in their dashboard.'
    }
]

const FAQ = () => {
    const [openId, setOpenId] = useState<string | null>('faq-1')

    const toggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id))
    }

    return (
        <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto text-title font-sans">
            {/* Top Left Label */}
            <span className="text-xs sm:text-sm font-semibold text-title uppercase tracking-widest block mb-8">
                FAQ
            </span>

            {/* Accordion List */}
            <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
                {faqItems.map((item) => {
                    const isOpen = openId === item.id
                    return (
                        <div key={item.id} className="py-6">
                            <button
                                onClick={() => toggle(item.id)}
                                className="w-full flex items-center justify-between text-left group cursor-pointer"
                            >
                                <h3 className="text-lg md:text-xl font-medium text-title group-hover:text-primary transition-colors">
                                    {item.question}
                                </h3>
                                <span className="text-gray-400 group-hover:text-title transition-colors ml-4 shrink-0">
                                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>

                            {isOpen && (
                                <p className="mt-3 text-sm text-gray-600 leading-relaxed font-light max-w-4xl animate-fadeIn">
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default FAQ