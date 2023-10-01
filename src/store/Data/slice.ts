import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { itinerary } from "../../models/itinerary";

interface DataSlice {
  itineraries: itinerary[];
}

const INITIAL_STATE: DataSlice = {
  itineraries: [
    {
      title: "Houston Trip",
      id: "Example",
      month: 2,
      day: 2,
      year: 2023,
      meals: [],
    },
    {
      title: "Houston Trip",
      id: "Example1",
      month: 2,
      day: 3,
      year: 2023,
      meals: [],
    },
    {
      title: "Houston Trip",
      id: "Example3",
      month: 2,
      day: 4,
      year: 2023,
      meals: [],
    },
    {
      title: "Houston Trip",
      id: "Example3",
      month: 2,
      day: 5,
      year: 2023,
      meals: [],
    },
    {
      title: "Houston Trip",
      id: "Example4",
      month: 2,
      day: 6,
      year: 2023,
      meals: [],
    },
    {
      title: "Houston Trip",
      id: "Example7",
      month: 12,
      day: 7,
      year: 2025,
      meals: [],
    },
    {
      title: "Houston Trip",
      id: "Example5",
      month: 2,
      day: 7,
      year: 2023,
      meals: [],
    },
    {
      title: "Houston Trip",
      id: "Example6",
      month: 2,
      day: 8,
      year: 2023,
      meals: [],
    },
    {
      title: "Houston Trip",
      id: "Example7",
      month: 2,
      day: 9,
      year: 2023,
      meals: [],
    },
    {
      title: "Atlanta Trip",
      id: "beans",
      month: 9,
      day: 30,
      year: 2023,
      meals: [],
    },
    {
      title: "Dallas Trip",
      id: "beans2",
      month: 9,
      day: 30,
      year: 2023,
      meals: [],
    },
  ],
};

const slice = createSlice({
  name: "data",
  initialState: INITIAL_STATE,
  reducers: {
    addItinerary: (state, action: PayloadAction<itinerary>) => {
      state.itineraries.push(action.payload);
    },
    updateItineraryNamesByDate: (
      state,
      action: PayloadAction<{
        month: number;
        day: number;
        year: number;
        newName: string;
      }>,
    ) => {
      const { month, day, year, newName } = action.payload;
      state.itineraries = state.itineraries.map((itinerary) => {
        if (
          itinerary.month === month &&
          itinerary.day === day &&
          itinerary.year === year
        ) {
          return { ...itinerary, name: newName };
        }
        return itinerary;
      });
    },
  },
  extraReducers: () => {},
});

export const reducer = slice.reducer;

export const { addItinerary, updateItineraryNamesByDate } = slice.actions;
