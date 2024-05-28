import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";

export const myStore = configureStore({
  reducer: {
    home: homeSlice,
  },
});
