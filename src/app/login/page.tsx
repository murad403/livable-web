'use client'

import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowRight, Lock, Mail } from 'lucide-react'

export default function LoginPage() {
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Welcome back to Livable Expat Portal!')
    }

    return (
        <div className="min-h-screen bg-white text-[#282828] font-sans flex flex-col justify-between">
            <div>
                <Navbar />
                <main className="py-16 px-6 sm:px-12 max-w-md mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-xs font-semibold text-[#FE3F39] uppercase tracking-widest block mb-2">
                            Expat Portal
                        </span>
                        <h1 className="text-3xl font-bold tracking-tight text-[#282828] mb-2">
                            Sign in to Livable™
                        </h1>
                        <p className="text-xs text-gray-500">
                            Access your personalized scouting itineraries, city dossiers, and advisor messages.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-[#FE3F39] transition-colors"
                                    />
                                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-[#FE3F39] transition-colors"
                                    />
                                    <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-xs pt-1">
                                <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                                    <input type="checkbox" className="rounded border-gray-300 text-[#FE3F39] focus:ring-[#FE3F39]" />
                                    <span>Remember me</span>
                                </label>
                                <a href="#" className="text-[#FE3F39] font-medium hover:underline">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#FE3F39] hover:bg-[#e0322d] text-white py-3.5 rounded-full text-sm font-semibold transition-all shadow hover:shadow-md cursor-pointer flex items-center justify-center gap-2 mt-4"
                            >
                                <span>Sign In</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                            <p className="text-xs text-gray-500">
                                Don't have an account?{' '}
                                <Link href="/#talk-with-us" className="text-[#FE3F39] font-semibold hover:underline">
                                    Book a scouting trip
                                </Link>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}
