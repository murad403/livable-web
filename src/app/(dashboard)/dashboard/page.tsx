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
import { useGetMeQuery } from '@/redux/features/auth/auth.api'
import { removeToken } from '@/utils/auth'
import lisbonImg from '@/assets/place1.jpg'
import mapImg from '@/assets/map.png'
import { Button } from '@/components/ui/button'

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

    const { data: userData } = useGetMeQuery();
    const { data: tripsData, isLoading: isTripsLoading } = useGetMyTripsQuery();
    const trip = tripsData?.trips?.[0];

    const userIdentifier = userData?.id || userData?.email || trip?.email || trip?.client_name;
    const storageKey = userIdentifier ? `livable_completed_steps_${userIdentifier}` : 'livable_completed_steps';

    useEffect(() => {
        if (typeof window !== 'undefined' && storageKey) {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                try {
                    setCompletedSteps(JSON.parse(saved));
                } catch (e) {
                    console.error('Failed to parse completed steps from localStorage', e);
                    setCompletedSteps([]);
                }
            } else {
                setCompletedSteps([]);
            }
        }
    }, [storageKey]);

    const markStepCompleted = (stepId: string) => {
        setCompletedSteps((prev) => {
            if (prev.includes(stepId)) return prev;
            const updated = [...prev, stepId];
            if (typeof window !== 'undefined' && storageKey) {
                localStorage.setItem(storageKey, JSON.stringify(updated));
            }
            return updated;
        });
    };

    const handleDismissModal = () => {
        setActiveModal(null);
    };

    const handleDoneActiveModal = () => {
        if (activeModal) {
            markStepCompleted(activeModal);
            const currentIndex = ALL_STEPS.indexOf(activeModal);
            if (currentIndex >= 0 && currentIndex < ALL_STEPS.length - 1) {
                const nextStep = ALL_STEPS[currentIndex + 1];
                setActiveModal(nextStep);
            } else {
                setActiveModal(null);
            }
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
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200/80 text-xs sm:text-sm">
                <Link href="/" className="font-satoshi font-normal tracking-tight text-2xl md:text-[32px] text-title">
                    Livable™
                </Link>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setChangePasswordModalOpen(true)}
                        className="flex items-center gap-1.5 text-xs text-title transition-colors cursor-pointer"
                    >
                        <Lock className="w-3.5 h-3.5" />
                        <span>Change Password</span>
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                    >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Logout</span>
                    </button>
                </div>
            </div>

            {/* Header Title Section */}
            <div className="text-center mb-10 space-y-1">
                <span className="text-sm text-gray-500 font-normal block">
                    Hi, {trip?.client_name || ''}
                </span>
                <h1 className="text-4xl sm:text-5xl font-medium text-title tracking-tight">
                    Dashboard
                </h1>
            </div>

            {/* Main 2-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4">
                
                {/* LEFT COLUMN: Dashboard Overview & Trip Details (4 cols - STICKY) */}
                <div className="lg:col-span-4 space-y-8 lg:border-r border-gray-200/80 lg:pr-10 lg:sticky lg:top-8 self-start">
                    <div className="space-y-4">
                        <span className="text-xs font-normal  text-gray-600 tracking-[0.25em] uppercase block">
                            Dashboard
                        </span>
                        <h2 className="text-3xl md:text-[32px] font-medium text-title tracking-tight leading-[1.05]">
                            Welcome Back
                        </h2>
                    </div>

                    <div className="border-t border-gray-200/80 pt-6">
                        <p className="text-sm md:text-base text-title leading-relaxed">
                            Making an intentional move is an exciting, smart decision. Use this command center to track your ongoing milestones, coordinate your core relocation data, and communicate with our team as we build your future life in Europe.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl md:text-[28px] font-medium text-title tracking-tight">
                            Your Relocation Timeline
                        </h3>
                        <div className="space-y-2">
                            <span className="text-xs font-normal  text-gray-600 tracking-[0.25em] uppercase block">
                                Overview
                            </span>
                            <p className="text-sm md:text-base text-title leading-relaxed">
                                This dashboard coordinates your three core steps from initial parameters to final arrival. Track your milestones, log active field research, and access your verified network.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-gray-200/80 pt-6 space-y-4">
                        <span className="text-xs font-normal text-gray-600 tracking-[0.25em] uppercase block">
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
                            <div className="space-y-2 text-xs sm:text-sm font-light text-gray-600">
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-gray-500">Target</span>
                                    <span className="text-title">{trip?.city || 'Lisbon'}</span>
                                </div>
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-gray-500">Timeline</span>
                                    <span className="text-title">{trip?.timeline || 'Oct 12 – Oct 15'}</span>
                                </div>
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-gray-500">Duration</span>
                                    <span className="text-title">3 Days</span>
                                </div>
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-gray-500">Phase</span>
                                    <span className="text-title">Pre-Scouting</span>
                                </div>
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-gray-500">Advisor</span>
                                    <span className="text-title">{trip?.guide_name || 'Livable Team'}</span>
                                </div>
                            </div>
                        )}

                        <Button
                        className='w-full'
                        >
                            View Location Details
                        </Button>
                    </div>
                </div>

                {/* RIGHT COLUMN: The Journey (8 cols) */}
                <div className="lg:col-span-8 space-y-8">
                    <span className="text-xs font-normal  text-gray-600 tracking-[0.25em] uppercase block">
                        The Journey
                    </span>

                    {activeModal === null ? (
                        <>
                            {/* STEP 01 CARD */}
                            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="text-xs text-gray-500 font-normal block mb-1">
                                            Step 01
                                        </span>
                                        <h4 className="text-2xl sm:text-3xl font-medium text-title tracking-tight">
                                            Pre-Scouting
                                        </h4>
                                    </div>
                                    <span className="text-xs font-normal text-gray-400">
                                        {step1CompletedCount}/3
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm font-normal border-t border-b border-gray-200/80 py-4">
                                    <button
                                        onClick={() => handleStepClick('orientation')}
                                        disabled={!isStepUnlocked('orientation')}
                                        className={`flex items-center gap-2 transition-colors ${
                                            !isStepUnlocked('orientation')
                                                ? 'text-gray-300 cursor-not-allowed opacity-60'
                                                : completedSteps.includes('orientation')
                                                ? 'text-primary font-medium cursor-pointer'
                                                : 'hover:text-primary cursor-pointer text-title'
                                        }`}
                                    >
                                        <span className={`w-2.5 h-2.5 shrink-0 rounded-xs transition-colors ${completedSteps.includes('orientation') ? 'bg-primary' : 'bg-gray-300'}`} />
                                        <span>01 Orientation</span>
                                    </button>

                                    <button
                                        onClick={() => handleStepClick('financial')}
                                        disabled={!isStepUnlocked('financial')}
                                        className={`flex items-center gap-2 transition-colors ${
                                            !isStepUnlocked('financial')
                                                ? 'text-gray-300 cursor-not-allowed opacity-60'
                                                : completedSteps.includes('financial')
                                                ? 'text-primary font-medium cursor-pointer'
                                                : 'hover:text-primary cursor-pointer text-title'
                                        }`}
                                    >
                                        <span className={`w-2.5 h-2.5 shrink-0 rounded-xs transition-colors ${completedSteps.includes('financial') ? 'bg-primary' : 'bg-gray-300'}`} />
                                        <span>02 Financial Profile</span>
                                    </button>

                                    <button
                                        onClick={() => handleStepClick('lifestyle')}
                                        disabled={!isStepUnlocked('lifestyle')}
                                        className={`flex items-center gap-2 transition-colors ${
                                            !isStepUnlocked('lifestyle')
                                                ? 'text-gray-300 cursor-not-allowed opacity-60'
                                                : completedSteps.includes('lifestyle')
                                                ? 'text-primary font-medium cursor-pointer'
                                                : 'hover:text-primary cursor-pointer text-title'
                                        }`}
                                    >
                                        <span className={`w-2.5 h-2.5 shrink-0 rounded-xs transition-colors ${completedSteps.includes('lifestyle') ? 'bg-primary' : 'bg-gray-300'}`} />
                                        <span>03 Lifestyle Alignment</span>
                                    </button>
                                </div>

                                <div className="flex items-center justify-between pt-1">
                                    <button
                                        onClick={() => handleStepClick(step1CompletedCount === 0 ? 'orientation' : step1CompletedCount === 1 ? 'financial' : 'lifestyle')}
                                        className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer"
                                    >
                                        {step1CompletedCount === 3 ? 'Done' : 'Start'}
                                    </button>
                                    <span className="text-xs text-gray-400 font-light">
                                        Ready for your next step
                                    </span>
                                </div>
                            </div>

                            {/* STEP 02 CARD */}
                            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="text-xs text-gray-400 font-normal block mb-1">
                                            Step 02
                                        </span>
                                        <h4 className="text-2xl sm:text-3xl font-medium text-title tracking-tight">
                                            The Scouting Trip
                                        </h4>
                                    </div>
                                    <span className="text-xs font-normal text-gray-400">
                                        {step2CompletedCount}/3
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm font-normal border-t border-b border-gray-200/80 py-4">
                                    <button
                                        onClick={() => handleStepClick('itinerary')}
                                        disabled={!isStepUnlocked('itinerary')}
                                        className={`flex items-center gap-2 transition-colors ${
                                            !isStepUnlocked('itinerary')
                                                ? 'text-gray-300 cursor-not-allowed opacity-60'
                                                : completedSteps.includes('itinerary')
                                                ? 'text-primary font-medium cursor-pointer'
                                                : 'hover:text-primary cursor-pointer text-title'
                                        }`}
                                    >
                                        <span className={`w-2.5 h-2.5 shrink-0 rounded-xs transition-colors ${completedSteps.includes('itinerary') ? 'bg-primary' : 'bg-gray-300'}`} />
                                        <span>01 Itinerary</span>
                                    </button>

                                    <button
                                        onClick={() => handleStepClick('travel')}
                                        disabled={!isStepUnlocked('travel')}
                                        className={`flex items-center gap-2 transition-colors ${
                                            !isStepUnlocked('travel')
                                                ? 'text-gray-300 cursor-not-allowed opacity-60'
                                                : completedSteps.includes('travel')
                                                ? 'text-primary font-medium cursor-pointer'
                                                : 'hover:text-primary cursor-pointer text-title'
                                        }`}
                                    >
                                        <span className={`w-2.5 h-2.5 shrink-0 rounded-xs transition-colors ${completedSteps.includes('travel') ? 'bg-primary' : 'bg-gray-300'}`} />
                                        <span>02 Travel Preparation</span>
                                    </button>

                                    <button
                                        onClick={() => handleStepClick('guided')}
                                        disabled={!isStepUnlocked('guided')}
                                        className={`flex items-center gap-2 transition-colors ${
                                            !isStepUnlocked('guided')
                                                ? 'text-gray-300 cursor-not-allowed opacity-60'
                                                : completedSteps.includes('guided')
                                                ? 'text-primary font-medium cursor-pointer'
                                                : 'hover:text-primary cursor-pointer text-title'
                                        }`}
                                    >
                                        <span className={`w-2.5 h-2.5 shrink-0 rounded-xs transition-colors ${completedSteps.includes('guided') ? 'bg-primary' : 'bg-gray-300'}`} />
                                        <span>03 Guided Discovery</span>
                                    </button>
                                </div>

                                <div className="flex items-center justify-between pt-1">
                                    <button
                                        onClick={() => handleStepClick(step2CompletedCount === 0 ? 'itinerary' : step2CompletedCount === 1 ? 'travel' : 'guided')}
                                        className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer"
                                    >
                                        {step2CompletedCount === 3 ? 'Done' : 'Start'}
                                    </button>
                                    <span className="text-xs text-gray-400 font-light">
                                        Ready for your next step
                                    </span>
                                </div>
                            </div>

                            {/* STEP 03 CARD */}
                            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <span className="text-xs text-gray-400 font-normal block mb-1">
                                            Step 03
                                        </span>
                                        <h4 className="text-2xl sm:text-3xl font-medium text-title tracking-tight">
                                            Post-Trip to Move
                                        </h4>
                                    </div>
                                    <span className="text-xs font-normal text-gray-400">
                                        {step3CompletedCount}/3
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm font-normal border-t border-b border-gray-200/80 py-4">
                                    <button
                                        onClick={() => handleStepClick('core')}
                                        disabled={!isStepUnlocked('core')}
                                        className={`flex items-center gap-2 transition-colors ${
                                            !isStepUnlocked('core')
                                                ? 'text-gray-300 cursor-not-allowed opacity-60'
                                                : completedSteps.includes('core')
                                                ? 'text-primary font-medium cursor-pointer'
                                                : 'hover:text-primary cursor-pointer text-title'
                                        }`}
                                    >
                                        <span className={`w-2.5 h-2.5 shrink-0 rounded-xs transition-colors ${completedSteps.includes('core') ? 'bg-primary' : 'bg-gray-300'}`} />
                                        <span>01 Core Infrastructure</span>
                                    </button>

                                    <button
                                        onClick={() => handleStepClick('arrival')}
                                        disabled={!isStepUnlocked('arrival')}
                                        className={`flex items-center gap-2 transition-colors ${
                                            !isStepUnlocked('arrival')
                                                ? 'text-gray-300 cursor-not-allowed opacity-60'
                                                : completedSteps.includes('arrival')
                                                ? 'text-primary font-medium cursor-pointer'
                                                : 'hover:text-primary cursor-pointer text-title'
                                        }`}
                                    >
                                        <span className={`w-2.5 h-2.5 shrink-0 rounded-xs transition-colors ${completedSteps.includes('arrival') ? 'bg-primary' : 'bg-gray-300'}`} />
                                        <span>02 Arrival Checklist</span>
                                    </button>

                                    <button
                                        onClick={() => handleStepClick('social')}
                                        disabled={!isStepUnlocked('social')}
                                        className={`flex items-center gap-2 transition-colors ${
                                            !isStepUnlocked('social')
                                                ? 'text-gray-300 cursor-not-allowed opacity-60'
                                                : completedSteps.includes('social')
                                                ? 'text-primary font-medium cursor-pointer'
                                                : 'hover:text-primary cursor-pointer text-title'
                                        }`}
                                    >
                                        <span className={`w-2.5 h-2.5 shrink-0 rounded-xs transition-colors ${completedSteps.includes('social') ? 'bg-primary' : 'bg-gray-300'}`} />
                                        <span>03 Micro-Social Blueprint</span>
                                    </button>
                                </div>

                                <div className="flex items-center justify-between pt-1">
                                    <button
                                        onClick={() => handleStepClick(step3CompletedCount === 0 ? 'core' : step3CompletedCount === 1 ? 'arrival' : 'social')}
                                        className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full text-xs font-normal transition-colors cursor-pointer"
                                    >
                                        {step3CompletedCount === 3 ? 'Done' : 'Start'}
                                    </button>
                                    <span className="text-xs text-gray-400 font-light">
                                        Ready for your next step
                                    </span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="space-y-4">
                            <OrientationModal
                                isOpen={activeModal === 'orientation'}
                                onClose={handleDismissModal}
                                onDone={handleDoneActiveModal}
                                isInline={true}
                            />
                            <FinancialProfileModal
                                isOpen={activeModal === 'financial'}
                                onClose={handleDismissModal}
                                onDone={handleDoneActiveModal}
                                isInline={true}
                            />
                            <LifestyleAlignmentModal
                                isOpen={activeModal === 'lifestyle'}
                                onClose={handleDismissModal}
                                onDone={handleDoneActiveModal}
                                isInline={true}
                            />
                            <ItineraryModal
                                isOpen={activeModal === 'itinerary'}
                                onClose={handleDismissModal}
                                onDone={handleDoneActiveModal}
                                isInline={true}
                            />
                            <TravelPreparationModal
                                isOpen={activeModal === 'travel'}
                                onClose={handleDismissModal}
                                onDone={handleDoneActiveModal}
                                isInline={true}
                            />
                            <GuidedDiscoveryModal
                                isOpen={activeModal === 'guided'}
                                onClose={handleDismissModal}
                                onDone={handleDoneActiveModal}
                                isInline={true}
                            />
                            <CoreInfrastructureModal
                                isOpen={activeModal === 'core'}
                                onClose={handleDismissModal}
                                onDone={handleDoneActiveModal}
                                isInline={true}
                            />
                            <ArrivalChecklistsModal
                                isOpen={activeModal === 'arrival'}
                                onClose={handleDismissModal}
                                onDone={handleDoneActiveModal}
                                isInline={true}
                            />
                            <MicroSocialBlueprintModal
                                isOpen={activeModal === 'social'}
                                onClose={handleDismissModal}
                                onDone={handleDoneActiveModal}
                                isInline={true}
                            />
                        </div>
                    )}
                </div>

            </div>

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