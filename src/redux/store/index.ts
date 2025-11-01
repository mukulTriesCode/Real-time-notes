import { userSlice } from '@/redux/features/user/userSlice'
import { configureStore } from '@reduxjs/toolkit'
import { notesSlice } from '../features/notes/notesSlice'

export const store = configureStore({
    reducer: {
        auth: userSlice.reducer,
        notes: notesSlice.reducer
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']