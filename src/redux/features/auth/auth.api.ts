import baseApi from "@/redux/api/api";
import {
    ChangePasswordRequest,
    ChangePasswordResponse,
    LoginRequest,
    LoginResponse,
    UserProfileResponse
} from "./auth.typ";

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
        getMe: builder.query<UserProfileResponse, void>({
            query: () => {
                return {
                    url: "/auth/me/",
                    method: "GET"
                }
            }
        }),
    })
})


export const {
    useSignInMutation,
    useChangePasswordMutation,
    useGetMeQuery,
} = authApi;