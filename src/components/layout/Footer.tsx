'use client'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="border-t border-gray-100 bg-white py-14 px-6 sm:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                {/* Left Side: Brand Logo */}
                <div>
                    <Link href="/" className="text-3xl sm:text-4xl font-normal tracking-tight text-title font-sans">
                        Livable<span className="text-base align-top ml-0.5 font-normal">™</span>
                    </Link>
                </div>

                {/* Right Side: 2 Navigation Link Columns */}
                <div className="flex flex-row items-start gap-12 sm:gap-20 text-base text-gray-500 font-normal">
                    {/* Column 1 */}
                    <div className="flex flex-col space-y-3">
                        <Link href="/pricing" className="hover:text-black transition-colors">
                            Pricing
                        </Link>
                        <a href="https://substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                            Substack-library
                        </a>
                        <Link href="/login" className="hover:text-black transition-colors">
                            Dashboard Login
                        </Link>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col space-y-3">
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