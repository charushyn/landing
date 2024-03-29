'use client'

import Link from "next/link";
import { useDispatch } from "react-redux";
import { clearBasket } from "@/app/GlobalRedux/Features/basket/basketSlice";

export default function Success(){

    const dispatch = useDispatch()
    return(
        <div class='flex flex-col items-center justify-center h-svh mobile-s:px-4 relative'>
            <div class=' flex flex-col items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 mobile-l:w-[50px] mobile-l:h-[50px] tablet-m:h-[70px] tablet-m:w-[70px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
                <p class='text-center mobile-l:text-2xl tablet-m:text-4xl'>Ваша заявка отримана та передана в обробку!</p>
            </div>
            <Link href='/' class='bg-purple-600 text-white uppercase mobile-s:px-4 mobile-s:py-3 mobile-l:text-xl mobile-l:px-6 mobile-l:py-3 tablet-m:text-3xl tablet-m:py-7 desktop:py-3 desktop:text-xl absolute mobile-s:bottom-4' onClick={() => dispatch(clearBasket())}>Повернутись до магазину</Link>
        </div>
    )
}