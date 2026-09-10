'use client'

import React, { useState } from 'react'
import { X, CheckSquare, Square } from 'lucide-react'

interface MicroSocialBlueprintModalProps {
    isOpen: boolean
    onClose: () => void
}

const MicroSocialBlueprintModal: React.FC<MicroSocialBlueprintModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    // Interactive checkbox state
    const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({})

    const toggleTask = (taskId: string) => {
        setCheckedTasks((prev) => ({ ...prev, [taskId]: !prev[taskId] }))
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-8 md:p-12 relative shadow-xl border border-gray-100 max-h-[90vh] overflow-y-auto font-sans text-title">
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-8">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-title">
                        The Livable Micro-Social Blueprint™
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-black transition-colors p-1 cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Main Intro */}
                <div className="mb-10 space-y-4">
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                        True belonging isn't about collecting a massive network of surface-level contacts; it is about intentionally building what sociologists call Ambient Connections. These are the loose, recurring relationships that form the invisible protective layer of your daily life—the local barista who knows your order, the flower stall vendor who recognizes your face, or the regular on the neighborhood court.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                        Use this structured task matrix to begin anchoring your social infrastructure the moment your official move goes live. Move your body, embrace a little play, and let connections grow organically without self-imposed pressure.
                    </p>
                </div>

                {/* PHASE 1 */}
                <div className="mb-10">
                    <h3 className="text-lg sm:text-xl font-bold text-title pb-3 border-b border-gray-100 mb-6">
                        Phase 1: Establishing Ambient Circles (Weeks 1–2)
                    </h3>

                    <div className="space-y-6">
                        {/* Task 01 */}
                        <div className="flex items-start gap-4">
                            <button
                                onClick={() => toggleTask('task1')}
                                className="mt-0.5 text-gray-400 hover:text-title transition-colors cursor-pointer shrink-0"
                            >
                                {checkedTasks['task1'] ? (
                                    <CheckSquare className="w-5 h-5 text-primary" />
                                ) : (
                                    <Square className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            <div className="space-y-1">
                                <h4 className={`text-xs sm:text-sm font-bold text-title ${checkedTasks['task1'] ? 'line-through text-gray-400' : ''}`}>
                                    Task 01: The Regular Routine
                                </h4>
                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                                    Pick exactly one local café, one specific market stall, and one corner grocer. Commit to visiting them at roughly the same time every day or every other day. Speak the local language badly but warmly, be friendly, and let yourself become a recognizable part of their daily landscape.
                                </p>
                            </div>
                        </div>

                        {/* Task 02 */}
                        <div className="flex items-start gap-4">
                            <button
                                onClick={() => toggleTask('task2')}
                                className="mt-0.5 text-gray-400 hover:text-title transition-colors cursor-pointer shrink-0"
                            >
                                {checkedTasks['task2'] ? (
                                    <CheckSquare className="w-5 h-5 text-primary" />
                                ) : (
                                    <Square className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            <div className="space-y-1">
                                <h4 className={`text-xs sm:text-sm font-bold text-title ${checkedTasks['task2'] ? 'line-through text-gray-400' : ''}`}>
                                    Task 02: Physical Play Containers
                                </h4>
                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                                    Get out of your head and move your body. Join a neighborhood running club, book a recurring slot at a local racket club via the Playtomic app, or sign up for a yoga or pilates class. Physical play drops the social stakes and replaces networking anxiety with shared movement.
                                </p>
                            </div>
                        </div>

                        {/* Task 03 */}
                        <div className="flex items-start gap-4">
                            <button
                                onClick={() => toggleTask('task3')}
                                className="mt-0.5 text-gray-400 hover:text-title transition-colors cursor-pointer shrink-0"
                            >
                                {checkedTasks['task3'] ? (
                                    <CheckSquare className="w-5 h-5 text-primary" />
                                ) : (
                                    <Square className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            <div className="space-y-1">
                                <h4 className={`text-xs sm:text-sm font-bold text-title ${checkedTasks['task3'] ? 'line-through text-gray-400' : ''}`}>
                                    Task 03: The Organic Friendship Mix
                                </h4>
                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                                    Give yourself total permission to connect with both locals and fellow internationals. Connections with other foreigners provide immediate cognitive comfort and logistical survival tips; local connections provide deep cultural roots. Do not force immediate local integration—let the two groups blend organically over time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PHASE 2 */}
                <div className="mb-10">
                    <h3 className="text-lg sm:text-xl font-bold text-title pb-3 border-b border-gray-100 mb-6">
                        Phase 2: Intentional Network Tracks (Weeks 3–6)
                    </h3>

                    <div className="space-y-6">
                        {/* Task 04 */}
                        <div className="flex items-start gap-4">
                            <button
                                onClick={() => toggleTask('task4')}
                                className="mt-0.5 text-gray-400 hover:text-title transition-colors cursor-pointer shrink-0"
                            >
                                {checkedTasks['task4'] ? (
                                    <CheckSquare className="w-5 h-5 text-primary" />
                                ) : (
                                    <Square className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            <div className="space-y-1">
                                <h4 className={`text-xs sm:text-sm font-bold text-title ${checkedTasks['task4'] ? 'line-through text-gray-400' : ''}`}>
                                    Task 04: The Hands-On Cultural Anchor
                                </h4>
                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                                    Register for a recurring, weekly creative workshop where language is secondary to action—like a pottery studio, a printmaking class, or a community garden plot. Working with your hands alongside the same group of residents every week builds natural familiarity without the pressure of forced conversation.
                                </p>
                            </div>
                        </div>

                        {/* Task 05 */}
                        <div className="flex items-start gap-4">
                            <button
                                onClick={() => toggleTask('task5')}
                                className="mt-0.5 text-gray-400 hover:text-title transition-colors cursor-pointer shrink-0"
                            >
                                {checkedTasks['task5'] ? (
                                    <CheckSquare className="w-5 h-5 text-primary" />
                                ) : (
                                    <Square className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            <div className="space-y-1">
                                <h4 className={`text-xs sm:text-sm font-bold text-title ${checkedTasks['task5'] ? 'line-through text-gray-400' : ''}`}>
                                    Task 05: Shoulder-to-Shoulder Volunteering
                                </h4>
                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                                    Dedicate an afternoon to a local animal shelter, an environmental beach cleanup, or a neighborhood food bank. Volunteering is the ultimate social hack because it completely bypasses traditional small talk—you are both actively focused on solving a shared problem.
                                </p>
                            </div>
                        </div>

                        {/* Task 06 */}
                        <div className="flex items-start gap-4">
                            <button
                                onClick={() => toggleTask('task6')}
                                className="mt-0.5 text-gray-400 hover:text-title transition-colors cursor-pointer shrink-0"
                            >
                                {checkedTasks['task6'] ? (
                                    <CheckSquare className="w-5 h-5 text-primary" />
                                ) : (
                                    <Square className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            <div className="space-y-1">
                                <h4 className={`text-xs sm:text-sm font-bold text-title ${checkedTasks['task6'] ? 'line-through text-gray-400' : ''}`}>
                                    Task 06: Align Your Professional Blueprint
                                </h4>
                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                                    If you are looking to anchor your career or business profile, locate your new city's designated soft-landing tracks. Check for active regional startup hubs or register with a local US Alumni Chapter to step into an immediate, high-level professional environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Closing Note */}
                <div className="mb-10 pt-4">
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                        Remember, this takes time. We've been there ourselves, alongside the eight million Americans abroad who understand the tension, exhilaration, and ultimate reward of building community. Be kind to yourself, let the process unfold, and remember to have fun with it.
                    </p>
                </div>

                {/* Modal Footer */}
                <div className="pt-6 border-t border-gray-100 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-primary hover:bg-primary-hover text-white px-10 py-3 rounded-xl text-base font-semibold transition-all shadow-xs cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MicroSocialBlueprintModal