'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Lock, LogOut } from 'lucide-react'
import { toast } from 'sonner'
import OrientationModal from '@/components/dashboard/OrientationModal'
import FinancialProfileModal from '@/components/dashboard/FinancialProfileModal'
import LifestyleAlignmentModal from '@/components/dashboard/LifestyleAlignmentModal'
import ItineraryModal from '@/components/dashboard/ItineraryModal'
import TravelPreparationModal from '@/components/dashboard/TravelPreparationModal'
import GuidedDiscoveryModal from '@/components/dashboard/GuidedDiscoveryModal'
import CoreInfrastructureModal from '@/components/dashboard/CoreInfrastructureModal'
import ArrivalChecklistsModal from '@/components/dashboard/ArrivalChecklistsModal'
import MicroSocialBlueprintModal from '@/components/dashboard/MicroSocialBlueprintModal'
import DetailsModal, { ModalData } from '@/components/app/DetailsModal'
import ChangePasswordModal from '@/components/shared/ChangePasswordModal'
import { useGetMyTripsQuery } from '@/redux/features/app/app.api'
import { removeToken } from '@/utils/auth'
import lisbonImg from '@/assets/place1.jpg'
import mapImg from '@/assets/map.png'

const ALL_STEPS = [
    'orientation',
    'financial',
    'lifestyle',
    'itinerary',
    'travel',
    'guided',
    'core',
    'arrival',
    'social'
];

export default function DashboardPage() {
    const router = useRouter()
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [locationModalOpen, setLocationModalOpen] = useState(false);
    const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false);
    const [completedSteps, setCompletedSteps] = useState<string[]>([]);

    const { data: tripsData, isLoading: isTripsLoading } = useGetMyTripsQuery();
    const trip = tripsData?.trips?.[0];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('livable_completed_steps');
            if (saved) {
                try {
                    setCompletedSteps(JSON.parse(saved));
                } catch (e) {
                    console.error('Failed to parse completed steps from localStorage', e);
                }
            }
        }
    }, []);

    const markStepCompleted = (stepId: string) => {
        setCompletedSteps((prev) => {
            if (prev.includes(stepId)) return prev;
            const updated = [...prev, stepId];
            if (typeof window !== 'undefined') {
                localStorage.setItem('livable_completed_steps', JSON.stringify(updated));
            }
            return updated;
        });
    };

    const handleCloseActiveModal = () => {
        if (activeModal) {
            markStepCompleted(activeModal);
            setActiveModal(null);
        }
    };

    const isStepUnlocked = (stepId: string) => {
        const index = ALL_STEPS.indexOf(stepId);
        if (index <= 0) return true;
        const prevStep = ALL_STEPS[index - 1];
        return completedSteps.includes(stepId) || completedSteps.includes(prevStep);
    };

    const handleStepClick = (stepId: string) => {
        if (!isStepUnlocked(stepId)) {
            toast.error('Please complete the previous step first');
            return;
        }
        setActiveModal(stepId);
    };

    const step1Steps = ['orientation', 'financial', 'lifestyle'];
    const step2Steps = ['itinerary', 'travel', 'guided'];
    const step3Steps = ['core', 'arrival', 'social'];

    const step1CompletedCount = step1Steps.filter((s) => completedSteps.includes(s)).length;
    const step2CompletedCount = step2Steps.filter((s) => completedSteps.includes(s)).length;
    const step3CompletedCount = step3Steps.filter((s) => completedSteps.includes(s)).length;

    const handleLogout = async () => {
        await removeToken();
        toast.success('Logged out successfully');
        router.push('/');
    }

    const lisbonData: ModalData = {
        title: trip?.city ? `${trip.city}, Portugal` : 'Lisbon, Portugal',
        location: trip?.city ? `${trip.city}, Portugal` : 'Lisbon, Portugal',
        image: lisbonImg,
        description: 'Portugal’s hilly, coastal capital city known for its historic charm, vibrant culture, and world-class expat amenities.',
        metrics: [
            { rank: '01', title: 'Top-tier European healthcare', subtitle: 'SNS public + private options' },
            { rank: '02', title: '300+ annual sunshine days', subtitle: 'Ideal Mediterranean climate' },
            { rank: '03', title: 'Thriving international hub', subtitle: 'Strong English proficiency & tech ecosystem' }
        ],
        mapImage: mapImg,
        neighborhoodsText: 'Príncipe Real, Chiado, Santos, Alfama, Parque das Nações'
    }

    return (
        <div className="min-h-screen bg-white text-title font-sans p-6 sm:p-10 md:p-12 max-w-375 mx-auto selection:bg-primary selection:text-white">
            {/* Top Navigation Bar inside Dashboard */}
            <div className="flex items-center justify-between pb-8 mb-8 border-b border-gray-100 text-xs sm:text-sm">
                <Link href="/" className="font-normal text-xl sm:text-2xl text-title">
                    Livable<span className="text-xs align-super font-light ml-0.5">TM</span>
                </Link>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setChangePasswordModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-title hover:border-primary hover:text-primary transition-all cursor-pointer shadow-xs hover:shadow-sm"
                    >
                        <Lock className="w-3.5 h-3.5" />
                        <span>Change Password</span>
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 text-xs font-semibold transition-all cursor-pointer shadow-xs hover:shadow-sm"
                    >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Logout</span>
                    </button>
                </div>
            </div>

            {/* Sub-Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 sm:mb-12 gap-4">
                <h1 className="text-2xl sm:text-3xl font-semibold text-title tracking-tight">
                    Hi, {trip?.client_name || 'Sarah'}
                </h1>
                <h2 className="text-3xl sm:text-4xl font-semibold text-title tracking-tight text-center translate-x-0 md:-translate-x-12">
                    Dashboard
                </h2>
                <div className="hidden md:block w-24" />
            </div>

            {/* Main 3-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* LEFT COLUMN: Welcome & Trip Details (3 cols) */}
                <div className="lg:col-span-3 space-y-8">
                    <div>
                        <h3 className="text-2xl font-semibold text-title mb-3 tracking-tight">
                            Welcome Back
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                            Making an intentional move is an exciting, smart decision. Use this command center to track your ongoing milestones, coordinate your core relocation data, and communicate with our team as we build your future life in Europe.
                        </p>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                        <span className="text-xs font-semibold text-title uppercase tracking-wider block mb-4">
                            Trip Details
                        </span>
                        {isTripsLoading ? (
                            <div className="space-y-3 py-2 animate-pulse">
                                <div className="h-4 bg-gray-100 rounded w-full" />
                                <div className="h-4 bg-gray-100 rounded w-full" />
                                <div className="h-4 bg-gray-100 rounded w-full" />
                                <div className="h-4 bg-gray-100 rounded w-full" />
                                <div className="h-4 bg-gray-100 rounded w-full" />
                            </div>
                        ) : (
                            <div className="space-y-3 text-xs sm:text-sm text-gray-600 font-light">
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-gray-500">Client Name</span>
                                    <span className="font-medium text-title">{trip?.client_name || '—'}</span>
                                </div>
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-gray-500">City</span>
                                    <span className="font-medium text-title">{trip?.city || '—'}</span>
                                </div>
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-gray-500">Visa</span>
                                    <span className="font-medium text-title">{trip?.visa || '—'}</span>
                                </div>
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-gray-500">Timeline</span>
                                    <span className="font-medium text-title">{trip?.timeline || '—'}</span>
                                </div>
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-gray-500">Guide Name</span>
                                    <span className="font-medium text-title">{trip?.guide_name || '—'}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* MIDDLE COLUMN: Step Cards (6 cols) */}
                <div className="lg:col-span-6 space-y-6">
                    {/* STEP 01 CARD */}
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-xs text-gray-400 font-normal block mb-1">
                                    Step 01
                                </span>
                                <h4 className="text-lg sm:text-xl font-medium text-title">
                                    Pre-Scouting
                                </h4>
                            </div>
                            <span className="text-xs font-semibold text-gray-400">
                                {step1CompletedCount}/3
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium border-t border-b border-gray-100 py-4">
                            <button
                                onClick={() => handleStepClick('orientation')}
                                disabled={!isStepUnlocked('orientation')}
                                className={`flex items-center gap-1.5 transition-colors ${
                                    !isStepUnlocked('orientation')
                                        ? 'text-gray-300 cursor-not-allowed'
                                        : 'hover:text-primary cursor-pointer text-title'
                                }`}
                            >
                                <span>01 Orientation</span>
                                <span className={`w-2 h-2 shrink-0 rounded-xs ${completedSteps.includes('orientation') ? 'bg-title' : 'bg-gray-300'}`} />
                            </button>

                            <button
                                onClick={() => handleStepClick('financial')}
                                disabled={!isStepUnlocked('financial')}
                                className={`flex items-center gap-1.5 transition-colors ${
                                    !isStepUnlocked('financial')
                                        ? 'text-gray-300 cursor-not-allowed opacity-60'
                                        : 'hover:text-primary cursor-pointer text-title'
                                }`}
                            >
                                <span>02 Financial Profile</span>
                                <span className={`w-2 h-2 shrink-0 rounded-xs ${completedSteps.includes('financial') ? 'bg-title' : 'bg-gray-300'}`} />
                            </button>

                            <button
                                onClick={() => handleStepClick('lifestyle')}
                                disabled={!isStepUnlocked('lifestyle')}
                                className={`flex items-center gap-1.5 transition-colors ${
                                    !isStepUnlocked('lifestyle')
                                        ? 'text-gray-300 cursor-not-allowed opacity-60'
                                        : 'hover:text-primary cursor-pointer text-title'
                                }`}
                            >
                                <span>03 Lifestyle Alignment</span>
                                <span className={`w-2 h-2 shrink-0 rounded-xs ${completedSteps.includes('lifestyle') ? 'bg-title' : 'bg-gray-300'}`} />
                            </button>
                        </div>

                        {step1CompletedCount === 3 && (
                            <div className="flex items-center justify-end pt-1">
                                <span className="text-xs text-gray-500 font-light">
                                    Ready for you next step!
                                </span>
                            </div>
                        )}
                    </div>

                    {/* STEP 02 CARD */}
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-xs text-gray-400 font-normal block mb-1">
                                    Step 02
                                </span>
                                <h4 className="text-lg sm:text-xl font-medium text-title">
                                    The Scouting Trip
                                </h4>
                            </div>
                            <span className="text-xs font-semibold text-gray-400">
                                {step2CompletedCount}/3
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium border-t border-b border-gray-100 py-4">
                            <button
                                onClick={() => handleStepClick('itinerary')}
                                disabled={!isStepUnlocked('itinerary')}
                                className={`flex items-center gap-1.5 transition-colors ${
                                    !isStepUnlocked('itinerary')
                                        ? 'text-gray-300 cursor-not-allowed opacity-60'
                                        : 'hover:text-primary cursor-pointer text-title'
                                }`}
                            >
                                <span>01 Itinerary</span>
                                <span className={`w-2 h-2 shrink-0 rounded-xs ${completedSteps.includes('itinerary') ? 'bg-title' : 'bg-gray-300'}`} />
                            </button>

                            <button
                                onClick={() => handleStepClick('travel')}
                                disabled={!isStepUnlocked('travel')}
                                className={`flex items-center gap-1.5 transition-colors ${
                                    !isStepUnlocked('travel')
                                        ? 'text-gray-300 cursor-not-allowed opacity-60'
                                        : 'hover:text-primary cursor-pointer text-title'
                                }`}
                            >
                                <span>02 Travel Preparation</span>
                                <span className={`w-2 h-2 shrink-0 rounded-xs ${completedSteps.includes('travel') ? 'bg-title' : 'bg-gray-300'}`} />
                            </button>

                            <button
                                onClick={() => handleStepClick('guided')}
                                disabled={!isStepUnlocked('guided')}
                                className={`flex items-center gap-1.5 transition-colors ${
                                    !isStepUnlocked('guided')
                                        ? 'text-gray-300 cursor-not-allowed opacity-60'
                                        : 'hover:text-primary cursor-pointer text-title'
                                }`}
                            >
                                <span>03 Guided Discovery</span>
                                <span className={`w-2 h-2 shrink-0 rounded-xs ${completedSteps.includes('guided') ? 'bg-title' : 'bg-gray-300'}`} />
                            </button>
                        </div>

                        {step2CompletedCount === 3 && (
                            <div className="flex items-center justify-end pt-1">
                                <span className="text-xs text-gray-500 font-light">
                                    Ready for you next step!
                                </span>
                            </div>
                        )}
                    </div>

                    {/* STEP 03 CARD */}
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-xs text-gray-400 font-normal block mb-1">
                                    Step 03
                                </span>
                                <h4 className="text-lg sm:text-xl font-medium text-title">
                                    Post-Trip to Move
                                </h4>
                            </div>
                            <span className="text-xs font-semibold text-gray-400">
                                {step3CompletedCount}/3
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium border-t border-b border-gray-100 py-4">
                            <button
                                onClick={() => handleStepClick('core')}
                                disabled={!isStepUnlocked('core')}
                                className={`flex items-center gap-1.5 transition-colors ${
                                    !isStepUnlocked('core')
                                        ? 'text-gray-300 cursor-not-allowed opacity-60'
                                        : 'hover:text-primary cursor-pointer text-title'
                                }`}
                            >
                                <span>01 Core Infrastructure</span>
                                <span className={`w-2 h-2 shrink-0 rounded-xs ${completedSteps.includes('core') ? 'bg-title' : 'bg-gray-300'}`} />
                            </button>

                            <button
                                onClick={() => handleStepClick('arrival')}
                                disabled={!isStepUnlocked('arrival')}
                                className={`flex items-center gap-1.5 transition-colors ${
                                    !isStepUnlocked('arrival')
                                        ? 'text-gray-300 cursor-not-allowed opacity-60'
                                        : 'hover:text-primary cursor-pointer text-title'
                                }`}
                            >
                                <span>02 Arrival Checklists</span>
                                <span className={`w-2 h-2 shrink-0 rounded-xs ${completedSteps.includes('arrival') ? 'bg-title' : 'bg-gray-300'}`} />
                            </button>

                            <button
                                onClick={() => handleStepClick('social')}
                                disabled={!isStepUnlocked('social')}
                                className={`flex items-center gap-1.5 transition-colors ${
                                    !isStepUnlocked('social')
                                        ? 'text-gray-300 cursor-not-allowed opacity-60'
                                        : 'hover:text-primary cursor-pointer text-title'
                                }`}
                            >
                                <span>03 Micro-Social Blueprint</span>
                                <span className={`w-2 h-2 shrink-0 rounded-xs ${completedSteps.includes('social') ? 'bg-title' : 'bg-gray-300'}`} />
                            </button>
                        </div>

                        {step3CompletedCount === 3 && (
                            <div className="flex items-center justify-end pt-1">
                                <span className="text-xs text-gray-500 font-light">
                                    Ready for you next step!
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT COLUMN: Overview Timeline (3 cols) */}
                <div className="lg:col-span-3 space-y-6">
                    <div>
                        <span className="text-xs font-normal text-gray-400 uppercase tracking-wider block mb-2">
                            Overview
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-semibold text-title tracking-tight mb-4">
                            Your Relocation Timeline
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mb-8">
                            This dashboard coordinates your three core steps from initial parameters to final arrival. Track your milestones, log active field research, and access your verified network.
                        </p>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm font-semibold text-title">
                        <div className="flex items-center gap-2">
                            <span>01 PRE-SCOUTING</span>
                            <span className={`w-2 h-2 shrink-0 rounded-xs ${step1CompletedCount === 3 ? 'bg-title' : 'bg-gray-300'}`} />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>02 The Scouting Trip</span>
                            <span className={`w-2 h-2 shrink-0 rounded-xs ${step2CompletedCount === 3 ? 'bg-title' : 'bg-gray-300'}`} />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>03 Post-Trip to Move</span>
                            <span className={`w-2 h-2 shrink-0 rounded-xs ${step3CompletedCount === 3 ? 'bg-title' : 'bg-gray-300'}`} />
                        </div>
                    </div>
                </div>

            </div>

            {/* MODALS */}
            <OrientationModal
                isOpen={activeModal === 'orientation'}
                onClose={handleCloseActiveModal}
            />
            <FinancialProfileModal
                isOpen={activeModal === 'financial'}
                onClose={handleCloseActiveModal}
            />
            <LifestyleAlignmentModal
                isOpen={activeModal === 'lifestyle'}
                onClose={handleCloseActiveModal}
            />
            <ItineraryModal
                isOpen={activeModal === 'itinerary'}
                onClose={handleCloseActiveModal}
            />
            <TravelPreparationModal
                isOpen={activeModal === 'travel'}
                onClose={handleCloseActiveModal}
            />
            <GuidedDiscoveryModal
                isOpen={activeModal === 'guided'}
                onClose={handleCloseActiveModal}
            />
            <CoreInfrastructureModal
                isOpen={activeModal === 'core'}
                onClose={handleCloseActiveModal}
            />
            <ArrivalChecklistsModal
                isOpen={activeModal === 'arrival'}
                onClose={handleCloseActiveModal}
            />
            <MicroSocialBlueprintModal
                isOpen={activeModal === 'social'}
                onClose={handleCloseActiveModal}
            />

            {/* Location Details Modal */}
            <DetailsModal
                isOpen={locationModalOpen}
                onClose={() => setLocationModalOpen(false)}
                data={lisbonData}
            />
            {/* Change Password Modal */}
            <ChangePasswordModal
                isOpen={changePasswordModalOpen}
                onClose={() => setChangePasswordModalOpen(false)}
            />
        </div>
    )
}