import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { itinerary } from "../../models/itinerary";

interface DataSlice {
  itineraries: itinerary[];
}

const INITIAL_STATE: DataSlice = {
  itineraries: [
    { id: "Example", month: 2, day: 2, year: 2023 },
    { id: "Example1", month: 2, day: 3, year: 2023 },
    { id: "Example3", month: 2, day: 4, year: 2023 },
    { id: "Example3", month: 2, day: 5, year: 2023 },
    { id: "Example4", month: 2, day: 6, year: 2023 },
    { id: "Example7", month: 12, day: 7, year: 2025 },
    { id: "Example5", month: 2, day: 7, year: 2023 },
    { id: "Example6", month: 2, day: 8, year: 2023 },
    { id: "Example7", month: 2, day: 9, year: 2023 },
  ],
};

const slice = createSlice({
  name: "data",
  initialState: INITIAL_STATE,
  reducers: {
    addItinerary: (state, action: PayloadAction<itinerary>) => {
      state.itineraries.push(action.payload);
    },
  },
  extraReducers: () => {},
});

export const reducer = slice.reducer;

export const {} = slice.actions;
