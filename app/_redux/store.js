import { configureStore } from "@reduxjs/toolkit";
import productsApi from "./api/productsApi";
import counterSlice from "./slices/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware()
            .concat(productsApi.middleware)
    )
})