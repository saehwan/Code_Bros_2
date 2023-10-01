import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { itinerary } from "../../models/itinerary";

interface DataSlice {
  itineraries: itinerary[];
}

const INITIAL_STATE: DataSlice = {
  itineraries: [
    {
      title: "Houston Trip Day 1",
      id: "Example",
      month: 2,
      day: 2,
      year: 2023,
      meals: [
        {
          id: "meal1",
          type: "Brunch",
          time: "10:30",
          location: "Aaron's House",
        },
        {
          id: "meal2",
          type: "Dinner",
          time: "20:30",
          location: "Bruce's House",
        },
      ],
    },
    {
      title: "Houston Trip Day 2",
      id: "Example1",
      month: 2,
      day: 3,
      year: 2023,
      meals: [],
    },
    {
      title: "Houston Trip Day 3",
      id: "Example3",
      month: 2,
      day: 4,
      year: 2023,
      meals: [],
    },
    {
      id: "beans",
      title: "Atlanta Trip",
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
    deleteItinerary: (state, action: PayloadAction<string>) => {
      state.itineraries = state.itineraries.filter(
        (itinierary) => itinierary.id !== action.payload,
      );
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

export const { addItinerary, updateItineraryNamesByDate, deleteItinerary } =
  slice.actions;
