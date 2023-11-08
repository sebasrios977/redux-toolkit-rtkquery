import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',
        }),
        getTodoById: builder.query({
            query: (todoId: number) => `/todos/${todoId}`
        })
    })
})


export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;