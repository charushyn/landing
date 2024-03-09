"use client"

import { useSelector } from "react-redux"

export default function SuccessMessage(){
    const isShow = useSelector((state) => state.successMessageReducer.isShow)

    return(
        <div class={isShow ? 'fixed bottom-0 bg-green-300 w-full h-[70px] z-40 mobile-s:flex  mobile-s:justify-center mobile-s:items-center mobile-s:gap-2 tablet-m:h-[80px] desktop:h-[70px]' : 'hidden'}>
            <p class='mobile-l:text-xl tablet-m:text-2xl desktop:text-xl'>Успішно додано!</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mobile-l:w-8 mobile-l:h-8 tablet-m:w-10 tablet-m:h-10 desktop:h-8 desktop:h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
        </div>
    )
}