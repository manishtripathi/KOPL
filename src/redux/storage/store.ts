import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slice/categoriesSlice"
import productReducer from "../slice/productlistSlice"
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        categories: categoryReducer,
        productlist: productReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
