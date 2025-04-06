import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slice/categoriesSlice"
import productReducer from "../slice/productlistSlice"
import configReducer from "../slice/configSlice"

export const store = configureStore({
    reducer: {
        categories: categoryReducer,
        productlist: productReducer,
        configs:configReducer
    }
})