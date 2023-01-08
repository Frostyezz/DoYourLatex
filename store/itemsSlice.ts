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
    REMOVE_ITEM: (state, action: PayloadAction<number>) =>
      state.filter(({ id }) => id !== action.payload),
    EDIT_ITEM: (state, action: PayloadAction<Item>) => {
      const idx = state.findIndex(({ id }) => id === action.payload.id);
      state[idx] = action.payload;
      return state;
    },
    RESET_ITEMS: () => initialState,
  },
});

export const { ADD_ITEM, REMOVE_ITEM, RESET_ITEMS, EDIT_ITEM } =
  itemsSlice.actions;

export default itemsSlice.reducer;
