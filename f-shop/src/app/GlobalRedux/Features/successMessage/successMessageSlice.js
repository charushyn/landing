'use client'

import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    isShow: false,
}


export const successMessageSlice = createSlice({
    name: 'successMessage',
    initialState: initialState,
    reducers: {
        setSuccess: (state) => {
            let previousState = state.isShow
            return{
                isShow: !previousState
            }
        }
    }
})

export const { setSuccess } = successMessageSlice.actions;
export default successMessageSlice.reducer;