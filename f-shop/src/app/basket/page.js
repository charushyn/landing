'use client'

import Link from "next/link"
import { UseSelector, useDispatch, useSelector } from "react-redux"
import Button from "../UI/Button"

import { incrimentProduct } from "../GlobalRedux/Features/basket/basketSlice"

export default function Basket(){

    const basketItems = useSelector((state) => state.basketReducer.items)

    let totalCost = 0;
    basketItems.map((item) => {
        totalCost = totalCost + item.currentPrice * item.count
    })

    const dispatch = useDispatch()

    return(
        <div class='mobile-s:px-[16px] bg-gray-100 relative mobile-s:min-h-svh'>
            <div class='flex flex-row justify-between h-[70px] items-center'>
                <Link href={'/'} class=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </Link>
                <img src="https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww" class='mobile-s:w-10 mobile-s:h-10'></img>
            </div>
            <hr class=''></hr>
            <p class='mobile-s:text-center mobile-s:text-4xl mt-[12px]'>Ваш кошик</p>
            <div class='flex mobile-s:flex-row gap-4 mt-[30px] mobile-s:flex-wrap mobile-s:mb-6 mobile-s:justify-center'>
            {
                basketItems.map((item) => {
                    return(
                        <div class='flex mobile-s:flex-col  bg-white mobile-s:w-[125px] mobile-s:h-[360px] p-2 mobile-s:gap-2'>
                            <img src={item.urlPhoto} class='mobile-s:w-full mobile-s:h-[125px] mobile-s:object-cover'></img>
                            <p class='mobile-s:text-2xl'>{item.name}</p>
                            <div class='flex flex-row items-center gap-2 mobile-s:mt-4'>
                                <button class='mobile-s:w-[30px] mobile-s:h-[30px] bg-gray-300 rounded-xl' onClick={() => dispatch(incrimentProduct(item))}>+</button>
                                <span class='mobile-s:text-xl'>{item.count}</span>
                                <button class='mobile-s:w-[30px] mobile-s:h-[30px] bg-gray-300 rounded-xl'>-</button>
                            </div>
                            <p class='underline text-red-700'>Видалити</p>
                            {
                                item.isDiscount ?
                                <div class='flex flex-col mt-2'>
                                    <p class='text-xl'>₴{item.currentPrice}</p>
                                    <p class='text-gray-400 line-through'>₴{item.previousPrice}</p>
                                </div> : <p class='text-xl mt-2'>₴{item.currentPrice}</p>
                            }
                        </div>
                    )
                })
            }
            </div>
            {
                totalCost < 1000 && basketItems.length !== 0 ?
                <div class='mobile-s:flex mobile-s:flex-col text-orange-400 text-right'>
                    <p>
                        Безкоштовна доставка від 1000₴
                    </p>
                    <p>
                        Не вистачає {1000 - totalCost}₴
                    </p>
                </div> : ''
            }
            {
                totalCost > 1000 ?
                <div class='text-green-700 text-right'>
                    Безкоштовна доставка діє!
                </div> : ''
            }
            {
                basketItems.length !== 0 ?
                <div class='mobile-s:text-xl text-right mobile-s:mb-4 mobile-s:mt-2'>
                    Загальна вартість: {totalCost}₴
                </div> : <div class='mobile-s:text-xl text-center'>Повертайся сюди із товарами!</div>
            }
            {
                basketItems.length !== 0 ?
                <div class='mobile-s:py-10 w-full relative h-fit'>
                    <Link href={'/basket/form'} class=' absolute right-0 bottom-6'>
                        <Button text={'перейти далі'}></Button>
                    </Link> 
                </div> : ''
            }
        </div>
    )
}