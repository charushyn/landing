'use client'

import { configureStore } from "@reduxjs/toolkit"
import basketReducer from './Features/basket/basketSlice'

export const store = configureStore({
    reducer: {
        basketReducer,
    }
})
