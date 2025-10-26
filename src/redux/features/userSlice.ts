import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    id: string
    email: string
}

const initialState: CounterState = {
    id: '',
    email: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ id: string; email: string }>) => {
            state.id = action.payload.id
            state.email = action.payload.email
        },
        clearUser: (state) => {
            state.id = ''
            state.email = ''
        }
    }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer