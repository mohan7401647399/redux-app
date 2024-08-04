import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../feature/counter/counterSLice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})