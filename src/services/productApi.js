import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),

    tagTypes: ['Products'],

    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['Products'],
        }),

        getProduct: builder.query({
            query: (id) => `/products/${id}`,
        }),

        searchProducts: builder.query({
            query: (search) =>
                `/products/search?q=${search}`,
        }),

        addProduct: builder.mutation({
            query: (data) => ({
                url: '/products/add',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Products'],
        }),

        updateProduct: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `/products/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Products'],
        }),

        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Products'],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useSearchProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productApi;