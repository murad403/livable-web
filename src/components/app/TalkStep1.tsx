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
        <div className="space-y-6">
            {/* Step Header */}
            <div>
                <span className="text-sm font-semibold text-[#FE3F39]">Step 1</span>
                <h3 className="text-xl font-semibold text-[#282828] mt-1">Contact Information</h3>
                <p className="text-xs text-gray-500 mt-1">Let us know how we can reach you.</p>
            </div>

            {/* Full Name */}
            <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Full Name
                </label>
                <input
                    type="text"
                    placeholder="John Doe"
                    {...register('fullName')}
                    className={`w-full px-4 py-3 rounded-2xl border text-sm text-[#282828] focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#FE3F39]'
                    }`}
                />
                {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1">{errors.fullName.message as string}</p>
                )}
            </div>

            {/* Email Address */}
            <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Email Address
                </label>
                <input
                    type="email"
                    placeholder="john@example.com"
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-2xl border text-sm text-[#282828] focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#FE3F39]'
                    }`}
                />
                {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email.message as string}</p>
                )}
            </div>

            {/* Phone Number */}
            <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Phone Number
                </label>
                <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    {...register('phone')}
                    className={`w-full px-4 py-3 rounded-2xl border text-sm text-[#282828] focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-[#FE3F39]'
                    }`}
                />
                {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone.message as string}</p>
                )}
            </div>

            {/* Next Button */}
            <div className="pt-2">
                <button
                    type="button"
                    onClick={onNext}
                    className="w-full bg-[#FE3F39] hover:bg-[#e0322d] text-white py-3.5 rounded-full text-sm font-semibold transition-all shadow hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                    Continue to Step 2 →
                </button>
            </div>
        </div>
    )
}

export default TalkStep1