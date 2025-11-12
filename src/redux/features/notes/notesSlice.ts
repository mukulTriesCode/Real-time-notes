import type { NotesState, NoteInterface } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState: NotesState = {
  notes: [],
  selectedNoteId: null,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state) => {
      const newNote: NoteInterface = {
        id: uuidv4(),
        title: "Untitled",
        content: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      state.notes.unshift(newNote);
      state.selectedNoteId = newNote.id;
    },
    selectNote: (state, action: PayloadAction<string | null>) => {
      state.selectedNoteId = action.payload;
    },
    updateNote: (
      state,
      action: PayloadAction<Omit<NoteInterface, "createdAt" | "updatedAt">>
    ) => {
      const note = state.notes.find((note) => note.id === action.payload.id);
      if (note) {
        note.title = action.payload.title || note.title;
        note.content = action.payload.content || note.content;
        note.updatedAt = new Date().toISOString();
        note.icon = action.payload.icon || note.icon;
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      if (state.selectedNoteId === action.payload) {
        state.selectedNoteId = null;
      }
    },
    setNotes: (state, action: PayloadAction<NoteInterface[]>) => {
      // TODO: Sync with Supabase
      state.notes = action.payload;
    },
  },
});

export const { addNote, selectNote, updateNote, deleteNote, setNotes } =
  notesSlice.actions;
export default notesSlice.reducer;
