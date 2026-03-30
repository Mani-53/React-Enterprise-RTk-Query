import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const productsApi = createApi({
    reducerPath: 'productsapi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
    endpoints: (builder) => ({
        getproductname: builder.query({
            query: () => ''
        }),
        getproductbyid: builder.query({
            query: (id) => `${id}`
        })
    })
})
export const { useGetproductnameQuery, useGetproductbyidQuery } = productsApi