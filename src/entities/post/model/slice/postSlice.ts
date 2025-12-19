import {createAsyncThunk, createEntityAdapter, createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type { PostDTO } from '../Post'
import type { RootState } from '../../../../app/providers/store/store';
import {BASE_URL} from "../../../../shared/api/baseUrl.ts";

const postAdapter = createEntityAdapter<PostDTO>();

export const fetchPostById = createAsyncThunk<
    PostDTO,
    number,
    { rejectValue: string }
>('post/fetchPostById', async (postId, { rejectWithValue }) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}`)

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }

        const data: PostDTO = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return rejectWithValue('Ошибка загрузки поста')
    }
})

const postSlice = createSlice({
    name: 'post',
    initialState: postAdapter.getInitialState({
        isLoading: false,
        isError: null as string | null,
    }),
    reducers: {
        clearPost: (state, action: PayloadAction<number>) => {
            postAdapter.removeOne(state, action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostById.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.isLoading = false
                postAdapter.upsertOne(state, action.payload)
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload ?? 'Неизвестная ошибка'
            })
    }
})

export const {
    selectById: selectPostById,
    selectEntities: selectPostEntities,
} = postAdapter.getSelectors<RootState>(
    (state) => state.post
)

export const { clearPost } = postSlice.actions
export const postReducer = postSlice.reducer;