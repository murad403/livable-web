
'use client'

import React from 'react'
import { X } from 'lucide-react'

interface LifestyleAlignmentModalProps {
    isOpen: boolean
    onClose: () => void
}

const LifestyleAlignmentModal: React.FC<LifestyleAlignmentModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-10 relative shadow-xl border border-gray-100 max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors p-2 cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-semibold text-title mb-6">Lifestyle Alignment</h2>

                <div className="py-12 text-center text-gray-400 text-sm font-light">
                    Lifestyle Alignment details coming soon.
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full text-base font-medium transition-all shadow-sm cursor-pointer"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LifestyleAlignmentModal