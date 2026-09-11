'use client'

import React, { useState, useRef, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft, ArrowRight, KeyRound, RefreshCw } from 'lucide-react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const otpSchema = z.object({
    otp: z
        .string()
        .length(6, 'Please enter all 6 digits')
        .regex(/^\d+$/, 'Code must contain numbers only')
})

type OtpValues = z.infer<typeof otpSchema>

function VerifyOtpContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const email = searchParams.get('email') || 'your@email.com'

    const [isResending, setIsResending] = useState(false)
    const [resendMessage, setResendMessage] = useState('')
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting }
    } = useForm<OtpValues>({
        resolver: zodResolver(otpSchema),
        defaultValues: {
            otp: ''
        }
    })

    const [digitValues, setDigitValues] = useState<string[]>(Array(6).fill(''))

    // Synchronize array digits into react-hook-form state
    useEffect(() => {
        const fullOtp = digitValues.join('')
        setValue('otp', fullOtp, { shouldValidate: fullOtp.length === 6 })
    }, [digitValues, setValue])

    const handleDigitChange = (index: number, value: string) => {
        // Handle single digit numeric entry
        const cleanValue = value.replace(/\D/g, '')
        
        if (cleanValue.length === 0) {
            const updated = [...digitValues]
            updated[index] = ''
            setDigitValues(updated)
            return
        }

        // If multiple digits pasted directly into field
        if (cleanValue.length > 1) {
            handlePasteData(cleanValue)
            return
        }

        const updated = [...digitValues]
        updated[index] = cleanValue
        setDigitValues(updated)

        // Focus next input box
        if (index < 5) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace') {
            if (!digitValues[index] && index > 0) {
                // If current box is empty, clear previous and move focus back
                const updated = [...digitValues]
                updated[index - 1] = ''
                setDigitValues(updated)
                inputRefs.current[index - 1]?.focus()
            }
        }
    }

    const handlePasteData = (pastedText: string) => {
        const digits = pastedText.replace(/\D/g, '').slice(0, 6).split('')
        if (digits.length === 0) return

        const updated = Array(6).fill('')
        digits.forEach((digit, i) => {
            updated[i] = digit
        })
        setDigitValues(updated)

        const targetFocusIndex = Math.min(digits.length, 5)
        inputRefs.current[targetFocusIndex]?.focus()
    }

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault()
        const pastedText = e.clipboardData.getData('text')
        handlePasteData(pastedText)
    }

    const handleResendCode = () => {
        setIsResending(true)
        setResendMessage('')
        setTimeout(() => {
            setIsResending(false)
            setResendMessage('A new 6-digit code has been sent!')
        }, 1000)
    }

    const onSubmit = (data: OtpValues) => {
        console.log('OTP verified:', data.otp)
        // Proceed to reset password page
        router.push(`/reset-password?email=${encodeURIComponent(email)}`)
    }

    return (
        <main className="py-16 md:py-20 px-6 sm:px-12 max-w-md mx-auto w-full">
            {/* Header */}
            <div className="text-center mb-8">
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                    VERIFICATION CODE
                </span>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-title mb-3">
                    Enter 6-digit code
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed max-w-xs mx-auto">
                    We sent a verification code to{' '}
                    <span className="font-medium text-title">{email}</span>. Enter it below to continue.
                </p>
            </div>

            {/* OTP Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label className="block text-xs font-semibold text-title uppercase tracking-wider text-center mb-4">
                            6-DIGIT VERIFICATION CODE
                        </label>

                        {/* 6 Digit Input Boxes */}
                        <div className="grid grid-cols-6 gap-1.5 sm:gap-2.5 max-w-sm mx-auto">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <input
                                    key={index}
                                    ref={(el) => {
                                        inputRefs.current[index] = el
                                    }}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digitValues[index]}
                                    onChange={(e) => handleDigitChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={handlePaste}
                                    className={`w-full h-11 sm:h-13 text-center text-base sm:text-xl font-bold rounded-xl sm:rounded-2xl border text-title focus:outline-none transition-all p-0 ${
                                        errors.otp
                                            ? 'border-primary focus:border-primary bg-red-50/20'
                                            : digitValues[index]
                                            ? 'border-title bg-gray-50/50'
                                            : 'border-gray-200 focus:border-title'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Hidden Controller for react-hook-form validation binding */}
                        <Controller
                            name="otp"
                            control={control}
                            render={() => <input type="hidden" />}
                        />

                        {errors.otp && (
                            <p className="text-xs text-primary text-center mt-2.5 font-medium">
                                {errors.otp.message}
                            </p>
                        )}
                    </div>

                    {/* Resend Code Action */}
                    <div className="text-center">
                        {resendMessage ? (
                            <p className="text-xs text-emerald-600 font-medium">{resendMessage}</p>
                        ) : (
                            <button
                                type="button"
                                onClick={handleResendCode}
                                disabled={isResending}
                                className="text-xs text-gray-500 font-light hover:text-primary transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                            >
                                <RefreshCw className={`w-3 h-3 ${isResending ? 'animate-spin' : ''}`} />
                                <span>{isResending ? 'Sending code...' : "Didn't receive code? Resend"}</span>
                            </button>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2 mt-2"
                    >
                        <span>Verify & Continue</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </form>

                {/* Footer Link */}
                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                    <Link
                        href="/forgot-password"
                        className="text-xs text-gray-500 font-light hover:text-title transition-colors inline-flex items-center gap-1.5"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Change Email Address</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default function VerifyOtpPage() {
    return (
        <div className="min-h-screen bg-white text-title font-sans flex flex-col justify-between selection:bg-primary selection:text-white">
            <Suspense fallback={
                <div className="py-20 text-center text-gray-400 text-sm">Loading verification...</div>
            }>
                <VerifyOtpContent />
            </Suspense>
        </div>
    )
}