import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { itinerary } from "../../models/itinerary";

interface DataSlice {
  itineraries: itinerary[];
}

const INITIAL_STATE: DataSlice = {
  itineraries: [
    {
      id: "Example",
      name: "Houston Trip",
      month: 2,
      day: 2,
      year: 2023,
      meal: "Breakfast",
      time: "8:30 AM",
    },
    {
      id: "Example1",
      name: "Houston Trip",
      month: 2,
      day: 3,
      year: 2023,
      meal: "Dinner",
      time: "5:30 PM",
    },
    {
      id: "Example3",
      name: "Houston Trip",
      month: 2,
      day: 4,
      year: 2023,
      meal: "Lunch",
      time: "12:00 AM",
    },
    {
      id: "Example3",
      name: "Houston Trip",
      month: 2,
      day: 5,
      year: 2023,
      meal: "Brunch",
      time: "8:30 AM",
    },
    {
      id: "Example4",
      name: "Houston Trip",
      month: 2,
      day: 6,
      year: 2023,
      meal: "Brunch",
      time: "8:30 AM",
    },
    {
      id: "Example7",
      name: "Houston Trip",
      month: 12,
      day: 7,
      year: 2025,
      meal: "Brunch",
      time: "8:30 AM",
    },
    {
      id: "Example5",
      name: "Houston Trip",
      month: 2,
      day: 7,
      year: 2023,
      meal: "Dinner",
      time: "8:30 AM",
    },
    {
      id: "Example6",
      name: "Houston Trip",
      month: 2,
      day: 8,
      year: 2023,
      meal: "Dinner",
      time: "8:30 AM",
    },
    {
      id: "Example7",
      name: "Houston Trip",
      month: 2,
      day: 9,
      year: 2023,
      meal: "Lunch",
      time: "8:30 AM",
    },
    {
      id: "beans",
      name: "Atlanta Trip",
      month: 9,
      day: 30,
      year: 2023,
      meal: "Dinner",
      time: "4:12 PM",
    },
    {
      id: "beans2",
      name: "Dallas Trip",
      month: 9,
      day: 30,
      year: 2023,
      meal: "Brunch",
      time: "8:30 AM",
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
