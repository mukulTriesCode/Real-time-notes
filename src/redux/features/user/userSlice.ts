import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userState {
    user: {
        id: string
        email: string
    } | null
}

const initialState: userState = {
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ id: string; email: string }>) => {
            state.user = {
                id: action.payload.id,
                email: action.payload.email
            };
        },
        clearUser: (state) => {
            state.user = null
        }
    }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer