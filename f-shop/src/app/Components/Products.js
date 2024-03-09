'use client'

import Button from "../UI/Button"
import products from "../data/allProducts"

import { useDispatch } from "react-redux"
import { addProduct, removeProduct } from "../GlobalRedux/Features/basket/basketSlice"
import Image from "next/image"
import { setSuccess } from "../GlobalRedux/Features/successMessage/successMessageSlice"

export default function Products(){
    const dispatch = useDispatch()

    function handleMessageSuccess(){
        dispatch(setSuccess())
        setTimeout(() => {
            dispatch(setSuccess())
        }, 3000)
    }

    return(
        <div class='h-fit mobile-s:px-[16px] my-6 mobile-s:flex mobile-s:flex-col mobile-s:gap-4' name="products">
            <p class='mobile-s:text-2xl text-center tablet-m:text-6xl tablet-m:py-5 desktop:text-3xl'>Усі продукти</p>
            <div class='mobile-s:gap-4 mobile-s:flex mobile-s:flex-col tablet-m:justify-center tablet-l:flex-row tablet-l:flex-wrap'>
            {
                products.map((item) => {
                    return(
                        <div id={item.id} key={item.id} class='flex flex-col gap-2 h-fit bg-white p-2 relative tablet-l:gap-5 tablet-m:p-5 tablet-l:w-[45%] tablet-m:gap-4 desktop:w-[23%] desktop:min-h-[600px]'>
                            <img src={item.urlPhoto} class='mobile-s:w-full mobile-s:h-[250px] mobile-s:object-cover tablet-m:h-[400px] tablet-m:object-contain desktop:h-[240px] '></img>
                            <p class='text-xl mobile-l:text-2xl tablet-m:text-4xl desktop:text-2xl'>{item.name}</p>
                            {
                                <p class='line-clamp-5 text-gray-400 mobile-l:text-xl tablet-m:text-2xl desktop:text-xl'>
                                    {item.complectation}
                                </p>
                            }
                            {
                                item.isDiscount ?
                                <div class='flex flex-row gap-3'>
                                    <p class='bg-red-100 p-2 rounded-lg text-red-700 w-fit  mobile-l:text-xl tablet-m:text-3xl tablet-m:p-3 desktop:text-xl desktop:p-2'>{item.currentPrice}₴</p>
                                    <p class=' line-through text-gray-400 p-2 w-fit  mobile-l:text-xl tablet-m:text-3xl tablet-m:p-3 desktop:text-xl desktop:p-2'>{item.previousPrice}{item.currency}₴</p>
                                </div> :
                                <p class=' bg-green-100 p-2 rounded-lg text-green-700 w-fit  mobile-l:text-xl tablet-m:text-3xl tablet-m:p-3 desktop:text-xl desktop:p-2'>{item.currentPrice}₴</p>
                            }
                            
                            {
                                item.amount != 0 ?
                                <p class='text-green-700 mobile-l:text-xl  mobile-s:my-3 tablet-m:text-3xl desktop:text-xl'>В наявності</p> :
                                <p class='text-gray-400 mobile-l:text-2xl tablet-m:text-4xl desktop:text-xl'>Немає в наявності</p>
                            }
                                <Button text={'Додати до кошика'} onClick={() => { 
                                    dispatch(addProduct({...item}))
                                    handleMessageSuccess()
                                    }}></Button>
                        </div>
                    )
                })
            }
            </div>
        
        </div>
    )
}