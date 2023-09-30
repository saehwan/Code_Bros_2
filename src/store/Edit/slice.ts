import { createSlice } from "@reduxjs/toolkit";

interface EditState {
  started: boolean;
}

const INITIAL_STATE: EditState = {
  started: false,
};

const slice = createSlice({
  name: "edit",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: () => {},
});

export const reducer = slice.reducer;

export const {} = slice.actions;
