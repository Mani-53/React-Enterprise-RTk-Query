import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'
export const recipesApi = createApi({
    reducerPath: "recipeapi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/recipes" }),
    endpoints: (builder) => ({
        getrecipename: builder.query({
            query: () => ''
        }),
        getrecipebyid: builder.query({
            query: (id) => `${id}`
        })
    })
})
export const { useGetrecipenameQuery,useGetrecipebyidQuery } = recipesApi