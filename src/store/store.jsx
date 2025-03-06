import { configureStore } from "@reduxjs/toolkit";
import passwordReducer from '../feature/PasswordSlice'

export const store = configureStore({
    reducer: passwordReducer,
});