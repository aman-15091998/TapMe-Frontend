import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./redux/userSlice";

export const store=configureStore({
    reducer: {
        userReducer, // Correct structure: key is the slice name, value is the reducer
      }
})