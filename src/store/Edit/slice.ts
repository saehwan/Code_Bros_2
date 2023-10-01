import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditState {
  started: boolean;

  selectedResturaunt?: string;
}

const INITIAL_STATE: EditState = {
  started: true,
  selectedResturaunt: undefined,
};

const slice = createSlice({
  name: "edit",
  initialState: INITIAL_STATE,
  reducers: {
    setStarted: (state, action: PayloadAction<boolean>) => {
      state.started = action.payload;
    },
    setSelectedResturaunt: (state, action: PayloadAction<string>) => {
      state.selectedResturaunt = action.payload;
    },
    resetSelectedResturaunt: (state) => {
      state.selectedResturaunt = undefined;
    },
  },
  extraReducers: () => {},
});

export const reducer = slice.reducer;

// Export the action creator
export const { setStarted, setSelectedResturaunt, resetSelectedResturaunt } =
  slice.actions;
