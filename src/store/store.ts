import { configureStore } from "@reduxjs/toolkit";
import { reducer as editReducer } from "./Edit/slice";
import { reducer as dataReducer } from "./Data/slice";

const store = configureStore({
  reducer: {
    edit: editReducer,
    data: dataReducer,
  },
});

const state = store.getState();
export type AppState = typeof state;

export default store;
