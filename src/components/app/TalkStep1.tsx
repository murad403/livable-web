'use client'

import React from 'react'
import { UseFormRegister, FieldErrors } from 'react-hook-form'

interface Step1FormData {
    fullName: string
    email: string
    phone: string
}

interface TalkStep1Props {
    register: UseFormRegister<any>
    errors: FieldErrors<Step1FormData>
    onNext: () => void
}

const TalkStep1: React.FC<TalkStep1Props> = ({ register, errors, onNext }) => {
    return (
        <div className="space-y-5">
            {/* Step Header (Matching User Image) */}
            <div>
                <span className="text-base font-semibold text-primary block mb-2">Step 1</span>
            </div>

            {/* Full Name */}
            <div>
                <label className="block text-sm font-normal text-title mb-2">
                    Full name
                </label>
                <input
                    type="text"
                    placeholder="Your full name"
                    {...register('fullName')}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-title placeholder-gray-400 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-primary'
                    }`}
                />
                {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1">{errors.fullName.message as string}</p>
                )}
            </div>

            {/* Email Address */}
            <div>
                <label className="block text-sm font-normal text-title mb-2">
                    Email address
                </label>
                <input
                    type="email"
                    placeholder="your@email.com"
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-title placeholder-gray-400 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-primary'
                    }`}
                />
                {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email.message as string}</p>
                )}
            </div>

            {/* Phone Number */}
            <div>
                <label className="block text-sm font-normal text-title mb-2">
                    Phone number
                </label>
                <input
                    type="tel"
                    placeholder="123456789"
                    {...register('phone')}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-title placeholder-gray-400 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-primary'
                    }`}
                />
                {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone.message as string}</p>
                )}
            </div>

            {/* Next Button (Matching User Image) */}
            <div className="pt-2">
                <button
                    type="button"
                    onClick={onNext}
                    className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm cursor-pointer inline-flex items-center gap-1.5"
                >
                    Next →
                </button>
            </div>
        </div>
    )
}

export default TalkStep1