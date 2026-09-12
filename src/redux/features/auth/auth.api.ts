import baseApi from "@/redux/api/api";
import { LoginRequest, LoginResponse } from "./auth.typ";

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
    })
})


export const {
    useSignInMutation,
} = authApi;