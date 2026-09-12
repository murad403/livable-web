import baseApi from "@/redux/api/api";
import { BookTalkWithUsRequest, BookTalkWithUsResponse, GetMyTripsResponse } from "./app.type";

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
    })
})


export const {
    useBookTalkWithUsMutation,
    useGetMyTripsQuery,
} = appApi;