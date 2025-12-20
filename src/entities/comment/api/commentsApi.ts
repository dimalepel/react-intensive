import type { CommentDTO } from '../model/types.ts';
import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../../../shared/api/api.ts";

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery,
    tagTypes: ['Comment'],
    endpoints: (builder) => ({
        // Получение комментариев по Id поста
        getCommentsByPostId: builder.query<CommentDTO[], string>({
            query: (postId: string)=> {
                if (!postId) throw new Error('postId обязателен');

                return `posts/${postId}/comments`;
            }
        })
    })
})

export const { useGetCommentsByPostIdQuery } = commentsApi