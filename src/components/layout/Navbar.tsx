'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { getCurrentUser } from '@/utils/auth'
import { Button } from '@/components/ui/button'

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
            const el = document.getElementById('get-started');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            router.push('/#get-started')
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

    if (pathname !== '/') {
        return (
            <header className="w-full bg-white border-b border-gray-100 shadow-xs z-50 sticky top-0">
                <div className="max-w-[1728px] mx-auto px-4 sm:px-8 md:px-12 py-4 flex items-center justify-between">
                    {/* Left: Livable Brand Logo */}
                    <Link href="/" className="text-3xl md:text-[44px] font-normal tracking-tight text-title font-satoshi">
                        Livable™
                    </Link>

                    {/* Right: Navigation actions */}
                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                        <Link
                            href="/pricing"
                            className={`text-base md:text-2xl font-medium transition-colors ${
                                pathname === '/pricing' ? 'text-primary' : 'text-title hover:text-black'
                            }`}
                        >
                            Pricing
                        </Link>
                        {isLoggedIn ? (
                            <Link
                                href="/dashboard"
                                className={`text-base md:text-2xl font-medium transition-colors ${
                                    pathname === '/dashboard' ? 'text-primary' : 'text-title hover:text-black'
                                }`}
                            >
                                Portal
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className={`text-base md:text-2xl font-medium transition-colors ${
                                    pathname === '/login' ? 'text-primary' : 'text-title hover:text-black'
                                }`}
                            >
                                Login
                            </Link>
                        )}
                        <Button
                            onClick={() => router.push("/talk-with-us")}
                            variant="customPill"
                        >
                            Talk With Us
                        </Button>
                    </div>
                </div>
            </header>
        )
    }

    return (
        <>
            {/* Unscrolled Top Navigation Header (Home Page Only) */}
            <header
                className={`w-full transition-all duration-300 ${
                    scrolled ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 translate-y-0'
                } pt-6 pb-4 px-4 sm:px-8 md:px-12 max-w-[1728px] mx-auto z-40`}
            >
                {/* Top line: Pricing & Login/Portal links */}
                <div className="flex justify-center items-center gap-6 sm:gap-8 md:mb-20 mb-8 sm:mb-12">
                    <Link
                        href="/pricing"
                        className="text-2xl font-medium transition-colors text-title hover:text-primary"
                    >
                        Pricing
                    </Link>
                    {isLoggedIn ? (
                        <Link
                            href="/dashboard"
                            className="text-2xl font-medium transition-colors text-title hover:text-primary"
                        >
                            Portal
                        </Link>
                    ) : (
                        <Link
                            href="/login"
                            className="text-2xl font-medium transition-colors text-title hover:text-primary"
                        >
                            Login
                        </Link>
                    )}
                </div>

                {/* Main Header line: Livable Brand Title on Left + CTA Actions on Right */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <Link href="/" className="text-6xl xs:text-8xl sm:text-[200px] md:text-[230px] lg:text-[298px] font-normal tracking-tight text-title font-satoshi leading-none py-10">
                        Livable™
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
                        <a
                            href="/pricing#how-it-works"
                            onClick={handleSeeHowItWorks}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider text-title uppercase hover:text-primary transition-colors cursor-pointer group"
                        >
                            <span className="underline underline-offset-4 decoration-1">SEE HOW IT WORKS</span>
                            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                        </a>
                        <Button
                            onClick={handleTalkWithUs}
                        >
                            Get started
                        </Button>
                    </div>
                </div>
            </header>

            {/* Fixed Scrolled Navbar (Home Page Only) */}
            <div
                className={`fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300 transform ${
                    scrolled
                        ? 'translate-y-0 opacity-100 pointer-events-auto'
                        : '-translate-y-full opacity-0 pointer-events-none'
                }`}
            >
                <div className="max-w-[1728px] mx-auto px-4 sm:px-8 md:px-12 py-3 flex items-center justify-between">
                    {/* Left: Livable Brand Logo */}
                    <Link href="/" className="text-3xl md:text-[44px] font-normal tracking-tight text-title font-satoshi">
                        Livable™
                    </Link>

                    {/* Right: Navigation actions */}
                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                        <Link
                            href="/pricing"
                            className="text-base md:text-2xl font-medium transition-colors text-title hover:text-black"
                        >
                            Pricing
                        </Link>
                        {isLoggedIn ? (
                            <Link
                                href="/dashboard"
                                className="text-base md:text-2xl font-medium transition-colors text-title hover:text-black"
                            >
                                Portal
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="text-base md:text-2xl font-medium transition-colors text-title hover:text-black"
                            >
                                Login
                            </Link>
                        )}
                        <Button
                            onClick={() => router.push("/talk-with-us")}
                        >
                            Talk With Us
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar