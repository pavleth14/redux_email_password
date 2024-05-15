import { configureStore } from "@reduxjs/toolkit";
import credentialsSlice from '../features/emailAndPassword/credentials'

export const store = configureStore({
    reducer: {
        credentials: credentialsSlice
    }
})