import type { PhotoDTO } from "../model/Photo";
import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../../../shared/api/api.ts";

export const photosApi = createApi({
    reducerPath: 'photosApi',
    baseQuery,
    tagTypes: ['Photo'],
    endpoints: (builder) => ({
        // Получение всех фото по Id альбому
        getPhotosByAlbumId: builder.query<PhotoDTO[], string>({
            query: (albumId: string) => {
                if (!albumId) throw new Error('albumId обязателен');

                return `albums/${albumId}/photos`;
            }
        })
    })
})

export const { useGetPhotosByAlbumIdQuery } = photosApi