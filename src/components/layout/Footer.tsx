'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="border-t border-gray-200/80 bg-white py-12 px-6 sm:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                {/* Left side */}
                <div>
                    <Link href="/" className="text-3xl font-semibold tracking-tight text-[#282828] font-sans">
                        Livable<span className="text-xs align-super ml-0.5 font-normal">™</span>
                    </Link>
                    <p className="text-xs sm:text-sm text-gray-500 max-w-md mt-2 leading-relaxed">
                        Move from the U.S. to Spain or Portugal efficiently, joyfully, and without regret.
                    </p>
                </div>

                {/* Right side navigation & Copyright */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
                    <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
                        <Link href="/" className="hover:text-black transition-colors">
                            Home
                        </Link>
                        <Link href="/pricing" className="hover:text-black transition-colors">
                            Pricing
                        </Link>
                        <Link href="/login" className="hover:text-black transition-colors">
                            Login
                        </Link>
                        <Link href="/#talk-with-us" className="hover:text-[#FE3F39] transition-colors">
                            Talk With Us
                        </Link>
                    </div>

                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} Livable™. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer