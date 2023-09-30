import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditState {
  started: boolean;
}

const INITIAL_STATE: EditState = {
  started: false,
};

const slice = createSlice({
  name: "edit",
  initialState: INITIAL_STATE,
  reducers: {
    setStarted: (state, action: PayloadAction<boolean>) => {
      state.started = action.payload;
    },
  },
  extraReducers: () => {},
});

export const reducer = slice.reducer;

// Export the action creator
export const { setStarted } = slice.actions;
