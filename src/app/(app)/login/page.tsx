'use client'

import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowRight, Lock, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    rememberMe: z.boolean().optional()
})

type LoginValues = z.infer<typeof loginSchema>

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<LoginValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        }
    })

    const onSubmit = (data: LoginValues) => {
        console.log('Login submitted:', data)
        alert(`Welcome back to Livable! Logged in as: ${data.email}`)
    }

    return (
        <div className="min-h-screen bg-white text-title font-sans flex flex-col justify-between selection:bg-primary selection:text-white">
            <main className="py-16 md:py-20 px-6 sm:px-12 max-w-md mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                        DASHBOARD LOGIN
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-title mb-3">
                        Sign in to Livable<span className="text-sm sm:text-base align-super ml-0.5 font-normal">™</span>
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed max-w-xs mx-auto">
                        Access your personalized scouting itineraries, city dossiers, and advisor messages.
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Email Address */}
                        <div>
                            <label className="block text-xs font-semibold text-title uppercase tracking-wider mb-2">
                                EMAIL ADDRESS
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    {...register('email')}
                                    className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border text-sm text-title placeholder:text-gray-400 focus:outline-none transition-all ${errors.email
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

                        {/* Password */}
                        <div>
                            <label className="block text-xs font-semibold text-title uppercase tracking-wider mb-2">
                                PASSWORD
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    {...register('password')}
                                    className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border text-sm text-title placeholder:text-gray-400 focus:outline-none transition-all ${errors.password
                                            ? 'border-primary focus:border-primary'
                                            : 'border-gray-200 focus:border-title'
                                        }`}
                                />
                                <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                            </div>
                            {errors.password && (
                                <p className="text-xs text-primary mt-1.5 font-medium">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Remember me checkbox (No forgot password link as requested) */}
                        <div className="flex items-center text-xs pt-1">
                            <label className="flex items-center gap-2.5 cursor-pointer text-gray-600 font-normal select-none">
                                <input
                                    type="checkbox"
                                    {...register('rememberMe')}
                                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary cursor-pointer"
                                />
                                <span>Remember me</span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2 mt-2"
                        >
                            <span>Sign In</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    {/* Footer Divider & Action */}
                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                        <p className="text-xs text-gray-500 font-light">
                            Don't have an account?{' '}
                            <Link href="/#talk-with-us" className="text-primary font-semibold hover:underline">
                                Book a scouting trip
                            </Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
