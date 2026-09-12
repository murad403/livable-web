'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import TalkStep1 from './TalkStep1'
import TalkStep2 from './TalkStep2'
import { useBookTalkWithUsMutation } from '@/redux/features/app/app.api'

const formSchema = z.object({
    fullName: z.string().min(1, 'Please enter your full name'),
    email: z.string().min(1, "Email is required").email('Please enter a valid email address'),
    phone: z.string().min(1, "Phone number is required"),
    relocationStage: z.string().min(1, 'Please select your relocation stage'),
    selectedPlaces: z.array(z.string()).min(1, 'Please select at least one location'),
    scoutingPeople: z.string().min(1, 'Please select who will be scouting')
})

export type FormValues = z.infer<typeof formSchema>

interface TalkWithUsProps {
    preselectedCity?: string
}

const mapRelocationStage = (stage: string): string => {
    switch (stage) {
        case 'Just starting to explore':
            return 'just_exploring'
        case 'Researching independently':
            return 'researching'
        case "I know I want to move, but I'm not sure where":
        case "I know I want to move, but not where":
            return 'know_move_not_where'
        case 'I have a specific city in mind':
            return 'specific_city'
        case 'Ready to schedule a scouting trip':
            return 'ready_scouting'
        default:
            return stage.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
    }
}

const mapPlace = (place: string): string => {
    switch (place) {
        case 'Lisbon':
            return 'lisbon'
        case 'Porto':
            return 'porto'
        case 'San Sebastián':
            return 'san_sebastian'
        case 'Málaga':
            return 'malaga'
        case 'Valencia':
            return 'valencia'
        case 'Málaga 2x':
            return 'malaga_2x'
        case "I'm not sure yet":
            return 'not_sure'
        default:
            return place.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
    }
}

const mapScoutingPeople = (people: string): string => {
    switch (people) {
        case 'Just me':
            return 'just_me'
        case 'Two people':
            return 'two_people'
        default:
            return people.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')
    }
}

const TalkWithUs: React.FC<TalkWithUsProps> = ({ preselectedCity }) => {
    const [step, setStep] = useState<1 | 2>(1)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [bookTalkWithUs, { isLoading: isBooking }] = useBookTalkWithUsMutation()

    const { register, handleSubmit , setValue, control, trigger, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
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
        try {
            const payload = {
                full_name: data.fullName,
                email: data.email,
                phone_number: data.phone,
                relocation_process_type: mapRelocationStage(data.relocationStage),
                considering_places_type: data.selectedPlaces.map(mapPlace).join(','),
                scouting_people_type: mapScoutingPeople(data.scoutingPeople)
            }

            const res = await bookTalkWithUs(payload).unwrap()
            toast.success(res.message || 'Booked successfully!')
            setIsSubmitted(true)
        } catch (err: any) {
            const errorMsg =
                err?.data?.message ||
                err?.data?.detail ||
                err?.data?.error ||
                'Failed to book introductory call. Please try again.'
            toast.error(errorMsg)
        }
    }

    if (isSubmitted) {
        return (
            <section id="talk-with-us" className="py-24 sm:py-32 px-6 sm:px-12 max-w-4xl mx-auto scroll-mt-24 text-center">
                <div className="space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-title leading-tight">
                        Thank you. We are looking forward to working with you.
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-title font-normal pt-2">
                        We have received your parameters and will review them before we connect.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed max-w-xl mx-auto pt-2">
                        Please check your inbox within 24 hours. We will send you your initial next steps and a personal invitation to schedule your 20-minute introductory conversation.
                    </p>
                    <div className="pt-8">
                        <button
                            onClick={() => {
                                reset()
                                setStep(1)
                                setIsSubmitted(false)
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-title hover:text-primary transition-colors cursor-pointer"
                        >
                            <span>← Return Home</span>
                        </button>
                    </div>
                </div>
            </section>
        )
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
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${step >= 1 ? 'bg-primary' : 'bg-gray-200'
                                }`}
                        />
                        <span
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${step === 2 ? 'bg-primary' : 'bg-gray-200'
                                }`}
                        />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {step === 1 ? (
                            <TalkStep1 register={register} errors={errors} onNext={handleNextStep} />
                        ) : (
                            <TalkStep2
                                control={control}
                                setValue={setValue}
                                errors={errors}
                                onBack={() => setStep(1)}
                                isSubmitting={isSubmitting || isBooking}
                            />
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default TalkWithUs