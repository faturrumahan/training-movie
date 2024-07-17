import { Movie } from "@/types/movie";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WatchListState {
  watchLists: Movie[]; //alternative
}

const initialState: WatchListState = {
  watchLists: [],
};

export const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    addwatchList: (state, action) => {
      state.watchLists = [...state.watchLists, action.payload];
    },
    removewatchList: (state, action) => {
      // state.watchLists = [
      //   ...state.watchLists.slice(0, action.payload),
      //   ...state.watchLists.slice(action.payload + 1),
      // ];
      state.watchLists.map((list, index) => {
        if (list.id === action.payload) {
          state.watchLists = state.watchLists.filter(
            (list) => list.id !== action.payload
          );
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addwatchList, removewatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
