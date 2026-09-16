'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getCurrentUser } from '@/utils/auth'

const Footer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { access } = await getCurrentUser()
                setIsLoggedIn(!!access)
            } catch {
                setIsLoggedIn(false)
            }
        }
        checkAuth();
    }, [pathname])

    return (
        <footer className="border-t border-gray-100 py-14 px-6 sm:px-12 max-w-[1728px] mx-auto mt-10 md:mt-20">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                {/* Left Side: Brand Logo */}
                <div>
                    <Link href="/" className="text-3xl md:text-[44px] font-normal tracking-tight text-title font-satoshi">
                        Livable™
                    </Link>
                </div>

                {/* Right Side: 2 Navigation Link Columns */}
                <div className="flex flex-row items-start gap-20 text-xl md:text-2xl text-title">
                    {/* Column 1 */}
                    <div className="flex flex-col space-y-2.5">
                        <Link href="/pricing" className="hover:text-black transition-colors">
                            Pricing
                        </Link>
                        <Link href="/substack-library" className="hover:text-black transition-colors">
                            Substack-library
                        </Link>
                        {isLoggedIn ? (
                            <Link href="/dashboard" className="hover:text-black transition-colors">
                                Portal
                            </Link>
                        ) : (
                            <Link href="/login" className="hover:text-black transition-colors">
                                Dashboard Login
                            </Link>
                        )}
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col space-y-2.5">
                        <a href="#" className="hover:text-black transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-black transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Center Copyright */}
            <div className="mt-12 text-center">
                <p className="text-sm text-title font-light">
                    © {new Date().getFullYear()} Livable™
                </p>
            </div>
        </footer>
    )
}

export default Footer