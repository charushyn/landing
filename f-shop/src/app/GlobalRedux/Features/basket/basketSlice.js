'use client'

import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    items: [],
}


export const basketSlice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            const previousBasket = JSON.parse(JSON.stringify(current(state.items)))
            
            const index = previousBasket.findIndex((product) => product.id === action.payload.id)

            if(index === -1){
                return{
                    items: [...previousBasket, action.payload]
                }
            } else {
                previousBasket[index].count = previousBasket[index].count + 1
                return{
                    items: previousBasket
                }
            }

            
        },
        removeProduct: (state, action) => { 
            const previousBasket = JSON.parse(JSON.stringify(current(state.items)))
            previousBasket.filter((item) => {
                item.id === action.payload.id ? true : false
            })


        },
        incrimentProduct: (state, action) => {
            const previousBasket = JSON.parse(JSON.stringify(current(state.items)))
            const index = previousBasket.findIndex((product) => product.id === action.payload.id)

            previousBasket[index].count = previousBasket[index].count + 1
                return{
                    items: previousBasket
                }
        },
        decrementProduct: (state, action) => {
            const previousBasket = JSON.parse(JSON.stringify(current(state.items)))
            const index = previousBasket.findIndex((product) => product.id === action.payload.id)


            previousBasket[index].count === 1 ? previousBasket.splice(index, 1) :
            previousBasket[index].count = previousBasket[index].count - 1
                return{
                    items: previousBasket
                }
        },
        clearBasket: (state) => {
            return{
                items: []
            }
        }
    }
})

export const { addProduct, removeProduct, incrimentProduct, decrementProduct, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;