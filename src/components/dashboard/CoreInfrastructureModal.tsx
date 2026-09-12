'use client'
import React from 'react'
import { X } from 'lucide-react'

interface CoreInfrastructureModalProps {
    isOpen: boolean
    onClose: () => void
}

const CoreInfrastructureModal: React.FC<CoreInfrastructureModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    const legalPartners = [
        {
            id: 'PARTNER 01',
            name: '[ Specialist Name ]',
            role: 'Lead Immigration Specialist & Legal Counsel',
            trackRecord: '25+ years coordinating complex international relocations.',
            specializations: 'Non-Lucrative Visas, Family Unification, Digital Nomads, Retiree Pathways.',
            whyRecommend: '[Co-founder text block: Write one short paragraph detailing their responsiveness, specialized edge, or personal history with the Livable team.]'
        },
        {
            id: 'PARTNER 02',
            name: '[ Specialist Name ]',
            role: 'Lead Immigration Specialist & Legal Counsel',
            trackRecord: '25+ years coordinating complex international relocations.',
            specializations: 'Non-Lucrative Visas, Family Unification, Digital Nomads, Retiree Pathways.',
            whyRecommend: '[Co-founder text block: Write one short paragraph detailing their responsiveness, specialized edge, or personal history with the Livable team.]'
        },
        {
            id: 'PARTNER 03',
            name: '[ Specialist Name ]',
            role: 'Lead Immigration Specialist & Legal Counsel',
            trackRecord: '25+ years coordinating complex international relocations.',
            specializations: 'Non-Lucrative Visas, Family Unification, Digital Nomads, Retiree Pathways.',
            whyRecommend: '[Co-founder text block: Write one short paragraph detailing their responsiveness, specialized edge, or personal history with the Livable team.]'
        }
    ]

    const taxAdvisors = [
        {
            id: 'PARTNER 04',
            name: '[ Advisor Name ]',
            role: 'Senior Cross-Border Tax Strategist',
            trackRecord: '[Co-founder to fill: e.g., 15 years balancing US/Iberian tax treaties]',
            specializations: 'Foreign Earned Income, Asset Structuring, NHR/Beckham Law compliance.',
            whyRecommend: '[Co-founder text block: Write one short paragraph here.]'
        },
        {
            id: 'PARTNER 05',
            name: '[ Advisor Name ]',
            role: 'Senior Cross-Border Tax Strategist',
            trackRecord: '[Co-founder to fill: e.g., 15 years balancing US/Iberian tax treaties]',
            specializations: 'Foreign Earned Income, Asset Structuring, NHR/Beckham Law compliance.',
            whyRecommend: '[Co-founder text block: Write one short paragraph here.]'
        }
    ]

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-8 md:p-12 relative shadow-xl border border-gray-100 max-h-[90vh] overflow-y-auto font-sans text-title">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-8">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-title">
                        Core Infrastructure & Verified Networks
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-black transition-colors p-1 cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Title & Introduction */}
                <div className="mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-title mb-4">
                        Core Infrastructure & Verified Networks
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                        We don't offer a public marketplace, and we don't display open directories of random brokers. The international relocation market is saturated with options, but true service is about filtering out the noise. This module contains the exact professionals, legal specialists, and transit mechanics we would trust with our own families, friends, and relocations. We have already spent the time getting to know these individuals so you don't have to guess who to trust.
                    </p>
                </div>

                {/* SECTION 1: Legal & Immigration Network */}
                <div className="mb-12">
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                        LIVABLE PREFERRED PARTNERS // PRE-VETTED AND NOTIFIED
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-title mb-8 pb-3 border-b border-gray-100">
                        Verified Legal & Immigration Network
                    </h3>

                    <div className="space-y-12">
                        {legalPartners.map((item) => (
                            <div key={item.id} className="space-y-4">
                                <div>
                                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                                        {item.id}
                                    </span>
                                    <h4 className="text-lg font-bold text-title">
                                        {item.name}
                                    </h4>
                                </div>

                                <div className="space-y-2 text-xs sm:text-sm max-w-2xl">
                                    <div className="grid grid-cols-[120px_1fr] items-baseline gap-2">
                                        <span className="font-semibold text-title">Role</span>
                                        <span className="text-gray-700">{item.role}</span>
                                    </div>
                                    <div className="grid grid-cols-[120px_1fr] items-baseline gap-2">
                                        <span className="font-semibold text-title">Track Record</span>
                                        <span className="text-gray-700">{item.trackRecord}</span>
                                    </div>
                                    <div className="grid grid-cols-[120px_1fr] items-baseline gap-2">
                                        <span className="font-semibold text-title">Specializations</span>
                                        <span className="text-gray-700">{item.specializations}</span>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider block mb-2">
                                        WHY WE RECOMMEND THEM
                                    </span>
                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                                        {item.whyRecommend}
                                    </p>
                                </div>

                                <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-100 space-y-1 my-3">
                                    <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider block">
                                        LIVABLE™ PARTNERSHIP NOTE
                                    </span>
                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                                        This is a Livable Preferred Partner. We have already briefed their team on our relocation mechanics. Preferred, priority scheduling and transparent framework structures are unlocked automatically for all active Livable™ clients.
                                    </p>
                                </div>

                                {/* <div>
                                    <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider block mb-2">
                                        DIRECT CONTACT VECTORS
                                    </span>
                                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-title">
                                        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors">
                                            Website Link ↗
                                        </a>
                                        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors">
                                            Direct Email Line
                                        </a>
                                        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors">
                                            Verified WhatsApp Line
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECTION 2: Tax & Wealth Advisors */}
                <div className="mb-12">
                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                        LIVABLE PREFERRED PARTNERS // CROSS-BORDER SPECIALISTS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-title mb-8 pb-3 border-b border-gray-100">
                        Certified Tax & Wealth Advisors
                    </h3>

                    <div className="space-y-12">
                        {taxAdvisors.map((item) => (
                            <div key={item.id} className="space-y-4">
                                <div>
                                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                                        {item.id}
                                    </span>
                                    <h4 className="text-lg font-bold text-title">
                                        {item.name}
                                    </h4>
                                </div>

                                <div className="space-y-2 text-xs sm:text-sm max-w-2xl">
                                    <div className="grid grid-cols-[120px_1fr] items-baseline gap-2">
                                        <span className="font-semibold text-title">Role</span>
                                        <span className="text-gray-700">{item.role}</span>
                                    </div>
                                    <div className="grid grid-cols-[120px_1fr] items-baseline gap-2">
                                        <span className="font-semibold text-title">Track Record</span>
                                        <span className="text-gray-700">{item.trackRecord}</span>
                                    </div>
                                    <div className="grid grid-cols-[120px_1fr] items-baseline gap-2">
                                        <span className="font-semibold text-title">Specializations</span>
                                        <span className="text-gray-700">{item.specializations}</span>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider block mb-2">
                                        WHY WE RECOMMEND THEM
                                    </span>
                                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                                        {item.whyRecommend}
                                    </p>
                                </div>

                                {/* <div>
                                    <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider block mb-2">
                                        DIRECT CONTACT VECTORS
                                    </span>
                                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-title">
                                        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors">
                                            Website Link ↗
                                        </a>
                                        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors">
                                            Direct Email Line
                                        </a>
                                        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors">
                                            Verified WhatsApp Line
                                        </a>
                                    </div>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECTION 3: Integrated Healthcare Solutions */}
                <div className="mb-12 border-b border-gray-100 pb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-title mb-4">
                        Integrated Healthcare Solutions
                    </h3>
                </div>

                {/* SECTION 4: Pet Relocation Logistics */}
                <div className="mb-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-title mb-4">
                        Certified Pet Relocation Logistics
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal mb-8">
                        [Co-founder Elizabeth has personally brought dogs across seven international borders, including twice into Spain. We know exactly how exhausting and stressful this specific transit layer can be if you try to research it blindly. She has filtered the rules down to the absolute essentials.]
                    </p>

                    <div className="space-y-6">
                        <div className="space-y-3 text-xs sm:text-sm pt-2 border-t border-b border-gray-100 py-4">
                            <div className="grid grid-cols-[180px_1fr] items-baseline gap-2">
                                <span className="font-semibold text-title">Recommended Airline</span>
                                <span className="text-gray-700">[ Air Carrier Name ]</span>
                            </div>
                            <div className="grid grid-cols-[180px_1fr] items-baseline gap-2">
                                <span className="font-semibold text-title">Carrier Specifications</span>
                                <span className="text-gray-700">[ Approved Carrier Dimensions & Model ]</span>
                            </div>
                        </div>

                        {/* <div className="space-y-1">
                            <span className="font-semibold text-title block text-xs sm:text-sm">The Blueprint:</span>
                            <a href="#" className="text-xs sm:text-sm font-normal text-title underline underline-offset-4 hover:text-primary transition-colors inline-block">
                                Download Step-by-Step International Pet Transit PDF Manual 📌
                            </a>
                            <p className="text-xs text-gray-600 italic font-normal">
                                (Includes exact timing logs, health certificate thresholds, and regional entry forms)
                            </p>
                        </div>

                        <div className="space-y-2 pt-2">
                            <span className="font-semibold text-title block text-xs sm:text-sm">On-the-Ground Airport Navigation:</span>
                            <div className="space-y-1">
                                <a href="#" className="text-xs sm:text-sm font-normal text-title underline underline-offset-4 hover:text-primary transition-colors block">
                                    View Lisbon (LIS) Pet Registration Terminal Location Map ↗
                                </a>
                                <a href="#" className="text-xs sm:text-sm font-normal text-title underline underline-offset-4 hover:text-primary transition-colors block">
                                    View Madrid (MAD) Pet Registration Terminal Location Map ↗
                                </a>
                            </div>
                            <p className="text-xs text-gray-600 italic font-normal pt-1">
                                (A simple layout map showing exactly where to walk after baggage claim to complete your official customs check-in without terminal confusion.)
                            </p>
                        </div> */}
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-6 border-t border-gray-100 flex justify-start">
                    <button
                        onClick={onClose}
                        className="bg-primary hover:bg-primary-hover text-white px-10 py-3 rounded-xl text-base font-semibold transition-all shadow-xs cursor-pointer"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CoreInfrastructureModal
