'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2, Eye, EyeOff, Lock } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const resetPasswordSchema = z
    .object({
        password: z.string().min(6, 'Password must be at least 6 characters'),
        confirmPassword: z.string().min(6, 'Please confirm your password')
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword']
    })

type ResetPasswordValues = z.infer<typeof resetPasswordSchema>

export default function ResetPasswordPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ResetPasswordValues>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: '',
            confirmPassword: ''
        }
    })

    const onSubmit = (data: ResetPasswordValues) => {
        console.log('Reset password submitted:', data)
        setIsSuccess(true)
        // Automatically redirect to Sign In page after 2 seconds
        setTimeout(() => {
            router.push('/login')
        }, 2000)
    }

    return (
        <div className="min-h-screen bg-white text-title font-sans flex flex-col justify-between selection:bg-primary selection:text-white">
            <main className="py-16 md:py-20 px-6 sm:px-12 max-w-md mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                        RESET PASSWORD
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-title mb-3">
                        Set new password
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed max-w-xs mx-auto">
                        Your new password must be at least 6 characters long and different from previous passwords.
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                    {isSuccess ? (
                        /* Success State */
                        <div className="text-center py-6 space-y-4">
                            <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h2 className="text-xl font-semibold text-title">Password Reset Complete!</h2>
                            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                                Your password has been successfully updated. Redirecting you to the sign in page...
                            </p>
                            <Link
                                href="/login"
                                className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer items-center justify-center gap-2 mt-4 inline-flex"
                            >
                                <span>Sign In Now</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ) : (
                        /* Reset Form */
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* New Password */}
                            <div>
                                <label className="block text-xs font-semibold text-title uppercase tracking-wider mb-2">
                                    NEW PASSWORD
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        {...register('password')}
                                        className={`w-full pl-11 pr-11 py-3.5 rounded-2xl border text-sm text-title placeholder:text-gray-400 focus:outline-none transition-all ${
                                            errors.password
                                                ? 'border-primary focus:border-primary'
                                                : 'border-gray-200 focus:border-title'
                                        }`}
                                    />
                                    <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-xs text-primary mt-1.5 font-medium">{errors.password.message}</p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-xs font-semibold text-title uppercase tracking-wider mb-2">
                                    CONFIRM PASSWORD
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        {...register('confirmPassword')}
                                        className={`w-full pl-11 pr-11 py-3.5 rounded-2xl border text-sm text-title placeholder:text-gray-400 focus:outline-none transition-all ${
                                            errors.confirmPassword
                                                ? 'border-primary focus:border-primary'
                                                : 'border-gray-200 focus:border-title'
                                        }`}
                                    />
                                    <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="w-4 h-4" />
                                        ) : (
                                            <Eye className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="text-xs text-primary mt-1.5 font-medium">
                                        {errors.confirmPassword.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2 mt-2"
                            >
                                <span>Reset Password</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    )}

                    {/* Footer Link */}
                    {!isSuccess && (
                        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                            <Link
                                href="/login"
                                className="text-xs text-gray-500 font-light hover:text-title transition-colors inline-flex items-center gap-1.5"
                            >
                                <ArrowLeft className="w-3.5 h-3.5" />
                                <span>Back to Sign In</span>
                            </Link>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}