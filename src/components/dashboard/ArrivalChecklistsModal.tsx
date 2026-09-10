'use client'

import React, { useState } from 'react'
import { X, Plus, Minus, CheckSquare, Square } from 'lucide-react'

interface ArrivalChecklistsModalProps {
    isOpen: boolean
    onClose: () => void
}

const ArrivalChecklistsModal: React.FC<ArrivalChecklistsModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    // Track open state for each accordion section
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        taxId: true,
        address: true,
        banking: true,
        phone: true,
        transit: true,
        pet: true
    })

    // Track checked items
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

    const toggleSection = (id: string) => {
        setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    const toggleCheck = (id: string, e: React.MouseEvent) => {
        e.stopPropagation()
        setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-8 md:p-12 relative shadow-xl border border-gray-100 max-h-[90vh] overflow-y-auto font-sans text-title">
                {/* Top Header Bar */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-8">
                    <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-title">
                        Arrival Checklist
                    </span>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-black transition-colors p-1 cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Introduction */}
                <div className="mb-10 space-y-4">
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                        Welcome to your new place! Well done on executing an incredible heavy lift to get here.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                        This checklist covers the essential, practical tasks that will anchor your daily life during your first days and weeks in the country. Work through each section at your own pace, check items off as you go, and download a copy using the sidebar link if you'd like one for offline use. Every topic below includes a short overview, step-by-step instructions, official resource links, maps, common questions, and a downloadable PDF.
                    </p>
                </div>

                {/* Accordion Checklist Items */}
                <div className="space-y-6 divide-y divide-gray-100">

                    {/* ITEM 1: Local Tax ID */}
                    <div className="pt-4 first:pt-0">
                        <button
                            onClick={() => toggleSection('taxId')}
                            className="w-full flex items-center justify-between text-left py-2 hover:opacity-80 transition-opacity cursor-pointer group"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    onClick={(e) => toggleCheck('taxId', e)}
                                    className="text-gray-400 hover:text-title transition-colors"
                                >
                                    {checkedItems['taxId'] ? (
                                        <CheckSquare className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Square className="w-5 h-5 text-gray-400" />
                                    )}
                                </span>
                                <span className={`text-base sm:text-lg font-medium text-title ${checkedItems['taxId'] ? 'line-through text-gray-400' : ''}`}>
                                    Local Tax ID
                                </span>
                            </div>
                            <span className="text-gray-400 group-hover:text-title transition-colors">
                                {openSections['taxId'] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </span>
                        </button>

                        {openSections['taxId'] && (
                            <div className="pt-4 pb-6 pl-8 space-y-6 text-xs sm:text-sm text-gray-700 font-normal">
                                <div className="space-y-1">
                                    <h4 className="font-medium text-title">Why you need it</h4>
                                    <p className="leading-relaxed">
                                        A local tax identification number is required to open a bank account, sign a lease, receive a salary, and interact with most government services. Obtaining it early unlocks nearly every other task on this list.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-medium text-title">Step-by-step instructions</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• Gather your passport and entry visa or residency permit.</li>
                                        <li>• Locate your nearest tax authority office using the map below.</li>
                                        <li>• Arrive in person — most offices do not require an appointment.</li>
                                        <li>• Complete the application form provided at the counter.</li>
                                        <li>• Receive your tax ID card or reference number, usually same day.</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-medium text-title">Official government links</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• National Revenue Agency — tax authority portal</li>
                                        <li>• Online pre-registration form (where available)</li>
                                        <li>• ID number lookup and verification tool</li>
                                    </ul>
                                </div>

                                <div className="space-y-1">
                                    <h4 className="font-medium text-title">Office locations & interactive maps</h4>
                                    <p className="leading-relaxed">
                                        Use the embedded map or the agency's office locator to find the branch nearest your registered address.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-medium text-title">Commonly asked questions</h4>
                                    <ul className="space-y-2 pl-1">
                                        <li>• <span className="font-medium text-title">Can I apply online?</span> — Some countries offer partial online registration; most still require an in-person visit for biometrics.</li>
                                        <li>• <span className="font-medium text-title">How long does it take?</span> — Typically 15–30 minutes in office; the number is issued immediately.</li>
                                        <li>• <span className="font-medium text-title">Does it expire?</span> — No, tax IDs are permanent in most jurisdictions.</li>
                                    </ul>
                                </div>

                                <div className="pt-2">
                                    <a href="#" className="text-title underline underline-offset-4 hover:text-primary transition-colors inline-block">
                                        📑 Download Tax ID PDF Guide 📌
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ITEM 2: Register Your Address */}
                    <div className="pt-4">
                        <button
                            onClick={() => toggleSection('address')}
                            className="w-full flex items-center justify-between text-left py-2 hover:opacity-80 transition-opacity cursor-pointer group"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    onClick={(e) => toggleCheck('address', e)}
                                    className="text-gray-400 hover:text-title transition-colors"
                                >
                                    {checkedItems['address'] ? (
                                        <CheckSquare className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Square className="w-5 h-5 text-gray-400" />
                                    )}
                                </span>
                                <span className={`text-base sm:text-lg font-medium text-title ${checkedItems['address'] ? 'line-through text-gray-400' : ''}`}>
                                    Register Your Address
                                </span>
                            </div>
                            <span className="text-gray-400 group-hover:text-title transition-colors">
                                {openSections['address'] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </span>
                        </button>

                        {openSections['address'] && (
                            <div className="pt-4 pb-6 pl-8 space-y-6 text-xs sm:text-sm text-gray-700 font-normal">
                                <div className="space-y-1">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">WHEN REGISTRATION IS REQUIRED</h4>
                                    <p className="leading-relaxed">
                                        Most countries require residents to register their address with the local municipality within 30–90 days of arrival. This is the legal anchor for your residency status and affects mail, voting eligibility, and access to local services.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">STEP-BY-STEP INSTRUCTIONS</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• Obtain a signed rental agreement or proof of ownership from your landlord.</li>
                                        <li>• Complete the address registration form from your municipality's website.</li>
                                        <li>• Visit the local civil registry office with your passport, visa, and lease.</li>
                                        <li>• Submit your documents and receive a registration certificate.</li>
                                        <li>• Update your address with the tax authority using your new certificate.</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">REQUIRED DOCUMENTATION CHECKLIST</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• Valid passport (original + photocopy)</li>
                                        <li>• Residency visa or permit</li>
                                        <li>• Signed rental or ownership agreement</li>
                                        <li>• Completed registration form</li>
                                        <li>• Passport-sized photos (2, if required locally)</li>
                                    </ul>
                                </div>

                                <div className="space-y-1">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">OFFICE LOCATIONS & INTERACTIVE MAPS</h4>
                                    <p className="leading-relaxed">
                                        Find your municipal civil registry office via the national registry locator or your city's official website.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">OFFICIAL MUNICIPAL RESOURCE LINKS</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• National civil registry portal</li>
                                        <li>• Municipal address registration form download</li>
                                        <li>• Residency certificate verification</li>
                                    </ul>
                                </div>

                                <div className="pt-2">
                                    <a href="#" className="text-title underline underline-offset-4 hover:text-primary transition-colors inline-block">
                                        📑 Download Address Registration PDF Guide 📌
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ITEM 3: Set Up Banking */}
                    <div className="pt-4">
                        <button
                            onClick={() => toggleSection('banking')}
                            className="w-full flex items-center justify-between text-left py-2 hover:opacity-80 transition-opacity cursor-pointer group"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    onClick={(e) => toggleCheck('banking', e)}
                                    className="text-gray-400 hover:text-title transition-colors"
                                >
                                    {checkedItems['banking'] ? (
                                        <CheckSquare className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Square className="w-5 h-5 text-gray-400" />
                                    )}
                                </span>
                                <span className={`text-base sm:text-lg font-medium text-title ${checkedItems['banking'] ? 'line-through text-gray-400' : ''}`}>
                                    Set Up Banking
                                </span>
                            </div>
                            <span className="text-gray-400 group-hover:text-title transition-colors">
                                {openSections['banking'] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </span>
                        </button>

                        {openSections['banking'] && (
                            <div className="pt-4 pb-6 pl-8 space-y-6 text-xs sm:text-sm text-gray-700 font-normal">
                                <div className="space-y-2">
                                    <h4 className="font-medium text-title">Livable recommended banks</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• N26 / Wise — excellent for new arrivals, low fees, fast online onboarding</li>
                                        <li>• National savings bank — typically most accessible for residents</li>
                                        <li>• Major retail banks — broader ATM networks and branch access</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-medium text-title">Required identity & income documents</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• Passport (original)</li>
                                        <li>• Local tax ID</li>
                                        <li>• Proof of address (registration certificate or utility bill)</li>
                                        <li>• Employment contract or proof of income (if required)</li>
                                        <li>• Initial deposit amount (varies by bank)</li>
                                    </ul>
                                </div>

                                <div className="space-y-1">
                                    <h4 className="font-medium text-title">Opening your account on the ground</h4>
                                    <p className="leading-relaxed">
                                        Walk into a branch with your documents. Many banks now offer same-day account activation with a temporary card while your permanent card is mailed. Online-first banks like Wise allow remote onboarding before you arrive.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-medium text-title">Official banking links</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• Central bank consumer information portal</li>
                                        <li>• Deposit insurance scheme details</li>
                                        <li>• Currency exchange rate reference</li>
                                    </ul>
                                </div>

                                <div className="pt-2">
                                    <a href="#" className="text-title underline underline-offset-4 hover:text-primary transition-colors inline-block">
                                        📑 Download Banking Setup PDF Guide 📌
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ITEM 4: Activate Your Phone Plan */}
                    <div className="pt-4">
                        <button
                            onClick={() => toggleSection('phone')}
                            className="w-full flex items-center justify-between text-left py-2 hover:opacity-80 transition-opacity cursor-pointer group"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    onClick={(e) => toggleCheck('phone', e)}
                                    className="text-gray-400 hover:text-title transition-colors"
                                >
                                    {checkedItems['phone'] ? (
                                        <CheckSquare className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Square className="w-5 h-5 text-gray-400" />
                                    )}
                                </span>
                                <span className={`text-base sm:text-lg font-medium text-title ${checkedItems['phone'] ? 'line-through text-gray-400' : ''}`}>
                                    Activate Your Phone Plan
                                </span>
                            </div>
                            <span className="text-gray-400 group-hover:text-title transition-colors">
                                {openSections['phone'] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </span>
                        </button>

                        {openSections['phone'] && (
                            <div className="pt-4 pb-6 pl-8 space-y-6 text-xs sm:text-sm text-gray-700 font-normal">
                                <div className="space-y-1">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">ESIM VS. PHYSICAL LOCAL SIM MECHANICS</h4>
                                    <p className="leading-relaxed">
                                        eSIMs let you activate a local plan remotely before or immediately after landing — ideal if your phone is unlocked. Physical SIMs require a carrier store visit but are necessary for older devices. Both offer equivalent coverage on the same network.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">RECOMMENDED LOCAL TELECOM PROVIDERS</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• Provider A — best value prepaid, wide 5G coverage</li>
                                        <li>• Provider B — best for data-heavy users, unlimited plans</li>
                                        <li>• Provider C — best customer service, English-language support</li>
                                    </ul>
                                </div>

                                <div className="space-y-1">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">STORE LOCATOR MAPS</h4>
                                    <p className="leading-relaxed">
                                        Each carrier maintains an interactive store locator on their website. Airport locations typically stock tourist and resident SIMs and can activate immediately.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">TYPICAL ACTIVATION & SETUP PROCESS</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• Present your passport and local tax ID at the carrier store.</li>
                                        <li>• Choose a monthly or prepaid plan.</li>
                                        <li>• Complete the SIM registration form (mandatory in most countries).</li>
                                        <li>• Insert SIM or scan eSIM QR code.</li>
                                        <li>• Confirm data and voice connectivity before leaving the store.</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">OFFICIAL CARRIER RESOURCE LINKS</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• National telecom regulatory authority</li>
                                        <li>• Number portability request form</li>
                                        <li>• Roaming and international calling rates</li>
                                    </ul>
                                </div>

                                <div className="pt-2">
                                    <a href="#" className="text-title underline underline-offset-4 hover:text-primary transition-colors inline-block">
                                        📑 Download Mobile Activation PDF Guide 📌
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ITEM 5: Public Transportation */}
                    <div className="pt-4">
                        <button
                            onClick={() => toggleSection('transit')}
                            className="w-full flex items-center justify-between text-left py-2 hover:opacity-80 transition-opacity cursor-pointer group"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    onClick={(e) => toggleCheck('transit', e)}
                                    className="text-gray-400 hover:text-title transition-colors"
                                >
                                    {checkedItems['transit'] ? (
                                        <CheckSquare className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Square className="w-5 h-5 text-gray-400" />
                                    )}
                                </span>
                                <span className={`text-base sm:text-lg font-medium text-title ${checkedItems['transit'] ? 'line-through text-gray-400' : ''}`}>
                                    Public Transportation
                                </span>
                            </div>
                            <span className="text-gray-400 group-hover:text-title transition-colors">
                                {openSections['transit'] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </span>
                        </button>

                        {openSections['transit'] && (
                            <div className="pt-4 pb-6 pl-8 space-y-6 text-xs sm:text-sm text-gray-700 font-normal">
                                <div className="space-y-1">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">RESIDENT TRANSIT CARDS AND MONTHLY PASSES</h4>
                                    <p className="leading-relaxed">
                                        Most cities offer a monthly resident pass at a significant discount over per-ride pricing. You will need proof of local address and your tax ID to qualify for the resident rate.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">WHERE TO PURCHASE THEM IN THE CITY</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• Main transit authority offices (city center)</li>
                                        <li>• Major metro stations — customer service windows</li>
                                        <li>• Selected post offices and newsstands</li>
                                        <li>• Official transit authority mobile app</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">ESSENTIAL LOCAL TRANSIT MOBILE APPS</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• Official transit authority app — real-time arrivals, route planner</li>
                                        <li>• Citymapper — available in most major cities</li>
                                        <li>• Google Maps — reliable for surface transit routes</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">OFFICIAL PUBLIC TRANSIT RESOURCES</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• Transit authority journey planner</li>
                                        <li>• System map and line guide (PDF)</li>
                                        <li>• Accessibility services and reduced-fare programs</li>
                                    </ul>
                                </div>

                                <div className="pt-2">
                                    <a href="#" className="text-title underline underline-offset-4 hover:text-primary transition-colors inline-block">
                                        📑 Download Transit Navigation PDF Guide 📌
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ITEM 6: Register Your Pet (if applicable) */}
                    <div className="pt-4">
                        <button
                            onClick={() => toggleSection('pet')}
                            className="w-full flex items-center justify-between text-left py-2 hover:opacity-80 transition-opacity cursor-pointer group"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    onClick={(e) => toggleCheck('pet', e)}
                                    className="text-gray-400 hover:text-title transition-colors"
                                >
                                    {checkedItems['pet'] ? (
                                        <CheckSquare className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Square className="w-5 h-5 text-gray-400" />
                                    )}
                                </span>
                                <span className={`text-base sm:text-lg font-medium text-title ${checkedItems['pet'] ? 'line-through text-gray-400' : ''}`}>
                                    Register Your Pet (if applicable)
                                </span>
                            </div>
                            <span className="text-gray-400 group-hover:text-title transition-colors">
                                {openSections['pet'] ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </span>
                        </button>

                        {openSections['pet'] && (
                            <div className="pt-4 pb-6 pl-8 space-y-6 text-xs sm:text-sm text-gray-700 font-normal">
                                <div className="space-y-1">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">LOCAL REGISTRATION REQUIREMENTS</h4>
                                    <p className="leading-relaxed">
                                        Most municipalities require dogs and some cats to be registered within 30 days of arrival or ownership. Registration is tied to your address and requires proof of vaccinations and microchipping.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">REGIONAL REGULATIONS & LEASH LAWS</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• Dogs must be leashed in all public spaces unless in designated off-leash areas.</li>
                                        <li>• Certain breeds may require muzzling — check local breed-specific legislation.</li>
                                        <li>• Parks and beaches often have seasonal pet access restrictions.</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">REQUIRED VETERINARY AND HEALTH DOCUMENTS</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• EU Pet Passport or equivalent health certificate</li>
                                        <li>• Rabies vaccination record (within 12 months)</li>
                                        <li>• Microchip certificate (ISO 11784/11785 standard)</li>
                                        <li>• Parasite treatment record (if crossing borders recently)</li>
                                    </ul>
                                </div>

                                <div className="space-y-1">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">LOCAL VETERINARY NETWORKS AND EMERGENCY RESOURCES</h4>
                                    <p className="leading-relaxed">
                                        Register with a local vet within the first two weeks. Ask for a 24-hour emergency clinic referral — most regular vets maintain a network. International Veterinary Association listings are available online.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider">OFFICIAL MUNICIPALITY LINKS</h4>
                                    <ul className="space-y-1 pl-1">
                                        <li>• Municipal pet registration portal</li>
                                        <li>• Animal control and welfare authority</li>
                                        <li>• Microchip registry lookup</li>
                                    </ul>
                                </div>

                                <div className="pt-2">
                                    <a href="#" className="text-title underline underline-offset-4 hover:text-primary transition-colors inline-block">
                                        📑 Download Pet Registration PDF Guide 📌
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                </div>

                {/* Modal Footer */}
                <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <a href="#" className="text-xs sm:text-sm text-title underline underline-offset-4 hover:text-primary transition-colors font-medium">
                        Download Complete Arrival Guide (PDF) ↓
                    </a>
                    <button
                        onClick={onClose}
                        className="bg-primary hover:bg-primary-hover text-white px-10 py-3 rounded-xl text-base font-semibold transition-all shadow-xs cursor-pointer w-full sm:w-auto"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ArrivalChecklistsModal