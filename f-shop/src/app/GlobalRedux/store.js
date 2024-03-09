'use client'

import { configureStore } from "@reduxjs/toolkit"
import basketReducer from './Features/basket/basketSlice'
import successMessageReducer from './Features/successMessage/successMessageSlice'

export const store = configureStore({
    reducer: {
        basketReducer,
        successMessageReducer,
    }
})
