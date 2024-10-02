import { configureStore } from "@reduxjs/toolkit";
import customReducer from "./slices/customerSlice"

export const store = configureStore({
    reducer: {
        customers: customReducer
    }
})