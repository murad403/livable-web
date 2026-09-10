'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2 } from 'lucide-react'
import TalkStep1 from './TalkStep1'
import TalkStep2 from './TalkStep2'

const formSchema = z.object({
    fullName: z.string().min(2, 'Please enter your full name'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(5, 'Please enter a valid phone number'),
    relocationStage: z.string().min(1, 'Please select your relocation stage'),
    selectedPlaces: z.array(z.string()).min(1, 'Please select at least one location'),
    scoutingPeople: z.string().min(1, 'Please select who will be scouting')
})

export type FormValues = z.infer<typeof formSchema>

interface TalkWithUsProps {
    preselectedCity?: string
}

const TalkWithUs: React.FC<TalkWithUsProps> = ({ preselectedCity }) => {
    const [step, setStep] = useState<1 | 2>(1)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        control,
        trigger,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            relocationStage: '',
            selectedPlaces: preselectedCity ? [preselectedCity] : ['Lisbon'],
            scoutingPeople: 'Just me'
        }
    })

    React.useEffect(() => {
        if (preselectedCity) {
            setValue('selectedPlaces', [preselectedCity], { shouldValidate: true, shouldDirty: true })
        }
    }, [preselectedCity, setValue])

    const handleNextStep = async () => {
        const isValid = await trigger(['fullName', 'email', 'phone'])
        if (isValid) {
            setStep(2)
        }
    }

    const onSubmit = async (data: FormValues) => {
        console.log('Submitted form data:', data)
        await new Promise((resolve) => setTimeout(resolve, 800))
        setIsSubmitted(true)
    }

    return (
        <section id="talk-with-us" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto scroll-mt-24">
            {/* Top Section Label (Matching User Image) */}
            <span className="text-xs sm:text-sm font-semibold text-title uppercase tracking-widest block mb-12">
                Talk With Us
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Text Column (Matching User Image) */}
                <div className="lg:col-span-6">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium text-title tracking-tight leading-none mb-3">
                        Hello, Europe.
                    </h2>
                    <p className="text-2xl sm:text-3xl text-title font-normal tracking-tight">
                        Your first step starts here.
                    </p>
                </div>

                {/* Right Form Card Column (Matching User Image) */}
                <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm max-w-lg w-full lg:ml-auto">
                    {/* Top Center Progress Dots Indicator (Matching User Image) */}
                    {!isSubmitted && (
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <span
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                    step >= 1 ? 'bg-primary' : 'bg-gray-200'
                                }`}
                            />
                            <span
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                    step === 2 ? 'bg-primary' : 'bg-gray-200'
                                }`}
                            />
                        </div>
                    )}

                    {isSubmitted ? (
                        <div className="text-center py-12 px-4 space-y-4">
                            <CheckCircle2 className="w-16 h-16 text-primary mx-auto animate-bounce" />
                            <h3 className="text-2xl font-bold text-title">You're all set!</h3>
                            <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base">
                                Thank you for booking your introductory call. Our relocation advisors have received your preferences and will reach out within 24 hours.
                            </p>
                            <div className="pt-6">
                                <button
                                    onClick={() => {
                                        reset()
                                        setStep(1)
                                        setIsSubmitted(false)
                                    }}
                                    className="bg-gray-100 hover:bg-gray-200 text-title text-xs font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
                                >
                                    Submit another response
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {step === 1 ? (
                                <TalkStep1 register={register} errors={errors} onNext={handleNextStep} />
                            ) : (
                                <TalkStep2
                                    control={control}
                                    setValue={setValue}
                                    errors={errors}
                                    onBack={() => setStep(1)}
                                    isSubmitting={isSubmitting}
                                />
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default TalkWithUs