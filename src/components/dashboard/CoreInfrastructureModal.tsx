'use client'

import React from 'react'
import { X, ExternalLink, Mail, MessageSquare } from 'lucide-react'

interface CoreInfrastructureModalProps {
    isOpen: boolean
    onClose: () => void
}

const CoreInfrastructureModal: React.FC<CoreInfrastructureModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    const legalPartners = [
        {
            partnerId: 'PARTNER 01',
            name: '[ Specialist Name ]',
            role: 'Lead Immigration Specialist & Legal Counsel',
            trackRecord: '12+ years representing cross-border relocation clients',
            specialisations: 'Golden Visa, Non-Habitual Resident (NHR), Digital Nomad & Retirement Visas'
        },
        {
            partnerId: 'PARTNER 02',
            name: '[ Specialist Name ]',
            role: 'Lead Immigration Specialist & Legal Counsel',
            trackRecord: '10+ years handling complex relocation cases',
            specialisations: 'Golden Visa, Non-Habitual Resident (NHR), Digital Nomad & Retirement Visas'
        },
        {
            partnerId: 'PARTNER 03',
            name: '[ Specialist Name ]',
            role: 'Lead Immigration Specialist & Legal Counsel',
            trackRecord: '15+ years handling complex international cases',
            specialisations: 'Golden Visa, Non-Habitual Resident (NHR), Digital Nomad & Retirement Visas'
        }
    ]

    const taxAdvisors = [
        {
            partnerId: 'PARTNER 01',
            name: '[ Advisor Name ]',
            role: 'Senior Cross-Border Tax Strategist',
            trackRecord: 'Ex-Big Four tax strategist, 14 years balancing US/Iberian tax treaties',
            specialisations: 'Foreign Sourced Income, Asset Structuring, NHR Tax Law Compliance'
        },
        {
            partnerId: 'PARTNER 02',
            name: '[ Advisor Name ]',
            role: 'Senior Cross-Border Tax Strategist',
            trackRecord: 'Ex-Big Four tax strategist, 14 years balancing US/Iberian tax treaties',
            specialisations: 'Foreign Sourced Income, Asset Structuring, NHR Tax Law Compliance'
        }
    ]

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-4xl w-full p-8 md:p-12 relative shadow-xl border border-gray-100 max-h-[90vh] overflow-y-auto font-sans text-title">
                {/* Top Header bar */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Core Infrastructure & Verified Networks
                    </span>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-black transition-colors p-2 cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Main Heading & Intro */}
                <div className="mb-10">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-title mb-4">
                        Core Infrastructure & Verified Networks
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                        We don't maintain a public marketplace, and we don't display open directories for random providers. The international relocation market is saturated with options, but our service is about filtering out the noise. This module contains the exact professionals, legal specialists, and transit mechanics we would trust with our own families, friends, and relocations. We have already done the vetting—getting to know these individuals so you don't have to guess who to trust.
                    </p>
                </div>

                {/* SECTION 1: Legal & Immigration */}
                <div className="mb-12 border-t border-gray-100 pt-8">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-2">
                        LIVABLE PREFERRED PARTNERS: LEGAL & IMMIGRATION NETWORK
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-title mb-8">
                        Verified Legal & Immigration Network
                    </h3>

                    <div className="space-y-10">
                        {legalPartners.map((item, idx) => (
                            <div key={idx} className="border-b border-gray-100 pb-8 last:border-none">
                                <span className="text-xs font-semibold text-gray-400 uppercase block mb-1">
                                    {item.partnerId}
                                </span>
                                <h4 className="text-lg font-semibold text-title mb-3">
                                    {item.name}
                                </h4>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-gray-600 font-light mb-4">
                                    <div>
                                        <span className="font-semibold text-title block">Role:</span>
                                        {item.role}
                                    </div>
                                    <div>
                                        <span className="font-semibold text-title block">Track Record:</span>
                                        {item.trackRecord}
                                    </div>
                                    <div>
                                        <span className="font-semibold text-title block">Specialisations:</span>
                                        {item.specialisations}
                                    </div>
                                </div>

                                <div className="space-y-3 text-xs sm:text-sm text-gray-600 font-light mb-4">
                                    <div>
                                        <span className="font-semibold text-title uppercase block text-xs mb-1">
                                            WHY WE RECOMMEND THEM:
                                        </span>
                                        <p>(Co-founder text block: Write a 1-paragraph detailing their responsiveness, specialized edge, or personal history with the Livable team)</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <span className="font-semibold text-title uppercase block text-xs mb-1">
                                            LIVABLE PARTNER NOTE:
                                        </span>
                                        <p className="italic text-gray-700">
                                            "This is a Livable Preferred Partner. We have already briefed them on your relocation mechanics. Preferred, priority scheduling and transparent fee structures are automatically active for all select Livable clients."
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <span className="font-semibold text-title uppercase block text-xs mb-2">
                                        DIRECT CONTACT VECTORS:
                                    </span>
                                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-title">
                                        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors flex items-center gap-1">
                                            Website Link <ExternalLink className="w-3 h-3" />
                                        </a>
                                        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors flex items-center gap-1">
                                            Direct Email Link <Mail className="w-3 h-3" />
                                        </a>
                                        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors flex items-center gap-1">
                                            Verified WhatsApp Line <MessageSquare className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECTION 2: Tax & Wealth Advisors */}
                <div className="mb-12 border-t border-gray-100 pt-8">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-2">
                        LIVABLE PREFERRED PARTNERS: TAX & WEALTH ADVISORS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-title mb-8">
                        Certified Tax & Wealth Advisors
                    </h3>

                    <div className="space-y-10">
                        {taxAdvisors.map((item, idx) => (
                            <div key={idx} className="border-b border-gray-100 pb-8 last:border-none">
                                <span className="text-xs font-semibold text-gray-400 uppercase block mb-1">
                                    {item.partnerId}
                                </span>
                                <h4 className="text-lg font-semibold text-title mb-3">
                                    {item.name}
                                </h4>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-gray-600 font-light mb-4">
                                    <div>
                                        <span className="font-semibold text-title block">Role:</span>
                                        {item.role}
                                    </div>
                                    <div>
                                        <span className="font-semibold text-title block">Track Record:</span>
                                        {item.trackRecord}
                                    </div>
                                    <div>
                                        <span className="font-semibold text-title block">Specialisations:</span>
                                        {item.specialisations}
                                    </div>
                                </div>

                                <div className="text-xs sm:text-sm text-gray-600 font-light mb-4">
                                    <span className="font-semibold text-title uppercase block text-xs mb-1">
                                        WHY WE RECOMMEND THEM:
                                    </span>
                                    <p>(Co-founder text block: Write a 1-paragraph text block here)</p>
                                </div>

                                <div>
                                    <span className="font-semibold text-title uppercase block text-xs mb-2">
                                        DIRECT CONTACT VECTORS:
                                    </span>
                                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-title">
                                        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors flex items-center gap-1">
                                            Website Link <ExternalLink className="w-3 h-3" />
                                        </a>
                                        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors flex items-center gap-1">
                                            Direct Email Link <Mail className="w-3 h-3" />
                                        </a>
                                        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors flex items-center gap-1">
                                            Verified WhatsApp Line <MessageSquare className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECTION 3: Healthcare Solutions */}
                <div className="mb-12 border-t border-gray-100 pt-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-title mb-4">
                        Integrated Healthcare Solutions
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                        Comprehensive private insurance networks, hospital partnerships, and English-speaking physician directory for your relocation area.
                    </p>
                </div>

                {/* SECTION 4: Pet Relocation */}
                <div className="border-t border-gray-100 pt-8 mb-10">
                    <h3 className="text-xl sm:text-2xl font-semibold text-title mb-4">
                        Certified Pet Relocation Logistics
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6">
                        Co-founder Elisabeth has personally brought dogs across seven international borders, including move into Spain. We know exactly how exhausting and stressful this specific transit layer can be. You try to research it blindly, so we've vetted the premier specialized air handlers in Lisbon.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-4 mb-6 text-xs sm:text-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-gray-200 pb-3">
                            <span className="font-semibold text-title">Recommended Airline:</span>
                            <span className="text-gray-700">[ Airline Name ]</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-gray-200 pb-3">
                            <span className="font-semibold text-title">Carrier Specifications:</span>
                            <span className="text-gray-700">[ Approved Crate Dimensions & Model ]</span>
                        </div>
                        <div>
                            <span className="font-semibold text-title uppercase block mb-1">THE BLUEPRINT:</span>
                            <a href="#" className="text-primary font-medium underline underline-offset-4 block mb-1">
                                Download Lisbon Airport Pet Inspection Protocol PDF Vector ↗
                            </a>
                            <p className="text-gray-500 font-light text-xs">
                                Pre-cleared routes, Terminal maps for Pet Relief Areas, and Airside Customs Fast-Track.
                            </p>
                        </div>
                        <div className="pt-2">
                            <span className="font-semibold text-title uppercase block mb-1">ON-THE-GROUND AIRPORT NAVIGATION:</span>
                            <a href="#" className="text-primary font-medium underline underline-offset-4 block mb-1">
                                View Lisbon (LIS) Pet Repatriation Terminal Location Map ↗
                            </a>
                            <p className="text-gray-500 font-light text-xs">
                                When you arrive, our dedicated pet escort will meet you outside baggage claim to coordinate your pets customs release and fast-track transport.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-6 border-t border-gray-100 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-primary hover:bg-primary-hover text-white px-10 py-3.5 rounded-2xl text-lg font-semibold transition-all shadow-sm cursor-pointer"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CoreInfrastructureModal