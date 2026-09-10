'use client'

import React from 'react'
import { UseFormWatch, UseFormSetValue, FieldErrors } from 'react-hook-form'
import { ArrowRight, Check } from 'lucide-react'

interface TalkStep2Props {
    watch: UseFormWatch<any>
    setValue: UseFormSetValue<any>
    errors: FieldErrors<any>
    onBack: () => void
    isSubmitting: boolean
}

const stageOptions = [
    'Just starting to explore',
    'Researching independently',
    "I know I want to move, but I'm not sure where",
    'I have a specific city in mind',
    'Ready to schedule a scouting trip'
]

const placeOptions = [
    'Lisbon',
    'Porto',
    'San Sebastián',
    'Málaga',
    'Valencia',
    'Málaga 2x',
    "I'm not sure yet"
]

const peopleOptions = ['Just me', 'Two people']

const TalkStep2: React.FC<TalkStep2Props> = ({ watch, setValue, errors, onBack, isSubmitting }) => {
    const relocationStage = watch('relocationStage')
    const selectedPlaces: string[] = watch('selectedPlaces') || []
    const scoutingPeople = watch('scoutingPeople')

    const togglePlace = (place: string) => {
        if (place === "I'm not sure yet") {
            setValue('selectedPlaces', ["I'm not sure yet"], { shouldValidate: true })
            return
        }

        let updated = selectedPlaces.filter((p) => p !== "I'm not sure yet")
        if (updated.includes(place)) {
            updated = updated.filter((p) => p !== place)
        } else {
            updated.push(place)
        }
        setValue('selectedPlaces', updated, { shouldValidate: true })
    }

    return (
        <div className="space-y-8">
            {/* Step Title */}
            <div>
                <span className="text-base font-semibold text-[#FE3F39]">Step 2</span>
            </div>

            {/* Question 1: Stage */}
            <div>
                <h4 className="text-base sm:text-lg font-medium text-[#282828] mb-1">
                    Where are you in your relocation process?
                </h4>
                <p className="text-xs text-gray-500 mb-3">Select one.</p>

                <div className="space-y-2.5">
                    {stageOptions.map((option) => {
                        const isSelected = relocationStage === option
                        return (
                            <button
                                key={option}
                                type="button"
                                onClick={() => setValue('relocationStage', option, { shouldValidate: true })}
                                className={`w-full text-left px-4 py-3 rounded-2xl border text-sm font-normal transition-all flex items-center justify-between cursor-pointer ${
                                    isSelected
                                        ? 'border-[#FE3F39] bg-red-50/20 text-[#282828] ring-1 ring-[#FE3F39]'
                                        : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50/50'
                                }`}
                            >
                                <span>{option}</span>
                                {isSelected && <Check className="w-4 h-4 text-[#FE3F39]" />}
                            </button>
                        )
                    })}
                </div>
                {errors.relocationStage && (
                    <p className="text-xs text-red-500 mt-1.5">{errors.relocationStage.message as string}</p>
                )}
            </div>

            {/* Question 2: Places */}
            <div>
                <h4 className="text-base sm:text-lg font-medium text-[#282828] mb-1">
                    Which places are you considering?
                </h4>
                <p className="text-xs text-gray-500 mb-3">Select all that apply.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {placeOptions.map((place) => {
                        const isSelected = selectedPlaces.includes(place)
                        return (
                            <button
                                key={place}
                                type="button"
                                onClick={() => togglePlace(place)}
                                className={`text-left px-4 py-3 rounded-2xl border text-sm font-normal transition-all flex items-center justify-between cursor-pointer ${
                                    isSelected
                                        ? 'border-[#FE3F39] bg-red-50/20 text-[#282828] ring-1 ring-[#FE3F39]'
                                        : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50/50'
                                }`}
                            >
                                <span>{place}</span>
                                {isSelected && <Check className="w-4 h-4 text-[#FE3F39]" />}
                            </button>
                        )
                    })}
                </div>
                {errors.selectedPlaces && (
                    <p className="text-xs text-red-500 mt-1.5">{errors.selectedPlaces.message as string}</p>
                )}
            </div>

            {/* Question 3: People */}
            <div>
                <h4 className="text-base sm:text-lg font-medium text-[#282828] mb-1">
                    Who will be scouting?
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                    The standard scouting trip is designed for one or two people.
                </p>

                <div className="grid grid-cols-2 gap-3">
                    {peopleOptions.map((people) => {
                        const isSelected = scoutingPeople === people
                        return (
                            <button
                                key={people}
                                type="button"
                                onClick={() => setValue('scoutingPeople', people, { shouldValidate: true })}
                                className={`text-left px-4 py-3.5 rounded-2xl border text-sm font-normal transition-all flex items-center justify-between cursor-pointer ${
                                    isSelected
                                        ? 'border-[#FE3F39] bg-red-50/20 text-[#282828] ring-1 ring-[#FE3F39]'
                                        : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50/50'
                                }`}
                            >
                                <span>{people}</span>
                                {isSelected && <Check className="w-4 h-4 text-[#FE3F39]" />}
                            </button>
                        )
                    })}
                </div>
                {errors.scoutingPeople && (
                    <p className="text-xs text-red-500 mt-1.5">{errors.scoutingPeople.message as string}</p>
                )}
            </div>

            {/* Submit & Back Buttons */}
            <div className="pt-4 flex items-center gap-3">
                <button
                    type="button"
                    onClick={onBack}
                    className="px-5 py-3.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                    ← Back
                </button>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#FE3F39] hover:bg-[#e0322d] disabled:opacity-50 text-white py-3.5 px-6 rounded-full text-sm font-semibold transition-all shadow hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                    <span>{isSubmitting ? 'Booking...' : 'Book your introductory call'}</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}

export default TalkStep2