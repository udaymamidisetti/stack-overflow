import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../Slices/HeaderSlice";
export const store = configureStore({
  reducer: {
    Header: headerReducer,
  },
});
