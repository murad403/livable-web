
'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { X } from 'lucide-react'

interface LifestyleAlignmentModalProps {
    isOpen: boolean
    onClose: () => void
}

export interface LifestyleAlignmentFormValues {
    // Daily Rhythms
    dailyRhythmsOptions: string[]

    // The One-Year Horizon
    goodWeekday?: string
    goodWeekend?: string
    routinesRealLife?: string

    // The Fourteen-Day Anchor
    greatDayArrival?: string

    // Environmental Draws
    environmentalDrawsOptions: string[]
    environmentalDrawsAdd?: string

    // Internal Draws
    internalDrawsOptions: string[]
    internalDrawsAdd?: string

    // Sincerity & Fear Check-in
    theShadowFear?: string
    theAnchorSecret?: string

    // The One-Year Horizon (Reflection)
    pictureLifeWorking?: string
    emotionsHopeToFeel?: string
    gladIDidThis?: string
}

const LifestyleAlignmentModal: React.FC<LifestyleAlignmentModalProps> = ({ isOpen, onClose }) => {
    const { register, handleSubmit } = useForm<LifestyleAlignmentFormValues>({
        defaultValues: {
            dailyRhythmsOptions: [],
            environmentalDrawsOptions: [],
            internalDrawsOptions: []
        }
    })

    if (!isOpen) return null

    const onSubmit = (data: LifestyleAlignmentFormValues) => {
        console.log('Lifestyle Alignment Submitted:', data)
        onClose()
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-8 md:p-12 relative shadow-xl border border-gray-100 max-h-[90vh] overflow-y-auto font-sans text-title">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-title">
                        Lifestyle Alignment
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-400 hover:text-black transition-colors p-2 cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Intro paragraph */}
                <p className="text-sm text-title font-light leading-relaxed mb-8">
                    Many people are drawn to Europe because they want a completely different relationship to daily life: more walking, more time outside, more ease, and a better rhythm between work and the rest of society. Let's map the life you are trying to build.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

                    {/* SECTION 1: Daily Rhythms */}
                    <div className="space-y-5">
                        <h3 className="text-lg font-semibold text-title">Daily Rhythms</h3>
                        
                        <div>
                            <label className="block text-sm text-title font-light mb-3">
                                What do you want more of in daily life? <em>(Select all that apply)</em>
                            </label>
                            <div className="space-y-2.5">
                                {[
                                    'Walking',
                                    'Time outdoors',
                                    'Water & beaches',
                                    'Cafés',
                                    'Local markets',
                                    'Language learning',
                                    'Fitness & movement',
                                    'Arts & culture',
                                    'Good food',
                                    'Slower mornings',
                                    'Lively evenings',
                                    'Community',
                                    'Dog-friendly living',
                                    'Family-friendly living',
                                    'Quiet',
                                    'Beauty',
                                    'Ease',
                                    'Something else'
                                ].map((opt, idx) => (
                                    <label key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-light cursor-pointer select-none">
                                        <input
                                            type="checkbox"
                                            value={opt}
                                            {...register('dailyRhythmsOptions')}
                                            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary cursor-pointer"
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: The One-Year Horizon */}
                    <div className="space-y-5 pt-6 border-t border-gray-100">
                        <div>
                            <h3 className="text-lg font-semibold text-title mb-1">The One-Year Horizon</h3>
                            <p className="text-xs sm:text-sm text-gray-600 font-light">
                                Picture yourself a year after your move.
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What does a good weekday look like?
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Your response.."
                                {...register('goodWeekday')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What does a good weekend look like?
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Your response.."
                                {...register('goodWeekend')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What routines would make this feel like your real life?
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Your response.."
                                {...register('routinesRealLife')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* SECTION 3: The Fourteen-Day Anchor */}
                    <div className="space-y-5 pt-6 border-t border-gray-100">
                        <h3 className="text-lg font-semibold text-title">The Fourteen-Day Anchor</h3>
                        <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                            Now, pull the horizon significantly closer. You have finally arrived. After all the months of research and planning, you are officially walking the streets of your new neighborhood. It's been two weeks of living in Europe, and everything feels beautifully fresh and new.
                        </p>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What does a great day look like? (e.g., discovering your absolute favorite local bakery, setting up your workspace, going to a meet-up, discovering a great events calendar or successfully finding a great nearby gym or yoga studio)
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Your response.."
                                {...register('greatDayArrival')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>

                        {/* Mid-form Submit button and divider */}
                        <div className="pt-4 pb-2">
                            <button
                                type="button"
                                onClick={handleSubmit(onSubmit)}
                                className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full text-sm font-semibold transition-all shadow-sm cursor-pointer"
                            >
                                Submit to Livable
                            </button>
                        </div>
                        <div className="border-b border-black w-full my-6" />
                    </div>

                    {/* SECTION 4: The Pull (Private Reflection) */}
                    <div className="space-y-4 pt-4">
                        <h3 className="text-2xl font-semibold text-title tracking-tight">The Pull (Private Reflection)</h3>
                        <p className="text-sm text-title font-light leading-relaxed">
                            The internal pull is often the hardest part of a move to explain, but it is the part that quietly shapes our biggest decisions.
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                            <strong>Please Note:</strong> Your responses in this section stay right here in your dashboard exclusively for you. The Livable team will never view them, and we won't use them to build your scouting trip. However, you cannot unlock the next step without completing this section. Moving is deeply emotional, and you need this baseline clarity for yourself. A few years from now, you may enjoy looking back on why you chose this move and what has brought you here.
                        </p>
                    </div>

                    {/* SECTION 5: Environmental Draws */}
                    <div className="space-y-5 pt-6 border-t border-gray-100">
                        <h3 className="text-lg font-semibold text-title">Environmental Draws</h3>

                        <div>
                            <label className="block text-sm text-title font-light mb-3">
                                What feels like it is pulling you toward this next chapter environmentally? <em>(Select all that apply)</em>
                            </label>
                            <div className="space-y-2.5">
                                {[
                                    'More time outdoors',
                                    'A different culture',
                                    'A slower pace of life',
                                    'A more beautiful everyday environment',
                                    'Better access to nature',
                                    'Better access to the coast',
                                    'Opportunities to explore Europe',
                                    'Living somewhere that feels outside my comfort zone',
                                    'Living somewhere that feels comfortably familiar in a new way',
                                    'A place that feels more like me',
                                    'Something else'
                                ].map((opt, idx) => (
                                    <label key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-light cursor-pointer select-none">
                                        <input
                                            type="checkbox"
                                            value={opt}
                                            {...register('environmentalDrawsOptions')}
                                            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary cursor-pointer"
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-title mb-1">
                                Anything you'd like to add?
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Your response.."
                                {...register('environmentalDrawsAdd')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* SECTION 6: Internal Draws */}
                    <div className="space-y-5 pt-6 border-t border-gray-100">
                        <h3 className="text-lg font-semibold text-title">Internal Draws</h3>

                        <div>
                            <label className="block text-sm text-title font-light mb-3">
                                What feels like it is pulling you toward this next chapter internally? <em>(Select all that apply)</em>
                            </label>
                            <div className="space-y-2.5">
                                {[
                                    'It feels brave.',
                                    'It feels exciting.',
                                    'It feels scary, and I like doing scary things.',
                                    'It feels calm.',
                                    'It feels like I\'m ready for a change.',
                                    'It feels like something that was always meant to happen.',
                                    'It feels like the right time.',
                                    'It feels like a chance to grow.',
                                    'It feels like all of the above, and that\'s interesting.',
                                    'I\'m still figuring it out.',
                                    'Something else'
                                ].map((opt, idx) => (
                                    <label key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-light cursor-pointer select-none">
                                        <input
                                            type="checkbox"
                                            value={opt}
                                            {...register('internalDrawsOptions')}
                                            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary cursor-pointer"
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-title mb-1">
                                Anything you'd like to add?
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Your response.."
                                {...register('internalDrawsAdd')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* SECTION 7: Sincerity & Fear Check-in */}
                    <div className="space-y-5 pt-6 border-t border-gray-100">
                        <div>
                            <h3 className="text-lg font-semibold text-title mb-1">Sincerity & Fear Check-in</h3>
                            <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                                To build a resilient transition, you have to look at the whole picture—including the heavy parts. Take an honest minute to write down the private context behind your answers.
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 leading-relaxed">
                                <strong>The Shadow:</strong> When you think about leaving your current life behind, what are you most afraid of? What are you deeply worried you might regret?
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Your response.."
                                {...register('theShadowFear')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 leading-relaxed">
                                <strong>The Anchor:</strong> What is the secret, quirky, or hyper-specific thing you secretly imagine your future European self doing? (Think completely honest, vulnerable, or aspirational—like buying a small wooden sailboat, leveling up or pivoting in your career, or harvesting local olives). What is that one thing you have waited years to do?
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Your response.."
                                {...register('theAnchorSecret')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* SECTION 8: The One-Year Horizon (Reflection) */}
                    <div className="space-y-5 pt-6 border-t border-gray-100">
                        <div>
                            <h3 className="text-lg font-semibold text-title mb-1">The One-Year Horizon</h3>
                            <p className="text-xs sm:text-sm text-gray-600 font-light">
                                Imagine it is exactly one year after your arrival.
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                When you imagine this life working, what do you picture?
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Your response.."
                                {...register('pictureLifeWorking')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What emotions do you hope to feel more often?
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Your response.."
                                {...register('emotionsHopeToFeel')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Imagine you are sitting in your new neighborhood. What would make you think, "I'm really glad I did this?"
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Your response.."
                                {...register('gladIDidThis')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* Done / Submit Button */}
                    <div className="pt-6 border-t border-gray-100 flex items-center justify-start">
                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary-hover text-white px-10 py-3 rounded-xl text-base font-semibold transition-all shadow-sm cursor-pointer"
                        >
                            Done
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LifestyleAlignmentModal