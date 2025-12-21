import type { TodoDTO } from "../model/types.ts";
import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../../../shared/api/api.ts";

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery,
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        // Получение todo по Id пользователя
        getTodosByUserId: builder.query<TodoDTO[], string>({
            query: (userId: string) => {
                if (!userId) throw new Error('userId обязателен');

                return `users/${userId}/todos`;
            }
        })
    })
})

export const { useGetTodosByUserIdQuery } = todosApi