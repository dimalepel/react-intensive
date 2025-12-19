import type { AlbumDTO } from '../model/Album.ts';
import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../../../shared/api/api.ts";

export const albumsApi = createApi({
    reducerPath: 'albumsApi',
    baseQuery,
    tagTypes: ['Album'],
    endpoints: (builder) => ({
        // Получение альбомов по Id пользователя
        getAlbumsByUserId: builder.query<AlbumDTO[], string>({
            query: (userId: string) => {
                if (!userId) throw new Error('userId обязателен');

                return `users/${userId}/albums`;
            }
        })
    })
})

export const { useGetAlbumsByUserIdQuery } = albumsApi