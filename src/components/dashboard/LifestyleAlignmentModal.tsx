
'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { X } from 'lucide-react'
import { toast } from 'sonner'
import { useSaveLifestyleAlignmentMutation } from '@/redux/features/app/app.api'
import { useGetMeQuery } from '@/redux/features/auth/auth.api'
import { LifestyleAlignmentRequest } from '@/redux/features/app/app.type'

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

const mapDailyLifeDesire = (val: string): string => {
    switch (val) {
        case 'Walking': return 'walking'
        case 'Time outdoors': return 'outdoors'
        case 'Water & beaches': return 'water_beaches'
        case 'Cafés': return 'cafes'
        case 'Local markets': return 'local_markets'
        case 'Language learning': return 'language_learning'
        case 'Fitness & movement': return 'fitness_movement'
        case 'Arts & culture': return 'arts_culture'
        case 'Good food': return 'good_food'
        case 'Slower mornings': return 'slower_mornings'
        case 'Lively evenings': return 'lively_evenings'
        case 'Community': return 'community'
        case 'Dog-friendly living': return 'dog_friendly'
        case 'Family-friendly living': return 'family_friendly'
        case 'Quiet': return 'quiet'
        case 'Beauty': return 'beauty'
        case 'Ease': return 'ease'
        case 'Something else': return 'something_else'
        default: return val.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
    }
}

const mapEnvironmentalDraw = (val: string): string => {
    switch (val) {
        case 'More time outdoors': return 'outdoors'
        case 'A different culture': return 'different_culture'
        case 'A slower pace of life': return 'slower_pace'
        case 'A more beautiful everyday environment': return 'beautiful_environment'
        case 'Better access to nature': return 'access_nature'
        case 'Better access to the coast': return 'access_coast'
        case 'Opportunities to explore Europe': return 'explore_europe'
        case 'Living somewhere that feels outside my comfort zone': return 'outside_comfort_zone'
        case 'Living somewhere that feels comfortably familiar in a new way': return 'comfortably_familiar'
        case 'A place that feels more like me': return 'more_like_me'
        case 'Something else': return 'something_else'
        default: return val.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
    }
}

const mapInternalDraw = (val: string): string => {
    switch (val) {
        case 'It feels brave.': return 'brave'
        case 'It feels exciting.': return 'exciting'
        case 'It feels scary, and I like doing scary things.': return 'scary'
        case 'It feels calm.': return 'calm'
        case 'It feels like I\'m ready for a change.': return 'ready_change'
        case 'It feels like something that was always meant to happen.': return 'meant_to_happen'
        case 'It feels like the right time.': return 'right_time'
        case 'It feels like a chance to grow.': return 'chance_to_grow'
        case 'It feels like all of the above, and that\'s interesting.': return 'all_above'
        case 'I\'m still figuring it out.': return 'figuring_out'
        case 'Something else': return 'something_else'
        default: return val.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
    }
}

const LifestyleAlignmentModal: React.FC<LifestyleAlignmentModalProps> = ({ isOpen, onClose }) => {
    const { data: userData } = useGetMeQuery(undefined, { skip: !isOpen })
    const [saveLifestyleAlignment, { isLoading: isSaving }] = useSaveLifestyleAlignmentMutation()

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<LifestyleAlignmentFormValues>({
        defaultValues: {
            dailyRhythmsOptions: [],
            environmentalDrawsOptions: [],
            internalDrawsOptions: []
        }
    })

    if (!isOpen) return null

    const onSubmit = async (data: LifestyleAlignmentFormValues) => {
        try {
            const anythingToAddParts = [
                data.environmentalDrawsAdd,
                data.internalDrawsAdd
            ].filter((text): text is string => Boolean(text && text.trim()))
            const anythingToAdd = anythingToAddParts.join('; ')

            const payload: LifestyleAlignmentRequest = {
                daily_life_desires: (data.dailyRhythmsOptions || []).map(mapDailyLifeDesire).join(','),
                good_weekday: data.goodWeekday || '',
                good_weekend: data.goodWeekend || '',
                routines_real_life: data.routinesRealLife || '',
                day_looked_like: data.greatDayArrival || '',
                environmental_pull_factors: (data.environmentalDrawsOptions || []).map(mapEnvironmentalDraw).join(','),
                anything_to_add: anythingToAdd || '',
                internal_pull_factors: (data.internalDrawsOptions || []).map(mapInternalDraw).join(','),
                shadow_fear: data.theShadowFear || '',
                anchor_aspiration: data.theAnchorSecret || '',
                imagine_life_working: data.pictureLifeWorking || '',
                emotions_hope_to_feel: data.emotionsHopeToFeel || '',
                success_picture: data.gladIDidThis || ''
            }

            const clientId = userData?.client_id || 1
            const res = await saveLifestyleAlignment({ clientId, body: payload }).unwrap()
            toast.success(res.message || res.detail || 'Lifestyle alignment saved successfully!')
            onClose()
        } catch (err: any) {
            const errorMsg =
                err?.data?.detail ||
                err?.data?.message ||
                err?.data?.error ||
                'Failed to save lifestyle alignment. Please try again.'
            toast.error(errorMsg)
        }
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

                    {/* Submit Button */}
                    <div className="pt-6 border-t border-gray-100 flex items-center justify-start">
                        <button
                            type="submit"
                            disabled={isSubmitting || isSaving}
                            className="bg-primary hover:bg-primary-hover disabled:opacity-60 text-white px-10 py-3 rounded-full text-base font-semibold transition-all shadow-sm cursor-pointer disabled:cursor-not-allowed"
                        >
                            {isSubmitting || isSaving ? 'Submitting...' : 'Submit to Livable'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LifestyleAlignmentModal