'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { X, Lock, Eye, EyeOff } from 'lucide-react'
import { toast } from 'sonner'
import { useChangePasswordMutation } from '@/redux/features/auth/auth.api'
import { removeToken } from '@/utils/auth'

const changePasswordSchema = z
    .object({
        current_password: z.string().min(1, 'Current password is required'),
        new_password: z.string().min(6, 'New password must be at least 6 characters'),
        confirm_new_password: z.string().min(1, 'Please confirm your new password')
    })
    .refine((data) => data.new_password === data.confirm_new_password, {
        message: "Passwords don't match",
        path: ['confirm_new_password']
    })

type ChangePasswordValues = z.infer<typeof changePasswordSchema>

interface ChangePasswordModalProps {
    isOpen: boolean
    onClose: () => void
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({ isOpen, onClose }) => {
    const router = useRouter()
    const [changePassword, { isLoading }] = useChangePasswordMutation()
    const [apiError, setApiError] = useState<string | null>(null)

    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ChangePasswordValues>({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: {
            current_password: '',
            new_password: '',
            confirm_new_password: ''
        }
    })

    if (!isOpen) return null

    const handleClose = () => {
        reset()
        setApiError(null)
        onClose()
    }

    const onSubmit = async (data: ChangePasswordValues) => {
        setApiError(null)
        try {
            const res = await changePassword({
                current_password: data.current_password,
                new_password: data.new_password,
                confirm_new_password: data.confirm_new_password
            }).unwrap()

            const successMessage = res?.detail || res?.message || 'Password updated successfully. Please log in again.'
            toast.success(successMessage)

            // Remove stored auth tokens & redirect to login
            await removeToken()
            handleClose()
            router.push('/login')
        } catch (err: any) {
            const errorMessage =
                err?.data?.detail ||
                err?.data?.message ||
                err?.data?.error ||
                err?.data?.current_password?.[0] ||
                err?.data?.new_password?.[0] ||
                'Failed to update password. Please check your inputs.'
            setApiError(errorMessage)
            toast.error(errorMessage)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
            {/* Click backdrop to close */}
            <div className="absolute inset-0" onClick={handleClose} />

            {/* Modal Card */}
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl z-10 space-y-6">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-title hover:bg-gray-100 transition-colors cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">
                        SECURITY SETTINGS
                    </span>
                    <h3 className="text-2xl font-semibold text-title tracking-tight">
                        Change Password
                    </h3>
                    <p className="text-xs text-gray-500 font-light mt-1">
                        Enter your current password and set a new password below.
                    </p>
                </div>

                {/* Error Banner */}
                {apiError && (
                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-600 font-medium">
                        {apiError}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Current Password */}
                    <div>
                        <label className="block text-xs font-semibold text-title uppercase tracking-wider mb-2">
                            CURRENT PASSWORD
                        </label>
                        <div className="relative">
                            <input
                                type={showCurrentPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                {...register('current_password')}
                                className={`w-full pl-11 pr-11 py-3 rounded-2xl border text-sm text-title placeholder:text-gray-400 focus:outline-none transition-all ${
                                    errors.current_password ? 'border-primary' : 'border-gray-200 focus:border-title'
                                }`}
                            />
                            <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                            <button
                                type="button"
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-title cursor-pointer"
                            >
                                {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                        {errors.current_password && (
                            <p className="text-xs text-primary mt-1 font-medium">{errors.current_password.message}</p>
                        )}
                    </div>

                    {/* New Password */}
                    <div>
                        <label className="block text-xs font-semibold text-title uppercase tracking-wider mb-2">
                            NEW PASSWORD
                        </label>
                        <div className="relative">
                            <input
                                type={showNewPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                {...register('new_password')}
                                className={`w-full pl-11 pr-11 py-3 rounded-2xl border text-sm text-title placeholder:text-gray-400 focus:outline-none transition-all ${
                                    errors.new_password ? 'border-primary' : 'border-gray-200 focus:border-title'
                                }`}
                            />
                            <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                            <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-title cursor-pointer"
                            >
                                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                        {errors.new_password && (
                            <p className="text-xs text-primary mt-1 font-medium">{errors.new_password.message}</p>
                        )}
                    </div>

                    {/* Confirm New Password */}
                    <div>
                        <label className="block text-xs font-semibold text-title uppercase tracking-wider mb-2">
                            CONFIRM NEW PASSWORD
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                {...register('confirm_new_password')}
                                className={`w-full pl-11 pr-11 py-3 rounded-2xl border text-sm text-title placeholder:text-gray-400 focus:outline-none transition-all ${
                                    errors.confirm_new_password ? 'border-primary' : 'border-gray-200 focus:border-title'
                                }`}
                            />
                            <Lock className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-title cursor-pointer"
                            >
                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                        {errors.confirm_new_password && (
                            <p className="text-xs text-primary mt-1 font-medium">{errors.confirm_new_password.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3 flex items-center gap-3">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="w-1/3 py-3 rounded-full border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 bg-primary hover:bg-primary-hover disabled:opacity-60 text-white py-3 rounded-full text-xs font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                        >
                            <span>{isLoading ? 'Updating...' : 'Update Password'}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePasswordModal