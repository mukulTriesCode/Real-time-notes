import type { NotesState, NoteInterface } from '@/types';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: NotesState = {
    notes: [],
    selectedNoteId: null
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<{ id: string; title: string; content: string; updatedAt: string }>) => {
            state.notes.push(action.payload);
        },
        selectNote: (state, action: PayloadAction<string | null>) => {
            state.selectedNoteId = action.payload;
        },
        updateNote: (state, action: PayloadAction<Omit<NoteInterface, 'createdAt'>>) => {
            const note = state.notes.find(note => note.id === action.payload.id);
            if (note) {
                note.title = action.payload.title || note.title;
                note.content = action.payload.content || note.content;
                note.updatedAt = action.payload.updatedAt;
            }
        },
        deleteNote: (state, action: PayloadAction<string>) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
            if (state.selectedNoteId === action.payload) {
                state.selectedNoteId = null;
            }
        },
        setNotes: (state, action: PayloadAction<NoteInterface[]>) => {
            // TODO: Sync with Supabase
            state.notes = action.payload;
        }
    }
})

export const { addNote, selectNote, updateNote, deleteNote, setNotes } = notesSlice.actions
export default notesSlice.reducer