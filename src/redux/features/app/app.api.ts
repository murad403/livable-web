import baseApi from "@/redux/api/api";
import { BookTalkWithUsRequest, BookTalkWithUsResponse } from "./app.type";

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
    })
})


export const {
    useBookTalkWithUsMutation,
} = appApi;