import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

export const liveEditorSlice = createSlice({
  name: "liveEditor",
  initialState,
  reducers: {
    SET_CONTENT: (_, action: PayloadAction<string>) => action.payload,
    CLEAR_CONTENT: () => initialState,
  },
});

export const { SET_CONTENT, CLEAR_CONTENT } = liveEditorSlice.actions;

export default liveEditorSlice.reducer;
