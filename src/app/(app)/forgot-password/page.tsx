'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const forgotPasswordSchema = z.object({
    email: z.string().email('Please enter a valid email address')
})

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>

export default function ForgotPasswordPage() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ForgotPasswordValues>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: ''
        }
    })

    const onSubmit = (data: ForgotPasswordValues) => {
        console.log('Forgot password email submitted:', data)
        // Navigate to verify-otp page with email query param
        router.push(`/verify-otp?email=${encodeURIComponent(data.email)}`)
    }

    return (
        <div className="min-h-screen bg-white text-title font-sans flex flex-col justify-between selection:bg-primary selection:text-white">
            <main className="py-16 md:py-20 px-6 sm:px-12 max-w-md mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                        FORGOT PASSWORD
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-title mb-3">
                        Reset your password
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed max-w-xs mx-auto">
                        Enter the email address linked to your account and we&apos;ll send you a 6-digit verification code.
                    </p>
                </div>

                {/* Card Container */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Email Address Input */}
                        <div>
                            <label className="block text-xs font-semibold text-title uppercase tracking-wider mb-2">
                                EMAIL ADDRESS
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    {...register('email')}
                                    className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border text-sm text-title placeholder:text-gray-400 focus:outline-none transition-all ${
                                        errors.email
                                            ? 'border-primary focus:border-primary'
                                            : 'border-gray-200 focus:border-title'
                                    }`}
                                />
                                <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                            </div>
                            {errors.email && (
                                <p className="text-xs text-primary mt-1.5 font-medium">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2 mt-2"
                        >
                            <span>Send 6-Digit Code</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    {/* Footer Link back to Login */}
                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                        <Link
                            href="/login"
                            className="text-xs text-gray-500 font-light hover:text-title transition-colors inline-flex items-center gap-1.5"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Back to Sign In</span>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}