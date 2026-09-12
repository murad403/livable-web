import baseApi from "@/redux/api/api";
import { ChangePasswordRequest, ChangePasswordResponse, LoginRequest, LoginResponse } from "./auth.typ";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation<LoginResponse, LoginRequest>({
            query: (data) => {
                return {
                    url: "/auth/login/",
                    method: "POST",
                    body: data
                }
            }
        }),
        changePassword: builder.mutation<ChangePasswordResponse, ChangePasswordRequest>({
            query: (data) => {
                return {
                    url: "/auth/change-password/",
                    method: "POST",
                    body: data
                }
            }
        }),
    })
})


export const {
    useSignInMutation,
    useChangePasswordMutation,
} = authApi;