import { configureStore } from '@reduxjs/toolkit';
import {albumsApi} from "../../../entities/album/api/albumsApi.ts";
import {photosApi} from "../../../entities/photo/api/photosApi.ts";
import {commentsApi} from "../../../entities/comment/api/commentsApi.ts";
import {todosApi} from "../../../entities/todo/api/todoApi.ts";
import {postsApi} from "../../../entities/post/api/postsApi.ts";
import {postReducer} from "../../../entities/post/model/slice/postSlice.ts";
import {userReducer} from "../../../entities/user/model/slice/userSlice.ts";

export const store = configureStore({
    reducer: {
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        post: postReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(albumsApi.middleware,
                photosApi.middleware,
                todosApi.middleware,
                postsApi.middleware,
                commentsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch