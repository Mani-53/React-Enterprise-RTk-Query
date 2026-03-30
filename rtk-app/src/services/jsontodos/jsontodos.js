import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const jsontodosApi = createApi({
    reducerPath: "jsontodosapi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/todos" }),
    endpoints: (builder) => ({
        getjsontodo: builder.query({
            query: () => ``
        }),
        deletejsontodo: builder.mutation({
            query: (id) => ({ url: `${id}`, method: 'DELETE' })
        }),
        addjsontodo: builder.mutation({
            query: (todo) => ({
                url: ``,
                method: 'POST',
                body: {
                    title: todo
                }
            })
        })
    })
})
export const { useGetjsontodoQuery, useDeletejsontodoMutation, useAddjsontodoMutation } = jsontodosApi