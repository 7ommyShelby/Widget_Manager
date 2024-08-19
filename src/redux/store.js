import { configureStore } from "@reduxjs/toolkit";
import widgetmanager from './slice'

export const store = configureStore({
    reducer : widgetmanager,
})

