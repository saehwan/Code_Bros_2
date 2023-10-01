import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { itinerary } from "../../models/itinerary";

interface DataSlice {
  itineraries: itinerary[];
}

const INITIAL_STATE: DataSlice = {
  itineraries: [
    {
      title: "BR Trip Day 1",
      id: "Example",
      month: 2,
      day: 2,
      year: 2023,
      meals: [
        {
          id: "meal5",
          type: "Breakfast",
          time: "8:30",
          location: "Simple Joe's",
        },
        { id: "meal6", type: "Lunch", time: "13:30", location: "Sushi Masa" },
        {
          id: "meal7",
          type: "Dinner",
          time: "15:30",
          location: "Bao's Vietnamese Kitchen",
        },
      ],
    },
    {
      title: "BR Trip Day 2",
      id: "Example1",
      month: 2,
      day: 3,
      year: 2023,
      meals: [
        {
          id: "meal8",
          type: "Lunch",
          time: "13:30",
          location: "Raising Cane's",
        },
        { id: "meal9", type: "Brunch", time: "10:30", location: "Coffee Call" },
      ],
    },
    {
      title: "BR Trip Day 3",
      id: "Example3",
      month: 2,
      day: 4,
      year: 2023,
      meals: [
        { id: "meal2", type: "Lunch", time: "9:30", location: "SoLou" },
        {
          id: "meal3",
          type: "Dinner",
          time: "20:30",
          location: "Elsie's Pie and Plate",
        },
        { id: "meal4", type: "Snack", time: "15:00", location: "Teatery" },
      ],
    },
    {
      id: "beans",
      title: "Atlanta Trip",
      month: 9,
      day: 30,
      year: 2023,
      meals: [
        {
          id: "meal10",
          type: "Breakfast",
          time: "07:30",
          location: "The Flying Biscuit Café",
        },
        {
          id: "meal11",
          type: "Snack",
          time: "10:00",
          location: "Sublime Doughnuts",
        },
        {
          id: "meal12",
          type: "Lunch",
          time: "12:30",
          location: "Mary Mac’s Tea Room",
        },
        {
          id: "meal13",
          type: "Snack",
          time: "15:00",
          location: "Sweet Hut Bakery & Cafe",
        },
        {
          id: "meal14",
          type: "Dinner",
          time: "19:00",
          location: "The Varsity",
        },
        {
          id: "meal15",
          type: "Dessert",
          time: "21:00",
          location: "Paolo’s Gelato Italiano",
        },
        {
          id: "meal16",
          type: "Late Night",
          time: "23:30",
          location: "Bone’s Restaurant",
        },
      ],
    },
    {
      title: "Dallas Trip",
      id: "beans2",
      month: 9,
      day: 30,
      year: 2023,
      meals: [
        {
          id: "meal17",
          type: "Breakfast",
          time: "08:00",
          location: "Home Grown",
        },
        {
          id: "meal18",
          type: "Coffee Break",
          time: "10:15",
          location: "Octane Coffee",
        },
        {
          id: "meal19",
          type: "Lunch",
          time: "13:00",
          location: "Antico Pizza Napoletana",
        },
        {
          id: "meal20",
          type: "Tea Time",
          time: "15:30",
          location: "Tipple + Rose Tea Parlor and Apothecary",
        },
        {
          id: "meal21",
          type: "Dinner",
          time: "18:30",
          location: "Fox Bros. Bar-B-Q",
        },
        {
          id: "meal22",
          type: "Dessert",
          time: "20:45",
          location: "Jeni's Splendid Ice Creams",
        },
        {
          id: "meal23",
          type: "Late Snack",
          time: "22:30",
          location: "Holeman and Finch Public House",
        },
      ],
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
