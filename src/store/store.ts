import { configureStore } from "@reduxjs/toolkit";
import { reducer as editReducer } from "./Edit/slice";

const store = configureStore({
  reducer: {
    edit: editReducer,
  },
});

const state = store.getState();
export type AppState = typeof state;

export default store;
