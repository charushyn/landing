'use client'

import Link from "next/link"
import { UseSelector, useDispatch, useSelector } from "react-redux"
import Button from "../UI/Button"

import { decrementProduct, incrimentProduct } from "../GlobalRedux/Features/basket/basketSlice"

export default function Basket(){

    const basketItems = useSelector((state) => state.basketReducer.items)

    let totalCost = 0;
    basketItems.map((item) => {
        totalCost = totalCost + item.currentPrice * item.count
    })

    const dispatch = useDispatch()

    return(
        <div class=' bg-gray-100 relative mobile-s:min-h-svh font-productSans'>
            <div class=' bg-white flex flex-row justify-between mobile-s:px-[16px] h-[70px] items-center tablet-m:h-[100px] desktop:h-[70px]'>
                <Link href={'/'} class=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 tablet-l:w-[70px] tablet-m:h-[70px] tablet-m:w-[70px] tablet-l:h-[70px] desktop:w-[50px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </Link>
                <div class=" bg-logo bg-contain bg-center mobile-s:w-10 mobile-s:h-10 tablet-m:w-[70px] tablet-m:h-[70px] tablet-l:h-[80px] tablet-l:w-[80px] desktop:h-[60px] desktop:w-[60px]"></div>
            </div>
            <hr class=''></hr>
            <p class='mobile-s:text-center mobile-s:text-3xl mt-[12px] mobile-m:text-4xl tablet-l:text-5xl'>Ваш кошик</p>
            <div class='flex mobile-s:flex-row gap-4 mt-[30px] mobile-s:flex-wrap mobile-s:mb-6 mobile-s:justify-center mobile-s:px-[16px]'>
            {
                basketItems.map((item) => {
                    return(
                        <div key={item.id} class='flex mobile-s:flex-row bg-white w-full mobile-s:h-fit p-2 mobile-s:gap-2 relative tablet-m:p-4'>
                            <img src={item.urlPhoto} class='mobile-s:h-[90px] mobile-s:w-[90px] mobile-s:object-cover mobile-m:w-[120px] mobile-m:h-[120px] tablet-m:w-[200px] tablet-m:h-[200px] desktop:w-[150px] desktop:h-[150px]'></img>
                            <div class='mobile-s:h-full mobile-s:flex mobile-s:flex-col mobile-s:gap-2 mobile-s:pl-2 mobile-m:gap-10 mobile-l:gap-7 tablet-m:gap-[80px] desktop:gap-8'>
                                <p class='mobile-s:max-w-[100px] mobile-s:text-xl mobile-l:text-xl mobile-l:max-w-[140px] tablet-m:text-4xl desktop:text-3xl'>{item.name}</p>
                                <p class='mobile-l:text-xl tablet-m:text-3xl desktop:text-2xl'>₴{item.currentPrice}</p>
                            </div>
                            <div class='flex flex-col items-center gap-1 mobile-s:mt-4 mobile-s:absolute mobile-s:right-3 mobile-m:bottom-6 mobile-s:bottom-2 tablet-m:bottom-9 desktop:top-1'>
                                <button class='mobile-s:w-[25px] mobile-s:h-[25px] bg-gray-300 rounded-xl mobile-l:w-[30px] mobile-l:h-[30px] mobile-l:text-xl tablet-m:h-[50px] tablet-m:w-[50px] tablet-m:text-4xl tablet-m:rounded-3xl desktop:w-[40px] desktop:h-[40px] desktop:text-2xl' onClick={() => dispatch(incrimentProduct(item))}>+</button>
                                <span class='tablet-m:text-3xl desktop:text-2xl'>{item.count}</span>
                                <button class='mobile-s:w-[25px] mobile-s:h-[25px] bg-gray-300 rounded-xl mobile-l:w-[30px] mobile-l:h-[30px] mobile-l:text-xl tablet-m:h-[50px] tablet-m:w-[50px] tablet-m:text-4xl tablet-m:rounded-3xl desktop:w-[40px] desktop:h-[40px] desktop:text-2xl' onClick={() => dispatch(decrementProduct(item))}>-</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            {
                totalCost < 1000 && basketItems.length !== 0 ?
                <div class='mobile-s:flex mobile-s:flex-col text-orange-400 text-right '>
                    <p class='mobile-l:text-xl tablet-m:text-3xl desktop:px-[16px]'>
                        Безкоштовна доставка від 1000₴
                    </p>
                    <p class='mobile-m:pr-2 mobile-l:text-xl tablet-m:text-3xl mobile-s:px-[16px]'>
                        Не вистачає {1000 - totalCost}₴
                    </p>
                </div> : ''
            }
            {
                totalCost > 1000 ?
                <div class='text-green-700 text-right mobile-l:text-2xl tablet-m:text-3xl mobile-s:px-[16px]'>
                    Безкоштовна доставка діє!
                </div> : ''
            }
            {
                basketItems.length !== 0 ?
                <div class='mobile-s:text-xl text-right mobile-s:mb-4 mobile-s:mt-2 mobile-l:text-xl tablet-m:text-3xl mobile-s:px-[16px]'>
                    Загальна вартість: {totalCost}₴
                </div> : <div class='mobile-s:text-xl text-center'>Повертайся сюди із товарами!</div>
            }
            {
                basketItems.length !== 0 ?
                <div class='mobile-s:py-10 w-full relative h-fit tablet-m:mt-10'>
                    <Link href={'/basket/form'} class=' absolute right-0 bottom-0 mobile-s:right-4'>
                        <Button text={'перейти далі'}></Button>
                    </Link> 
                </div> : ''
            }
        </div>
    )
}