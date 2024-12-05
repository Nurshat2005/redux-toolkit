import { configureStore } from "@reduxjs/toolkit";
import ADD_TODO from "./reducer/TodoSlice";


export const store = configureStore({
  reducer: {
    todo: ADD_TODO,
  },
});
