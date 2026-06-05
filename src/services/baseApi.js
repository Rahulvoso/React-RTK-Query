import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://6a22a4845c610353286a1da5.mockapi.io",
    }),

    tagTypes: ["Users"],

    endpoints: () => ({}),
});