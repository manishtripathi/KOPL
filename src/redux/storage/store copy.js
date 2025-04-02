import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slice/categoriesSlice"

export const store = configureStore({
    reducer: {
        categories: categoryReducer
    }
})