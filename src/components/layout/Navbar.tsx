'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { getCurrentUser } from '@/utils/auth'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { access } = await getCurrentUser()
                setIsLoggedIn(!!access)
            } catch {
                setIsLoggedIn(false)
            }
        }
        checkAuth()
    }, [pathname])

    const handleTalkWithUs = (e: React.MouseEvent) => {
        e.preventDefault()
        if (pathname === '/') {
            const el = document.getElementById('talk-with-us')
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            router.push('/#talk-with-us')
        }
    }

    const handleSeeHowItWorks = (e: React.MouseEvent) => {
        e.preventDefault()
        if (pathname === '/pricing') {
            const el = document.getElementById('how-it-works')
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            router.push('/pricing#how-it-works')
        }
    }

    return (
        <>
            {/* Unscrolled Top Navigation Header */}
            <header
                className={`w-full transition-all duration-300 ${
                    scrolled ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 translate-y-0'
                } pt-6 pb-4 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto z-40`}
            >
                {/* Top line: Pricing & Login/Portal links */}
                <div className="flex justify-center items-center gap-6 sm:gap-8 md:mb-20 mb-8 sm:mb-12">
                    <Link
                        href="/pricing"
                        className={`text-xs sm:text-sm font-medium transition-colors ${
                            pathname === '/pricing' ? 'text-primary' : 'text-title'
                        }`}
                    >
                        Pricing
                    </Link>
                    {isLoggedIn ? (
                        <Link
                            href="/dashboard"
                            className={`text-xs sm:text-sm font-medium transition-colors ${
                                pathname === '/dashboard' ? 'text-primary' : 'text-title'
                            }`}
                        >
                            Portal
                        </Link>
                    ) : (
                        <Link
                            href="/login"
                            className={`text-xs sm:text-sm font-medium transition-colors ${
                                pathname === '/login' ? 'text-primary' : 'text-title'
                            }`}
                        >
                            Login
                        </Link>
                    )}
                </div>

                {/* Main Header line: Livable Brand Title on Left + CTA Actions on Right */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <Link href="/" className="text-6xl xs:text-8xl sm:text-[160px] md:text-[200px] lg:text-[225px] font-medium tracking-tight text-title font-sans leading-none">
                        Livable<span className="text-xl sm:text-2xl md:text-3xl align-top ml-0.5 sm:ml-1 font-light">TM</span>
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-1">
                        <button
                            onClick={handleTalkWithUs}
                            className="bg-primary hover:bg-primary-hover text-white px-6 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all shadow-sm hover:shadow-md cursor-pointer"
                        >
                            Get started
                        </button>
                        <a
                            href="/pricing#how-it-works"
                            onClick={handleSeeHowItWorks}
                            className="text-xs sm:text-sm font-semibold tracking-wider text-title uppercase underline underline-offset-4 hover:text-primary transition-colors cursor-pointer"
                        >
                            SEE HOW IT WORKS →
                        </a>
                    </div>
                </div>
            </header>

            {/* Fixed Scrolled Navbar */}
            <div
                className={`fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300 transform ${
                    scrolled
                        ? 'translate-y-0 opacity-100 pointer-events-auto'
                        : '-translate-y-full opacity-0 pointer-events-none'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-3 flex items-center justify-between">
                    {/* Left: Livable Brand Logo */}
                    <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-normal tracking-tight text-title">
                        Livable<span className="text-xs align-super ml-0.5 font-normal">™</span>
                    </Link>

                    {/* Right: Navigation actions */}
                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                        <Link
                            href="/pricing"
                            className={`text-xs sm:text-sm md:text-base font-medium transition-colors ${
                                pathname === '/pricing' ? 'text-primary' : 'text-title hover:text-black'
                            }`}
                        >
                            Pricing
                        </Link>
                        {isLoggedIn ? (
                            <Link
                                href="/dashboard"
                                className={`text-xs sm:text-sm md:text-base font-medium transition-colors ${
                                    pathname === '/dashboard' ? 'text-primary' : 'text-title hover:text-black'
                                }`}
                            >
                                Portal
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className={`text-xs sm:text-sm md:text-base font-medium transition-colors ${
                                    pathname === '/login' ? 'text-primary' : 'text-title hover:text-black'
                                }`}
                            >
                                Login
                            </Link>
                        )}
                        <button
                            onClick={handleTalkWithUs}
                            className="bg-primary hover:bg-primary-hover text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all shadow-sm hover:shadow-md cursor-pointer"
                        >
                            Talk With Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar