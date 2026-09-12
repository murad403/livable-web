'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { X } from 'lucide-react'
import { toast } from 'sonner'
import { useSaveFinancialProfileMutation } from '@/redux/features/app/app.api'
import { useGetMeQuery } from '@/redux/features/auth/auth.api'
import { FinancialProfileRequest } from '@/redux/features/app/app.type'

interface FinancialProfileModalProps {
    isOpen: boolean
    onClose: () => void
}

export interface FinancialProfileFormValues {
    motivationOptions: string[]
    motivationOther?: string

    comfortableHousingBudget?: string
    stretchHousingBudget?: string
    generalLivingTarget?: string

    expectationsOption?: string
    monthlyLivingBudgetTarget?: string

    incomePathsOption?: string
    incomePathsOther?: string

    tradeoffsOptions: string[]
    tradeoffsNotWantToMake?: string

    constraintsOptions: string[]
    constraintsMoreInfo?: string
    constraintsSpecific?: string

    lifestyleOutlookOptions: string[]
    lifestyleOutlookOther?: string
}

const mapMotivation = (val: string): string => {
    switch (val) {
        case 'Lower monthly living costs': return 'lower_costs'
        case 'More space for the same budget': return 'more_space'
        case 'Better value for money on overall costs': return 'better_quality'
        case 'Lower housing/tax burden': return 'lower_tax_burden'
        case 'Retirement or semi-retirement': return 'retirement'
        case 'Remote work flexibility': return 'remote_flexibility'
        case 'A cleaner financial lifestyle': return 'cleaner_lifestyle'
        case 'Still figuring it out': return 'figuring_out'
        default: return val.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
    }
}

const mapExpectation = (val: string): string => {
    switch (val) {
        case 'Maintain my current monthly expenses within my budget': return 'maintain_lifestyle'
        case 'Reduce my monthly expenses while maintaining my current lifestyle': return 'reduce_expenses'
        case 'Spend a bit more for a better quality of life': return 'spend_more_better_quality'
        case 'Spend less overall by simplifying my requirements': return 'spend_less_simplifying'
        case 'Still figuring this out': return 'figuring_out'
        default: return val.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
    }
}

const mapIncomeRoute = (val: string): string => {
    switch (val) {
        case 'Remote employment': return 'remote_employment'
        case 'Business income': return 'business_income'
        case 'Retirement or pensions': return 'retirement_pensions'
        case 'Investment income': return 'investment_income'
        case 'Still figuring it out': return 'figuring_out'
        default: return val.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
    }
}

const mapTradeoff = (val: string): string => {
    switch (val) {
        case 'Housing size': return 'housing_size'
        case 'Central location': return 'central_location'
        case 'Walkability': return 'walkability'
        case 'Public transportation': return 'public_transportation'
        case 'Proximity to co-working': return 'proximity_coworking'
        case 'Climate': return 'climate'
        case 'Distance from health center': return 'distance_health_center'
        case 'Housing budget': return 'housing_budget'
        case 'Personal space': return 'personal_space'
        case 'Other': return 'other'
        default: return val.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
    }
}

const mapConstraint = (val: string): string => {
    switch (val) {
        case 'I plan to move within 6-12 months.': return 'move_6_12_months'
        case 'I expect to spend significant time outside my home country.': return 'time_outside_home'
        case 'I have multiple accounts to manage.': return 'multiple_accounts'
        case 'I have pets moving with me.': return 'pets'
        case 'I have access to local mobility options.': return 'local_mobility'
        case 'I have complex tax or financial considerations.': return 'complex_tax'
        case 'I need to stay within a specific budget.': return 'budget'
        case 'Something else': return 'something_else'
        default: return val.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
    }
}

const mapExcitement = (val: string): string => {
    switch (val) {
        case 'Spending less on day-to-day living expenses': return 'spending_less'
        case 'Having more financial flexibility': return 'financial_flexibility'
        case 'Living comfortably without high housing costs': return 'comfortable_no_high_cost'
        case 'Financial predictability and stability': return 'predictability_stability'
        case 'Lower healthcare costs': return 'lower_healthcare'
        case 'More affordable café, restaurant, and cultural culture': return 'cafe_culture'
        case 'Better safety, walkability, and access to public spaces': return 'safety_walkability'
        case 'Having lower fixed monthly living costs': return 'lower_fixed_costs'
        case 'Something else': return 'something_else'
        default: return val.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
    }
}

const FinancialProfileModal: React.FC<FinancialProfileModalProps> = ({ isOpen, onClose }) => {
    const { data: userData } = useGetMeQuery(undefined, { skip: !isOpen });
    const [saveFinancialProfile, { isLoading: isSaving }] = useSaveFinancialProfileMutation()

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<FinancialProfileFormValues>({
        defaultValues: {
            motivationOptions: [],
            tradeoffsOptions: [],
            constraintsOptions: [],
            lifestyleOutlookOptions: []
        }
    })

    if (!isOpen) return null

    const onSubmit = async (data: FinancialProfileFormValues) => {
        try {
            const opinions = [
                data.motivationOther,
                data.incomePathsOther,
                data.tradeoffsNotWantToMake,
                data.constraintsMoreInfo,
                data.lifestyleOutlookOther
            ].filter((text): text is string => Boolean(text && text.trim()))

            const payload: FinancialProfileRequest = {
                motivating_factors: (data.motivationOptions || []).map(mapMotivation).join(','),
                share_your_opinion: JSON.stringify(opinions),
                comfortable_housing_budget: data.comfortableHousingBudget || '',
                stretched_housing_budget: data.stretchHousingBudget || '',
                monthly_living_budget_target: data.generalLivingTarget || '',
                financial_expectation: data.expectationsOption ? mapExpectation(data.expectationsOption) : '',
                general_monthly_living_budget_target: data.monthlyLivingBudgetTarget || '',
                income_route: data.incomePathsOption ? mapIncomeRoute(data.incomePathsOption) : '',
                willing_tradeoffs: (data.tradeoffsOptions || []).map(mapTradeoff).join(','),
                practical_constraints: (data.constraintsOptions || []).map(mapConstraint).join(','),
                specific_codes_worried_about: data.constraintsSpecific || '',
                financial_excitement_factors: (data.lifestyleOutlookOptions || []).map(mapExcitement).join(',')
            }

            const clientId = userData?.client_id || 1
            const res = await saveFinancialProfile({ clientId, body: payload }).unwrap()
            toast.success(res.message || res.detail || 'Financial profile submitted successfully!')
            onClose()
        } catch (err: any) {
            const errorMsg =
                err?.data?.detail ||
                err?.data?.message ||
                err?.data?.error ||
                'Failed to submit financial profile. Please try again.'
            toast.error(errorMsg)
        }
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-8 md:p-12 relative shadow-xl border border-gray-100 max-h-[90vh] overflow-y-auto font-sans text-title">
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-title">
                        Financial Profile
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-400 hover:text-black transition-colors p-2 cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Intro text */}
                <p className="text-sm text-title font-light leading-relaxed mb-8">
                    Let's get the practical side of your move into one place. Some questions are about money, while others focus on your personal priorities. Together, they'll help shape your scouting trip and give us a clear picture of what you’re building. There are no right answers here—the goal is simply to understand the realities your move needs to work within.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

                    {/* SECTION 1: Motivation */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-title">Motivation</h3>
                        <label className="block text-sm text-title font-light">
                            What is motivating the financial side of your move? (Select all that apply)
                        </label>
                        <div className="space-y-2.5 pt-1">
                            {[
                                'Lower monthly living costs',
                                'More space for the same budget',
                                'Better value for money on overall costs',
                                'Lower housing/tax burden',
                                'Retirement or semi-retirement',
                                'Remote work flexibility',
                                'A cleaner financial lifestyle',
                                'Still figuring it out'
                            ].map((opt, idx) => (
                                <label key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-light cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        value={opt}
                                        {...register('motivationOptions')}
                                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary cursor-pointer"
                                    />
                                    <span>{opt}</span>
                                </label>
                            ))}
                        </div>
                        <div className="pt-2">
                            <label className="block text-xs font-medium text-title mb-1">
                                Anything else on your mind?
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Your response..."
                                {...register('motivationOther')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* SECTION 2: Housing & Living Targets */}
                    <div className="space-y-5 pt-6 border-t border-gray-100">
                        <h3 className="text-lg font-semibold text-title">Housing & Living Targets</h3>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What monthly housing budget would feel comfortable?
                            </label>
                            <input
                                type="text"
                                placeholder="Your response..."
                                {...register('comfortableHousingBudget')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What monthly housing budget would feel stretch, even in the same sentence?
                            </label>
                            <input
                                type="text"
                                placeholder="Your response..."
                                {...register('stretchHousingBudget')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What is your general monthly living budget target?
                            </label>
                            <input
                                type="text"
                                placeholder="Your response..."
                                {...register('generalLivingTarget')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all"
                            />
                        </div>
                    </div>

                    {/* SECTION 3: Expectations */}
                    <div className="space-y-5 pt-6 border-t border-gray-100">
                        <h3 className="text-lg font-semibold text-title">Expectations</h3>

                        <div>
                            <label className="block text-sm text-title font-light mb-3">
                                What are your expectations for the financial side of this move? (Select one)
                            </label>
                            <div className="space-y-2.5">
                                {[
                                    'Maintain my current monthly expenses within my budget',
                                    'Reduce my monthly expenses while maintaining my current lifestyle',
                                    'Spend a bit more for a better quality of life',
                                    'Spend less overall by simplifying my requirements',
                                    'Still figuring this out'
                                ].map((opt, idx) => (
                                    <label key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-light cursor-pointer select-none">
                                        <input
                                            type="radio"
                                            value={opt}
                                            {...register('expectationsOption')}
                                            className="w-4 h-4 text-primary focus:ring-primary accent-primary cursor-pointer"
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What is your general monthly living budget target?
                            </label>
                            <input
                                type="text"
                                placeholder="Your response..."
                                {...register('monthlyLivingBudgetTarget')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all"
                            />
                        </div>
                    </div>

                    {/* SECTION 4: Income Paths */}
                    <div className="space-y-5 pt-6 border-t border-gray-100">
                        <h3 className="text-lg font-semibold text-title">Income Paths</h3>

                        <div>
                            <label className="block text-sm text-title font-light mb-3">
                                What income routes are you planning around? (Select one)
                            </label>
                            <div className="space-y-2.5">
                                {[
                                    'Remote employment',
                                    'Business income',
                                    'Retirement or pensions',
                                    'Investment income',
                                    'Still figuring it out'
                                ].map((opt, idx) => (
                                    <label key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-light cursor-pointer select-none">
                                        <input
                                            type="radio"
                                            value={opt}
                                            {...register('incomePathsOption')}
                                            className="w-4 h-4 text-primary focus:ring-primary accent-primary cursor-pointer"
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-title mb-1">
                                Anything else on your mind?
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Your response..."
                                {...register('incomePathsOther')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* SECTION 5: Tradeoffs */}
                    <div className="space-y-5 pt-6 border-t border-gray-100">
                        <h3 className="text-lg font-semibold text-title">Tradeoffs</h3>

                        <div>
                            <label className="block text-sm text-title font-light mb-3">
                                Where are you most willing to make tradeoffs? (Select all that apply)
                            </label>
                            <div className="space-y-2.5">
                                {[
                                    'Housing size',
                                    'Central location',
                                    'Walkability',
                                    'Public transportation',
                                    'Proximity to co-working',
                                    'Climate',
                                    'Distance from health center',
                                    'Housing budget',
                                    'Personal space',
                                    'Other'
                                ].map((opt, idx) => (
                                    <label key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-light cursor-pointer select-none">
                                        <input
                                            type="checkbox"
                                            value={opt}
                                            {...register('tradeoffsOptions')}
                                            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary cursor-pointer"
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Are there any tradeoffs you would not want to make?
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Your response..."
                                {...register('tradeoffsNotWantToMake')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* SECTION 6: Practical Constraints */}
                    <div className="space-y-5 pt-6 border-t border-gray-100">
                        <h3 className="text-lg font-semibold text-title">Practical Constraints</h3>

                        <div>
                            <p className="text-sm text-title font-light mb-3 leading-relaxed">
                                Every move has practical constraints. This helps us understand the true realities we need to work within. (Select all that apply)
                            </p>
                            <div className="space-y-2.5">
                                {[
                                    'I plan to move within 6-12 months.',
                                    'I expect to spend significant time outside my home country.',
                                    'I have multiple accounts to manage.',
                                    'I have pets moving with me.',
                                    'I have access to local mobility options.',
                                    'I have complex tax or financial considerations.',
                                    'I need to stay within a specific budget.',
                                    'Something else'
                                ].map((opt, idx) => (
                                    <label key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-light cursor-pointer select-none">
                                        <input
                                            type="checkbox"
                                            value={opt}
                                            {...register('constraintsOptions')}
                                            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary cursor-pointer"
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tell us a bit more...
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Your response..."
                                {...register('constraintsMoreInfo')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Are there any specific constraints you would like us to keep in mind?
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Your response..."
                                {...register('constraintsSpecific')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* SECTION 7: Lifestyle Outlook */}
                    <div className="space-y-5 pt-6 border-t border-gray-100">
                        <h3 className="text-lg font-semibold text-title">Lifestyle Outlook</h3>

                        <div>
                            <label className="block text-sm text-title font-light mb-3">
                                What are you most looking forward to on the financial side of living in Europe? (Select all that apply)
                            </label>
                            <div className="space-y-2.5">
                                {[
                                    'Spending less on day-to-day living expenses',
                                    'Having more financial flexibility',
                                    'Living comfortably without high housing costs',
                                    'Financial predictability and stability',
                                    'Lower healthcare costs',
                                    'More affordable café, restaurant, and cultural culture',
                                    'Better safety, walkability, and access to public spaces',
                                    'Having lower fixed monthly living costs',
                                    'Something else'
                                ].map((opt, idx) => (
                                    <label key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-light cursor-pointer select-none">
                                        <input
                                            type="checkbox"
                                            value={opt}
                                            {...register('lifestyleOutlookOptions')}
                                            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary cursor-pointer"
                                        />
                                        <span>{opt}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                What else are you looking forward to?
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Your response..."
                                {...register('lifestyleOutlookOther')}
                                className="w-full p-3.5 rounded-2xl border border-gray-200 text-sm text-title placeholder:text-gray-400 focus:outline-none focus:border-title transition-all resize-none"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 border-t border-gray-100 flex items-center justify-start">
                        <button
                            type="submit"
                            disabled={isSubmitting || isSaving}
                            className="bg-primary hover:bg-primary-hover disabled:opacity-60 text-white px-10 py-3 rounded-xl text-base font-semibold transition-all shadow-sm cursor-pointer disabled:cursor-not-allowed"
                        >
                            {isSubmitting || isSaving ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FinancialProfileModal