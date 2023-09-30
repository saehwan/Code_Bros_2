import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { itinerary } from "../../models/itinerary";

interface DataSlice {
  itineraries: itinerary[];
}

const INITIAL_STATE: DataSlice = {
  itineraries: [{ id: "Example", month: 2, day: 2, year: 2023 }],
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
