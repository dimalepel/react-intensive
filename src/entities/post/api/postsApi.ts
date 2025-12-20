import {createApi} from "@reduxjs/toolkit/query/react";
import type {PostDTO} from "../model/types.ts";
import {baseQuery} from "../../../shared/api/api.ts";

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery,
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        // Получение всех постов
        getAllPosts: builder.query<PostDTO[], number | undefined>({
            query: (limit = 20) => `posts?_limit=${limit}`,
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'Post' as const, id })),
                    { type: 'Post', id: 'LIST' }
                ]
                : [{ type: 'Post', id: 'LIST' }]
        }),
        // Получение постов по Id пользователя
        getPostsByUserId: builder.query<PostDTO[], number>({
            query: (userId: number) => {
                if (!userId) throw new Error('userId обязателен');

                return `users/${userId}/posts`;
            },
            providesTags: (result) => result
                ? result.map(({ id }) => ({ type: 'Post' as const, id}))
                : []
        }),
    }),
})

export const {
    useGetAllPostsQuery,
    useGetPostsByUserIdQuery
} = postsApi