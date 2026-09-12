import baseApi from "@/redux/api/api";
import {
    BookTalkWithUsRequest,
    BookTalkWithUsResponse,
    FinancialProfileRequest,
    FinancialProfileResponse,
    GetMyTripsResponse,
    LifestyleAlignmentRequest,
    LifestyleAlignmentResponse
} from "./app.type";

const appApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        bookTalkWithUs: builder.mutation<BookTalkWithUsResponse, BookTalkWithUsRequest>({
            query: (data) => {
                return {
                    url: "/anonymous/book/",
                    method: "POST",
                    body: data
                }
            }
        }),
        getMyTrips: builder.query<GetMyTripsResponse, void>({
            query: () => {
                return {
                    url: "/me/trips/",
                    method: "GET"
                }
            }
        }),
        saveFinancialProfile: builder.mutation<FinancialProfileResponse, { clientId?: number | string; body: FinancialProfileRequest }>({
            query: ({ clientId = 1, body }) => {
                return {
                    url: `/clients/${clientId}/financial-profile/`,
                    method: "POST",
                    body: body
                }
            }
        }),
        saveLifestyleAlignment: builder.mutation<LifestyleAlignmentResponse, { clientId?: number | string; body: LifestyleAlignmentRequest }>({
            query: ({ clientId = 1, body }) => {
                return {
                    url: `/clients/${clientId}/lifestyle-alignment/`,
                    method: "POST",
                    body: body
                }
            }
        }),
    })
})


export const {
    useBookTalkWithUsMutation,
    useGetMyTripsQuery,
    useSaveFinancialProfileMutation,
    useSaveLifestyleAlignmentMutation,
} = appApi;