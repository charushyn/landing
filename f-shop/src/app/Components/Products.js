'use client'

import Button from "../UI/Button"
import products from "../data/allProducts"

import { useDispatch } from "react-redux"
import { addProduct, removeProduct } from "../GlobalRedux/Features/basket/basketSlice"

export default function Products(){
    const dispatch = useDispatch()

    return(
        <div class='h-fit mobile-s:px-[16px] my-6 mobile-s:flex mobile-s:flex-col mobile-s:gap-4'>
            <p class='mobile-s:text-4xl text-center'>Усі продукти</p>
            {
                products.map((item) => {
                    return(
                        <div id={item.id} class='flex flex-col gap-2 h-[450px] bg-white p-2 relative'>
                            <img src={item.urlPhoto} class='mobile-s:w-full mobile-s:h-[250px] mobile-s:object-cover'></img>
                            <p class='text-2xl'>{item.name}</p>
                            {
                                item.isDiscount ?
                                <div class='flex flex-row gap-3'>
                                    <p class='bg-red-100 p-2 rounded-lg text-red-700 w-fit'>{item.currentPrice}₴</p>
                                    <p class=' line-through text-gray-400 p-2 w-fit'>{item.previousPrice}{item.currency}₴</p>
                                </div> :
                                <p class=' bg-green-100 p-2 rounded-lg text-green-700 w-fit'>{item.currentPrice}₴</p>
                            }
                            {
                                item.amount != 0 ?
                                <p class='text-green-700'>В наявності</p> :
                                <p class='text-gray-400'>Немає в наявності</p>
                            }
                                <Button text={'Додати до кошика'} onClick={() => { dispatch(addProduct({...item}))}}></Button>
                        </div>
                    )
                })
            }
        </div>
    )
}