import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../utils/itemTypes";

const initialState: Item[] = [];

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    ADD_ITEM: (state, action: PayloadAction<Item>) => [
      ...state,
      action.payload,
    ],
    REMOVE_ITEM: (state, action: PayloadAction<string>) =>
      state.filter(({ id }) => id !== action.payload),
    RESET_ITEMS: () => initialState,
  },
});

export const { ADD_ITEM, REMOVE_ITEM, RESET_ITEMS } = itemsSlice.actions;

export default itemsSlice.reducer;
