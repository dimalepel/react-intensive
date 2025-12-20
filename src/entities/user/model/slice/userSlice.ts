import {createAsyncThunk, createEntityAdapter, createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type { UserDTO } from '../types.ts'
import type { RootState } from '../../../../app/providers/store/store';
import {BASE_URL} from "../../../../shared/api/baseUrl.ts";

const userAdapter = createEntityAdapter<UserDTO>();

export const fetchUserById = createAsyncThunk<
    UserDTO,
    number,
    { rejectValue: string }
>('user/fetchUserById', async (userId, { rejectWithValue }) => {
    try {
        const response = await fetch(`${BASE_URL}/users/${userId}`)

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }

        const data: UserDTO = await response.json()
        return data
    } catch (error) {
        console.log(error)
        return rejectWithValue('Ошибка загрузки пользователя')
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: userAdapter.getInitialState({
        isLoading: false,
        isError: null as string | null,
    }),
    reducers: {
        clearUser: (state, action: PayloadAction<number>) => {
            userAdapter.removeOne(state, action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserById.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.isLoading = false
                userAdapter.upsertOne(state, action.payload)
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload ?? 'Неизвестная ошибка'
            })
    }
})

export const {
    selectById: selectUserById,
    selectEntities: selectUserEntities,
} = userAdapter.getSelectors<RootState>(
    (state) => state.user
)

export const { clearUser } = userSlice.actions
export const userReducer = userSlice.reducer;