import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ListItem {
  id: number;
  color: string;
}

interface ListState {
  items: ListItem[];
}

const initialState: ListState = {
  items: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addListItem: (state, action: PayloadAction<string>) => {
      const newItem: ListItem = {
        id: Date.now(),
        color: action.payload,
      };
      state.items.unshift(newItem);
    },
    removeListItem: (state) => {
      state.items.pop();
    },
  },
});

export const { addListItem, removeListItem } = listSlice.actions;

export const selectListItems = (state: RootState) => state.list.items;

export default listSlice.reducer;
